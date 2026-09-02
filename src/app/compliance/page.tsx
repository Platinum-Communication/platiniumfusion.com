import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { PageIntro } from "@/components/PageIntro";
import {
  compliancePage,
  dataResidency,
  isolationLevels,
  orderChecklist,
  securityControls,
} from "@/content/compliance";

export const metadata: Metadata = {
  title: compliancePage.title,
  description: compliancePage.support,
};

function FactList({
  title,
  items,
}: {
  title: string;
  items: readonly { label: string; value: string }[];
}) {
  return (
    <div className="mx-auto max-w-6xl">
      <p className="mb-6 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-platinum">
        {title}
      </p>
      <dl className="divide-y divide-steel border-y border-steel">
        {items.map((item) => (
          <div
            key={item.label}
            className="grid gap-2 py-6 md:grid-cols-[16rem_1fr] md:gap-10"
          >
            <dt className="font-display text-base font-semibold uppercase tracking-[0.04em] text-paper">
              {item.label}
            </dt>
            <dd className="text-sm leading-relaxed text-mist md:text-base">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function CompliancePage() {
  return (
    <>
      <PageIntro
        eyebrow={compliancePage.title}
        title={compliancePage.headline}
        support={compliancePage.support}
      />

      <section className="space-y-16 px-5 py-16 md:px-8 md:py-20">
        <FactList title="Data location" items={dataResidency} />
        <FactList title="Isolation — planning labels only" items={isolationLevels} />
        <FactList title="Security scope" items={securityControls} />
        <FactList title={compliancePage.orderTitle} items={orderChecklist} />

        <div className="mx-auto flex max-w-6xl flex-wrap gap-3">
          <ButtonLink href="/legal/privacy">Privacy Policy</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Contact
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
