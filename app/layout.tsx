import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./_providers/providers";
import Navbar from "@/components/layout/Header/Navbar";
import LanguageInitializer from "./_providers/LanguageInitializer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Nguyen Van Hieu",
    default: "Nguyen Van Hieu — Full Stack Developer",
  },
  description:
    "Personal portfolio of Nguyen Van Hieu — Full Stack Developer specializing in Next.js, NestJS, TypeScript, and modern web technologies.",
  keywords: [
    "Nguyen Van Hieu",
    "Full Stack Developer",
    "Next.js",
    "NestJS",
    "TypeScript",
    "React",
    "Portfolio",
    "Web Developer Vietnam",
  ],
  authors: [{ name: "Nguyen Van Hieu" }],
  creator: "Nguyen Van Hieu",
  metadataBase: new URL("https://nvhieu.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Nguyen Van Hieu",
    title: "Nguyen Van Hieu — Full Stack Developer",
    description:
      "Personal portfolio of Nguyen Van Hieu — Full Stack Developer specializing in Next.js, NestJS, TypeScript, and modern web technologies.",
    images: [
      {
        url: "/avatar.jpg",
        width: 400,
        height: 400,
        alt: "Nguyen Van Hieu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyen Van Hieu — Full Stack Developer",
    description:
      "Personal portfolio of Nguyen Van Hieu — Full Stack Developer specializing in Next.js, NestJS, TypeScript, and modern web technologies.",
    images: ["/avatar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <LanguageInitializer />
          <Navbar />
          <main className="pt-20">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
