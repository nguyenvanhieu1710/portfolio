"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-lg z-50"
        >
          <div className="flex flex-col items-center py-4 space-y-4">
            {["About", "Skills", "Projects", "Achievements", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-lg font-medium text-gray-800 dark:text-gray-100 hover:text-indigo-500 transition"
                  onClick={onClose}
                >
                  {item}
                </Link>
              )
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
