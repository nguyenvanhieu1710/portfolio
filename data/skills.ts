import {
  Code2,
  Database,
  Server,
  Palette,
  Cpu,
  Rocket,
  Boxes,
} from "lucide-react";

export const skills = [
  { name: "React", category: "Frontend", icon: Code2 },
  { name: "Next.js", category: "Frontend", icon: Code2 },
  { name: "TypeScript", category: "Frontend", icon: Code2 },
  { name: "Tailwind CSS", category: "Frontend", icon: Palette },
  { name: "Node.js", category: "Backend", icon: Server },
  { name: "NestJS", category: "Backend", icon: Server },
  { name: "PostgreSQL", category: "Database", icon: Database },
  { name: "MongoDB", category: "Database", icon: Database },
  { name: "Docker", category: "DevOps", icon: Boxes },
  { name: "AWS", category: "DevOps", icon: Rocket },
  { name: "System Design", category: "Concepts", icon: Cpu },
  { name: "Clean Architecture", category: "Concepts", icon: Cpu },
];
