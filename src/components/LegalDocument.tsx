type LegalDocumentProps = {
  title: string;
  lastUpdated: string;
  sections: readonly { heading: string; body: string }[];
};

export function LegalDocument({ title, lastUpdated, sections }: LegalDocumentProps) {
  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-32 md:px-8 md:pb-32 md:pt-40">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-platinum">
        Legal · Updated {lastUpdated}
      </p>
      <h1 className="mt-4 font-display text-4xl font-semibold uppercase tracking-[0.04em] text-paper md:text-5xl">
        {title}
      </h1>
      <div className="mt-12 space-y-10">
        {sections.map((section) => (
          <section key={section.heading} className="border-t border-steel pt-6">
            <h2 className="font-display text-xl font-semibold uppercase tracking-[0.04em] text-paper">
              {section.heading}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-mist md:text-base">{section.body}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
