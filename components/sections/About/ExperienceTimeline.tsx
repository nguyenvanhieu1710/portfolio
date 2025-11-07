"use client";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { useLang } from "@/contexts/language/LanguageContext";
import { TranslationKey } from "@/locales/types";

const icons = {
  work: Briefcase,
  education: GraduationCap,
};

type ExperienceItem = {
  year: string;
  title: string;
  place: string;
  description: string;
  type?: 'work' | 'education';
};

export default function ExperienceTimeline() {
  const { t } = useLang();
  
  // Get experience items from translations
  const experienceItems = t("about", "experienceItems") as unknown as ExperienceItem[];
  
  // Replace {{present}} with the translated "Present" text
  const presentText = t("about", "experience.present");
  const formattedExperienceItems = experienceItems.map(item => ({
    ...item,
    year: item.year.replace('{{present}}', presentText),
    icon: item.type ? icons[item.type] : Briefcase,
  }));
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold mb-8 text-center"
      >
        {t("about", "experience_title")}
      </motion.h3>

      <div className="relative border-l border-indigo-400/30 dark:border-indigo-500/20 pl-6 space-y-12">
        {formattedExperienceItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[29px] flex items-center justify-center w-6 h-6 rounded-full bg-indigo-500 text-white shadow-md">
                <Icon size={14} />
              </div>
              <h4 className="text-lg font-semibold">{item.title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.place} • {item.year}
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
