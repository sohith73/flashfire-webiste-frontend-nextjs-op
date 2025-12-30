import { Metadata } from "next";
import Navbar from "@/src/components/navbar/navbar";
import Footer from "@/src/components/footer/footer";
import JobApplicationAutomationContent from "./JobApplicationAutomationContent";

export const metadata: Metadata = {
  title: "Job Application Automation | Automate Job Applications Faster | Flashfirejobs",
  description:
    "Use job application automation to apply faster. FlashFireJobs helps in automating job applications and shows how to land your dream job easily.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.flashfirejobs.com/Job-application-automation",
  },
  openGraph: {
    title: "Job Application Automation | Automate Job Applications Faster | Flashfirejobs",
    description:
      "Use job application automation to apply faster. FlashFireJobs helps in automating job applications and shows how to land your dream job easily.",
    url: "https://www.flashfirejobs.com/Job-application-automation",
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

export default function JobApplicationAutomationPage() {
  return (
    <div className="bg-white text-black min-h-screen">
      <Navbar />
      <main className="mt-0">
        <JobApplicationAutomationContent />
      </main>
      <Footer />
    </div>
  );
}
