import type { Metadata } from "next";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
export const metadata: Metadata = { title: "سبد خرید" };
export default function CartPage() {
  return <main className="mx-auto min-h-[65vh] max-w-7xl px-5 py-20 md:px-8"><h1 className="text-3xl font-bold">سبد خرید</h1><div className="mt-10 rounded-3xl border border-border bg-surface p-12 text-center"><ShoppingBag className="mx-auto mb-4 text-primary" size={40}/><p className="text-lg font-semibold">سبد خرید خالی است</p><p className="mt-3 text-sm leading-7 text-muted">ثبت سفارش و پرداخت فعلاً غیرفعال است؛ قابلیت خرید صرفاً برای کالاهای مجاز فعال خواهد شد.</p><Link href="/shop" className="mt-6 inline-block text-sm text-primary hover:underline">مشاهده کاتالوگ</Link></div></main>;
}
