"use client";

import Link from "next/link";
import Footer from "@/src/components/footer/footer";
import Navbar from "@/src/components/navbar/navbar";
import SalesPopUp from "@/src/components/SalesPopUp";
import HomePageVideo from "@/src/components/homePageVideo/homePageVideo";

const ctaButtonClass =
  "inline-block rounded-lg bg-black px-7 py-3.5 text-sm font-semibold text-white shadow-[0_3px_0_#ff4c00] transition-all duration-300 hover:bg-[#222] hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black";

const steps = [
  {
    title: "Tell Us Your Goal",
    subtitle: "Takes 60 seconds",
    points: [
      "Share your background, skills, and career interests.",
      "We build a personalized job strategy for US & Canada roles.",
      "Visa-aware: OPT, CPT, STEM OPT, H-1B, sponsorship needs are baked in.",
    ],
  },
  {
    title: "Your Resume & Profile Get Optimized",
    points: [
      "ATS-optimized resume with keyword-aligned versions.",
      "LinkedIn profile enhancement and skill gap suggestions.",
      "Hybrid model: AI precision + human review so you look hire-ready.",
    ],
  },
  {
    title: "Flashfire Scans the Market Daily",
    points: [
      "Fresh, high-quality roles that match skills, visa, location, and salary.",
      "Sources: major job boards, company career pages, hidden recruiter roles.",
    ],
  },
  {
    title: "Smart Apply System Handles Everything",
    points: [
      "Auto-fills forms and writes custom answers.",
      "Tailors your resume for each job with ATS-safe formatting.",
      "Submits applications on your behalf—no more repetitive answers.",
    ],
  },
  {
    title: "Transparent Application Tracking",
    points: [
      "See jobs applied, status updates, recruiter responses, and predictions.",
      "Success probability for every application so you focus where it matters.",
    ],
  },
  {
    title: "Interview Calls Start Coming In",
    points: [
      "We prioritize roles with strong recruiter responsiveness and student-friendly patterns.",
      "Alerts via email, SMS, and dashboard notifications.",
    ],
  },
  {
    title: "Prep for Interviews With Confidence",
    points: [
      "Tailored interview questions and company-specific insights.",
      "Mock interview practice with feedback so you walk in ready, not stressed.",
    ],
  },
];

const differentiators = [
  "Designed for international students: visa-aware matching (OPT, CPT, STEM OPT, H-1B).",
  "Hybrid AI + human review, so your profile is truly hire-ready.",
  "Daily sourcing across boards, company pages, and unlisted recruiter roles.",
  "Full-stack automation: form filling, custom answers, and ATS-tailored resumes.",
  "Transparent dashboard with success probabilities and recruiter response signals.",
  "Built-in interview prep once calls start coming in.",
];

const faqs = [
  {
    q: "Does Flashfire really apply for jobs automatically?",
    a: "Yes. From form filling to resume tailoring, each application is automated and tracked.",
  },
  {
    q: "Will Flashfire help me get interview calls?",
    a: "That is the core purpose of the platform—targeted, optimized applications that convert to interviews.",
  },
  {
    q: "Does Flashfire work for OPT/CPT students?",
    a: "Absolutely. We were built around visa-friendly job matching for OPT, CPT, STEM OPT, and H-1B paths.",
  },
  {
    q: "How fast can I expect interview calls?",
    a: "Most students begin receiving responses within 2–6 weeks, depending on their profile and target roles.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. Your data is encrypted and never shared with third parties.",
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-[#fff6f4] text-black min-h-screen">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
        <section className="rounded-3xl bg-white/70 p-6 shadow-sm ring-1 ring-orange-100 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            How it works
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-gray-900 md:text-4xl">
            Your shortcut to interview calls in the US &amp; Canada
          </h1>
          <p className="mt-4 text-lg text-gray-700 md:text-xl">
            Flashfire turns your long, exhausting job search into a smooth,
            automated path to interview calls. You set the goal—Flashfire runs
            the entire journey.
          </p>
          //   #ff4c00
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/talk-to-an-expert"
              className="inline-block rounded-lg bg-[#ff4c00] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_3px_0_#000] transition-all duration-300 hover:bg-[#e64400] hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Get Started — Start Getting Interview Calls          
            </Link>
            <p className="text-sm text-gray-600">
              No manual searching. No repetitive answers. Interviews faster.
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
                    Step {index + 1}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-gray-900">
                    {step.title}
                  </h2>
                </div>
                {step.subtitle ? (
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
                    {step.subtitle}
                  </span>
                ) : null}
              </div>
              <ul className="mt-4 space-y-2 text-sm text-gray-700 leading-relaxed">
                {step.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-orange-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mt-14">
          <div className="rounded-3xl bg-white/70 p-4 shadow-sm ring-1 ring-orange-100 md:p-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
                  Demo
                </p>
                <h3 className="mt-1 text-2xl font-semibold text-gray-900">
                  Watch Flashfire handle applications end-to-end
                </h3>
                <p className="text-sm text-gray-700">
                  See the actual workflow we use to source, tailor, and submit
                  high-conversion applications for students.
                </p>
              </div>
              <Link
                href="/talk-to-an-expert"
                className={ctaButtonClass}
              >
                Talk to an expert
              </Link>
            </div>
            <div className="mt-4 overflow-hidden rounded-2xl ring-1 ring-gray-100">
              <HomePageVideo />
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-2xl bg-orange-50 p-6 ring-1 ring-orange-100 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-600">
                Why Flashfire works better
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-gray-900">
                Purpose-built for students who need interview calls fast
              </h3>
              <p className="mt-3 text-gray-700">
                We combine automation with human-quality control so every
                application is targeted, visa-safe, and competitive.
              </p>
            </div>
            <Link
              href="/talk-to-an-expert"
              className="inline-block rounded-lg bg-[#ff4c00] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_3px_0_#000] transition-all duration-300 hover:bg-[#e64400] hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"

            >
              Talk to an Expert
            </Link>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {differentiators.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl bg-white p-4 text-sm text-gray-800 shadow-sm ring-1 ring-orange-100"
              >
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 md:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
                FAQs
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-gray-900">
                Common questions from students &amp; job seekers
              </h3>
              <p className="mt-2 text-gray-700">
                Ask us anything—here are the essentials to get you started.
              </p>
            </div>
            <Link
              href="/talk-to-an-expert"
              className={ctaButtonClass}
            >
              Speak with a human
            </Link>
          </div>
          <div className="mt-6 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm text-gray-800"
              >
                <p className="font-semibold text-gray-900">{faq.q}</p>
                <p className="mt-2 text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-3xl bg-black px-6 py-10 text-white md:px-10">
          <h3 className="text-2xl font-semibold leading-snug md:text-3xl">
            Turn your endless job hunt into a structured, automated path to
            interview calls.
          </h3>
          <p className="mt-3 text-gray-200">
            We source, tailor, and submit high-intent applications every day
            while you focus on preparing for interviews.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              href="/talk-to-an-expert"
              className="inline-block rounded-lg bg-[#ff4c00] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_3px_0_#000] transition-all duration-300 hover:bg-[#e64400] hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"

            >
              Get Started — Start Getting Interview Calls
            </Link>
            <span className="text-sm text-gray-200">
              It starts with a quick onboarding. We handle the rest.
            </span>
          </div>
        </section>
      </main>

      <Footer />
      <SalesPopUp />
    </div>
  );
}
