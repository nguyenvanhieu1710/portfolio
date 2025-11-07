"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const socials = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/nguyenvanhieu1710",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/nguyen-van-hieu-5bb863313",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:contact.hieunguyen.work@gmail.com",
  },
];

export default function SocialLinks() {
  return (
    <motion.div
      className="flex justify-center gap-6 mt-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {socials.map((s, i) => (
        <Link
          key={i}
          href={s.url}
          target="_blank"
          className="relative p-3 rounded-full border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-400 transition group"
        >
          <motion.div
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <s.icon className="w-5 h-5 text-gray-700 dark:text-gray-200 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition" />
          </motion.div>

          <div className="absolute inset-0 rounded-full bg-indigo-500/10 opacity-0 group-hover:opacity-100 blur-md transition" />
        </Link>
      ))}
    </motion.div>
  );
}
