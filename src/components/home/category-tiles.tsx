import Link from "next/link";
import { ArrowUpLeft } from "lucide-react";
import { homeCategories } from "@/config/home";
import { SectionHeading } from "@/components/home/section-heading";

export function CategoryTiles() {
  return (
    <section aria-labelledby="categories-heading" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <div id="categories-heading"><SectionHeading eyebrow="EXPLORE THE COLLECTION" title="کاتالوگ با ساختاری دقیق" description="این بخش فعلاً نمایشی است؛ گروه‌های قابل انتشار بعداً از پنل مدیریت بارگذاری می‌شوند." href="/shop" action="مرور کاتالوگ" /></div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {homeCategories.map(({ title, subtitle, href, Icon, marker }) => (
          <Link href={href} key={marker} className="group relative flex min-h-64 flex-col overflow-hidden rounded-[1.65rem] border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/70 focus-visible:outline-offset-4">
            <span className="pointer-events-none absolute -left-10 -top-12 size-44 rounded-full border border-primary/15 transition-transform duration-500 group-hover:scale-125" aria-hidden="true" />
            <span className="pointer-events-none absolute left-3 top-1 size-32 rounded-full border border-primary/10" aria-hidden="true" />
            <div className="relative mb-auto flex items-start justify-between">
              <span className="font-serif text-sm tracking-[0.3em] text-primary/75" dir="ltr">{marker}</span>
              <span className="flex size-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary"><Icon size={24} strokeWidth={1.5} aria-hidden="true" /></span>
            </div>
            <div className="relative mt-12">
              <h3 className="text-xl font-semibold text-foreground">{title}</h3>
              <div className="mt-2 flex items-center justify-between gap-3">
                <p className="text-xs leading-6 text-muted">{subtitle}</p>
                <ArrowUpLeft size={19} className="shrink-0 text-primary transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
