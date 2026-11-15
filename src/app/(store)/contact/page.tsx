import type { Metadata } from "next";
import { Mail } from "lucide-react";
export const metadata: Metadata = { title: "تماس با ما" };
export default function ContactPage() {
  return <main className="mx-auto min-h-[65vh] max-w-7xl px-5 py-20 md:px-8"><p className="mb-3 text-xs tracking-[0.25em] text-primary" dir="ltr">CONTACT</p><h1 className="text-3xl font-bold">تماس با ما</h1><div className="mt-10 rounded-3xl border border-border bg-surface p-10"><Mail className="mb-5 text-primary" size={30}/><p className="text-lg font-semibold">اطلاعات تماس به‌زودی اضافه می‌شود</p><p className="mt-3 text-sm leading-8 text-muted">آدرس، تلفن و شبکه‌های اجتماعی فقط پس از دریافت اطلاعات تأییدشده برند ثبت خواهند شد.</p></div></main>;
}
