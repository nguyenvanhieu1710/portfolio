import AchievementsList from "./AchievementsList";
import ThemeToggle from "@/components/shared/ThemeToggle";

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
