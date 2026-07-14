// Common translations that are used across the application
export type CommonTranslations = {
  logo: string;
  about: string;
  skills: string;
  projects: string;
  achievements: string;
  contact: string;
};

// Authentication related translations
export type AuthTranslations = {
  login: string;
  register: string;
  logout: string;
  email: string;
  password: string;
  confirmPassword: string;
  forgotPassword: string;
  dontHaveAccount: string;
  alreadyHaveAccount: string;
  signInWith: string;
  or: string;
};

// Contact page translations
export type ContactTranslations = {
  title: string;
  subtitle: string;
  form_name: string;
  form_email: string;
  form_message: string;
  form_submit: string;
  form_sending: string;
  form_success: string;
  form_error: string;
  socialMedia: string;
};

// Experience item type
export type ExperienceItem = Readonly<{
  year: string;
  title: string;
  place: string;
  type: "work" | "education";
  description: string;
}>;

// About page translations
export type AboutTranslations = {
  title: string;
  intro: string;
  description: string;
  highlight1: string;
  highlight2: string;
  highlight3: string;
  description2: string;
  skills_title: string;
  skills_description: string;
  experience_title: string;
  experience_present: string;
  experienceItems: readonly ExperienceItem[];
  info_title: string;
  info_phone: string;
  info_dob: string;
  info_email: string;
  info_website: string;
  info_location: string;
  education_title: string;
  education_school: string;
  education_period: string;
  education_major: string;
  education_gpa: string;
};

// Hero section translations
export type HeroTranslations = {
  greeting: string;
  name: string;
  title: string;
  description: string;
  cta: string;
};

// Skills section translations
export type SkillsTranslations = {
  title: string;
  description: string;
  technologies_title: string;
  technologies_description: string;
  soft_skills_title: string;
  soft_skills_description: string;
  categories: {
    frontend: string;
    backend: string;
    database: string;
    tools: string;
  };
  [key: string]: any;
};

// Projects section translations
export type ProjectsTranslations = {
  title: string;
  work_title: string;
  work_description: string;
  personal_title: string;
  personal_description: string;
  view_project: string;
  [key: string]: any;
};

// Achievements section translations
export type AchievementsTranslations = {
  title: string;
  categories_all: string;
  categories_career: string;
  categories_award: string;
  categories_certificate: string;
  categories_personal: string;
  [key: string]: any; // For any other properties
};

// Main translation type that combines all namespaces
export interface TranslationKey {
  common: CommonTranslations;
  contact: ContactTranslations;
  about: AboutTranslations;
  hero: HeroTranslations;
  skills: SkillsTranslations;
  projects: ProjectsTranslations;
  achievements: AchievementsTranslations;
  [key: string]: any; // For any other namespaces
}

export type Lang = "en" | "vi";

export type Translations = {
  [key in Lang]: TranslationKey;
};
