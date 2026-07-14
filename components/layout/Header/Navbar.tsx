"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ThemeToggle from "../../shared/ThemeToggle";
import MobileMenu from "./MobileMenu";
import { Menu, X, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLang } from "@/contexts/language/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang, t } = useLang();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { key: "about", label: t("common", "about") },
    { key: "skills", label: t("common", "skills") },
    { key: "projects", label: t("common", "projects") },
    { key: "achievements", label: t("common", "achievements") },
    { key: "contact", label: t("common", "contact") },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all",
        scrolled
          ? "bg-white/70 dark:bg-gray-900/80 backdrop-blur-md shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-indigo-600 dark:text-indigo-400"
        >
          {t("common", "logo")}
          <span className="text-gray-800 dark:text-gray-200">.dev</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map(({ key, label }) => (
            <Link
              key={key}
              href={`/${key}`}
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-3">
          {/* Theme toggle */}
          <ThemeToggle />

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-2 px-2 py-1 rounded-lg text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition cursor-pointer"
            title={
              lang === "en" ? "Switch to Vietnamese" : "Chuyển sang tiếng Anh"
            }
          >
            <Globe size={18} />
            <motion.span
              key={lang}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="text-sm font-medium"
            >
              {lang.toUpperCase()}
            </motion.span>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </motion.nav>
  );
}
