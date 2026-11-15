"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft, ChevronDown, Menu, Search, ShoppingBag, UserRound, X,
} from "lucide-react";
import { navGroups, simpleLinks } from "@/config/navigation";

export function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  const searchInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!searchOpen && !mobileOpen) return;
    function onEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSearchOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [searchOpen, mobileOpen]);

  useEffect(() => {
    if (searchOpen) searchInput.current?.focus();
  }, [searchOpen]);

  const closePanels = () => {
    setMobileOpen(false);
    setOpenMenu(null);
    setSearchOpen(false);
  };

  return (
    <>
      <div className="border-b border-border bg-surface py-2 text-center text-[11px] tracking-wide text-muted sm:text-xs">
        <span>MISS DOOD</span>
        <span className="mx-3 text-primary" aria-hidden="true">✦</span>
        <span>وب‌سایت رسمی برند — نسخه نمایشی</span>
      </div>
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[84px] max-w-7xl items-center gap-3 px-4 sm:px-6 lg:h-[96px] lg:px-8">
          <button type="button" className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border text-foreground transition-colors hover:border-primary hover:text-primary lg:hidden" onClick={() => setMobileOpen(true)} aria-label="باز کردن منو" aria-expanded={mobileOpen} aria-controls="mobile-navigation">
            <Menu size={22} />
          </button>

          <Link href="/" className="group flex min-w-0 items-center gap-2" onClick={closePanels} aria-label="MISS DOOD، صفحه اصلی">
            <Image src="/logos/miss-dood-transparent.png" alt="لوگوی MISS DOOD" width={86} height={86} priority className="h-[68px] w-[68px] shrink-0 object-contain sm:h-[76px] sm:w-[76px]" />
            <span className="hidden flex-col sm:flex">
              <span className="font-serif text-base font-semibold tracking-[0.17em] text-primary" dir="ltr">MISS DOOD</span>
              <span className="mt-1 text-[10px] text-muted">OFFICIAL BRAND</span>
            </span>
          </Link>

          <nav className="mr-auto hidden h-full items-center gap-1 lg:flex" aria-label="ناوبری اصلی">
            <Link href="/" className={`rounded-xl px-3 py-3 text-sm transition-colors hover:text-primary ${pathname === "/" ? "text-primary" : "text-foreground"}`}>خانه</Link>
            {navGroups.map((group) => (
              <div key={group.label} className="relative flex h-full items-center">
                <button type="button" className="flex items-center gap-1 rounded-xl px-3 py-3 text-sm text-foreground transition-colors hover:text-primary" aria-expanded={openMenu === group.label} aria-haspopup="true" onClick={() => setOpenMenu(openMenu === group.label ? null : group.label)}>
                  {group.label}<ChevronDown size={14} className={`transition-transform ${openMenu === group.label ? "rotate-180" : ""}`} />
                </button>
                {openMenu === group.label && (
                  <div className="absolute right-0 top-[calc(100%-8px)] w-[310px] rounded-2xl border border-border bg-surface p-4 shadow-[0_20px_60px_var(--site-shadow)]">
                    <p className="mb-2 text-sm font-semibold text-primary">{group.label}</p>
                    <p className="mb-4 text-xs leading-6 text-muted">{group.description}</p>
                    <div className="flex flex-col gap-1">
                      {group.links.map((item) => <Link key={item.href} href={item.href} onClick={closePanels} className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-surface-muted hover:text-primary">{item.label}<ArrowLeft size={14} /></Link>)}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link href="/about" className="rounded-xl px-3 py-3 text-sm text-foreground transition-colors hover:text-primary">درباره ما</Link>
            <Link href="/contact" className="rounded-xl px-3 py-3 text-sm text-foreground transition-colors hover:text-primary">تماس با ما</Link>
          </nav>

          <div className="mr-auto flex items-center gap-1 lg:mr-5 lg:border-r lg:border-border lg:pr-4">
            <button type="button" onClick={() => setSearchOpen(true)} aria-label="جستجو" className="flex h-11 w-11 items-center justify-center rounded-xl text-foreground transition-colors hover:bg-surface hover:text-primary"><Search size={21} /></button>
            <Link href="/account" aria-label="حساب کاربری" className="hidden h-11 w-11 items-center justify-center rounded-xl text-foreground transition-colors hover:bg-surface hover:text-primary sm:flex"><UserRound size={21} /></Link>
            <Link href="/cart" aria-label="سبد خرید" className="flex h-11 w-11 items-center justify-center rounded-xl text-foreground transition-colors hover:bg-surface hover:text-primary"><ShoppingBag size={21} /></Link>
          </div>
        </div>
        {openMenu && <button className="fixed inset-0 -z-10 cursor-default" aria-label="بستن زیرمنو" type="button" onClick={() => setOpenMenu(null)} />}
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" id="mobile-navigation">
          <button type="button" className="absolute inset-0 bg-overlay" aria-label="بستن منوی موبایل" onClick={() => setMobileOpen(false)} />
          <aside className="absolute inset-y-0 right-0 flex w-[min(86vw,360px)] flex-col overflow-y-auto border-l border-border bg-background px-5 py-5 shadow-[0_25px_80px_var(--site-shadow)]" aria-label="منوی موبایل">
            <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
              <span className="font-serif text-base tracking-[0.2em] text-primary" dir="ltr">MISS DOOD</span>
              <button type="button" onClick={() => setMobileOpen(false)} aria-label="بستن منو" className="rounded-lg border border-border p-2 text-foreground"><X size={20}/></button>
            </div>
            {simpleLinks.map((item) => <Link key={item.href} href={item.href} onClick={closePanels} className="border-b border-border py-4 text-sm text-foreground">{item.label}</Link>)}
            {navGroups.map((group) => (
              <details key={group.label} className="border-b border-border py-4">
                <summary className="cursor-pointer text-sm text-foreground">{group.label}</summary>
                <div className="mt-4 flex flex-col gap-2 pr-4">
                  {group.links.map((item) => <Link key={item.href} href={item.href} onClick={closePanels} className="rounded-lg bg-surface px-3 py-3 text-sm text-muted">{item.label}</Link>)}
                </div>
              </details>
            ))}
            <Link href="/account" onClick={closePanels} className="mt-4 flex items-center gap-2 py-3 text-sm text-foreground"><UserRound size={18}/> حساب کاربری</Link>
            <p className="mt-auto border-t border-border pt-5 text-xs leading-6 text-muted">فروش اینترنتی کالاهای مشمول محدودیت قانونی در این نسخه فعال نیست.</p>
          </aside>
        </div>
      )}

      {searchOpen && (
        <div className="fixed inset-0 z-[60] flex items-start justify-center bg-overlay px-4 pt-[15vh]" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSearchOpen(false); }}>
          <section role="dialog" aria-modal="true" aria-label="جستجو در سایت" className="w-full max-w-xl rounded-2xl border border-border bg-surface p-5 shadow-[0_25px_80px_var(--site-shadow)] sm:p-7">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">جستجو در MISS DOOD</h2>
              <button type="button" aria-label="بستن جستجو" onClick={() => setSearchOpen(false)} className="rounded-lg p-2 text-muted hover:bg-surface-muted"><X size={20}/></button>
            </div>
            <form action="/search" method="GET" className="flex items-center gap-3 rounded-xl border border-border bg-background p-2 focus-within:border-primary">
              <Search size={19} className="mr-2 shrink-0 text-muted" />
              <input ref={searchInput} type="search" name="q" required placeholder="نام محصول یا دسته‌بندی را وارد کنید..." className="min-w-0 flex-1 border-0 bg-transparent p-2 text-sm text-foreground outline-none placeholder:text-muted" />
              <button type="submit" className="rounded-lg bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground hover:bg-primary-hover">جستجو</button>
            </form>
            <p className="mt-4 text-xs leading-6 text-muted">جستجو در نسخه نمایشی آماده است؛ نتایج واقعی پس از اتصال کاتالوگ نمایش داده می‌شوند.</p>
          </section>
        </div>
      )}
    </>
  );
}
