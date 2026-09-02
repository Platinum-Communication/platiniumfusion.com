import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { PageIntro } from "@/components/PageIntro";
import { aboutPage, site } from "@/content/site";

export const metadata: Metadata = {
  title: aboutPage.title,
  description: aboutPage.support,
};

const facts = [
  { label: "Brand", value: site.name },
  { label: "Legal name", value: site.legalName },
  { label: "Company number", value: site.companyNumber },
  { label: "Incorporated", value: site.incorporated },
  { label: "Registry", value: site.registry },
  { label: "Filed activity", value: site.croActivity },
  { label: "Registered office", value: site.address },
  { label: "Director", value: site.managingDirector },
  { label: "VAT / tax ID", value: site.taxId },
  { label: "Public email", value: site.email },
  { label: "Phone", value: site.phone },
].filter((item) => Boolean(item.value));

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow={aboutPage.title}
        title={aboutPage.headline}
        support={aboutPage.support}
      />

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="max-w-2xl text-sm leading-relaxed text-mist md:text-base">
            {aboutPage.readingNote}
          </p>
          <div className="mt-12 divide-y divide-steel border-y border-steel">
            {aboutPage.role.map((item) => (
              <article key={item.title} className="grid gap-3 py-8 md:grid-cols-[16rem_1fr] md:gap-10">
                <h2 className="font-display text-lg font-semibold uppercase tracking-[0.04em] text-paper">
                  {item.title}
                </h2>
                <p className="text-sm leading-relaxed text-mist md:text-base">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="company-facts" className="scroll-mt-28 border-y border-steel bg-ink-soft px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-platinum">
            Registry
          </p>
          <dl className="mt-8 divide-y divide-steel border-y border-steel">
            {facts.map((item) => (
              <div key={item.label} className="grid gap-2 py-5 sm:grid-cols-[14rem_1fr] sm:gap-8">
                <dt className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-platinum-dim">
                  {item.label}
                </dt>
                <dd className="text-sm text-cloud md:text-base">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto mt-12 flex max-w-6xl flex-wrap gap-3">
          <ButtonLink href="/contact">Contact</ButtonLink>
          <ButtonLink href="/faq" variant="secondary">
            FAQ
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
