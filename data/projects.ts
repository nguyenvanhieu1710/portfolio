import {
  Code2,
  Globe,
  Rocket,
  LayoutDashboard,
  Tractor,
  Factory,
  GraduationCap,
  Mail,
  Scissors,
  Puzzle,
} from "lucide-react";

export type Project = {
  title: string;
  titleVi: string;
  description: string;
  descriptionVi: string;
  bullets: string[];
  bulletsVi: string[];
  tech: string[];
  icon: any;
  link?: string;
  company?: string;
  period?: string;
  role?: string;
  roleVi?: string;
  type: "work" | "personal";
};

export const projects: Project[] = [
  // ── Work Experience ──
  {
    title: "Job Crawler System",
    titleVi: "Hệ thống Thu thập Dữ liệu Việc làm",
    description:
      "Automated data crawling modules to collect job postings and company information from recruitment websites.",
    descriptionVi:
      "Module tự động thu thập thông tin việc làm và công ty từ các trang tuyển dụng.",
    bullets: [
      "Participated in meetings and internal discussions.",
      "Supported writing technical documents for the team.",
      "Built automated crawling modules for job postings and company data.",
    ],
    bulletsVi: [
      "Tham gia các buổi họp và thảo luận nội bộ.",
      "Hỗ trợ viết tài liệu kỹ thuật cho nhóm.",
      "Xây dựng module tự động thu thập thông tin việc làm và doanh nghiệp.",
    ],
    tech: ["Node.js", "Cheerio", "MongoDB", "TypeScript"],
    icon: Code2,
    company: "XEPO Technology Joint Stock Company",
    period: "Sep 2025 – Nov 2025",
    role: "Frontend Developer Intern",
    roleVi: "Thực tập sinh Frontend Developer",
    type: "work",
  },
  {
    title: "Agricultural Tax Management System",
    titleVi: "Hệ thống Quản lý Thuế Nông nghiệp",
    description:
      "Web-based agricultural tax management system for Viet Tien Commune.",
    descriptionVi:
      "Hệ thống quản lý thuế nông nghiệp trên nền web cho xã Việt Tiến.",
    bullets: [
      "Developed a full-stack web system for managing agricultural tax records.",
      "Implemented role-based access control for commune staff.",
    ],
    bulletsVi: [
      "Phát triển hệ thống web quản lý hồ sơ thuế nông nghiệp.",
      "Triển khai phân quyền truy cập theo vai trò cho cán bộ xã.",
    ],
    tech: ["Next.js", "NestJS", "PostgreSQL", "TypeScript"],
    icon: Tractor,
    company: "AI Academy Joint Stock Company",
    period: "Nov 2025 – Present",
    role: "Full-stack Developer Intern",
    roleVi: "Thực tập sinh Full-stack Developer",
    type: "work",
  },
  {
    title: "Production Progress Tracking System",
    titleVi: "Hệ thống Theo dõi Tiến độ Sản xuất",
    description:
      "Real-time production progress tracking system for Tan Viet Anh Company.",
    descriptionVi:
      "Hệ thống theo dõi tiến độ sản xuất thời gian thực cho Công ty Tân Việt Anh.",
    bullets: [
      "Developed a real-time production tracking system with live status updates.",
      "Implemented role-based user management for secure department access.",
    ],
    bulletsVi: [
      "Phát triển hệ thống theo dõi sản xuất thời gian thực với cập nhật trạng thái trực tiếp.",
      "Triển khai quản lý người dùng theo vai trò để đảm bảo quyền truy cập phù hợp cho từng bộ phận.",
    ],
    tech: ["Next.js", "NestJS", "PostgreSQL", "WebSocket"],
    icon: Factory,
    company: "AI Academy Joint Stock Company",
    period: "Nov 2025 – Present",
    role: "Full-stack Developer Intern",
    roleVi: "Thực tập sinh Full-stack Developer",
    type: "work",
  },
  {
    title: "Homepage & Admin Dashboard – SETA Vietnam",
    titleVi: "Homepage & Admin Dashboard – SETA Vietnam",
    description:
      "Professional homepage and integrated admin dashboard for SETA Vietnam Joint Stock Company.",
    descriptionVi:
      "Homepage chuyên nghiệp và admin dashboard tích hợp cho Công ty CP SETA Việt Nam.",
    bullets: [
      "Built a professional homepage to introduce services and brand value.",
      "Developed an integrated Admin Dashboard for dynamic content management.",
      "Implemented role-based user management for secure department access.",
    ],
    bulletsVi: [
      "Xây dựng homepage chuyên nghiệp để giới thiệu dịch vụ và giá trị thương hiệu.",
      "Phát triển Admin Dashboard tích hợp cho phép quản trị viên quản lý nội dung động.",
      "Triển khai phân quyền người dùng theo vai trò cho từng phòng ban.",
    ],
    tech: ["Next.js", "NestJS", "PostgreSQL", "TypeScript", "TailwindCSS"],
    icon: LayoutDashboard,
    company: "AI Academy Joint Stock Company",
    period: "Nov 2025 – Present",
    role: "Full-stack Developer Intern",
    roleVi: "Thực tập sinh Full-stack Developer",
    type: "work",
  },

  // ── Personal Projects ──
  {
    title: "CurioFeed",
    titleVi: "CurioFeed",
    description:
      "News aggregator app that automatically crawls articles from multiple sources and displays them in a personalized feed.",
    descriptionVi:
      "Ứng dụng tổng hợp tin tức tự động crawl bài viết từ nhiều nguồn và hiển thị theo feed cá nhân hóa.",
    bullets: [
      "Built a crawler to collect articles from multiple news sources.",
      "Developed a personalized feed system with category filtering.",
      "Implemented a RESTful API backend with caching via Redis.",
    ],
    bulletsVi: [
      "Xây dựng crawler thu thập bài viết từ nhiều nguồn tin tức.",
      "Phát triển hệ thống feed cá nhân hóa với bộ lọc theo danh mục.",
      "Triển khai REST API backend với caching bằng Redis.",
    ],
    tech: ["Next.js", "NestJS", "Python", "PostgreSQL", "Redis"],
    icon: Rocket,
    link: "https://github.com/nguyenvanhieu1710/CurioFeedFrontend",
    type: "personal",
  },
  {
    title: "Career UTEHY — Research Project",
    titleVi: "Career UTEHY — Đề tài NCKH",
    description:
      "AI-powered career guidance system for UTEHY students — crawls job listings, matches CVs with JDs, and provides a chatbot for career consulting.",
    descriptionVi:
      "Hệ thống tư vấn hướng nghiệp bằng AI cho sinh viên UTEHY — crawl tin tuyển dụng, matching CV với JD và chatbot tư vấn nghề nghiệp.",
    bullets: [
      "Crawled and processed job listings from multiple recruitment platforms.",
      "Built a CV–JD matching engine using NLP and Gemini AI.",
      "Developed a chatbot for personalized career consulting.",
    ],
    bulletsVi: [
      "Thu thập và xử lý tin tuyển dụng từ nhiều nền tảng.",
      "Xây dựng engine matching CV–JD sử dụng NLP và Gemini AI.",
      "Phát triển chatbot tư vấn hướng nghiệp cá nhân hóa.",
    ],
    tech: ["Next.js", "FastAPI", "Python", "PostgreSQL", "Gemini AI"],
    icon: GraduationCap,
    link: "https://github.com/nguyenvanhieu1710/career_utehy_nckh_fe",
    type: "personal",
  },
  {
    title: "Auto Read Email",
    titleVi: "Auto Read Email",
    description:
      "Python tool that automatically reads, classifies and summarizes emails using Gemini AI, then sends periodic digest reports.",
    descriptionVi:
      "Tool Python tự động đọc, phân loại và tóm tắt email bằng Gemini AI, sau đó gửi báo cáo tổng hợp định kỳ.",
    bullets: [
      "Integrated Gmail API for automated email reading and classification.",
      "Used Gemini AI to summarize email content intelligently.",
      "Scheduled periodic digest reports via automated pipelines.",
    ],
    bulletsVi: [
      "Tích hợp Gmail API để tự động đọc và phân loại email.",
      "Dùng Gemini AI để tóm tắt nội dung email thông minh.",
      "Lên lịch gửi báo cáo tổng hợp định kỳ qua pipeline tự động.",
    ],
    tech: ["Python", "Gmail API", "Gemini AI"],
    icon: Mail,
    link: "https://github.com/nguyenvanhieu1710/auto-read-email",
    type: "personal",
  },
  {
    title: "Barber Shop",
    titleVi: "Barber Shop",
    description:
      "Professional website for a barbershop — showcasing services and online appointment booking with dark/light mode and SEO.",
    descriptionVi:
      "Website chuyên nghiệp cho tiệm cắt tóc — giới thiệu dịch vụ và đặt lịch hẹn trực tuyến, hỗ trợ dark/light mode và tối ưu SEO.",
    bullets: [
      "Built a responsive, SEO-optimized website with Next.js 16.",
      "Implemented dark/light mode and EN/VI internationalization.",
      "Integrated online appointment booking flow.",
    ],
    bulletsVi: [
      "Xây dựng website responsive, tối ưu SEO với Next.js 16.",
      "Triển khai dark/light mode và đa ngôn ngữ Anh/Việt.",
      "Tích hợp luồng đặt lịch hẹn trực tuyến.",
    ],
    tech: ["Next.js", "TypeScript", "TailwindCSS", "next-intl"],
    icon: Scissors,
    link: "https://github.com/nguyenvanhieu1710/barber-shop",
    type: "personal",
  },
  {
    title: "Job Scraper Extension",
    titleVi: "Job Scraper Extension",
    description:
      "Chrome extension that automatically scrapes job listings from recruitment websites with one click.",
    descriptionVi:
      "Chrome extension tự động thu thập tin tuyển dụng từ các trang web chỉ với một cú nhấp.",
    bullets: [
      "Built a Chrome extension to extract job data from recruitment sites.",
      "Parsed and structured job title, company, salary, and location data.",
      "Exported collected data for further processing.",
    ],
    bulletsVi: [
      "Xây dựng Chrome extension thu thập dữ liệu việc làm từ các trang tuyển dụng.",
      "Phân tích và cấu trúc dữ liệu: tên vị trí, công ty, lương, địa điểm.",
      "Xuất dữ liệu đã thu thập để xử lý tiếp.",
    ],
    tech: ["JavaScript", "Chrome Extension API", "HTML", "CSS"],
    icon: Puzzle,
    link: "https://github.com/nguyenvanhieu1710/job-scraper-extension",
    type: "personal",
  },
  {
    title: "Personal Portfolio",
    titleVi: "Portfolio Cá Nhân",
    description:
      "Personal portfolio website showcasing skills, projects and achievements.",
    descriptionVi:
      "Website portfolio cá nhân giới thiệu kỹ năng, dự án và thành tích.",
    bullets: [
      "Built with Next.js 16, Tailwind CSS v4, and Framer Motion.",
      "Supports dark/light mode and EN/VI bilingual.",
      "Fully responsive with SEO optimization.",
    ],
    bulletsVi: [
      "Xây dựng bằng Next.js 16, Tailwind CSS v4 và Framer Motion.",
      "Hỗ trợ chế độ sáng/tối và song ngữ Anh/Việt.",
      "Responsive hoàn toàn, tối ưu SEO.",
    ],
    tech: ["Next.js", "TailwindCSS", "Framer Motion", "TypeScript"],
    icon: Globe,
    link: "https://nvhieu.vercel.app",
    type: "personal",
  },
];
