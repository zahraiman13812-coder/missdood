import type { Metadata } from "next";
import Link from "next/link";
import { Search } from "lucide-react";

export const metadata: Metadata = { title: "جستجو" };
type PageProps = { searchParams: Promise<{ q?: string }> };
export default async function SearchPage({ searchParams }: PageProps) {
  const { q } = await searchParams;
  const query = (q ?? "").trim().slice(0, 120);
  return <main className="mx-auto min-h-[65vh] max-w-7xl px-5 py-20 md:px-8">
    <p className="mb-3 text-xs tracking-[0.25em] text-primary" dir="ltr">SEARCH</p>
    <h1 className="text-3xl font-bold">نتایج جستجو</h1>
    {query && <p className="mt-4 text-muted">عبارت جستجو: <span className="text-foreground">{query}</span></p>}
    <div className="mt-10 rounded-3xl border border-border bg-surface p-10 text-center">
      <Search size={36} className="mx-auto mb-5 text-primary" />
      <p className="text-lg font-semibold">هنوز داده‌ای برای نمایش وجود ندارد</p>
      <p className="mt-3 text-sm leading-7 text-muted">این صفحه آماده اتصال به جستجوی واقعی محصولات تأییدشده است.</p>
      <Link href="/shop" className="mt-5 inline-block text-sm text-primary hover:underline">مشاهده کاتالوگ</Link>
    </div>
  </main>;
}
