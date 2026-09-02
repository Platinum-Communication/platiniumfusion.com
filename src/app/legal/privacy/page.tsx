import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { legalMeta, privacyPolicy } from "@/content/legal";

export const metadata: Metadata = {
  title: privacyPolicy.title,
  description: "Privacy policy for Platinum Communication Technologies Limited.",
};

export default function PrivacyPage() {
  return (
    <LegalDocument
      title={privacyPolicy.title}
      lastUpdated={legalMeta.lastUpdated}
      sections={privacyPolicy.sections}
    />
  );
}
