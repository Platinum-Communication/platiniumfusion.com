import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { legalMeta, termsOfService } from "@/content/legal";

export const metadata: Metadata = {
  title: termsOfService.title,
  description: "Website terms for Platinum Communication Technologies Limited.",
};

export default function TermsPage() {
  return (
    <LegalDocument
      title={termsOfService.title}
      lastUpdated={legalMeta.lastUpdated}
      sections={termsOfService.sections}
    />
  );
}
