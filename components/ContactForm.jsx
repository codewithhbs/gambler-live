"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const INPUT =
  "w-full rounded border bg-ink px-4 py-2.5 text-sm text-paper placeholder:text-clay focus:border-moss-500 focus:outline-none";

export default function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setError("");
    setFieldErrors({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) {
        setFieldErrors(json.errors || {});
        setError(json.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      try {
        sessionStorage.setItem("gl_contact_email", data.email);
      } catch {}
      form.reset();
      setStatus("success");
      router.push("/contact/thank-you");
    } catch {
      setError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="flex items-center justify-center gap-3 rounded-lg border border-moss-500/40 bg-ink-soft p-10 text-sm text-bone">
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-moss-500/30 border-t-moss-500" aria-hidden="true" />
        Message sent — redirecting…
      </div>
    );
  }

  const border = (f) => (fieldErrors[f] ? "border-red-400" : "border-ink-line");
  const sending = status === "sending";

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-lg border border-ink-line bg-ink-soft p-6 md:p-8">
      <div className="space-y-5">
        {/* Honeypot — hidden from humans */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm text-bone">Name</label>
          <input id="name" name="name" type="text" required maxLength={100} autoComplete="name" className={`${INPUT} ${border("name")}`} placeholder="Your name" />
          {fieldErrors.name && <p className="mt-1 text-xs text-red-400">{fieldErrors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm text-bone">Email</label>
          <input id="email" name="email" type="email" required maxLength={150} autoComplete="email" className={`${INPUT} ${border("email")}`} placeholder="you@email.com" />
          {fieldErrors.email && <p className="mt-1 text-xs text-red-400">{fieldErrors.email}</p>}
        </div>
        <div>
          <label htmlFor="topic" className="mb-1.5 block text-sm text-bone">Topic</label>
          <select id="topic" name="topic" defaultValue="Business" className={`${INPUT} border-ink-line`}>
            <option>Editorial</option>
            <option>Partnership</option>
            <option>Business</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm text-bone">Message</label>
          <textarea id="message" name="message" rows={5} required maxLength={5000} className={`${INPUT} ${border("message")}`} placeholder="How can we help?" />
          {fieldErrors.message && <p className="mt-1 text-xs text-red-400">{fieldErrors.message}</p>}
        </div>

        {status === "error" && error && (
          <p role="alert" className="rounded border border-red-400/40 bg-red-400/10 px-4 py-3 text-sm text-red-300">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={sending}
          className="flex w-full items-center justify-center gap-2 rounded bg-moss-500 py-3 text-sm font-semibold text-ink hover:bg-moss-400 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {sending && (
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-ink/30 border-t-ink" aria-hidden="true" />
          )}
          {sending ? "Sending…" : "Send message"}
        </button>
        <p className="text-center text-xs text-clay">
          By sending this form you agree to our{" "}
          <a href="/privacy-policy" className="underline hover:text-bone">privacy policy</a>.
        </p>
      </div>
    </form>
  );
}
