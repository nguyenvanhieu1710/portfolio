"use client";
import { useEffect, useRef, useState } from "react";

type Props = {
  texts: string[];
  speed?: number; // ms mỗi ký tự khi gõ
  deleteSpeed?: number; // ms mỗi ký tự khi xóa
  pause?: number; // ms dừng sau khi gõ xong
};

type Phase = "typing" | "pausing" | "deleting" | "waiting";

export default function Typewriter({
  texts,
  speed = 60,
  deleteSpeed = 35,
  pause = 1800,
}: Props) {
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");
  const indexRef = useRef(0);

  useEffect(() => {
    const current = texts[indexRef.current % texts.length];

    let delay: number;

    switch (phase) {
      case "typing":
        if (displayed.length < current.length) {
          delay = speed;
          const t = setTimeout(() => {
            setDisplayed(current.slice(0, displayed.length + 1));
          }, delay);
          return () => clearTimeout(t);
        } else {
          // Gõ xong → chuyển sang pause
          const t = setTimeout(() => setPhase("pausing"), 0);
          return () => clearTimeout(t);
        }

      case "pausing": {
        const t = setTimeout(() => setPhase("deleting"), pause);
        return () => clearTimeout(t);
      }

      case "deleting":
        if (displayed.length > 0) {
          delay = deleteSpeed;
          const t = setTimeout(() => {
            setDisplayed((d) => d.slice(0, d.length - 1));
          }, delay);
          return () => clearTimeout(t);
        } else {
          // Xóa xong → chuyển text tiếp
          const t = setTimeout(() => setPhase("waiting"), 0);
          return () => clearTimeout(t);
        }

      case "waiting": {
        indexRef.current = indexRef.current + 1;
        const t = setTimeout(() => setPhase("typing"), 300);
        return () => clearTimeout(t);
      }
    }
  }, [displayed, phase, texts, speed, deleteSpeed, pause]);

  return (
    <span>
      {displayed}
      <span className="inline-block w-0.5 h-[1em] bg-indigo-500 ml-0.5 align-middle animate-pulse" />
    </span>
  );
}
