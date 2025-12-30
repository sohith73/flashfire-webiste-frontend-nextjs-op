import { Metadata } from "next";
import HomePage from "@/src/components/pages/home/Home";
import HomeImagePreloader from "./HomeImagePreloader";

export const metadata: Metadata = {
  title: "AI Job Search, Job Application Platform | Ai Job Hunting Sites - FlashFireJobs",
  description:
    "FlashFireJobs is an AI-powered job search platform offering auto apply to jobs, job application assistance, AI job board & smart career job search tools.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.flashfirejobs.com/",
  },
  openGraph: {
    title: "AI Job Search, Job Application Platform | Ai Job Hunting Sites - FlashFireJobs",
    description:
      "FlashFireJobs is an AI-powered job search platform offering auto apply to jobs, job application assistance, AI job board & smart career job search tools.",
    url: "https://www.flashfirejobs.com/",
    type: "website",
    images: [
      {
        url: "https://www.flashfirejobs.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "FLASHFIRE Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.flashfirejobs.com/images/og-image.png"],
  },
};

export default function Home() {
  return (
    <>
      <HomeImagePreloader />
      <HomePage />
    </>
  );
}
