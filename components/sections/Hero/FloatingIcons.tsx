"use client";
import { motion } from "framer-motion";
import { Code2, Rocket, Sparkles } from "lucide-react";

export default function FloatingIcons() {
  const icons = [
    { icon: Code2, delay: 0 },
    { icon: Rocket, delay: 1 },
    { icon: Sparkles, delay: 2 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {icons.map(({ icon: Icon, delay }, i) => (
        <motion.div
          key={i}
          className="absolute text-indigo-400/40 dark:text-indigo-300/30"
          initial={{ y: 50, opacity: 0 }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            delay,
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            left: `${30 + i * 20}%`,
            top: `${20 + i * 25}%`,
          }}
        >
          <Icon size={40} />
        </motion.div>
      ))}
    </div>
  );
}
