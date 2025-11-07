"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import GradientText from "../../shared/GradientText";
import FloatingIcons from "./FloatingIcons";
import { useLang } from "@/contexts/language/LanguageContext";

export default function Hero() {
  const { t } = useLang();
  const router = useRouter();
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] text-center overflow-hidden">
      <FloatingIcons />

      <motion.div 
        className="relative w-36 h-36 rounded-full mx-auto mb-8 group"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, type: 'spring' }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 p-0.5">
          <div className="relative h-full w-full rounded-full overflow-hidden bg-white dark:bg-gray-900 p-0.5">
            <img
              src="/avatar.jpg"
              alt="Avatar"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>
        <motion.div 
          className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold">
          {t("hero", "greeting")} <GradientText text={t("hero", "name")} />
        </h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {t("hero", "title")} • {t("hero", "description")}
        </p>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="mt-10 px-6 py-3 bg-indigo-600 text-white rounded-full font-medium shadow-md hover:bg-indigo-500 transition"
        onClick={() => router.push('/projects')}
      >
        {t("hero", "cta")}
      </motion.button>
    </section>
  );
}
