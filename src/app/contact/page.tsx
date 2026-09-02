import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageIntro } from "@/components/PageIntro";
import { contactPage } from "@/content/site";

export const metadata: Metadata = {
  title: contactPage.title,
  description: contactPage.support,
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow={contactPage.title}
        title={contactPage.headline}
        support={contactPage.support}
      />
      <section id="inquiry" className="px-5 py-16 md:px-8 md:py-20">
        <ContactForm />
      </section>
    </>
  );
}
