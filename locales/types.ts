// Common translations that are used across the application
export type CommonTranslations = {
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
  form: {
    name: string;
    email: string;
    message: string;
    submit: string;
    success: string;
    error: string;
  };
  socialMedia: string;
};

// Experience item type
export type ExperienceItem = Readonly<{
  year: string;
  title: string;
  place: string;
  type: 'work' | 'education';
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
  skills: {
    title: string;
    description: string;
  };
  experience: {
    title: string;
    present: string;
  };
  experienceItems: readonly ExperienceItem[];
};

// Hero section translations
export type HeroTranslations = {
  greeting: string;
  title: string;
  description: string;
  cta: string;
};

// Skills section translations
export type SkillsTranslations = {
  title: string;
  description: string;
  categories: {
    frontend: string;
    backend: string;
    database: string;
    devops: string;
    concepts: string;
  };
  [key: string]: any; // For any other properties
};

// Projects section translations
export type ProjectsTranslations = {
  title: string;
  [key: string]: any; // For any other properties
};

// Achievements section translations
export type AchievementsTranslations = {
  title: string;
  categories: {
    all: string;
    career: string;
    award: string;
    certificate: string;
    personal: string;
    [key: string]: string; // For any other categories
  };
  [key: string]: any; // For any other properties
};

// Main translation type that combines all namespaces
export interface TranslationKey {
  common: CommonTranslations;
  auth: AuthTranslations;
  contact: ContactTranslations;
  about: AboutTranslations;
  hero: HeroTranslations;
  skills: SkillsTranslations;
  projects: ProjectsTranslations;
  achievements: AchievementsTranslations;
  [key: string]: any; // For any other namespaces
}

export type Lang = 'en' | 'vi';

export type Translations = {
  [key in Lang]: TranslationKey;
};
