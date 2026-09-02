import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "metal-sheen text-ink hover:brightness-110 focus-visible:outline-platinum",
  secondary:
    "border border-platinum/70 text-platinum bg-transparent hover:bg-platinum hover:text-ink focus-visible:outline-platinum",
  ghost:
    "text-mist hover:text-platinum underline-offset-4 hover:underline focus-visible:outline-platinum",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 clip-corner ${variants[variant]} ${className}`}
    >
      {children}
      {variant !== "ghost" ? (
        <span
          aria-hidden
          className="translate-x-0 font-mono text-xs transition-transform duration-200 group-hover:translate-x-0.5"
        >
          →
        </span>
      ) : null}
    </Link>
  );
}
