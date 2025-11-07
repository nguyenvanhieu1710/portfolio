export type Achievement = {
  year: number;
  title: string;
  category: string;
  description: string;
  icon: string;
};

export const achievements: Achievement[] = [
  {
    year: 2025,
    title: "AWS Certified Developer – Associate",
    category: "Certificate",
    description: "Completed AWS certification for backend developers.",
    icon: "cloud",
  },
  {
    year: 2024,
    title: "Top 5 Hackathon VietTech 2024",
    category: "Award",
    description: "Built an AI-powered recruitment platform in 48 hours.",
    icon: "trophy",
  },
  {
    year: 2024,
    title: "Completed Advanced System Design Course",
    category: "Certificate",
    description: "In-depth course on system design and backend architecture.",
    icon: "book-open",
  },
  {
    year: 2023,
    title: "Joined ABC Company – Fullstack Developer",
    category: "Career",
    description: "Contributed to building an internal enterprise CRM system.",
    icon: "briefcase",
  },
  {
    year: 2022,
    title: "Completed First 100 LeetCode Problems",
    category: "Personal",
    description: "Maintained a daily algorithm practice routine for 3 months.",
    icon: "code",
  },
];
