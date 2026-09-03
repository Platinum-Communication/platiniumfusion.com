"use client";

import { FormEvent, useState } from "react";
import { contactPage, inquiryInputs, site } from "@/content/site";

type FormStatus = "idle" | "sending" | "delivered" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");
  const [requestId, setRequestId] = useState("");
  const [showMailto, setShowMailto] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setRequestId("");
    setShowMailto(false);
    setStatus("sending");

    const form = event.currentTarget;
    const data = new FormData(form);

    const inquiry = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      workload: String(data.get("workload") ?? "").trim(),
      scale: String(data.get("scale") ?? "").trim(),
      class: String(data.get("class") ?? "").trim(),
      timing: String(data.get("timing") ?? "").trim(),
      boundary: String(data.get("boundary") ?? "").trim(),
      website: String(data.get("website") ?? "").trim(),
      privacy: data.get("privacy") === "on",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inquiry),
      });

      const payload = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        requestId?: string;
        mailto?: boolean;
      };

      if (payload.requestId) setRequestId(payload.requestId);

      if (!response.ok || !payload.ok) {
        setShowMailto(payload.mailto === true && Boolean(site.email));
        throw new Error(payload.error || "Could not send the inquiry.");
      }

      setStatus("delivered");
      form.reset();
    } catch (submitError) {
      setStatus("error");
      setError(submitError instanceof Error ? submitError.message : "Could not send the inquiry.");
    }
  }

  const sending = status === "sending";
  const mailtoHref = site.email
    ? `mailto:${site.email}?subject=${encodeURIComponent("Platinum inquiry")}`
    : "";

  const fieldClass =
    "mt-2 w-full border border-steel bg-ink px-3 py-3 text-cloud outline-none transition focus:border-platinum disabled:opacity-70";

  return (
    <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr]">
      <form
        onSubmit={handleSubmit}
        className="metal-frame space-y-5 border border-steel bg-ink-soft p-6 md:p-8"
      >
        <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
          <label>
            Website
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-sm text-mist">
            {contactPage.fields.name}
            <input
              required
              name="name"
              type="text"
              autoComplete="name"
              disabled={sending}
              className={fieldClass}
            />
          </label>
          <label className="block text-sm text-mist">
            {contactPage.fields.email}
            <input
              required
              name="email"
              type="email"
              autoComplete="email"
              disabled={sending}
              className={fieldClass}
            />
          </label>
        </div>
        <label className="block text-sm text-mist">
          {contactPage.fields.company}
          <input
            name="company"
            type="text"
            autoComplete="organization"
            disabled={sending}
            className={fieldClass}
          />
        </label>

        {inquiryInputs.map((item) => (
          <label key={item.label} className="block text-sm text-mist">
            {item.label}
            {item.label === "Workload" || item.label === "Boundary" ? (
              <textarea
                required={item.label === "Workload"}
                minLength={item.label === "Workload" ? 8 : undefined}
                name={item.label.toLowerCase()}
                rows={item.label === "Workload" ? 5 : 3}
                placeholder={item.hint}
                disabled={sending}
                className={`${fieldClass} resize-y`}
              />
            ) : (
              <input
                name={item.label.toLowerCase()}
                type="text"
                placeholder={item.hint}
                disabled={sending}
                className={fieldClass}
              />
            )}
          </label>
        ))}

        <button
          type="submit"
          disabled={sending}
          className="inline-flex min-h-11 items-center justify-center clip-corner metal-sheen px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-ink transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-platinum disabled:cursor-wait disabled:opacity-70"
        >
          {sending ? contactPage.sendingLabel : `${contactPage.submitLabel} →`}
        </button>
        <label className="flex items-start gap-3 text-xs leading-relaxed text-mist">
          <input
            required
            type="checkbox"
            name="privacy"
            disabled={sending}
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
          {status === "idle" || status === "sending" ? (
            <p className="text-xs text-mist">{contactPage.note}</p>
          ) : null}
          {status === "error" ? (
            <p role="alert" className="text-sm text-cloud">
              {error}
              {requestId ? ` Reference: ${requestId}.` : ""}{" "}
              {showMailto && mailtoHref ? (
                <a href={mailtoHref} className="font-semibold text-platinum underline-offset-2 hover:underline">
                  Email {site.email}
                </a>
              ) : null}
            </p>
          ) : null}
          {status === "delivered" ? (
            <p role="status" className="text-sm text-platinum">
              {contactPage.delivered}
              {requestId ? ` Reference: ${requestId}.` : ""}
            </p>
          ) : null}
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
      </aside>
    </div>
  );
}
