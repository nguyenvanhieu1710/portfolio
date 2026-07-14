"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Building2, Calendar } from "lucide-react";
import type { Project } from "@/data/projects";

type Props = Project & { lang: string; viewLabel: string };

export default function ProjectCard({
  title,
  titleVi,
  description,
  descriptionVi,
  bullets,
  bulletsVi,
  tech,
  icon: Icon,
  link,
  company,
  period,
  role,
  roleVi,
  lang,
  viewLabel,
}: Props) {
  const displayTitle = lang === "vi" ? titleVi : title;
  const displayDesc = lang === "vi" ? descriptionVi : description;
  const displayBullets = lang === "vi" ? bulletsVi : bullets;
  const displayRole = lang === "vi" ? roleVi : role;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-indigo-500/20 hover:border-indigo-200 dark:hover:border-indigo-800 overflow-hidden group flex flex-col gap-4 transition-all h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-all duration-300" />

      {/* Title + icon */}
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5 w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-500">
          <Icon size={20} />
        </div>
        <div>
          <h3 className="font-semibold text-base leading-snug text-gray-900 dark:text-gray-100">
            {displayTitle}
          </h3>
          {displayRole && (
            <p className="text-xs text-indigo-500 dark:text-indigo-400 mt-0.5 font-medium">
              {displayRole}
            </p>
          )}
        </div>
      </div>

      {/* Company + period */}
      {(company || period) && (
        <div className="flex flex-wrap gap-3 text-xs text-gray-500 dark:text-gray-400">
          {company && (
            <span className="flex items-center gap-1">
              <Building2 size={12} />
              {company}
            </span>
          )}
          {period && (
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {period}
            </span>
          )}
        </div>
      )}

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
        {displayDesc}
      </p>

      {/* Bullets */}
      {displayBullets.length > 0 && (
        <ul className="space-y-1.5">
          {displayBullets.map((b, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
            >
              <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400" />
              {b}
            </li>
          ))}
        </ul>
      )}

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-0.5 text-xs rounded-full bg-indigo-50 dark:bg-gray-800 text-indigo-600 dark:text-indigo-300 border border-indigo-100 dark:border-gray-700"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Link */}
      {link && (
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition font-medium cursor-pointer w-fit"
        >
          {viewLabel}
        </Link>
      )}
    </motion.div>
  );
}
