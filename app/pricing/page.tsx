import { Metadata } from "next";
import PricingPageClient from "./PricingPageClient";

export const metadata: Metadata = {
  title: "Pricing - Affordable Job Search Automation Plans | Flashfire",
  description:
    "Choose the perfect Flashfire plan for your job search. Transparent pricing with flexible options to automate your job applications and save time.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.flashfirejobs.com/pricing",
  },
  openGraph: {
    title: "Pricing - Affordable Job Search Automation Plans",
    description:
      "Choose the perfect Flashfire plan for your job search automation.",
    url: "https://www.flashfirejobs.com/pricing",
    type: "website",
    images: [
      {
        url: "https://www.flashfirejobs.com/favicon.svg",
        width: 803,
        height: 781,
        alt: "FLASHFIRE Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.flashfirejobs.com/favicon.svg"],
  },
};

export default function PricingPage() {
  return <PricingPageClient />;
}

