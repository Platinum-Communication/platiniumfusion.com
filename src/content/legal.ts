import { site } from "./site";

const lastUpdated = "27 August 2026";

const officeClause = site.address ? ` Registered office: ${site.address}.` : "";
const officeSuffix = site.address ? `, ${site.address}` : "";
const numberClause = site.companyNumber ? ` Company number: ${site.companyNumber}.` : "";

export const legalMeta = {
  lastUpdated,
  controller: site.fullLegalName,
  seat: site.address,
  contactEmail: site.email || "Not published yet — use the Contact form",
} as const;

export const privacyPolicy = {
  title: "Privacy Policy",
  sections: [
    {
      heading: "1. Controller",
      body: `${site.fullLegalName} (“Platinum”, “we”).${numberClause}${officeClause} Contact for privacy requests: ${legalMeta.contactEmail}.`,
    },
    {
      heading: "2. Data we collect",
      body: "When you use the Contact form or email us, we may process: name, work email, company name, and the content of your inquiry. We do not ask you to send secrets, personal data of third parties, or production datasets through the form.",
    },
    {
      heading: "3. Purpose and legal basis",
      body: "We process inquiry data to respond to your request and, where relevant, to prepare a commercial discussion (steps prior to a contract and/or legitimate interests — GDPR Art. 6(1)(b) and 6(1)(f) as applicable). Marketing emails are not sent unless you separately agree.",
    },
    {
      heading: "4. Retention",
      body: "Inquiry records are kept only as long as needed to handle the request and related follow-up, then deleted or anonymised unless a longer retention is required by law or an active contract.",
    },
    {
      heading: "5. Recipients",
      body: "Data may be processed by email or collaboration tools used by Platinum. We do not sell personal data. If a supplier must receive contact details to fulfil a request, we will do so only as needed for that purpose.",
    },
    {
      heading: "6. International transfers",
      body: "If a tool processes data outside the EU/EEA, we will rely on an appropriate transfer mechanism where required. Details will be updated here when tooling is finalised.",
    },
    {
      heading: "7. Your rights",
      body: "You may request access, rectification, erasure, restriction, objection, or portability where applicable, and you may lodge a complaint with the Data Protection Commission (Ireland).",
    },
    {
      heading: "8. Updates",
      body: `This policy was last updated on ${lastUpdated}. Material changes will be reflected on this page.`,
    },
  ],
} as const;

export const cookiePolicy = {
  title: "Cookie Policy",
  sections: [
    {
      heading: "1. What we use today",
      body: "The public marketing site is designed to work without non-essential tracking cookies. Essential cookies or local storage may be used by the hosting platform for security and basic operation.",
    },
    {
      heading: "2. Analytics / advertising",
      body: "No analytics or advertising cookies are enabled by Platinum on this site at the time of the last update. If that changes, this page will list categories, purposes, and a consent mechanism where required.",
    },
    {
      heading: "3. Contact",
      body: `Questions: ${legalMeta.contactEmail}. Controller: ${site.fullLegalName}${officeSuffix}.`,
    },
  ],
} as const;

export const termsOfService = {
  title: "Website Terms",
  sections: [
    {
      heading: "1. Nature of this website",
      body: "This website provides company information and a way to inquire. Content is informational. Published pages do not themselves create a reservation, SLA, or binding price.",
    },
    {
      heading: "2. Services",
      body: "Commercial services are provided only under a separate written agreement (quote, order, or statement of work). Service scope and exclusions are described on the Services page and refined in that agreement.",
    },
    {
      heading: "3. Company information",
      body: `${site.fullLegalName} is a private company limited by shares, registered in Ireland.${numberClause}${officeClause}`,
    },
    {
      heading: "4. No reliance on marketing copy",
      body: "Descriptions of capability are planning language. They are not warranties. Performance, availability, and commercial terms are defined only in a signed engagement.",
    },
    {
      heading: "5. Governing law",
      body: "These website terms are governed by the laws of Ireland. The Irish courts have exclusive jurisdiction, without prejudice to mandatory consumer protections where they apply.",
    },
    {
      heading: "6. Contact",
      body: `Inquiries: use the Contact form or ${legalMeta.contactEmail}.`,
    },
  ],
} as const;
