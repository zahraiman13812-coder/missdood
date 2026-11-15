"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpLeft } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { HERO_AUTOPLAY_MS, heroSlides } from "@/config/hero-slides";

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback((index: number) => {
    setActive(((index % heroSlides.length) + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(media.matches);
    updateMotion();
    media.addEventListener("change", updateMotion);
    return () => media.removeEventListener("change", updateMotion);
  }, []);

  useEffect(() => {
    const onVisibility = () => setIsVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  useEffect(() => {
    if (paused || !isVisible || reducedMotion) return;
    const interval = window.setInterval(() => setActive((current) => (current + 1) % heroSlides.length), HERO_AUTOPLAY_MS);
    return () => window.clearInterval(interval);
  }, [paused, isVisible, reducedMotion, active]);

  return (
    <section
      aria-label="اسلایدر اصلی MISS DOOD"
      aria-roledescription="carousel"
      className="hero-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") { event.preventDefault(); goTo(active + 1); }
        if (event.key === "ArrowRight") { event.preventDefault(); goTo(active - 1); }
      }}
      onTouchStart={(event) => { touchStartX.current = event.touches[0]?.clientX ?? null; }}
      onTouchEnd={(event) => {
        if (touchStartX.current == null) return;
        const diff = event.changedTouches[0]?.clientX - touchStartX.current;
        if (diff != null && Math.abs(diff) > 55) goTo(active + (diff > 0 ? 1 : -1));
        touchStartX.current = null;
      }}
    >
      {heroSlides.map((slide, index) => {
        const isActive = index === active;
        return (
          <article
            key={slide.id}
            className={`hero-carousel__slide hero-carousel__slide--${slide.visual} ${isActive ? "is-active" : ""}`}
            aria-hidden={!isActive}
            aria-roledescription="slide"
            aria-label={`${index + 1} از ${heroSlides.length}`}
            inert={!isActive}
          >
            <div className="hero-carousel__backdrop" aria-hidden="true">
              <div className="hero-carousel__glow hero-carousel__glow--one" />
              <div className="hero-carousel__glow hero-carousel__glow--two" />
              <div className="hero-carousel__orbit hero-carousel__orbit--one" />
              <div className="hero-carousel__orbit hero-carousel__orbit--two" />
              <div className="hero-carousel__beam" />
            </div>
            <div className="hero-carousel__inner">
              <div className="hero-carousel__copy" dir="rtl">
                <span className="hero-carousel__eyebrow" dir="ltr">{slide.eyebrow}</span>
                {index === 0 ? <h1 className="hero-carousel__title">{slide.title}</h1> : <h2 className="hero-carousel__title">{slide.title}</h2>}
                <p className="hero-carousel__subtitle">{slide.subtitle}</p>
                <p className="hero-carousel__description">{slide.description}</p>
                <div className="hero-carousel__actions">
                  <Link className="hero-carousel__cta" href={slide.href}>{slide.cta}<ArrowUpLeft size={18} aria-hidden="true" /></Link>
                  <Link className="hero-carousel__secondary" href={slide.secondaryHref}>{slide.secondaryCta}</Link>
                </div>
              </div>
              <div className="hero-carousel__art" aria-hidden="true">
                <div className="hero-carousel__art-ring" />
                <Image
                  src="/logos/miss-dood-transparent.png"
                  alt=""
                  width={720}
                  height={720}
                  className="hero-carousel__logo"
                  sizes="(max-width: 768px) 78vw, 48vw"
                  priority={index === 0}
                />
              </div>
            </div>
          </article>
        );
      })}
      <button type="button" className="hero-carousel__arrow hero-carousel__arrow--prev" onClick={() => goTo(active - 1)} aria-label="اسلاید قبلی"><ChevronLeft aria-hidden="true" size={23}/></button>
      <button type="button" className="hero-carousel__arrow hero-carousel__arrow--next" onClick={() => goTo(active + 1)} aria-label="اسلاید بعدی"><ChevronRight aria-hidden="true" size={23}/></button>
      <div className="hero-carousel__pagination" role="group" aria-label="انتخاب اسلاید">
        {heroSlides.map((slide, index) => <button key={slide.id} type="button" className={`hero-carousel__dot ${active === index ? "is-active" : ""}`} aria-label={`نمایش اسلاید ${index + 1}`} aria-current={active === index ? "true" : undefined} onClick={() => goTo(index)} />)}
      </div>
      <span className="sr-only" aria-live="off">اسلایدر شامل {heroSlides.length} اسلاید است.</span>
    </section>
  );
}
