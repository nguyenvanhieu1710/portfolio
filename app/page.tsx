import type { Metadata } from "next";
import Hero from "@/components/sections/Hero/Hero";

export const metadata: Metadata = {
  title: "Nguyen Van Hieu — Full Stack Developer",
  description:
    "Hi, I'm Nguyen Van Hieu — a Full Stack Developer who builds amazing web experiences with Next.js, NestJS, TypeScript, and modern technologies.",
  openGraph: {
    title: "Nguyen Van Hieu — Full Stack Developer",
    description:
      "Hi, I'm Nguyen Van Hieu — a Full Stack Developer who builds amazing web experiences with Next.js, NestJS, TypeScript, and modern technologies.",
    url: "/",
    images: [
      { url: "/avatar.jpg", width: 400, height: 400, alt: "Nguyen Van Hieu" },
    ],
  },
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-white via-indigo-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors">
      <Hero />
    </main>
  );
}
