"use client";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import { useLang } from "@/contexts/language/LanguageContext";

export default function ProjectGrid() {
  const { t } = useLang();
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-12"
      >
        {t("projects", "title")}
      </motion.h2>

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            <ProjectCard {...proj} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
