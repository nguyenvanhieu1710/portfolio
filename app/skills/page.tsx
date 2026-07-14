import type { Metadata } from "next";
import SkillGrid from "@/components/sections/Skills/SkillGrid";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Explore the technical skills and tools of Nguyen Van Hieu — React, Next.js, TypeScript, Node.js, NestJS, PostgreSQL, Docker, AWS, and more.",
  keywords: [
    "skills",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "Docker",
    "AWS",
    "fullstack developer",
  ],
  openGraph: {
    title: "Skills | Nguyen Van Hieu",
    description:
      "Explore the technical skills and tools of Nguyen Van Hieu — React, Next.js, TypeScript, Node.js, NestJS, PostgreSQL, Docker, AWS, and more.",
    url: "/skills",
    images: [
      { url: "/avatar.jpg", width: 400, height: 400, alt: "Nguyen Van Hieu" },
    ],
  },
  alternates: {
    canonical: "/skills",
  },
};

export default function SkillsPage() {
  return (
    <main className="bg-gradient-to-b from-white via-indigo-50/20 to-white dark:from-gray-950 dark:via-gray-900/50 dark:to-gray-950 min-h-screen">
      <SkillGrid />
    </main>
  );
}
