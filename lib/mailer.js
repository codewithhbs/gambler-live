import nodemailer from "nodemailer";

// Builds SMTP transports from env. Tries the configured port first, then the
// other common port (465 SSL <-> 587 STARTTLS) — many VPS providers block one.
function baseConfig() {
  const { SMTP_HOST, SMTP_USER, SMTP_PASS } = process.env;
  const missing = ["SMTP_HOST", "SMTP_USER", "SMTP_PASS"].filter((k) => !process.env[k]);
  if (missing.length) {
    const err = new Error(`Missing env: ${missing.join(", ")}`);
    err.code = "ENOCONFIG";
    throw err;
  }
  return { host: SMTP_HOST.trim(), auth: { user: SMTP_USER.trim(), pass: SMTP_PASS } };
}

function candidates() {
  const port = Number(process.env.SMTP_PORT || 465);
  const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE.trim() === "true" : port === 465;
  const list = [{ port, secure }];
  if (port !== 587) list.push({ port: 587, secure: false });
  if (port !== 465) list.push({ port: 465, secure: true });
  return list;
}

const NETWORK_CODES = ["ETIMEDOUT", "ECONNREFUSED", "ECONNRESET", "ESOCKET", "EDNS", "ENOTFOUND", "EHOSTUNREACH", "ECONNECTION"];

let cached;

export function resetTransporter() {
  cached = undefined;
}

export async function getTransporter() {
  if (cached) return cached;
  const base = baseConfig();
  let lastErr;
  for (const c of candidates()) {
    const t = nodemailer.createTransport({
      ...base,
      ...c,
      requireTLS: c.port === 587,
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 20000,
    });
    try {
      await t.verify();
      if (c.port !== Number(process.env.SMTP_PORT || 465)) {
        console.warn(`[mailer] SMTP_PORT ${process.env.SMTP_PORT} failed, using fallback port ${c.port}`);
      }
      cached = t;
      return t;
    } catch (e) {
      lastErr = e;
      console.error(`[mailer] ${base.host}:${c.port} secure=${c.secure} -> ${e.code || ""} ${e.message}`);
      // Wrong password won't be fixed by another port — stop early.
      if (!NETWORK_CODES.includes(e.code)) break;
    }
  }
  throw lastErr;
}

// Human hint for the most common SMTP failures.
export function explainSmtpError(e) {
  const code = e?.code || "";
  const rc = e?.responseCode;
  if (code === "ENOCONFIG") return `${e.message}. .env file server pe nahi hai ya app restart nahi hua.`;
  if (code === "EAUTH" || rc === 535)
    return "Authentication failed — SMTP_USER / SMTP_PASS galat hai, ya mailbox hPanel me bana hi nahi hai.";
  if (["ETIMEDOUT", "ECONNREFUSED", "ESOCKET", "ECONNECTION", "EHOSTUNREACH"].includes(code))
    return "SMTP server tak connection nahi ho raha — hosting/VPS outbound port 465/587 block kar raha hai (firewall ya provider).";
  if (code === "EDNS" || code === "ENOTFOUND") return "SMTP_HOST resolve nahi ho raha — host name check karo.";
  if (rc === 550 || rc === 553 || code === "EENVELOPE")
    return "Sender rejected — MAIL_FROM ka address SMTP_USER mailbox jaisa hona chahiye.";
  return e?.message || "Unknown SMTP error";
}
