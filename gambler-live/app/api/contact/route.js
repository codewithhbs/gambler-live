import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TOPICS = ["Editorial", "Partnership", "Business", "Other"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Simple in-memory rate limit: 5 submissions / 10 min per IP (per server instance).
const hits = new Map();
function rateLimited(ip) {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const list = (hits.get(ip) || []).filter((t) => now - t < windowMs);
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 5000) hits.clear();
  return list.length > 5;
}

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

let transporter;
function getTransporter() {
  if (transporter) return transporter;
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) throw new Error("SMTP is not configured");
  const port = Number(SMTP_PORT || 465);
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: SMTP_SECURE ? SMTP_SECURE === "true" : port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
  return transporter;
}

function shell(title, body) {
  return `<!doctype html><html><body style="margin:0;background:#EEF3FB;font-family:Arial,Helvetica,sans-serif;color:#0A1230">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:24px 0"><tr><td align="center">
  <table width="560" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:8px;overflow:hidden;max-width:94%">
    <tr><td style="background:#0A1230;padding:20px 28px;font-family:Georgia,serif;font-size:22px;color:#EEF3FB">Gambler<span style="color:#22D3EE">Live</span></td></tr>
    <tr><td style="padding:28px">
      <h1 style="margin:0 0 16px;font-size:20px">${title}</h1>
      ${body}
    </td></tr>
    <tr><td style="padding:16px 28px;background:#F5F8FD;font-size:12px;color:#5b6a91">GamblerLive · gamblerlive.com · 18+ Please gamble responsibly.</td></tr>
  </table></td></tr></table></body></html>`;
}

export async function POST(req) {
  let data;
  try {
    data = await req.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const name = String(data.name || "").trim().slice(0, 100);
  const email = String(data.email || "").trim().slice(0, 150);
  const topic = TOPICS.includes(data.topic) ? data.topic : "Other";
  const message = String(data.message || "").trim().slice(0, 5000);

  // Honeypot: bots fill the hidden "website" field. Pretend success.
  if (data.website) return Response.json({ ok: true });

  const errors = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";
  if (message.length < 10) errors.message = "Message should be at least 10 characters.";
  if (Object.keys(errors).length) {
    return Response.json({ ok: false, error: "Please fix the highlighted fields.", errors }, { status: 422 });
  }

  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) {
    return Response.json({ ok: false, error: "Too many messages. Please try again in a few minutes." }, { status: 429 });
  }

  const from = process.env.MAIL_FROM || `GamblerLive <${process.env.SMTP_USER}>`;
  const to = process.env.CONTACT_TO || "contact@gamblerlive.com";

  try {
    const t = getTransporter();

    // 1) Notification to the GamblerLive inbox
    await t.sendMail({
      from,
      to,
      replyTo: `${name} <${email}>`,
      subject: `[Contact] ${topic} — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\nIP: ${ip}\n\n${message}`,
      html: shell(
        "New contact form message",
        `<table cellpadding="6" style="font-size:14px">
          <tr><td style="color:#5b6a91">Name</td><td>${esc(name)}</td></tr>
          <tr><td style="color:#5b6a91">Email</td><td><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
          <tr><td style="color:#5b6a91">Topic</td><td>${esc(topic)}</td></tr>
        </table>
        <div style="margin-top:16px;padding:16px;background:#F5F8FD;border-radius:6px;font-size:14px;line-height:1.6;white-space:pre-wrap">${esc(message)}</div>`
      ),
    });

    // 2) Confirmation (auto-reply) to the user — failure here shouldn't fail the request
    if (process.env.CONTACT_AUTOREPLY !== "false") {
      await t.sendMail({
        from,
        to: email,
        replyTo: to,
        subject: "We've received your message — GamblerLive",
        text: `Hi ${name},\n\nThanks for contacting GamblerLive. We've received your ${topic.toLowerCase()} inquiry and will get back to you within 2 business days.\n\nYour message:\n${message}\n\n— The GamblerLive Team`,
        html: shell(
          `Thanks, ${esc(name)} — we've got your message`,
          `<p style="font-size:14px;line-height:1.6">We've received your <b>${esc(topic.toLowerCase())}</b> inquiry and will get back to you within 2 business days.</p>
           <p style="font-size:13px;color:#5b6a91;margin-top:20px">Your message:</p>
           <div style="padding:16px;background:#F5F8FD;border-radius:6px;font-size:14px;line-height:1.6;white-space:pre-wrap">${esc(message)}</div>
           <p style="font-size:14px;margin-top:20px">— The GamblerLive Team</p>`
        ),
      }).catch((e) => console.error("[contact] auto-reply failed:", e.message));
    }

    return Response.json({ ok: true });
  } catch (e) {
    console.error("[contact] send failed:", e.message);
    return Response.json(
      { ok: false, error: "We couldn't send your message right now. Please email contact@gamblerlive.com directly." },
      { status: 500 }
    );
  }
}
