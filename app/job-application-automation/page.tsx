"use client";

import Navbar from "@/src/components/navbar/navbar";
import Footer from "@/src/components/footer/footer";

export default function JobApplicationAutomationPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-[#0f172a] font-['Space_Grotesk',sans-serif]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#fff0e6] via-white to-[#fffaf7] px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,76,0,0.12),transparent_45%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(255,182,146,0.18),transparent_50%)]" />
          <div className="relative max-w-6xl mx-auto text-center space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/90 border border-[#ffd7c4] px-3 py-1 text-xs font-semibold text-[#ff4c00] shadow">
              AI Job Hunter • Faster interviews
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Automate Your Job Applications
            </h1>
            <p className="text-base sm:text-lg text-[#374151] max-w-3xl mx-auto">
              Let AI submit tailored applications instantly, keep you first in line, and secure more interviews with less effort.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button className="px-5 py-3 rounded-full bg-[#ff4c00] text-white font-semibold shadow-[0_10px_28px_rgba(255,76,0,0.25)] hover:bg-[#e24400] transition">
                Start automating now
              </button>
              <button className="px-5 py-3 rounded-full border border-[#ffd7c4] text-[#0f172a] bg-white hover:bg-[#fff6f0] transition shadow-sm">
                See how it works
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 max-w-4xl mx-auto text-center">
              {[
                { label: "Avg. apps/day", value: "45", sub: "Sent automatically" },
                { label: "Interview lift", value: "2.3x", sub: "More callbacks" },
                { label: "Time saved", value: "10+ hrs", sub: "Each week" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-[#ffd7c4] bg-white/90 shadow-[0_10px_22px_rgba(255,76,0,0.08)] px-4 py-3 space-y-1"
                >
                  <p className="text-xs font-semibold text-[#ff4c00]">{stat.label}</p>
                  <p className="text-2xl font-extrabold text-[#0f172a]">{stat.value}</p>
                  <p className="text-xs text-[#374151]">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Get 10x more interviews */}
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-2xl sm:text-3xl font-extrabold">Get 10x More Interviews</h2>
              <p className="text-sm sm:text-base text-[#374151]">
                Your AI Job Hunter works nonstop: finds hidden roles, applies instantly, tailors each application, and keeps you first in line.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: "Always First in Line",
                  desc: "Applies within seconds so you’re first in, not lost in the pile.",
                },
                {
                  title: "Smarter Resumes",
                  desc: "Customizes each resume to beat ATS filters and boost visibility.",
                },
                {
                  title: "Weekly Momentum",
                  desc: "Secures at least one interview weekly to keep you moving forward.",
                },
                {
                  title: "Clear Insights",
                  desc: "Track every application, response, and interview in one place.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#ffd7c4] bg-[#fffaf7] shadow-[0_10px_28px_rgba(255,76,0,0.08)] p-4 space-y-2"
                >
                  <div className="h-2 w-12 rounded-full bg-[#ffb692]" />
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="text-sm text-[#374151] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-6 space-y-3 text-center">
              <p className="text-xs font-semibold text-[#6b7280]">As seen in</p>
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm sm:text-base font-semibold text-[#1f2937] opacity-90">
                {["Los Angeles Times", "SFGATE", "Entrepreneur", "Newsweek", "Forbes", "Yahoo! Finance"].map((brand) => (
                  <span
                    key={brand}
                    className="px-3 py-1 rounded-md border border-[#ffe2d1] bg-[#fff8f4] shadow-[0_6px_16px_rgba(255,76,0,0.05)]"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Competing with people using AI */}
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold">You’re Competing With People Using AI.</h2>
              <p className="text-sm sm:text-base text-[#374151]">
                Roles get hundreds of applicants in minutes. Let your AI Job Hunter apply 24/7 so you’re first in line,
                not last to the party.
              </p>
              <div className="rounded-2xl border border-[#ffe2d1] bg-white shadow-[0_12px_30px_rgba(255,76,0,0.08)] p-5 space-y-3">
                <p className="text-sm font-semibold">The New Job Market Reality</p>
                <ul className="space-y-2 text-sm text-[#374151]">
                  <li>✔ 5x more likely to get interviews using AI</li>
                  <li>✔ 72% faster job search time on average</li>
                  <li>✔ 18% higher compensation on secured roles</li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border border-[#ffe2d1] bg-white shadow-[0_12px_30px_rgba(255,76,0,0.08)] p-5 space-y-4">
              <p className="text-sm font-semibold text-[#374151]">Manual vs. Your AI Job Hunter</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {[
                  {
                    label: "Time spent on applications",
                    manual: "11+ hours per week",
                    ai: "30 minutes for setup",
                  },
                  {
                    label: "Application volume",
                    manual: "5–10 per week",
                    ai: "15–50 per week",
                  },
                  {
                    label: "ATS optimization",
                    manual: "Generic for all",
                    ai: "Custom per role",
                  },
                ].map((row, idx) => (
                  <div key={idx} className="space-y-2">
                    <p className="font-semibold text-[#0f172a]">{row.label}</p>
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center rounded-lg border border-[#fecdd3] bg-[#fff1f2] px-3 py-2">
                        <span className="text-[#b91c1c]">Manual</span>
                        <span className="text-[#374151]">{row.manual}</span>
                      </div>
                      <div className="flex justify-between items-center rounded-lg border border-[#bbf7d0] bg-[#ecfdf3] px-3 py-2">
                        <span className="text-[#15803d]">Your AI Job Hunter</span>
                        <span className="text-[#374151]">{row.ai}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why job hunting fails + Why AI Job Hunter */}
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-14">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 items-start">
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-extrabold">Why Job Hunting Fails Today</h2>
                <p className="text-sm sm:text-base text-[#374151]">
                  Anxiety, time sink, and ATS rejections slow everyone down. Flip the script with automation that keeps
                  you ahead.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Wasted time — 11+ hours/week applying.",
                    "Rejected before you’re seen — ATS filters 75% of resumes.",
                    "No response, no closure — stuck without feedback.",
                    "Hundreds competing for one role — speed wins.",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-[#ffe2d1] bg-[#fff8f4] shadow-[0_8px_22px_rgba(255,76,0,0.06)] px-4 py-3 text-sm text-[#374151]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Why You Need AI Job Hunter</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "First-mover advantage — be first to apply.",
                    "Zero manual work — it applies for you.",
                    "24/7 monitoring — never miss an opening.",
                    "Instant insights — refine faster, interview sooner.",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-[#ffd7c4] bg-white shadow-[0_10px_26px_rgba(255,76,0,0.08)] px-4 py-3 text-sm text-[#374151]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

