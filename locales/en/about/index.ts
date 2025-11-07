const about = {
  title: "About Me",
  intro: "I'm ",
  description: "Fullstack Developer with a passion for ",
  highlight1: "UX/UI Design",
  highlight2: "system performance",
  highlight3: "AI integration",
  description2: ". I love turning ideas into real products and am always looking for ways to enhance user experience through technology.",
  skills_title: "My Skills",
  skills_description: "Technologies I work with",
  experience_title: "Work Experience",
  experience_present: "Present",
  experienceItems: [
    {
      year: "2021 - {{present}}",
      title: "Fullstack Developer",
      place: "Freelance / Remote",
      type: "work" as const,
      description: "Developing web applications using Next.js, NestJS, and PostgreSQL. Focused on UI/UX optimization and system performance."
    },
    {
      year: "2018 - 2021",
      title: "IT Student",
      place: "University of Information Technology",
      type: "education" as const,
      description: "Studied object-oriented programming, algorithms, data structures, and fullstack web development."
    }
  ]
} as const;

export default about;
