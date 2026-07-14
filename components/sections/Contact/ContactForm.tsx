"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";
import { useLang } from "@/contexts/language/LanguageContext";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const { t } = useLang();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-md mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm p-6 space-y-4"
      onSubmit={handleSubmit}
    >
      <div>
        <label className="block text-sm font-medium mb-1">
          {t("contact", "form_name")}
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none transition"
          placeholder={t("contact", "form_name")}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          {t("contact", "form_email")}
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none transition"
          placeholder={t("contact", "form_email")}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          {t("contact", "form_message")}
        </label>
        <textarea
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none resize-none transition"
          placeholder={t("contact", "form_message")}
        />
      </div>

      {/* Status feedback */}
      <AnimatePresence mode="wait">
        {status === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg px-3 py-2"
          >
            <CheckCircle size={16} />
            {t("contact", "form_success")}
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            key="error"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg px-3 py-2"
          >
            <XCircle size={16} />
            {t("contact", "form_error")}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="submit"
        disabled={status === "loading"}
        whileHover={{ scale: status === "loading" ? 1 : 1.05 }}
        whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-lg font-semibold shadow-md flex items-center justify-center gap-2 transition-colors cursor-pointer"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            {t("contact", "form_sending")}
          </>
        ) : (
          <>{t("contact", "form_submit")} ✉️</>
        )}
      </motion.button>
    </motion.form>
  );
}
