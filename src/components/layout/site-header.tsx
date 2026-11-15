import Image from "next/image";
import Link from "next/link";
import { Menu, Search, UserRound } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="relative z-10 border-b border-border bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <div className="flex items-center gap-5">
          <Link href="/" aria-label="صفحه اصلی MISS DOOD" className="flex items-center gap-2">
            <Image src="/logos/miss-dood-transparent.png" alt="لوگوی MISS DOOD" width={74} height={74} priority className="h-16 w-16 object-contain" />
            <span className="hidden text-sm font-semibold tracking-[0.16em] text-primary sm:inline">MISS DOOD</span>
          </Link>
          <span className="hidden text-xs text-muted lg:inline">هویت اصیل، طراحی متمایز</span>
        </div>
        <nav aria-label="ناوبری اصلی" className="hidden items-center gap-7 text-sm text-muted md:flex">
          <Link href="/" className="text-foreground hover:text-primary">خانه</Link>
          <a href="#about" className="hover:text-primary">درباره برند</a>
          <a href="#roadmap" className="hover:text-primary">بخش‌های سایت</a>
        </nav>
        <div className="flex items-center gap-4 text-foreground">
          <span aria-label="جستجو در نسخه بعد فعال می‌شود" title="در دست ساخت"><Search size={20} aria-hidden="true" /></span>
          <span aria-label="حساب کاربری در نسخه بعد فعال می‌شود" title="در دست ساخت"><UserRound size={20} aria-hidden="true" /></span>
          <span aria-label="منو در نسخه بعد فعال می‌شود" className="md:hidden"><Menu size={22} aria-hidden="true" /></span>
        </div>
      </div>
    </header>
  );
}
