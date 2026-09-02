type PageIntroProps = {
  eyebrow: string;
  title: string;
  support?: string;
};

export function PageIntro({ eyebrow, title, support }: PageIntroProps) {
  return (
    <section className="border-b border-steel px-5 pb-10 pt-32 md:px-8 md:pb-12 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-platinum">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-3xl font-semibold uppercase tracking-[0.04em] text-paper text-balance md:text-4xl">
          {title}
        </h1>
        {support ? (
          <p className="mt-4 max-w-xl text-base leading-relaxed text-mist md:text-lg">{support}</p>
        ) : null}
      </div>
    </section>
  );
}
