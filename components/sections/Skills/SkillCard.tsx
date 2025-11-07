"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SkillCard({
  name,
  icon: Icon,
  category,
}: {
  name: string;
  icon: any;
  category: string;
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        rotateX: 5,
        rotateY: -5,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 shadow-sm hover:shadow-indigo-500/20 cursor-default select-none overflow-hidden group"
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-all duration-300" />

      <div className="flex flex-col items-center text-center space-y-3">
        <div className="text-indigo-500 dark:text-indigo-400">
          <Icon size={32} />
        </div>
        <h4 className="font-semibold text-gray-800 dark:text-gray-100">
          {name}
        </h4>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {category}
        </p>
      </div>
    </motion.div>
  );
}
