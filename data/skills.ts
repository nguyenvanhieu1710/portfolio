import { Code2, Database, Server, Boxes, Wrench, Globe } from "lucide-react";

export type Skill = {
  name: string;
  category: string;
  icon: any;
};

export type SoftSkill = {
  name: string;
  nameVi: string;
  icon: string;
};

export const skills: Skill[] = [
  // Frontend
  { name: "HTML", category: "Frontend", icon: Globe },
  { name: "CSS", category: "Frontend", icon: Globe },
  { name: "JavaScript", category: "Frontend", icon: Code2 },
  { name: "TypeScript", category: "Frontend", icon: Code2 },
  { name: "React.js", category: "Frontend", icon: Code2 },
  { name: "Next.js", category: "Frontend", icon: Code2 },

  // Backend
  { name: "Node.js", category: "Backend", icon: Server },
  { name: "Express.js", category: "Backend", icon: Server },
  { name: "FastAPI", category: "Backend", icon: Server },
  { name: "ASP.NET", category: "Backend", icon: Server },
  { name: "Python", category: "Backend", icon: Code2 },
  { name: "C#", category: "Backend", icon: Code2 },

  // Database
  { name: "MySQL", category: "Database", icon: Database },
  { name: "PostgreSQL", category: "Database", icon: Database },
  { name: "SQL Server", category: "Database", icon: Database },
  { name: "MongoDB", category: "Database", icon: Database },
  { name: "Firebase", category: "Database", icon: Database },
  { name: "Redis", category: "Database", icon: Database },

  // Tools
  { name: "Git", category: "Tools", icon: Wrench },
  { name: "GitHub", category: "Tools", icon: Wrench },
  { name: "Docker", category: "Tools", icon: Boxes },
  { name: "Postman", category: "Tools", icon: Wrench },
  { name: "VSCode", category: "Tools", icon: Wrench },
  { name: "Visual Studio", category: "Tools", icon: Wrench },
  { name: "Figma", category: "Tools", icon: Wrench },
];

export const softSkills: SoftSkill[] = [
  { name: "Problem Solving", nameVi: "Giải quyết vấn đề", icon: "🧩" },
  { name: "RESTful API Design", nameVi: "Thiết kế RESTful API", icon: "🔌" },
  { name: "Responsive Design", nameVi: "Thiết kế Responsive", icon: "📱" },
  { name: "Clean Code & SOLID", nameVi: "Clean Code & SOLID", icon: "✨" },
  { name: "Agile / Scrum", nameVi: "Agile / Scrum", icon: "🔄" },
  { name: "Team Collaboration", nameVi: "Làm việc nhóm", icon: "🤝" },
  { name: "Self-learning", nameVi: "Tự học", icon: "📚" },
];
