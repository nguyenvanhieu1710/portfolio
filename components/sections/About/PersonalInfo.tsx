"use client";
import { motion } from "framer-motion";
import { Phone, Calendar, Mail, Globe, MapPin, GraduationCap } from "lucide-react";
import Link from "next/link";
import { useLang } from "@/contexts/language/LanguageContext";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function PersonalInfo() {
  const { t } = useLang();

  const infoItems = [
    { icon: Phone, label: t("about", "info_phone"), href: `tel:${t("about", "info_phone").replace(/\s/g, "")}` },
    { icon: Calendar, label: t("about", "info_dob"), href: null },
    { icon: Mail, label: t("about", "info_email"), href: `mailto:${t("about", "info_email")}` },
    { icon: Globe, label: t("about", "info_website"), href: t("about", "info_website") },
    { icon: MapPin, label: t("about", "info_location"), href: null },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 pb-16">
      <motion.div
        className="grid md:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Personal Info Card */}
        <motion.div
          variants={itemVariants}
          className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm"
        >
          <h3 className="text-lg font-semibold mb-5 flex items-center gap-2 text-indigo-500">
            <span className="w-1 h-5 bg-indigo-500 rounded-full inline-block" />
            {t("about", "info_title")}
          </h3>
          <ul className="space-y-3">
            {infoItems.map(({ icon: Icon, label, href }) => (
              <li key={label} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center">
                  <Icon size={15} className="text-indigo-500" />
                </span>
                {href ? (
                  <Link
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="hover:text-indigo-500 transition truncate cursor-pointer"
                  >
                    {label}
                  </Link>
                ) : (
                  <span>{label}</span>
                )}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Education Card */}
        <motion.div
          variants={itemVariants}
          className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm"
        >
          <h3 className="text-lg font-semibold mb-5 flex items-center gap-2 text-indigo-500">
            <span className="w-1 h-5 bg-indigo-500 rounded-full inline-block" />
            {t("about", "education_title")}
          </h3>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center">
              <GraduationCap size={20} className="text-indigo-500" />
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100 leading-snug">
                {t("about", "education_school")}
              </p>
              <p className="text-sm text-indigo-400 mt-1">
                {t("about", "education_period")}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {t("about", "education_major")}
              </p>
              <span className="inline-block mt-2 text-xs font-semibold bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 px-2.5 py-1 rounded-full">
                {t("about", "education_gpa")}
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
