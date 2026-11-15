import type { Metadata } from "next";
import { UserRound } from "lucide-react";
export const metadata: Metadata = { title: "حساب کاربری" };
export default function AccountPage() {
  return <main className="mx-auto min-h-[65vh] max-w-7xl px-5 py-20 md:px-8"><h1 className="text-3xl font-bold">حساب کاربری</h1><div className="mt-10 rounded-3xl border border-border bg-surface p-12 text-center"><UserRound className="mx-auto mb-4 text-primary" size={40}/><p className="text-lg font-semibold">بخش حساب کاربری در حال طراحی است</p><p className="mt-3 text-sm leading-7 text-muted">ورود و ثبت‌نام پس از پیاده‌سازی احراز هویت امن اضافه می‌شود.</p></div></main>;
}
