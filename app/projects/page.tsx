import type { Metadata } from "next";
import ProjectGrid from "@/components/sections/Projects/ProjectGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse the portfolio projects of Nguyen Van Hieu — including web apps, APIs, and tools built with Next.js, NestJS, Node.js, and more.",
  keywords: [
    "projects",
    "portfolio",
    "web applications",
    "Next.js projects",
    "NestJS",
    "Nguyen Van Hieu",
    "fullstack projects",
  ],
  openGraph: {
    title: "Projects | Nguyen Van Hieu",
    description:
      "Browse the portfolio projects of Nguyen Van Hieu — including web apps, APIs, and tools built with Next.js, NestJS, Node.js, and more.",
    url: "/projects",
    images: [
      { url: "/avatar.jpg", width: 400, height: 400, alt: "Nguyen Van Hieu" },
    ],
  },
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <main className="bg-gradient-to-b from-white via-indigo-50/20 to-white dark:from-gray-950 dark:via-gray-900/50 dark:to-gray-950 min-h-screen">
      <ProjectGrid />
    </main>
  );
}
