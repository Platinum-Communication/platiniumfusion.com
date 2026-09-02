import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { PageIntro } from "@/components/PageIntro";
import { workloadPatterns, workloadsPage } from "@/content/workloads";

export const metadata: Metadata = {
  title: workloadsPage.title,
  description: workloadsPage.support,
};

export default function WorkloadsPage() {
  return (
    <>
      <PageIntro
        eyebrow={workloadsPage.title}
        title={workloadsPage.headline}
        support={workloadsPage.support}
      />

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl space-y-16">
          {workloadPatterns.map((pattern) => (
            <article
              key={pattern.id}
              id={pattern.id}
              className="scroll-mt-28 border-t border-steel pt-10"
            >
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-platinum-dim">
                {pattern.number}
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold uppercase tracking-[0.04em] text-paper md:text-3xl">
                {pattern.name}
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-cloud md:text-lg">
                {pattern.lead}
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-mist">{pattern.when}</p>

              <div className="mt-10 grid gap-px bg-steel lg:grid-cols-2">
                <div className="bg-ink p-6 md:p-8">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-platinum">
                    What we need
                  </p>
                  <ul className="mt-5 space-y-4">
                    {pattern.weNeed.map((item) => (
                      <li key={item} className="border-t border-steel pt-4 text-sm leading-relaxed text-cloud">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-ink-soft p-6 md:p-8">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-platinum-dim">
                    Scope notes
                  </p>
                  <ul className="mt-5 space-y-4">
                    {pattern.weDoNot.map((item) => (
                      <li key={item} className="border-t border-steel pt-4 text-sm leading-relaxed text-mist">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-16 flex max-w-6xl flex-wrap gap-3">
          <ButtonLink href="/contact">Start an inquiry</ButtonLink>
          <ButtonLink href="/services" variant="secondary">
            Service lines
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
