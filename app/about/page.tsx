import type { Metadata } from "next";
import AboutIntro from "@/components/sections/About/AboutIntro";
import SkillTags from "@/components/sections/Skills/SkillTags";
import ExperienceTimeline from "@/components/sections/About/ExperienceTimeline";
import PersonalInfo from "@/components/sections/About/PersonalInfo";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Nguyen Van Hieu — a passionate Full Stack Developer with experience in UX/UI design, system performance, and AI integration.",
  keywords: [
    "about Nguyen Van Hieu",
    "fullstack developer Vietnam",
    "web developer bio",
    "experience",
    "education",
  ],
  openGraph: {
    title: "About | Nguyen Van Hieu",
    description:
      "Learn more about Nguyen Van Hieu — a passionate Full Stack Developer with experience in UX/UI design, system performance, and AI integration.",
    url: "/about",
    images: [
      { url: "/avatar.jpg", width: 400, height: 400, alt: "Nguyen Van Hieu" },
    ],
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-b from-white via-indigo-50/30 to-white dark:from-gray-950 dark:via-gray-900/50 dark:to-gray-950 min-h-screen">
      <AboutIntro />
      <PersonalInfo />
      <SkillTags />
      <ExperienceTimeline />
    </main>
  );
}
