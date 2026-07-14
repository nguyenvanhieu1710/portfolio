"use client";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/language/LanguageContext";
import { skills } from "@/data/skills";

export default function SkillTags() {
  const { t } = useLang();

  return (
    <section className="max-w-4xl mx-auto px-6 py-10 text-center">
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold mb-6"
      >
        {t("about", "skills_title")}
      </motion.h3>

      <motion.div
        className="flex flex-wrap justify-center gap-3"
        initial="hidden"
        whileInView="show"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.05 } },
        }}
      >
        {skills.map((skill, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { y: 16, opacity: 0 },
              show: { y: 0, opacity: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            className="px-4 py-2 bg-indigo-500/10 dark:bg-indigo-400/10 border border-indigo-500/20 rounded-full text-sm font-medium text-indigo-600 dark:text-indigo-300 backdrop-blur-sm cursor-default"
          >
            {skill.name}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
