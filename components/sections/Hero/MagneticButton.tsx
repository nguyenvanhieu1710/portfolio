"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  strength?: number; // độ mạnh hiệu ứng hút, default 0.4
};

export default function MagneticButton({
  children,
  onClick,
  className = "",
  strength = 0.4,
}: Props) {
  const ref = useRef<HTMLButtonElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 200, damping: 15, mass: 0.5 });
  const y = useSpring(rawY, { stiffness: 200, damping: 15, mass: 0.5 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    rawX.set((e.clientX - centerX) * strength);
    rawY.set((e.clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.button>
  );
}
