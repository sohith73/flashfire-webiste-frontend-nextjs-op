"use client"

import { FaTimes, FaCheck } from "react-icons/fa"

export default function BeforeAfterComparison() {
  const comparisonItems = [
    {
      title: "ATS-Friendly Resume Optimization",
      caption:
        "Resumes tailored to each job description with ATS-friendly keywords",
    },
    {
      title: "Time Efficiency in Job Search",
      caption: "150+ hours saved through AI-powered automation",
    },
    {
      title: "Accuracy & Attention to Detail",
      caption: "Role-matched applications reviewed by AI + humans",
    },
    {
      title: "Automated Applications",
      caption: "1,200+ smart applications sent strategically — not spam",
    },
    {
      title: "Application Tracking & Proof",
      caption: "Real-time tracking with visible proof and updates",
    },
    {
      title: "Interview Opportunity Rate",
      caption: "Higher interview conversion rates within weeks",
    },
  ]

  return (
    <section
      className="relative bg-white py-20 overflow-hidden"
      style={{ fontFamily: "var(--font-space-grotesk)" }}
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-14 space-y-6 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Transform Your Job Search
            <span className="block mt-2 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              With Intelligent Automation
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            See how FLASHFIRE revolutionizes your job application process with
            advanced automation that maximizes interview opportunities.
          </p>
        </div>

        {/* ======================= */}
        {/* DESKTOP / WEBSITE TABLE */}
        {/* ======================= */}
        <div className="hidden md:block">
          <div className="max-w-6xl mx-auto bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-5 px-6 text-left text-sm font-medium text-gray-600" />
                  <th className="py-5 px-6 text-center text-lg font-semibold text-orange-500 border-l border-gray-200">
                    Before FLASHFIRE
                  </th>
                  <th className="py-5 px-6 text-center text-lg font-semibold text-green-600 border-l border-gray-200">
                    After FLASHFIRE
                  </th>
                </tr>
              </thead>

              <tbody>
                {comparisonItems.map((item, index) => (
                  <tr
                    key={index}
                    className="border-t border-gray-200"
                  >
                    {/* Feature */}
                    <td className="py-5 px-6">
                      <div className="text-base font-semibold text-gray-900">
                        {item.title}
                      </div>
                      <div className="mt-1 text-sm text-gray-500 leading-snug">
                        {item.caption}
                      </div>
                    </td>

                    {/* Before */}
                    <td className="py-5 px-6 text-center border-l border-gray-200">
                      <FaTimes className="text-orange-500 text-xl mx-auto" />
                    </td>

                    {/* After */}
                    <td className="py-5 px-6 text-center border-l border-gray-200">
                      <div className="w-7 h-7 mx-auto rounded-full bg-green-600 flex items-center justify-center">
                        <FaCheck className="text-white text-sm" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
          <div className="mt-12 text-center max-w-3xl mx-auto px-4">
            <p className="text-base sm:text-lg font-semibold text-gray-900">
              Stop applying blindly. Start getting interviews strategically.
            </p>
          </div>
        </div>

        {/* ============= */}
        {/* MOBILE CARDS */}
        {/* ============= */}
        <div className="md:hidden space-y-4">
          {comparisonItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 space-y-3"
            >
              <div className="text-sm font-semibold text-gray-900">
                {item.title}
              </div>

              <div className="text-xs text-gray-500 leading-snug">
                {item.caption}
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <FaTimes className="text-orange-500 text-sm" />
                  <span className="uppercase tracking-wide">
                    Before FLASHFIRE
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center">
                    <FaCheck className="text-white text-[10px]" />
                  </div>
                  <span className="uppercase tracking-wide">
                    After FLASHFIRE
                  </span>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-12 text-center max-w-3xl mx-auto px-4">
            <p className="text-base sm:text-lg font-semibold text-gray-900">
              Stop applying blindly. Start getting interviews strategically.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
