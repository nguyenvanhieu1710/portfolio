import type { Metadata } from "next";
import AchievementsList from "./AchievementsList";
import ThemeToggle from "@/components/shared/ThemeToggle";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "Highlights from Nguyen Van Hieu's career — AWS certifications, hackathon awards, completed courses, and personal milestones.",
  keywords: [
    "achievements",
    "AWS certified",
    "hackathon",
    "certificates",
    "career milestones",
    "Nguyen Van Hieu",
  ],
  openGraph: {
    title: "Achievements | Nguyen Van Hieu",
    description:
      "Highlights from Nguyen Van Hieu's career — AWS certifications, hackathon awards, completed courses, and personal milestones.",
    url: "/achievements",
    images: [
      { url: "/avatar.jpg", width: 400, height: 400, alt: "Nguyen Van Hieu" },
    ],
  },
  alternates: {
    canonical: "/achievements",
  },
};

export default function AchievementsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <header className="flex justify-end p-6">
        <ThemeToggle />
      </header>
      <AchievementsList />
    </main>
  );
}
