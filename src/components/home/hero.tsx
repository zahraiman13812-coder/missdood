import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpLeft, MoveUpLeft, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-background" aria-labelledby="hero-heading">
      <div className="pointer-events-none absolute -right-32 top-16 size-96 rounded-full bg-primary/10 blur-[110px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-32 bottom-0 size-80 rounded-full bg-primary/5 blur-[100px]" aria-hidden="true" />
      <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-[1fr_1.05fr] md:gap-12 md:px-8 md:py-24">
        <div className="fade-in-up order-2 max-w-xl md:order-1">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-[11px] text-primary">
            <Sparkles size={14} aria-hidden="true" /><span className="font-medium">هویت دیجیتال برند</span><span className="h-3 w-px bg-primary/40"/><span dir="ltr" className="tracking-[0.13em]">EST. MISS DOOD</span>
          </div>
          <p className="mb-3 font-serif text-sm tracking-[0.48em] text-primary sm:text-base" dir="ltr">THE ART OF DETAIL</p>
          <h1 id="hero-heading" className="text-5xl font-black leading-[1.45] tracking-tight text-foreground sm:text-6xl lg:text-7xl" dir="ltr">MISS <span className="text-primary">DOOD</span></h1>
          <div className="mb-7 mt-4 h-px w-28 bg-primary" aria-hidden="true" />
          <h2 className="text-xl font-semibold leading-9 text-foreground sm:text-2xl">جزئیات، امضای یک هویت ماندگار</h2>
          <p className="mt-5 max-w-lg text-sm leading-9 text-muted sm:text-base">وب‌سایت رسمی MISS DOOD؛ تجربه‌ای مینیمال با زبان بصری تیره، جزئیات طلایی و ساختاری آماده برای توسعه کاتالوگ قانونی محصولات.</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="/shop" className="inline-flex min-h-12 items-center gap-3 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-primary-hover hover:shadow-[0_12px_40px_var(--site-shadow)]">مرور کاتالوگ <ArrowUpLeft size={18} aria-hidden="true" /></Link>
            <Link href="/about" className="inline-flex min-h-12 items-center gap-3 rounded-xl border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary">درباره برند <MoveUpLeft size={17} aria-hidden="true" /></Link>
          </div>
          <p className="mt-7 max-w-md text-xs leading-7 text-muted">نسخه نمایشی طراحی — ثبت سفارش و پرداخت محصولات مشمول محدودیت قانونی فعال نیست.</p>
          <a href="#discover" className="mt-10 inline-flex items-center gap-3 text-xs font-medium text-primary transition-colors hover:text-primary-hover"><ArrowDown size={17} aria-hidden="true"/> کشف بخش‌های سایت</a>
        </div>
        <div className="fade-in-up order-1 relative mx-auto w-full max-w-[610px] md:order-2">
          <div className="absolute inset-[9%] rounded-full border border-primary/20" aria-hidden="true" />
          <div className="absolute inset-[17%] rounded-full border border-primary/10" aria-hidden="true" />
          <div className="absolute inset-[4%] -rotate-12 rounded-[3rem] border border-border/70" aria-hidden="true" />
          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[2rem] bg-surface/70 p-7 ring-1 ring-border sm:p-12">
            <div className="pointer-events-none absolute inset-x-8 top-8 flex items-center justify-between text-[10px] tracking-[0.35em] text-primary/60" aria-hidden="true"><span>MD / 01</span><span>OFFICIAL</span></div>
            <Image src="/logos/miss-dood-transparent.png" alt="لوگوی طلایی برند MISS DOOD" width={650} height={650} priority sizes="(max-width: 768px) 90vw, 45vw" className="relative h-auto max-h-[500px] w-full object-contain drop-shadow-[0_20px_35px_var(--site-shadow)]" />
            <div className="pointer-events-none absolute bottom-7 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent" aria-hidden="true" />
          </div>
          <span className="absolute -bottom-5 left-5 hidden rounded-xl border border-border bg-background px-5 py-3 font-serif text-xs tracking-[0.3em] text-primary sm:block" dir="ltr">PREMIUM IDENTITY</span>
        </div>
      </div>
    </section>
  );
}
