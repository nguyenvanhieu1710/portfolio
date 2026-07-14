const about = {
  title: "About Me",
  intro: "I'm ",
  description:
    "Freshly graduated, but not new to shipping code. I build fullstack web apps, care about clean UI, and always look for ways to make things run better.",
  highlight1: "",
  highlight2: "",
  highlight3: "",
  description2: "",
  skills_title: "My Skills",
  skills_description: "Technologies I work with",
  experience_title: "Experience",
  experience_present: "Present",
  info_title: "Personal Info",
  info_phone: "0984 605 263",
  info_dob: "Oct 17, 2004",
  info_email: "hieunv.dev.work@gmail.com",
  info_website: "https://nvhieu.vercel.app",
  info_location: "My Hao, Hung Yen",
  education_title: "Education",
  education_school: "Hung Yen University of Technology and Education",
  education_period: "Sep 2022 – Jul 2026",
  education_major: "Major: Web Technology",
  education_gpa: "GPA: 3.3 / 4.0",
  experienceItems: [
    {
      year: "2022 - {{present}}",
      title: "Web Technology Student",
      place: "Hung Yen University of Technology and Education",
      type: "education" as const,
      description:
        "Studying Web Technology with a focus on fullstack development, UI/UX design, and system architecture. GPA: 3.3 / 4.0.",
    },
    {
      year: "2021 - {{present}}",
      title: "Fullstack Developer",
      place: "Freelance / Remote",
      type: "work" as const,
      description:
        "Developing web applications using Next.js, NestJS, and PostgreSQL. Focused on UI/UX optimization and system performance.",
    },
  ],
} as const;

export default about;
