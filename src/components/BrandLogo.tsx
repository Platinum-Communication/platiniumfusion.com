import Link from "next/link";
import { site } from "@/content/site";

type BrandLogoProps = {
  height?: number;
  className?: string;
  linked?: boolean;
  priority?: boolean;
};

export function BrandLogo({
  height = 32,
  className = "",
  linked = true,
}: BrandLogoProps) {
  const markSize = Math.round(height * 0.88);
  const fontSize = Math.max(13, Math.round(height * 0.42));

  const mark = (
    <span
      className={`inline-flex items-center gap-2.5 text-current ${className}`.trim()}
      style={{ height }}
    >
      <svg
        width={markSize}
        height={markSize}
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <path
          d="M24 3 L45 24 L24 45 L3 24 Z"
          stroke="currentColor"
          strokeOpacity="0.45"
          strokeWidth="1.4"
        />
        <path
          d="M24 12 L36 24 L24 36 L12 24 Z"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path
          d="M24 18 L30 24 L24 30 L18 24 Z"
          fill="currentColor"
        />
      </svg>
      <span
        className="font-display font-semibold uppercase leading-none tracking-[0.14em]"
        style={{ fontSize }}
      >
        {site.name}
      </span>
    </span>
  );

  if (!linked) return mark;

  return (
    <Link
      href="/"
      className="relative inline-flex shrink-0 items-center text-platinum-bright transition hover:text-white"
      aria-label={`${site.name} home`}
    >
      {mark}
    </Link>
  );
}
