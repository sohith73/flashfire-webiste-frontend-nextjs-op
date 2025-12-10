import { Metadata } from "next";
import HomePage from "@/src/components/pages/home/Home";
import ScrollToSection from "@/src/utils/ui/scrollToSection";

export const metadata: Metadata = {
  title: "How It Works - Flashfire Job Search Automation | Flashfire",
  description:
    "Learn how Flashfire's AI-powered job search automation works. See how we help you land interviews faster with our automated job application platform.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.flashfirejobs.com/how-it-works",
  },
  openGraph: {
    title: "How It Works - Flashfire Job Search Automation",
    description:
      "Learn how Flashfire's AI-powered job search automation helps you land interviews faster.",
    url: "https://www.flashfirejobs.com/how-it-works",
    type: "website",
  },
};

export default function HowItWorksPage() {
  return (
    <>
      <HomePage />
      <ScrollToSection targetId="demo" />
    </>
  );
}
