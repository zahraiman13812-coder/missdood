import type { LucideIcon } from "lucide-react";
import { Archive, BadgeCheck, Boxes, Compass, Layers3, Package, ShieldCheck, Sparkles } from "lucide-react";

export type HomeCategory = {
  title: string;
  subtitle: string;
  href: string;
  Icon: LucideIcon;
  marker: string;
};

// Demo navigation only. Real categories must be approved before publication.
export const homeCategories: HomeCategory[] = [
  { title: "لوازم جانبی", subtitle: "دسته‌بندی قابل مدیریت", href: "/shop?category=accessories", Icon: Layers3, marker: "01" },
  { title: "مجموعه‌های برند", subtitle: "نمایش دسته‌های مجاز", href: "/shop?category=collections", Icon: Boxes, marker: "02" },
  { title: "محصولات منتخب", subtitle: "کاتالوگ قابل توسعه", href: "/shop?category=featured", Icon: Sparkles, marker: "03" },
  { title: "تمام دسته‌بندی‌ها", subtitle: "مرور ساختار کاتالوگ", href: "/shop", Icon: Compass, marker: "04" },
];

export const homeShowcase = [
  { id: "01", title: "جایگاه محصول ویژه", category: "COLLECTION 01", Icon: Package },
  { id: "02", title: "جایگاه محصول جدید", category: "COLLECTION 02", Icon: Archive },
  { id: "03", title: "جایگاه محصول منتخب", category: "COLLECTION 03", Icon: BadgeCheck },
];

export const brandHighlights = [
  { title: "طراحی منسجم", body: "زبان بصری یکپارچه در تمام صفحات", Icon: Sparkles },
  { title: "کاتالوگ منعطف", body: "آماده اتصال به دسته‌بندی‌های مجاز", Icon: Layers3 },
  { title: "انتشار مسئولانه", body: "نمایش کالا مطابق مقررات بازار هدف", Icon: ShieldCheck },
];
