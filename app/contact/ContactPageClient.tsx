"use client";

import { useLang } from "@/contexts/language/LanguageContext";
import ContactForm from "@/components/sections/Contact/ContactForm";
import SocialLinks from "@/components/shared/SocialLinks";

export default function ContactPageClient() {
  const { t } = useLang();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-indigo-50/20 to-white dark:from-gray-950 dark:via-gray-900/50 dark:to-gray-950 py-20">
      <section className="text-center mb-12 px-6">
        <h2 className="text-3xl font-bold mb-3">
          {t("contact", "title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          {t("contact", "subtitle")}
        </p>
      </section>

      <ContactForm />
      <SocialLinks />
    </main>
  );
}
