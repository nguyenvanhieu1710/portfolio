# Hieu Nguyen - Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This project showcases my professional journey, technical skills, and project portfolio with a focus on performance, accessibility, and user experience.

## ✨ Key Features

### 🌍 Internationalization
- Bilingual support (English & Vietnamese)
- Client-side language switching
- SEO-friendly URL routing
- RTL layout support ready

### 🎨 Theming System
- Dark/Light mode with system preference detection
- Smooth theme transitions
- Persistent user preferences
- Customizable color schemes

### 🚀 Performance Optimizations
- Static Site Generation (SSG) for fast page loads
- Code splitting and lazy loading
- Optimized images and assets
- Minimal JavaScript bundle size

### 📱 Responsive Design
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly interactions
- Optimized typography and spacing

### ✨ Interactive Elements
- Smooth page transitions
- Micro-interactions
- Animated UI components
- Scroll-based animations

## 🛠️ Technology Stack

### Core Technologies
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5.0+
- **Styling**: Tailwind CSS 3.3+
- **Animations**: Framer Motion 10.0+
- **Icons**: Lucide Icons
- **Form Handling**: React Hook Form
- **State Management**: React Context API

### Development Tools
- **Package Manager**: npm
- **Linting**: ESLint
- **Code Formatting**: Prettier
- **Version Control**: Git
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- pnpm 8.0.0 or later

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/nguyenvanhieu1710/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
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
│   └── skills/                  # Technical skills and expertise
│
├── components/
│   ├── layout/                  # Layout components
│   │   ├── Header/
│   │   └── Footer/
│   │
│   └── sections/                # Page sections
│       ├── About/
│       ├── Contact/
│       ├── Hero/
│       ├── Projects/
│       └── Skills/
│
├── contexts/                    # React contexts
│   └── LanguageContext.tsx      # i18n implementation
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

The project features a custom solution with the following structure:

1. **Translation Files**: Organized by language code (en, vi) and feature
2. **Type Safety**: Full TypeScript support for translation keys
3. **Dynamic Loading**: Only loads the required language bundle
4. **SEO Optimized**: Proper hreflang tags and metadata

To add a new language:

1. Create a new directory in `locales/` (e.g., `fr/`)
2. Add translation files following the existing structure
3. Update the language context and configuration

## 🎨 Theming System

The theming system is built with the following features:

- **Theme Provider**: `next-themes` for theme management
- **Color Modes**: Light, dark, and system preference
- **CSS Variables**: Dynamic theming with CSS custom properties
- **Smooth Transitions**: Theme switching with animations

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

- **Email**: contact.hieunguyen.work@gmail.com
- **LinkedIn**: [Nguyễn Văn Hiếu](https://linkedin.com/in/nguyen-van-hieu-5bb863313)
- **GitHub**: [nguyenvanhieu1710](https://github.com/nguyenvanhieu1710)

---

Built with ❤️ by [Hieu Nguyen](https://github.com/nguyenvanhieu1710)

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

Made with ❤️ by Hieu Nguyen

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.