import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { DeliveryFlow } from "@/components/DeliveryFlow";
import { EvidenceVisuals } from "@/components/EvidenceVisuals";
import { HeroField } from "@/components/HeroField";
import { operatingTempo } from "@/content/evidence";
import {
  audienceTags,
  deliverables,
  finalCta,
  hero,
  homeSections,
  site,
  workloads,
} from "@/content/site";

export default function HomePage() {
  return (
    <>
      <HeroField>
        <div className="relative mx-auto flex min-h-[72svh] max-w-6xl items-end px-5 pb-12 pt-24 md:items-center md:px-8 md:pb-16 md:pt-28">
          <div className="max-w-3xl">
            <h1 className="font-display text-[1.85rem] font-semibold leading-[1.12] tracking-[0.02em] text-paper text-balance sm:text-4xl md:text-[3.15rem]">
              {hero.headline}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist md:text-lg">
              {hero.support}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mist">{site.neoCloud}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {audienceTags.map((tag) => (
                <li
                  key={tag}
                  className="border border-steel px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-cloud"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href={hero.primaryCta.href}>{hero.primaryCta.label}</ButtonLink>
              <ButtonLink href={hero.secondaryCta.href} variant="secondary">
                {hero.secondaryCta.label}
              </ButtonLink>
            </div>
            <p className="mt-4 max-w-xl text-xs leading-relaxed text-mist">{hero.disclaimer}</p>
          </div>
        </div>
      </HeroField>

      <section className="border-y border-steel px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-platinum">
            {homeSections.deliverables.eyebrow}
          </p>
          <h2 className="mt-3 max-w-xl font-display text-2xl font-semibold uppercase tracking-[0.04em] text-paper md:text-3xl">
            {homeSections.deliverables.title}
          </h2>
          <ul className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-0">
            {deliverables.map((item, i) => (
              <li
                key={item.title}
                className={`lg:px-6 ${i === 0 ? "lg:pl-0" : "lg:border-l lg:border-steel"}`}
              >
                <p className="font-mono text-sm text-platinum-dim">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 font-display text-lg font-semibold uppercase tracking-[0.04em] text-paper">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="delivery-path" className="scroll-mt-24 px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-platinum">
            {homeSections.flow.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold uppercase tracking-[0.04em] text-paper md:text-3xl">
            {homeSections.flow.title}
          </h2>
          <div className="mt-8">
            <DeliveryFlow />
          </div>
        </div>
      </section>

      <section className="border-y border-steel bg-ink-soft px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-platinum">
            {homeSections.evidence.eyebrow}
          </p>
          <h2 className="mt-3 max-w-xl font-display text-2xl font-semibold uppercase tracking-[0.04em] text-paper md:text-3xl">
            {homeSections.evidence.title}
          </h2>
          <div className="mt-8">
            <EvidenceVisuals />
          </div>
          <p className="mt-6 text-sm text-mist">
            {operatingTempo.label}: {operatingTempo.value} {operatingTempo.note}
          </p>
        </div>
      </section>

      <section className="px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-steel pb-6">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-platinum">
                {homeSections.workloads.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold uppercase tracking-[0.04em] text-paper md:text-3xl">
                {homeSections.workloads.title}
              </h2>
            </div>
            <Link
              href="/workloads"
              className="inline-flex min-h-11 items-center font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-platinum transition hover:text-paper"
            >
              {homeSections.workloads.cta} →
            </Link>
          </div>
          <ul className="divide-y divide-steel">
            {workloads.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex min-h-11 items-center justify-between gap-6 py-3.5 transition hover:text-platinum"
                >
                  <span className="font-display text-lg font-semibold uppercase tracking-[0.04em] text-paper">
                    {item.label}
                  </span>
                  <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.16em] text-platinum-dim">
                    Open
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-steel bg-ink-soft px-5 py-14 md:px-8 md:py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="max-w-xl font-display text-3xl font-semibold uppercase tracking-[0.04em] text-paper md:text-4xl">
              {finalCta.title}
            </h2>
            <p className="mt-3 max-w-lg text-sm text-mist">
              Send the full brief on Contact — workload, scale, class, timing, and boundary.
            </p>
          </div>
          <ButtonLink href={finalCta.cta.href}>{finalCta.cta.label}</ButtonLink>
        </div>
      </section>
    </>
  );
}
