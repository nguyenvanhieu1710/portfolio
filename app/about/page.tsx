import AboutIntro from "@/components/sections/About/AboutIntro";
import SkillTags from "@/components/sections/Skills/SkillTags";
import ExperienceTimeline from "@/components/sections/About/ExperienceTimeline";

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-b from-white via-indigo-50/30 to-white dark:from-gray-950 dark:via-gray-900/50 dark:to-gray-950 min-h-screen">
      <AboutIntro />
      <SkillTags />
      <ExperienceTimeline />
    </main>
  );
}
