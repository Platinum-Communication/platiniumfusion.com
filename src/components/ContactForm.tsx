"use client";

import { FormEvent, useState } from "react";
import { contactPage, inquiryInputs, site } from "@/content/site";

type FormStatus = "idle" | "blocked" | "copied" | "copy-failed" | "mailto";

function readBrief(form: HTMLFormElement) {
  const data = new FormData(form);
  const lines = [
    `Name: ${String(data.get("name") ?? "")}`,
    `Email: ${String(data.get("email") ?? "")}`,
    `Company: ${String(data.get("company") ?? "")}`,
    "",
    ...inquiryInputs.map((item) => `${item.label}: ${String(data.get(item.label.toLowerCase()) ?? "")}`),
  ];
  return lines.join("\n");
}

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const canMail = Boolean(site.email);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const brief = readBrief(form);

    if (!site.email) {
      setStatus("blocked");
      if (navigator.clipboard?.writeText) {
        void navigator.clipboard.writeText(brief).then(() => setStatus("copied")).catch(() => {
          setStatus("copy-failed");
        });
      }
      return;
    }

    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const company = String(data.get("company") ?? "");
    const subject = encodeURIComponent(`Platinum inquiry — ${company || name}`);
    const body = encodeURIComponent(brief);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("mailto");
  }

  const fieldClass =
    "mt-2 w-full border border-steel bg-ink px-3 py-3 text-cloud outline-none transition focus:border-platinum";

  return (
    <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr]">
      <form
        onSubmit={handleSubmit}
        className="metal-frame space-y-5 border border-steel bg-ink-soft p-6 md:p-8"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-sm text-mist">
            {contactPage.fields.name}
            <input required name="name" type="text" autoComplete="name" className={fieldClass} />
          </label>
          <label className="block text-sm text-mist">
            {contactPage.fields.email}
            <input
              required
              name="email"
              type="email"
              autoComplete="email"
              className={fieldClass}
            />
          </label>
        </div>
        <label className="block text-sm text-mist">
          {contactPage.fields.company}
          <input name="company" type="text" autoComplete="organization" className={fieldClass} />
        </label>

        {inquiryInputs.map((item) => (
          <label key={item.label} className="block text-sm text-mist">
            {item.label}
            {item.label === "Workload" || item.label === "Boundary" ? (
              <textarea
                required={item.label === "Workload"}
                name={item.label.toLowerCase()}
                rows={item.label === "Workload" ? 5 : 3}
                placeholder={item.hint}
                className={`${fieldClass} resize-y`}
              />
            ) : (
              <input name={item.label.toLowerCase()} type="text" placeholder={item.hint} className={fieldClass} />
            )}
          </label>
        ))}

        <button
          type="submit"
          className="inline-flex min-h-11 items-center justify-center clip-corner metal-sheen px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-ink transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-platinum"
        >
          {canMail ? contactPage.submitLabel : contactPage.submitCopyLabel} →
        </button>
        <label className="flex items-start gap-3 text-xs leading-relaxed text-mist">
          <input
            required
            type="checkbox"
            name="privacy"
            className="mt-0.5 h-4 w-4 shrink-0 rounded-none border-steel-mid accent-platinum"
          />
          <span>
            I agree that Platinum may process my contact details to handle this inquiry, as
            described in the{" "}
            <a
              href="/legal/privacy"
              className="font-semibold text-platinum underline-offset-2 hover:underline"
            >
              Privacy Policy
            </a>
            .
          </span>
        </label>
        <div aria-live="polite">
          {status === "idle" ? <p className="text-xs text-mist">{contactPage.note}</p> : null}
          {status === "blocked" ? <p className="text-sm text-cloud">{contactPage.cannotSend}</p> : null}
          {status === "copied" ? (
            <p className="text-sm text-cloud">
              {contactPage.cannotSend} {contactPage.copied}
            </p>
          ) : null}
          {status === "copy-failed" ? (
            <p className="text-sm text-cloud">
              {contactPage.cannotSend} {contactPage.copyFailed}
            </p>
          ) : null}
          {status === "mailto" ? <p className="text-sm text-cloud">{contactPage.mailtoOpened}</p> : null}
        </div>
      </form>

      <aside className="space-y-8 border-t border-steel pt-6 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-platinum-dim">
            {contactPage.briefTitle}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-mist">{contactPage.briefIntro}</p>
          <ol className="mt-5 space-y-3">
            {contactPage.brief.map((item, i) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-cloud">
                <span className="shrink-0 font-mono text-[11px] text-platinum-dim">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-platinum-dim">
            Company
          </p>
          <p className="mt-3 font-display text-xl font-semibold uppercase tracking-[0.06em] text-paper">
            {site.legalName}
          </p>
          <p className="mt-2 text-sm text-mist">
            {site.address ? (
              <>
                {site.address}
                <br />
              </>
            ) : null}
            {[site.location, site.region].filter(Boolean).join(" · ")}
          </p>
        </div>
        {site.companyNumber || site.registry ? (
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-platinum-dim">
              Registry
            </p>
            {site.companyNumber ? (
              <p className="mt-3 text-sm text-cloud">Company No. {site.companyNumber}</p>
            ) : null}
            {site.registry ? (
              <p className={`${site.companyNumber ? "mt-1" : "mt-3"} text-sm text-mist`}>
                {site.registry}
              </p>
            ) : null}
          </div>
        ) : null}
        {(site.email || site.phone) && (
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-platinum-dim">
              Direct
            </p>
            {site.email ? (
              <p className="mt-3 text-sm text-cloud">
                <a href={`mailto:${site.email}`} className="transition hover:text-platinum">
                  {site.email}
                </a>
              </p>
            ) : null}
            {site.phone ? <p className="mt-1 text-sm text-mist">{site.phone}</p> : null}
          </div>
        )}
        {!site.email ? (
          <p className="text-sm leading-relaxed text-mist">{contactPage.cannotSend}</p>
        ) : null}
      </aside>
    </div>
  );
}
