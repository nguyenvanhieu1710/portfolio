"use client";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import { useLang } from "@/contexts/language/LanguageContext";

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function ProjectGrid() {
  const { t, lang } = useLang();

  const workProjects = projects.filter((p) => p.type === "work");
  const personalProjects = projects.filter((p) => p.type === "personal");

  const viewLabel = t("projects", "view_project");

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 space-y-20">
      {/* Page title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500 mb-4">
          {t("projects", "title")}
        </h2>
      </motion.div>

      {/* ── Work Experience ── */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold mb-1">
            {t("projects", "work_title")}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t("projects", "work_description")}
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 gap-6 items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          {workProjects.map((proj, i) => (
            <motion.div key={i} variants={cardVariants}>
              <ProjectCard {...proj} lang={lang} viewLabel={viewLabel} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Personal Projects ── */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold mb-1">
            {t("projects", "personal_title")}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t("projects", "personal_description")}
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          {personalProjects.map((proj, i) => (
            <motion.div key={i} variants={cardVariants}>
              <ProjectCard {...proj} lang={lang} viewLabel={viewLabel} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
