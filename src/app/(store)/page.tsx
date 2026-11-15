import Image from "next/image";
import { ArrowUpLeft, Gem, LayoutGrid, Palette, ShieldCheck } from "lucide-react";

const features = [
  { title: "هویت اختصاصی", subtitle: "طراحی بر پایه لوگوی برند", Icon: Gem },
  { title: "تم قابل تغییر", subtitle: "رنگ‌های متمرکز و قابل مدیریت", Icon: Palette },
  { title: "ساختار توسعه‌پذیر", subtitle: "صفحات و امکانات ماژولار", Icon: LayoutGrid },
  { title: "عرضه مسئولانه", subtitle: "رعایت ضوابط کالا و فروش", Icon: ShieldCheck },
];

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="pointer-events-none absolute -left-32 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mx-auto grid min-h-[70vh] max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div className="fade-in-up order-2 md:order-1">
            <p className="mb-5 text-xs font-semibold tracking-[0.3em] text-primary" dir="ltr">MISS DOOD — OFFICIAL BRAND</p>
            <h1 className="mb-6 text-4xl font-black leading-[1.65] sm:text-5xl">به دنیای <span className="text-primary">MISS DOOD</span> خوش آمدید</h1>
            <p className="max-w-lg text-base leading-9 text-muted">فضایی با طراحی لوکس و هویتی متمایز. این نسخه، نقطه شروع طراحی وب‌سایت رسمی برند و توسعه ساختار محصولات مجاز است.</p>
            <a href="#about" className="mt-8 inline-flex items-center gap-3 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover">آشنایی با برند <ArrowUpLeft size={17}/></a>
            <p className="mt-5 text-xs text-muted">نسخه نمایشی — سفارش و پرداخت در حال حاضر غیرفعال است.</p>
          </div>
          <div className="fade-in-up order-1 flex items-center justify-center rounded-[2rem] border border-border bg-surface px-8 py-10 md:order-2">
            <Image src="/logos/miss-dood-transparent.png" alt="نشان طلایی MISS DOOD" width={560} height={560} className="h-auto max-h-[490px] w-full object-contain" priority />
          </div>
        </div>
      </section>
      <section id="about" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-semibold tracking-widest text-primary">BRAND EXPERIENCE</p>
          <h2 className="text-3xl font-bold">یک تجربه دیجیتال با امضای برند</h2>
          <p className="mt-5 leading-8 text-muted">سبک بصری سایت از ترکیب زمینه تیره، جزئیات طلایی، تایپوگرافی خوانا و کامپوننت‌های انعطاف‌پذیر ساخته شده است.</p>
        </div>
        <div id="roadmap" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, subtitle, Icon }) => <article key={title} className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/60"><Icon className="mb-8 text-primary" size={28}/><h3 className="mb-2 text-lg font-semibold">{title}</h3><p className="text-sm leading-7 text-muted">{subtitle}</p></article>)}
        </div>
      </section>
    </main>
  );
}
