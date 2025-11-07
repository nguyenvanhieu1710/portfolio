"use client";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/language/LanguageContext";

export default function ContactForm() {
  const { t } = useLang();
  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-md mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm p-6 space-y-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <div>
        <label className="block text-sm font-medium mb-1">
          {t("contact", "form_name")}
        </label>
        <input
          type="text"
          className="w-full rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
          placeholder={t("contact", "form_name")}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          {t("contact", "form_email")}
        </label>
        <input
          type="email"
          className="w-full rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
          placeholder={t("contact", "form_email")}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          {t("contact", "form_message")}
        </label>
        <textarea
          rows={4}
          className="w-full rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
          placeholder={t("contact", "form_message")}
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold shadow-md"
      >
        {t("contact", "form_submit")} ✉️
      </motion.button>
    </motion.form>
  );
}
