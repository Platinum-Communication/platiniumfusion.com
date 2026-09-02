import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { footerDisclosure, footerNav, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-platinum/20 bg-ink text-cloud">
      <div
        className={`relative mx-auto grid max-w-6xl gap-10 px-5 py-14 md:px-8 md:py-16 ${
          site.address || site.companyNumber
            ? "md:grid-cols-[1.4fr_1fr_1fr_1.2fr]"
            : "md:grid-cols-[1.4fr_1fr_1fr]"
        }`}
      >
        <div>
          <BrandLogo height={36} />
          <p className="mt-4 text-sm text-mist">{site.legalName}</p>
        </div>

        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-platinum-dim">Navigate</p>
          <ul className="mt-4 space-y-2">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-cloud/85 transition hover:text-platinum"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-platinum-dim">Legal</p>
          <ul className="mt-4 space-y-2">
            {footerDisclosure.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-cloud/85 transition hover:text-platinum"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {site.address || site.companyNumber ? (
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-platinum-dim">
              {site.address ? "Registered office" : "Company"}
            </p>
            {site.address ? (
              <p className="mt-4 text-sm leading-relaxed text-cloud/85">{site.address}</p>
            ) : null}
            {site.companyNumber ? (
              <p className={`${site.address ? "mt-3" : "mt-4"} text-xs text-platinum-dim`}>
                Company No. {site.companyNumber}
              </p>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className="border-t border-platinum/15">
        <div className="mx-auto max-w-6xl px-5 py-5 text-xs text-platinum-dim md:px-8">
          © {new Date().getFullYear()} {site.legalName}
        </div>
      </div>
    </footer>
  );
}
