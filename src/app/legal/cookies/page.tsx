import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { cookiePolicy, legalMeta } from "@/content/legal";

export const metadata: Metadata = {
  title: cookiePolicy.title,
  description: "Cookie policy for Platinum Communication Technologies Limited.",
};

export default function CookiesPage() {
  return (
    <LegalDocument
      title={cookiePolicy.title}
      lastUpdated={legalMeta.lastUpdated}
      sections={cookiePolicy.sections}
    />
  );
}
