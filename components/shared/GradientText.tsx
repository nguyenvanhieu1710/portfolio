"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function GradientText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <motion.span
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: "100% 50%" }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      className={cn(
        "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-[length:200%_auto] text-transparent bg-clip-text font-extrabold",
        className
      )}
    >
      {text}
    </motion.span>
  );
}
