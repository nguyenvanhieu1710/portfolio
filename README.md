# Nguyen Van Hieu - Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This project showcases my professional journey, technical skills, and project portfolio with a focus on performance, accessibility, and user experience.

🌐 **Live**: [nvhieu.vercel.app](https://nvhieu.vercel.app)

## ✨ Key Features

### 🌍 Internationalization

- Bilingual support (English & Vietnamese)
- Client-side language switching
- Persistent language preference

### 🎨 Theming System

- Dark/Light mode with system preference detection
- Smooth theme transitions
- Persistent user preferences

### 🚀 Performance Optimizations

- Static Site Generation (SSG) for fast page loads
- Code splitting and lazy loading
- Optimized images and assets

### 📱 Responsive Design

- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly interactions

### ✨ Interactive Elements

- Smooth page transitions with Framer Motion
- Micro-interactions and scroll-based animations

## 🛠️ Technology Stack

### Core Technologies

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5.0+
- **Styling**: Tailwind CSS 4.0+
- **Animations**: Framer Motion 12.0+
- **Icons**: Lucide React
- **State Management**: React Context API

### Development Tools

- **Package Manager**: npm
- **Linting**: ESLint
- **Version Control**: Git
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm 9.0.0 or later

### Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/nguyenvanhieu1710/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```
.
├── app/                          # App Router
│   ├── about/                   # About page with experience timeline
│   ├── achievements/            # Professional achievements
│   ├── contact/                 # Contact form and social links
│   ├── projects/                # Project showcase
│   ├── skills/                  # Technical skills and expertise
│   ├── robots.ts                # SEO robots config
│   └── sitemap.ts               # SEO sitemap
│
├── components/
│   ├── layout/                  # Layout components (Navbar, etc.)
│   └── sections/                # Page sections
│       ├── About/
│       ├── Contact/
│       ├── Hero/
│       ├── Projects/
│       └── Skills/
│
├── contexts/                    # React contexts
│   └── language/
│       └── LanguageContext.tsx
│
├── data/                        # Static data
│   ├── achievements.ts
│   ├── projects.ts
│   └── skills.ts
│
├── locales/                     # Translation files
│   ├── en/                      # English translations
│   └── vi/                      # Vietnamese translations
│
└── public/                      # Static assets
    └── avatar.jpg
```

## 🌍 Internationalization

Custom i18n solution with full TypeScript support:

1. **Translation Files**: Organized by language (`en`, `vi`) and namespace
2. **Type Safety**: Strongly typed translation keys via `locales/types.ts`
3. **Language Context**: Client-side switching with `localStorage` persistence

To add a new language:

1. Create a new directory in `locales/` (e.g., `fr/`)
2. Add translation files following the existing structure
3. Register the new locale in `LanguageContext.tsx`

## 🎨 Theming System

- **Theme Provider**: `next-themes` for theme management
- **Color Modes**: Light, dark, and system preference
- **Smooth Transitions**: Theme switching with animations

## 📬 Contact

- **Email**: hieunv.dev.work@gmail.com
- **LinkedIn**: [Nguyen Van Hieu](https://linkedin.com/in/nguyen-van-hieu-5bb863313)
- **GitHub**: [nguyenvanhieu1710](https://github.com/nguyenvanhieu1710)
- **Portfolio**: [nvhieu.vercel.app](https://nvhieu.vercel.app)

---

Built with ❤️ by [Nguyen Van Hieu](https://nvhieu.vercel.app)
