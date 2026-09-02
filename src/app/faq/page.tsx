import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { PageIntro } from "@/components/PageIntro";
import { faqItems, faqPage } from "@/content/faq";

export const metadata: Metadata = {
  title: faqPage.title,
  description: faqPage.support,
};

export default function FaqPage() {
  return (
    <>
      <PageIntro eyebrow={faqPage.title} title={faqPage.headline} support={faqPage.support} />

      <section className="px-5 py-16 md:px-8 md:py-20">
        <dl className="mx-auto max-w-6xl divide-y divide-steel border-y border-steel">
          {faqItems.map((item, i) => (
            <div key={item.q} className="grid gap-3 py-8 md:grid-cols-[2rem_1fr] md:gap-8">
              <p className="font-mono text-[11px] text-platinum-dim">
                {String(i + 1).padStart(2, "0")}
              </p>
              <div>
                <dt className="font-display text-lg font-semibold uppercase tracking-[0.04em] text-paper md:text-xl">
                  {item.q}
                </dt>
                <dd className="mt-3 max-w-3xl text-sm leading-relaxed text-mist md:text-base">
                  {item.a}
                </dd>
              </div>
            </div>
          ))}
        </dl>

        <div className="mx-auto mt-12 flex max-w-6xl flex-wrap gap-3">
          <ButtonLink href="/contact">Contact</ButtonLink>
          <ButtonLink href="/compliance" variant="secondary">
            Compliance
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
