"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLang } from "@/contexts/language/LanguageContext";

export default function AboutIntro() {
  const { t } = useLang();
  return (
    <section className="flex flex-col items-center text-center md:text-left md:flex-row gap-10 max-w-5xl mx-auto px-6 py-20">
      {/* Avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-xl ring-4 ring-indigo-400/30">
          <Image
            src="/avatar.jpg"
            alt="Hieu Nguyen"
            fill
            className="object-cover"
          />
        </div>
        <motion.div
          className="absolute inset-0 rounded-full bg-indigo-500/30 blur-3xl"
          animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 5 }}
        />
      </motion.div>

      {/* Info */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-4xl font-bold mb-4">
          {t("about", "intro")}
          <span className="text-indigo-500">Hieu Nguyen</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl">
          {t("about", "description")}
          <strong>{t("about", "highlight1")}</strong>,
          <strong> {t("about", "highlight2")}</strong> và 
          <strong> {t("about", "highlight3")}</strong>.
          {t("about", "description2")}
        </p>
      </motion.div>
    </section>
  );
}
