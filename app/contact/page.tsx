import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Nguyen Van Hieu — send a message or connect via GitHub, LinkedIn, or Email.",
  keywords: [
    "contact",
    "hire developer",
    "get in touch",
    "Nguyen Van Hieu",
    "fullstack developer Vietnam",
  ],
  openGraph: {
    title: "Contact | Nguyen Van Hieu",
    description:
      "Get in touch with Nguyen Van Hieu — send a message or connect via GitHub, LinkedIn, or Email.",
    url: "/contact",
    images: [
      { url: "/avatar.jpg", width: 400, height: 400, alt: "Nguyen Van Hieu" },
    ],
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
