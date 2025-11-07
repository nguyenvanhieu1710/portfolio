"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectCard({ title, description, tech, icon: Icon, link }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-indigo-500/20 overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-all duration-300" />

      <div className="flex items-center space-x-3 mb-4">
        <div className="text-indigo-500 dark:text-indigo-400">
          <Icon size={26} />
        </div>
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-3">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t: string) => (
          <span
            key={t}
            className="px-2 py-0.5 text-xs rounded-full bg-indigo-50 dark:bg-gray-800 text-indigo-600 dark:text-indigo-300"
          >
            {t}
          </span>
        ))}
      </div>

      {link && (
        <Link
          href={link}
          target="_blank"
          className="text-sm text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
        >
          View Project →
        </Link>
      )}
    </motion.div>
  );
}
