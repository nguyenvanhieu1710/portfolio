import { Code2, Globe, Rocket } from "lucide-react";

export const projects = [
  {
    title: "Personal Portfolio",
    description: "Personal portfolio website showcasing skills and achievements.",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    icon: Globe,
    link: "https://my-portfolio.com",
  },
  {
    title: "Game Server API",
    description: "Game server built with NestJS, managing players & matches.",
    tech: ["NestJS", "PostgreSQL", "Redis"],
    icon: Rocket,
    link: "https://github.com/hieunguyen/game-server",
  },
  {
    title: "Job Crawler System",
    description: "Job listing crawler tool that syncs data to the system.",
    tech: ["Node.js", "Cheerio", "MongoDB"],
    icon: Code2,
    link: "https://github.com/hieunguyen/job-crawler",
  },
];
