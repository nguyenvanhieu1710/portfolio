"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/language/LanguageContext";
import SkillCard from "./SkillCard";
import { skills, softSkills } from "@/data/skills";

const CATEGORY_ORDER = ["Frontend", "Backend", "Database", "Tools"];

export default function SkillGrid() {
  const { t, lang } = useLang();
  const [activeCategory, setActiveCategory] = useState("All");

  const categoryLabels: Record<string, string> = {
    All: lang === "vi" ? "Tất cả" : "All",
    Frontend: "Frontend",
    Backend: "Backend",
    Database: t("skills", "categories")
      ? (t("skills", "categories") as any)["database"]
      : "Database",
    Tools: t("skills", "categories")
      ? (t("skills", "categories") as any)["tools"]
      : "Tools",
  };

  const filtered =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 space-y-20">
      {/* Header */}
      <div className="text-center">
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

      {/* ── Section 1: Technologies ── */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold mb-1">
            {t("skills", "technologies_title")}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t("skills", "technologies_description")}
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          className="flex flex-wrap gap-2 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {["All", ...CATEGORY_ORDER].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-indigo-400 dark:hover:border-indigo-500"
              }`}
            >
              {categoryLabels[cat] ?? cat}
            </button>
          ))}
        </motion.div>

        <motion.div
          key={activeCategory}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.04 } },
          }}
        >
          {filtered.map((skill, i) => (
            <motion.div
              key={`${skill.name}-${i}`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                },
              }}
            >
              <SkillCard {...skill} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Section 2: Professional Skills ── */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold mb-1">
            {t("skills", "soft_skills_title")}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t("skills", "soft_skills_description")}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {softSkills.map((skill, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, x: -16 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
              }}
              className="flex items-center gap-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl px-5 py-4 shadow-sm hover:shadow-indigo-500/10 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all group"
            >
              <span className="text-2xl">{skill.icon}</span>
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-100 text-sm">
                  {lang === "vi" ? skill.nameVi : skill.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
