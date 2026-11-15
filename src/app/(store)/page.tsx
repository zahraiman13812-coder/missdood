import Link from "next/link";
import { ArrowUpLeft } from "lucide-react";
import { CategoryTiles } from "@/components/home/category-tiles";
import { Hero } from "@/components/home/hero";
import { Showcase } from "@/components/home/showcase";
import { brandHighlights } from "@/config/home";
import { SectionHeading } from "@/components/home/section-heading";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <div id="discover"><CategoryTiles /></div>
      <Showcase />
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24" aria-label="ویژگی‌های برند">
        <SectionHeading eyebrow="OUR FOUNDATION" title="برند، فراتر از یک ظاهر" description="توجه به جزئیات در تجربه کاربری، از اولین بازدید تا مدیریت محتوای سایت." />
        <div className="grid gap-4 md:grid-cols-3">
          {brandHighlights.map(({ title, body, Icon }, i) => (
            <div key={title} className="rounded-[1.5rem] border border-border bg-surface p-7">
              <div className="mb-7 flex items-center justify-between"><Icon size={27} strokeWidth={1.4} className="text-primary"/><span className="font-serif text-xs tracking-widest text-primary/60">0{i+1}</span></div>
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-8 text-muted">{body}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="px-5 pb-20 md:px-8 md:pb-28" aria-label="معرفی برند">
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 overflow-hidden rounded-[2rem] border border-primary/25 bg-surface px-7 py-12 sm:px-12 lg:flex-row lg:items-center lg:py-16">
          <div className="pointer-events-none absolute -left-16 -bottom-36 size-80 rounded-full border border-primary/20" aria-hidden="true" />
          <div className="pointer-events-none absolute -left-2 -bottom-32 size-64 rounded-full border border-primary/15" aria-hidden="true" />
          <div className="relative max-w-2xl">
            <p className="mb-4 font-serif text-xs tracking-[0.35em] text-primary" dir="ltr">WELCOME TO MISS DOOD</p>
            <h2 className="text-2xl font-bold leading-relaxed text-foreground sm:text-3xl">یک امضای متفاوت در دنیای دیجیتال</h2>
            <p className="mt-4 text-sm leading-9 text-muted">داستان برند، ارزش‌ها و راه‌های ارتباطی را در یک فضای اختصاصی و هماهنگ با هویت MISS DOOD دنبال کنید.</p>
          </div>
          <Link href="/about" className="relative inline-flex min-h-12 shrink-0 items-center gap-3 rounded-xl border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">آشنایی با MISS DOOD <ArrowUpLeft size={18}/></Link>
        </div>
      </section>
    </main>
  );
}
