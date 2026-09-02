import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { PageIntro } from "@/components/PageIntro";
import { engagementArtefacts, gpuDiscussion, serviceLines, servicesPage } from "@/content/services";
import { audienceTags, responsibility, workloads } from "@/content/site";

export const metadata: Metadata = {
  title: servicesPage.title,
  description: servicesPage.support,
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow={servicesPage.title}
        title={servicesPage.headline}
        support={servicesPage.support}
      />

      <section className="px-5 py-14 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:hidden">
          {serviceLines.map((line) => (
            <article key={line.id} id={`${line.id}-mobile`} className="scroll-mt-28 border border-steel bg-ink-soft p-6">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-platinum-dim">
                Service line
              </p>
              <h2 className="mt-2 font-display text-lg font-semibold uppercase tracking-[0.04em] text-paper">
                {line.name}
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-cloud">{line.youGet}</p>
              <p className="mt-4 text-xs leading-relaxed text-mist">Boundary: {line.notIncluded}</p>
            </article>
          ))}
        </div>

        <div className="mx-auto hidden max-w-6xl overflow-x-auto md:block">
          <table className="w-full min-w-[40rem] border-collapse text-left">
            <thead>
              <tr className="border-b border-platinum/30">
                <th className="py-4 pr-6 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-platinum-dim">
                  Line
                </th>
                <th className="py-4 pr-6 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-platinum-dim">
                  You get
                </th>
                <th className="py-4 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-platinum-dim">
                  Boundary
                </th>
              </tr>
            </thead>
            <tbody>
              {serviceLines.map((line) => (
                <tr key={line.id} id={line.id} className="scroll-mt-28 border-b border-steel align-top">
                  <td className="py-6 pr-6 font-display text-lg font-semibold uppercase tracking-[0.04em] text-paper">
                    {line.name}
                  </td>
                  <td className="py-6 pr-6 text-sm leading-relaxed text-cloud md:text-base">{line.youGet}</td>
                  <td className="py-6 text-sm leading-relaxed text-mist md:text-base">{line.notIncluded}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-y border-steel bg-ink-soft px-5 py-14 md:px-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-platinum">
            {servicesPage.artefactsTitle}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mist md:text-base">
            {servicesPage.artefactsSupport}
          </p>
          <dl className="mt-8 divide-y divide-steel border-y border-steel">
            {engagementArtefacts.map((item) => (
              <div key={item.label} className="grid gap-2 py-5 md:grid-cols-[16rem_1fr] md:gap-10">
                <dt className="font-display text-base font-semibold uppercase tracking-[0.04em] text-paper">
                  {item.label}
                </dt>
                <dd className="text-sm leading-relaxed text-mist md:text-base">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="px-5 py-14 md:px-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-platinum">
            Fit
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {audienceTags.map((tag) => (
              <li
                key={tag}
                className="border border-steel px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-cloud"
              >
                {tag}
              </li>
            ))}
          </ul>
          <ul className="mt-8 divide-y divide-steel border-y border-steel">
            {workloads.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex min-h-11 items-center justify-between gap-6 py-3.5 transition hover:text-platinum"
                >
                  <span className="font-display text-base font-semibold uppercase tracking-[0.04em] text-paper">
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

      <section className="border-y border-steel bg-ink-soft px-5 py-14 md:px-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-platinum">
            {servicesPage.responsibilityTitle}
          </p>
          <dl className="mt-8 divide-y divide-steel border-y border-steel">
            {responsibility.map((item) => (
              <div key={item.party} className="grid gap-2 py-5 md:grid-cols-[16rem_1fr] md:gap-10">
                <dt className="font-display text-base font-semibold uppercase tracking-[0.04em] text-paper">
                  {item.party}
                </dt>
                <dd className="text-sm leading-relaxed text-mist md:text-base">{item.owns}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="px-5 py-14 md:px-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-platinum">
            {servicesPage.classesTitle}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mist md:text-base">
            {servicesPage.classesNote}
          </p>
          <dl className="mt-8 divide-y divide-steel border-y border-steel">
            {gpuDiscussion.map((item) => (
              <div key={item.label} className="grid gap-2 py-5 md:grid-cols-[16rem_1fr] md:gap-10">
                <dt className="font-mono text-sm font-semibold uppercase tracking-[0.08em] text-paper">
                  {item.label}
                </dt>
                <dd className="text-sm leading-relaxed text-mist md:text-base">{item.use}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto mt-12 flex max-w-6xl flex-wrap gap-3">
          <ButtonLink href="/contact">Start an inquiry</ButtonLink>
          <ButtonLink href="/workloads" variant="secondary">
            Workloads
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
