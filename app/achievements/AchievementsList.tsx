"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { achievements } from "@/data/achievements";
import * as LucideIcons from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
import { useLang } from "@/contexts/language/LanguageContext";

const categoryKeys = ["all", "career", "award", "certificate", "personal"];

export default function AchievementsList() {
  const { t } = useLang();
  const [selected, setSelected] = useState("all");

  // Hiệu ứng line khi scroll
  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const filtered =
    selected === "all"
      ? achievements
      : achievements.filter((a) => a.category.toLowerCase() === selected);

  return (
    <div className="mx-auto max-w-3xl py-16 px-6 relative">
      <h1 className="text-3xl font-bold mb-10 text-center">
        {t("achievements", "title")}
      </h1>

      {/* Bộ lọc */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categoryKeys.map((key) => {
          const categoryLabel = t("achievements", `categories_${key}`);
          return (
            <button
              key={key}
              onClick={() => setSelected(key)}
              className={`px-3 py-1 rounded-full border transition-all ${
                selected === key
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {categoryLabel}
            </button>
          );
        })}
      </div>

      {/* Line animation */}
      <motion.div
        className="absolute left-[1.4rem] top-0 w-[2px] bg-blue-500 origin-top"
        style={{ height }}
      />

      {/* Timeline items */}
      <div className="relative border-l border-gray-300 dark:border-gray-700">
        {filtered.map((item, idx) => {
          const Icon =
            (LucideIcons as any)[item.icon] || LucideIcons.Award;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="mb-10 ml-6"
            >
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full ring-8 ring-white dark:ring-gray-950 shadow-sm">
                <Icon className="w-3.5 h-3.5 text-white" />
              </span>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <span className="text-sm text-gray-500">{item.year}</span>
                </div>
                <Separator className="my-2 bg-gray-300 dark:bg-gray-700" />
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                  {item.description}
                </p>
                <span className="inline-block text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-md mt-2">
                  {item.category}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
