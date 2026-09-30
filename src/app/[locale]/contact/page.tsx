import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { getDictionary, getLocale, pageMetadata } from "@/i18n/server";

export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("contact", "/contact");
}

export default async function ContactPage() {
  const locale = await getLocale();
  const { contact } = await getDictionary();

  return (
    <section className="container-yamanawa py-36 md:py-48">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <span className="caption-label">{contact.eyebrow}</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 text-[length:var(--fs-display)] leading-[1.02] tracking-[var(--tracking-tight)] text-white">
            {contact.title}
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-2xl text-[length:var(--fs-body)] leading-relaxed text-[var(--text-body)]">
            {contact.body}
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <ContactForm locale={locale} />
        </Reveal>
      </div>
    </section>
  );
}
