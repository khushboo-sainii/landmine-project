import { Syne, Plus_Jakarta_Sans, Fira_Code } from "next/font/google";
import "./globals.css";

const headingFont = Syne({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const monoFont = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Landmine Soft",
  description: "Landmine Soft is a technology company that helps startups, growing businesses, and enterprises build their digital core — smarter, faster, and future-ready.",
  authors: [{ name: "Khushboo Saini" }],
  keywords: ["Landmine Soft", "Technology Company", "Software Development", "Web Development", "Mobile Apps", "UI/UX Design", "Cloud Solutions", "AI & Automation", "Cybersecurity", "Hyderabad", "India"],
  openGraph: {
    title: "Landmine Soft",
    description: "Landmine Soft is a technology company that helps startups, growing businesses, and enterprises build their digital core — smarter, faster, and future-ready.",
    url: "https://landmine-project.vercel.app/home",
    siteName: "Landmine Soft",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Landmine Soft",
    description: "Landmine Soft is a technology company that helps startups, growing businesses, and enterprises build their digital core.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${headingFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}
