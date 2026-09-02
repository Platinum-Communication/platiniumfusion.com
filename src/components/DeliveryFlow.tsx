import { deliveryFlow } from "@/content/site";

export function DeliveryFlow() {
  return (
    <>
      <ol className="border border-steel md:hidden">
        {deliveryFlow.map((step, i) => (
          <li
            key={step.number}
            className={`grid grid-cols-[2.5rem_1fr] gap-x-3 px-4 py-3 ${i > 0 ? "border-t border-steel" : ""}`}
          >
            <p className="font-mono text-[11px] text-platinum-dim">{step.number}</p>
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-[0.04em] text-paper">
                {step.title}
              </h3>
              <p className="mt-1 text-sm leading-snug text-mist">{step.note}</p>
            </div>
          </li>
        ))}
      </ol>

      <ol className="hidden gap-px border border-steel bg-steel md:grid md:grid-cols-6">
        {deliveryFlow.map((step, i) => (
          <li
            key={step.number}
            className={`relative bg-ink-soft p-5 lg:p-6 ${i < 3 ? "md:col-span-2" : "md:col-span-3"}`}
          >
            <p className="font-mono text-[11px] text-platinum-dim">{step.number}</p>
            <h3 className="mt-3 font-display text-lg font-semibold uppercase tracking-[0.04em] text-paper">
              {step.title}
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-mist">{step.note}</p>
            {i !== 2 && i !== 4 ? (
              <span aria-hidden className="absolute right-3 top-5 font-mono text-platinum-dim">
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </>
  );
}
