"use client";

import { useEffect, useState } from "react";

export default function SentEmail() {
  const [email, setEmail] = useState("");
  useEffect(() => {
    try {
      setEmail(sessionStorage.getItem("gl_contact_email") || "");
    } catch {}
  }, []);

  if (!email) return <>A confirmation email is on its way to your inbox.</>;
  return (
    <>
      A confirmation email has been sent to <span className="text-bone">{email}</span>.
    </>
  );
}
