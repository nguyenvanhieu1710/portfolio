"use client";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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

  const cardRef = useRef<HTMLDivElement>(null);

  // Spotlight position
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, visible: false });

  // Tilt values
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    rawX.set(x - 0.5);
    rawY.set(y - 0.5);
    setSpotlight({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      visible: true,
    });
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
    setSpotlight((s) => ({ ...s, visible: false }));
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 800,
      }}
      className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-indigo-500/20 hover:border-indigo-200 dark:hover:border-indigo-800 overflow-hidden group flex flex-col gap-4 transition-[border-color,box-shadow] h-full cursor-default"
    >
      {/* Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{
          opacity: spotlight.visible ? 1 : 0,
          background: spotlight.visible
            ? `radial-gradient(300px circle at ${spotlight.x}px ${spotlight.y}px, rgba(99,102,241,0.12), transparent 70%)`
            : "none",
        }}
      />

      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-all duration-300" />

      {/* Title + icon */}
      <div
        className="flex items-start gap-3"
        style={{ transform: "translateZ(20px)" }}
      >
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
