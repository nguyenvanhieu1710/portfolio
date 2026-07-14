"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { achievements } from "@/data/achievements";
import * as LucideIcons from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
import { useLang } from "@/contexts/language/LanguageContext";

const categoryKeys = [
  "all",
  "honor",
  "award",
  "certificate",
  "career",
  "personal",
];

const categoryColors: Record<string, string> = {
  honor:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  award:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  certificate:
    "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  career:
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  personal: "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300",
};

export default function AchievementsList() {
  const { t } = useLang();
  const [selected, setSelected] = useState("all");
  const timelineRef = useRef<HTMLDivElement>(null);

  // Track scroll progress chỉ trong timeline container
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 80%"],
  });

  // Spring cho mượt hơn
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  const filtered =
    selected === "all"
      ? achievements
      : achievements.filter((a) => a.category.toLowerCase() === selected);

  return (
    <div className="mx-auto max-w-3xl py-16 px-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-10 text-center"
      >
        {t("achievements", "title")}
      </motion.h1>

      {/* Filter */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categoryKeys.map((key) => (
          <button
            key={key}
            onClick={() => setSelected(key)}
            className={`px-3 py-1 rounded-full border transition-all cursor-pointer ${
              selected === key
                ? "bg-indigo-600 text-white border-indigo-600"
                : "border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            {t("achievements", `categories_${key}`)}
          </button>
        ))}
      </motion.div>

      {/* Timeline */}
      <div ref={timelineRef} className="relative">
        {/* Track line (background) */}
        <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-gray-800 rounded-full" />

        {/* Animated fill line */}
        <motion.div
          className="absolute left-[11px] top-0 w-[2px] bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full origin-top"
          style={{ height: lineHeight }}
        />

        <div className="space-y-8">
          {filtered.map((item, idx) => {
            const Icon = (LucideIcons as any)[item.icon] || LucideIcons.Award;

            return (
              <motion.div
                key={`${item.title}-${idx}`}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.06,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="relative flex gap-5 pl-8"
              >
                {/* Dot on timeline */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: idx * 0.06 + 0.1,
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="absolute left-0 top-4 flex items-center justify-center w-6 h-6 rounded-full bg-indigo-500 ring-4 ring-white dark:ring-gray-950 shadow-md z-10 flex-shrink-0"
                >
                  <Icon className="w-3 h-3 text-white" />
                </motion.div>

                {/* Card */}
                <div className="flex-1 p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm hover:shadow-indigo-500/10 hover:border-indigo-200 dark:hover:border-indigo-800 transition-all">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-base font-semibold leading-snug text-gray-900 dark:text-gray-100">
                      {item.title}
                    </h3>
                    <span className="text-xs text-gray-400 whitespace-nowrap mt-0.5">
                      {item.year}
                    </span>
                  </div>
                  <Separator className="my-2 bg-gray-100 dark:bg-gray-800 h-px" />
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <span
                    className={`inline-block text-xs px-2.5 py-1 rounded-full mt-3 font-medium ${
                      categoryColors[item.category.toLowerCase()] ??
                      "bg-indigo-100 text-indigo-700"
                    }`}
                  >
                    {item.category}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
