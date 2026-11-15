export type NavGroup = {
  label: string;
  href: string;
  description: string;
  links: { label: string; href: string }[];
};

// Keep navigation data separate from presentation components.
// These are general UI placeholders until an approved catalog is available.
export const navGroups: NavGroup[] = [
  {
    label: "کاتالوگ",
    href: "/shop",
    description: "مرور گروه‌های کالایی قابل انتشار",
    links: [
      { label: "همه گروه‌ها", href: "/shop" },
      { label: "لوازم جانبی مجاز", href: "/shop?category=accessories" },
      { label: "محصولات منتخب", href: "/shop?category=featured" },
    ],
  },
  {
    label: "برندها",
    href: "/shop?view=brands",
    description: "مرور برندهای موجود در کاتالوگ",
    links: [
      { label: "همه برندها", href: "/shop?view=brands" },
      { label: "برند MISS DOOD", href: "/about" },
    ],
  },
];

export const simpleLinks = [
  { label: "صفحه اصلی", href: "/" },
  { label: "درباره ما", href: "/about" },
  { label: "تماس با ما", href: "/contact" },
];
