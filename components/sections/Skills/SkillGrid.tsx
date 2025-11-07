"use client";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/language/LanguageContext";
import SkillCard from "./SkillCard";
import { skills } from "@/data/skills";

export default function SkillGrid() {
  const { t } = useLang();

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500 mb-4"
        >
          {t("skills", "title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-600 dark:text-gray-300"
        >
          {t("skills", "description")}
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.05 },
          },
        }}
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              },
            }}
            transition={{ duration: 0.3, delay: i * 0.03 }}
          >
            <SkillCard {...skill} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
