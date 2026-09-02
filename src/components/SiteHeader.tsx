"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { nav, navMenus } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuId = useId();
  const menuRootRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!activeMenu) return;

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveMenu(null);
        triggerRef.current?.focus();
      }
    }

    function onPointer(event: MouseEvent) {
      if (menuRootRef.current && !menuRootRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    }

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, [activeMenu]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-platinum/20 bg-ink/92 backdrop-blur-md">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-5 focus:top-3 focus:z-[60] focus:bg-platinum focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:uppercase focus:tracking-[0.12em] focus:text-ink"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-5 md:px-8">
        <BrandLogo height={30} />

        <nav
          className="relative hidden flex-1 items-center justify-end gap-7 md:flex"
          aria-label="Primary"
        >
          {nav.map((item) => {
            const menu = navMenus[item.label] ?? [];
            const hasMenu = menu.length > 0;
            const isOpen = activeMenu === item.label;
            const controlsId = `${menuId}-${item.label}`;

            if (!hasMenu) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex min-h-11 items-center text-[12px] font-semibold uppercase tracking-[0.16em] text-cloud/80 transition hover:text-platinum"
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div
                key={item.href}
                ref={menuRootRef}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  ref={triggerRef}
                  type="button"
                  className="inline-flex min-h-11 items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-cloud/80 transition hover:text-platinum"
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  aria-controls={controlsId}
                  onClick={() => setActiveMenu(isOpen ? null : item.label)}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={`text-[9px] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  >
                    ▾
                  </span>
                </button>

                {isOpen ? (
                  <div id={controlsId} className="absolute left-0 top-full z-50 min-w-[15rem]">
                    <ul className="border border-platinum/20 bg-ink py-1 shadow-panel" role="list">
                      {menu.map((option) => (
                        <li key={option.label}>
                          <Link
                            href={option.href}
                            className="block whitespace-nowrap px-4 py-3 text-sm font-medium text-cloud/80 transition hover:bg-steel hover:text-platinum"
                            onClick={() => setActiveMenu(null)}
                          >
                            {option.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="relative hidden shrink-0 items-center md:flex">
          <Link
            href="/contact"
            className="clip-corner metal-sheen px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-ink transition hover:brightness-110"
          >
            Talk to us
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex min-h-11 items-center justify-center border border-platinum/30 px-3 text-sm font-semibold uppercase tracking-[0.12em] text-platinum md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-platinum/15 bg-ink px-5 py-4 md:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {nav.map((item) => {
              const menu = navMenus[item.label] ?? [];
              return (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="flex min-h-11 items-center text-base font-semibold uppercase tracking-[0.08em] text-paper"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {menu.length > 0 ? (
                    <ul className="mb-2 ml-3 border-l border-platinum/20 pl-3">
                      {menu.map((option) => (
                        <li key={option.label}>
                          <Link
                            href={option.href}
                            className="flex min-h-11 items-center text-sm text-mist"
                            onClick={() => setOpen(false)}
                          >
                            {option.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              );
            })}
            <Link
              href="/contact"
              className="mt-3 flex min-h-11 items-center justify-center clip-corner metal-sheen px-4 text-sm font-semibold uppercase tracking-[0.12em] text-ink"
              onClick={() => setOpen(false)}
            >
              Talk to us
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
