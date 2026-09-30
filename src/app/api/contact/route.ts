import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const TO = "yamanawamugu@gmail.com";
const MAX_FILE_SIZE = 3 * 1024 * 1024;
const MAX_TOTAL_SIZE = 5 * 1024 * 1024;
const ALLOWED_FILE_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "application/pdf"]);

const labels: Record<string, string> = {
  name: "姓名與品牌／公司",
  contactMethod: "聯絡方式",
  services: "合作服務",
  projectBrief: "專案需求",
  quantity: "預計數量",
  outcomes: "希望取得的成果",
  channels: "使用管道",
  budget: "預算範圍",
  timeline: "希望完成時間",
  references: "參考資料與補充",
};

const requiredFields = ["name", "contactMethod", "projectBrief", "quantity", "budget", "timeline"] as const;
const requiredLists = ["services", "outcomes", "channels"] as const;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value: string) => value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] ?? character);

export async function POST(request: Request) {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
  if (!gmailUser || !gmailAppPassword) {
    return NextResponse.json({ code: "configuration_missing" }, { status: 503 });
  }

  const form = await request.formData();
  if (String(form.get("website") ?? "").trim()) return NextResponse.json({ ok: true });

  const values = Object.fromEntries(
    Object.keys(labels).map((key) => [key, String(form.get(key) ?? "").trim()]),
  ) as Record<string, string>;
  const lists = Object.fromEntries(requiredLists.map((key) => [key, form.getAll(key).map(String).filter(Boolean)])) as Record<(typeof requiredLists)[number], string[]>;

  if (requiredFields.some((field) => !values[field]) || requiredLists.some((field) => lists[field].length === 0)) {
    return NextResponse.json({ code: "invalid_form" }, { status: 400 });
  }

  const files = form.getAll("files").filter((value): value is File => value instanceof File && value.size > 0);
  const totalSize = files.reduce((total, file) => total + file.size, 0);
  if (files.length > 5 || totalSize > MAX_TOTAL_SIZE || files.some((file) => file.size > MAX_FILE_SIZE || !ALLOWED_FILE_TYPES.has(file.type))) {
    return NextResponse.json({ code: "invalid_files" }, { status: 400 });
  }

  const rows = Object.entries(labels).map(([key, label]) => {
    const value = key in lists ? lists[key as keyof typeof lists].join("、") : values[key];
    return `<tr><th style="padding:12px 16px;text-align:left;border-bottom:1px solid #ddd;color:#555;vertical-align:top;white-space:nowrap">${escapeHtml(label)}</th><td style="padding:12px 16px;border-bottom:1px solid #ddd;white-space:pre-wrap">${escapeHtml(value || "—")}</td></tr>`;
  }).join("");

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user: gmailUser, pass: gmailAppPassword },
  });

  try {
    await transporter.sendMail({
      from: `YAMANAWA <${gmailUser}>`,
      to: TO,
      replyTo: emailPattern.test(values.contactMethod) ? values.contactMethod : undefined,
      subject: `[YAMANAWA] 新合作需求｜${values.name}`,
      html: `<div style="font-family:Arial,sans-serif;color:#111;max-width:720px"><h1 style="font-size:24px">新的合作需求</h1><table style="width:100%;border-collapse:collapse">${rows}</table></div>`,
      attachments: await Promise.all(files.map(async (file) => ({ filename: file.name, content: Buffer.from(await file.arrayBuffer()), contentType: file.type }))),
    });
  } catch {
    return NextResponse.json({ code: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
