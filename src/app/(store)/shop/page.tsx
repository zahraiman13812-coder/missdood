import type { Metadata } from "next";
import Link from "next/link";
import { PackageSearch } from "lucide-react";

export const metadata: Metadata = { title: "کاتالوگ" };
export default function ShopPage() {
  return <main className="mx-auto min-h-[65vh] max-w-7xl px-5 py-20 md:px-8">
    <p className="mb-3 text-xs tracking-[0.25em] text-primary" dir="ltr">THE CATALOG</p>
    <h1 className="text-4xl font-bold">کاتالوگ محصولات</h1>
    <div className="mt-12 rounded-3xl border border-border bg-surface px-6 py-16 text-center">
      <PackageSearch size={42} className="mx-auto mb-5 text-primary"/>
      <h2 className="text-xl font-semibold">کاتالوگ در حال آماده‌سازی است</h2>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-8 text-muted">پس از تأیید فهرست کالاهای قابل انتشار، دسته‌بندی‌ها و اطلاعات محصولات از پنل مدیریت نمایش داده می‌شوند.</p>
      <Link href="/" className="mt-6 inline-block rounded-xl border border-primary px-5 py-3 text-sm text-primary hover:bg-surface-muted">بازگشت به خانه</Link>
    </div>
  </main>;
}
