import Link from "next/link";
import { ArrowUpLeft } from "lucide-react";

export function SectionHeading({ eyebrow, title, description, href, action }: {
  eyebrow: string; title: string; description?: string; href?: string; action?: string;
}) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-5 sm:mb-10 md:flex-row md:items-end">
      <div className="max-w-2xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary" dir="ltr">{eyebrow}</p>
        <h2 className="text-2xl font-bold leading-relaxed text-foreground sm:text-3xl">{title}</h2>
        {description ? <p className="mt-3 text-sm leading-8 text-muted">{description}</p> : null}
      </div>
      {href && action ? (
        <Link href={href} className="inline-flex w-fit items-center gap-2 border-b border-primary/60 pb-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover">
          {action}<ArrowUpLeft size={17} aria-hidden="true" />
        </Link>
      ) : null}
    </div>
  );
}
