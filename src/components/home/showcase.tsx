import { ArrowUpLeft } from "lucide-react";
import Link from "next/link";
import { homeShowcase } from "@/config/home";
import { SectionHeading } from "@/components/home/section-heading";

export function Showcase() {
  return (
    <section className="border-y border-border bg-surface/50 py-16 md:py-24" aria-label="بخش‌های نمایشی کاتالوگ">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="CURATED SPACES" title="ویترین محصولات" description="جایگاه‌های آماده برای نمایش محصولات مجاز پس از اتصال به دیتابیس. این کارت‌ها محصول یا قیمت واقعی را معرفی نمی‌کنند." href="/shop" action="مشاهده کاتالوگ" />
        <div className="grid gap-5 md:grid-cols-3">
          {homeShowcase.map(({ id, title, category, Icon }) => (
            <article key={id} className="group overflow-hidden rounded-[1.75rem] border border-border bg-surface">
              <div className="relative flex aspect-[4/4.3] items-center justify-center overflow-hidden bg-surface-muted">
                <div className="pointer-events-none absolute inset-7 rounded-full border border-primary/15" aria-hidden="true" />
                <div className="pointer-events-none absolute inset-14 rounded-full border border-primary/20" aria-hidden="true" />
                <Icon size={82} strokeWidth={0.7} className="relative text-primary/55 transition-transform duration-500 group-hover:scale-110" aria-hidden="true" />
                <span className="absolute right-5 top-5 rounded-full border border-primary/25 bg-surface/80 px-3 py-1.5 text-[10px] font-medium text-primary">پیش‌نمایش</span>
                <span className="absolute bottom-6 left-6 font-serif text-5xl text-primary/15" dir="ltr">{id}</span>
              </div>
              <div className="flex items-center justify-between gap-3 p-5 sm:p-6">
                <div>
                  <p className="text-[10px] tracking-[0.2em] text-primary" dir="ltr">{category}</p>
                  <h3 className="mt-2 font-semibold text-foreground">{title}</h3>
                  <p className="mt-1 text-xs text-muted">در انتظار داده‌های کاتالوگ</p>
                </div>
                <Link href="/shop" aria-label={`مشاهده کاتالوگ: ${title}`} className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border text-primary transition-colors hover:border-primary"><ArrowUpLeft size={19}/></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
