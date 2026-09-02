import { site } from "@/content/site";
import { siteUrl } from "@/lib/site-url";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    legalName: site.legalName,
    url: siteUrl,
    description: site.description,
    areaServed: site.region,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: "Dublin",
      addressCountry: "IE",
    },
    identifier: site.companyNumber
      ? {
          "@type": "PropertyValue",
          name: "Company Number",
          value: site.companyNumber,
        }
      : undefined,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
