/** Temporary brand-led slides. Replace content with approved banners in a later CMS stage. */
export type HeroSlide = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  href: string;
  secondaryCta: string;
  secondaryHref: string;
  visual: "orbit" | "rays" | "halo";
};

export const HERO_AUTOPLAY_MS = 5500;

export const heroSlides: HeroSlide[] = [
  {
    id: "identity",
    eyebrow: "OFFICIAL MISS DOOD",
    title: "MISS DOOD",
    subtitle: "هویت ماندگار، در هر جزئیات",
    description: "به دنیای MISS DOOD خوش آمدید؛ طراحی ظریف و تجربه‌ای متفاوت در یک مجموعه اختصاصی.",
    cta: "مشاهده کاتالوگ",
    href: "/shop",
    secondaryCta: "درباره برند",
    secondaryHref: "/about",
    visual: "orbit",
  },
  {
    id: "collections",
    eyebrow: "CURATED COLLECTIONS",
    title: "انتخابی متفاوت",
    subtitle: "مجموعه‌ها را کشف کنید",
    description: "دسته‌بندی‌های مرتب و جستجوی ساده برای آشنایی با محصولات قابل نمایش در فروشگاه.",
    cta: "مرور مجموعه‌ها",
    href: "/shop",
    secondaryCta: "آشنایی بیشتر",
    secondaryHref: "/about",
    visual: "rays",
  },
  {
    id: "experience",
    eyebrow: "PREMIUM DIGITAL EXPERIENCE",
    title: "ظرافت در تجربه",
    subtitle: "جزئیات، تفاوت را می‌سازند",
    description: "از اولین نگاه تا کوچک‌ترین تعامل، همه‌چیز با هویت ویژه MISS DOOD طراحی شده است.",
    cta: "کشف سایت",
    href: "/shop",
    secondaryCta: "تماس با ما",
    secondaryHref: "/contact",
    visual: "halo",
  },
];
