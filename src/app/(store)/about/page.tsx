import type { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = { title: "درباره ما" };
export default function AboutPage() {
  return <main className="mx-auto grid min-h-[65vh] max-w-7xl items-center gap-8 px-5 py-16 md:grid-cols-2 md:px-8"><div><p className="mb-4 text-xs tracking-[0.3em] text-primary" dir="ltr">THE BRAND</p><h1 className="text-4xl font-bold">درباره MISS DOOD</h1><p className="mt-6 text-sm leading-9 text-muted">فضای دیجیتال MISS DOOD با الهام از نشان طلایی برند و رویکرد مینیمال طراحی شده است. متن معرفی نهایی پس از دریافت اطلاعات رسمی برند جایگزین خواهد شد.</p></div><div className="rounded-3xl border border-border bg-surface p-10"><Image src="/logos/miss-dood-transparent.png" width={500} height={500} alt="نشان برند MISS DOOD" className="mx-auto object-contain"/></div></main>;
}
