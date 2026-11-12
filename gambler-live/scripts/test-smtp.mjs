// Usage (on the server, inside the project folder):
//   npm run test:smtp                -> checks connection + login on 465 and 587
//   npm run test:smtp -- you@mail.com -> also sends a test email to that address
import nodemailer from "nodemailer";
import nextEnv from "@next/env";

nextEnv.loadEnvConfig(process.cwd(), false, { info() {}, error() {} });

const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, MAIL_FROM, CONTACT_TO } = process.env;
const sendTo = process.argv[2];

console.log("SMTP_HOST :", SMTP_HOST || "(missing)");
console.log("SMTP_PORT :", SMTP_PORT || "(missing)", " SMTP_SECURE:", SMTP_SECURE || "(auto)");
console.log("SMTP_USER :", SMTP_USER || "(missing)");
console.log("SMTP_PASS :", SMTP_PASS ? `set (${SMTP_PASS.length} chars)` : "(missing)");
console.log("MAIL_FROM :", MAIL_FROM || "(default)");
console.log("CONTACT_TO:", CONTACT_TO || "(default)");
if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
  console.error("\n✗ .env me SMTP values missing hain (ya .env project root me nahi hai).");
  process.exit(1);
}

const tries = [
  { port: 465, secure: true },
  { port: 587, secure: false },
];
let ok;
for (const c of tries) {
  const t = nodemailer.createTransport({
    host: SMTP_HOST.trim(),
    ...c,
    requireTLS: !c.secure,
    auth: { user: SMTP_USER.trim(), pass: SMTP_PASS },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
  });
  process.stdout.write(`\nPort ${c.port} (${c.secure ? "SSL" : "STARTTLS"}) ... `);
  try {
    await t.verify();
    console.log("✓ connected + login OK");
    ok ||= { t, c };
  } catch (e) {
    console.log(`✗ ${e.code || ""} ${e.responseCode || ""} ${e.message}`);
    if (e.code === "EAUTH") console.log("  → Password/username galat hai ya mailbox exist nahi karta.");
    if (["ETIMEDOUT", "ECONNREFUSED", "ESOCKET", "ECONNECTION"].includes(e.code))
      console.log("  → Server se ye port bahar nahi ja raha (firewall / VPS provider block).");
  }
}

if (!ok) {
  console.error("\n✗ Dono ports fail. Upar wala error fix karo.");
  process.exit(1);
}
console.log(`\n→ .env me SMTP_PORT=${ok.c.port} SMTP_SECURE=${ok.c.secure} use karo.`);

if (sendTo) {
  try {
    const info = await ok.t.sendMail({
      from: MAIL_FROM || SMTP_USER,
      to: sendTo,
      subject: "GamblerLive SMTP test",
      text: "SMTP is working.",
    });
    console.log("✓ Test mail sent:", info.messageId, info.response);
  } catch (e) {
    console.error("✗ Send failed:", e.code, e.responseCode, e.message);
    process.exit(1);
  }
}
