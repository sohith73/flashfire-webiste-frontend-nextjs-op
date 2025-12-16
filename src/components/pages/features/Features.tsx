"use client"

import { useState } from "react"
import Image from "next/image"
import { FaWhatsapp, FaPlus, FaTimes } from "react-icons/fa"
import FlashfireLogo from "@/src/components/FlashfireLogo"
import { questionsData } from "@/src/data/questionsData"

export default function Features() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  const handleWhatsAppClick = () => {
    const phoneNumber = "919817349846"
    const message = encodeURIComponent(
      "Hi! I'm interested in Flashfire's AI-powered job search automation. Can you help me get started?",
    )
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  const handleFaqToggle = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  return (
    <section
      id="feature"
      className="relative bg-gradient-to-b from-orange-50 via-white to-gray-50 py-24 px-8 text-center font-['Space_Grotesk',sans-serif] overflow-hidden max-[480px]:py-16 max-[480px]:px-5"
    >
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>

      <header className="max-w-3xl mx-auto mb-20 relative z-10 max-[768px]:mb-16">
        <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight font-['Satoshi',sans-serif] max-[1024px]:text-4xl max-[768px]:text-3xl">
          Why Choose Flashfire?
        </h2>
        <p className="text-xl font-medium text-gray-700 leading-relaxed font-['Satoshi',sans-serif] max-[1024px]:text-lg max-[768px]:text-base">
          We don&apos;t just apply, we <strong className="font-bold italic text-gray-900">make you get noticed.</strong>{" "}
          Flashfire combines <span className="text-orange-600 font-semibold">AI precision</span> with{" "}
          <span className="text-orange-700 font-semibold">human insight</span> to get you interviews that actually
          convert.
        </p>
      </header>

      <div className="max-w-7xl mx-auto mb-20 relative z-10 max-[768px]:mb-16">
        {/* Top row - Floating cards with overlap effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Card 1 - Elevated with shadow */}
          <article className="bg-white p-8 shadow-2xl hover:shadow-orange-200 transition-shadow duration-300 border border-gray-100 max-[768px]:p-6">
            <div className="w-14 h-14 bg-orange-600 flex items-center justify-center mb-6 shadow-lg shadow-orange-200">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 max-[768px]:text-xl">AI-Powered Matching</h3>
            <p className="text-gray-600 leading-relaxed max-[768px]:text-sm">
              For each and every application, your base resume is automatically optimized to the job description with
              ATS-friendly keywords and skills.
            </p>
          </article>

          {/* Card 2 - Outlined style */}
          <article className="bg-gradient-to-br from-orange-50 to-white p-8 border-2 border-orange-300 hover:border-orange-500 transition-colors duration-300 max-[768px]:p-6">
            <div className="w-14 h-14 bg-white flex items-center justify-center mb-6 shadow-md border border-orange-200">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 max-[768px]:text-xl">Dynamic Resume Optimization</h3>
            <p className="text-gray-700 leading-relaxed max-[768px]:text-sm">
              We build your base resume from scratch and tailor it for each job, making it ATS-friendly and
              recruiter-visible.
            </p>
          </article>

          {/* Card 3 - Dark theme */}
          <article className="bg-black p-8 shadow-2xl hover:shadow-gray-400 transition-shadow duration-300 max-[768px]:p-6">
            <div className="w-14 h-14 bg-orange-600 flex items-center justify-center mb-6 shadow-lg shadow-orange-900/50">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 max-[768px]:text-xl">LinkedIn Profile Optimization</h3>
            <p className="text-gray-300 leading-relaxed max-[768px]:text-sm">
              We professionally optimize your LinkedIn profile to boost recruiter visibility and align with your job
              search goals.
            </p>
          </article>
        </div>

        {/* Middle row - Wide cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 4 - Horizontal card with icon on left */}
          <article className="bg-white p-8 shadow-xl border border-gray-100 flex items-start gap-6 hover:shadow-2xl transition-shadow duration-300 max-[768px]:p-6 max-[768px]:flex-col">
            <div className="flex-shrink-0 w-16 h-16 bg-orange-100 flex items-center justify-center">
              <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 max-[768px]:text-xl">Precision Targeting</h3>
              <p className="text-gray-600 leading-relaxed max-[768px]:text-sm">
                We only apply to jobs that fit your pay, location, company size, and career goals — and only to jobs
                posted in the last 24–48 hours.
              </p>
            </div>
          </article>

          {/* Card 5 - Horizontal card with gradient */}
          <article className="bg-gradient-to-br from-orange-600 to-orange-700 p-8 shadow-xl flex items-start gap-6 hover:shadow-2xl hover:shadow-orange-300 transition-shadow duration-300 max-[768px]:p-6 max-[768px]:flex-col">
            <div className="flex-shrink-0 w-16 h-16 bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-3 max-[768px]:text-xl">Dashboard &amp; Analytics</h3>
              <p className="text-orange-50 leading-relaxed max-[768px]:text-sm">
                Access a personalized dashboard to track applications, monitor success rates, and get real-time insights
                to improve your job search strategy.
              </p>
            </div>
          </article>
        </div>

        {/* Bottom row - Full width cards stacked */}
        <div className="space-y-8">
          {/* Card 6 - Full width with left accent */}
          <article className="bg-white p-10 shadow-xl border-l-8 border-orange-600 hover:shadow-2xl transition-shadow duration-300 max-[768px]:p-6">
            <div className="flex items-start gap-8 max-[768px]:flex-col">
              <div className="flex-shrink-0 w-20 h-20 bg-orange-100 flex items-center justify-center max-[768px]:w-16 max-[768px]:h-16">
                <svg
                  className="w-12 h-12 text-orange-600 max-[768px]:w-10 max-[768px]:h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 max-[768px]:text-2xl">
                  Lightning Fast Applications
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed max-[768px]:text-base">
                  A dedicated team of 4–5 people handles your job hunt, applying to 1200+ roles in 6–7 weeks.
                </p>
              </div>
            </div>
          </article>

          {/* Card 7 - Full width with right accent */}
          <article className="bg-black p-10 shadow-2xl border-r-8 border-orange-600 hover:shadow-gray-400 transition-shadow duration-300 max-[768px]:p-6">
            <div className="flex items-start gap-8 max-[768px]:flex-col">
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-white mb-4 max-[768px]:text-2xl">Real-Time Updates</h3>
                <p className="text-gray-300 text-lg leading-relaxed max-[768px]:text-base">
                  We'll keep you posted with every update in a WhatsApp group made just for you. Never miss an
                  application, response, or opportunity.
                </p>
              </div>
              <div className="flex-shrink-0 w-20 h-20 bg-orange-600 flex items-center justify-center shadow-lg shadow-orange-900/50 max-[768px]:w-16 max-[768px]:h-16">
                <svg
                  className="w-12 h-12 text-white max-[768px]:w-10 max-[768px]:h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mb-20 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 max-[768px]:text-3xl font-['Satoshi',sans-serif]">
            Common Questions
          </h2>
          <p className="text-lg text-gray-600 max-[768px]:text-base">
            Everything you need to know about Flashfire&apos;s features and services.
          </p>
        </div>

        <div className="bg-white shadow-xl border border-gray-100">
          {questionsData.slice(0, 6).map((faq, index) => (
            <div
              key={index}
              className={`border-b border-gray-200 transition-all duration-300 ${
                activeFaq === index ? "bg-orange-50 border-l-4 border-l-orange-600" : ""
              }`}
            >
              <button
                className="w-full text-left p-6 flex items-center justify-between hover:bg-orange-50/50 transition-colors duration-200 max-[768px]:p-4"
                onClick={() => handleFaqToggle(index)}
              >
                <span className={`text-lg font-semibold pr-4 max-[768px]:text-base ${
                  activeFaq === index ? "text-orange-600" : "text-gray-900"
                }`}>
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 text-orange-600 transition-transform duration-200 ${
                  activeFaq === index ? "rotate-45" : ""
                }`}>
                  {activeFaq === index ? <FaTimes size={20} /> : <FaPlus size={20} />}
                </span>
              </button>
              {activeFaq === index && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed max-[768px]:px-4 max-[768px]:pb-4 max-[768px]:text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <footer className="flex justify-center relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl w-full">
          {/* WhatsApp CTA - Circular design */}
          <div className="flex-1 bg-white p-12 text-center shadow-2xl border border-gray-100 relative overflow-hidden max-[768px]:p-8">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-100 rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-50 rounded-full"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-200">
                <FaWhatsapp className="text-4xl text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 max-[480px]:text-2xl">Still Confused?</h3>
              <p className="text-gray-700 text-lg font-semibold leading-relaxed mb-8 max-[480px]:text-base">
                Feel free to post your queries over our WhatsApp Support.
              </p>
              <button
                type="button"
                className="bg-orange-600 text-white border-0 py-4 px-10 font-bold text-lg cursor-pointer transition-all duration-200 shadow-lg hover:bg-orange-700 hover:shadow-xl hover:-translate-y-1 active:translate-y-0"
                onClick={handleWhatsAppClick}
              >
                Connect on WhatsApp
              </button>
            </div>
          </div>

          {/* Testimonial - Card with rounded image */}
          <div className="flex-[1.4] bg-black p-10 shadow-2xl relative overflow-hidden max-[768px]:p-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl"></div>
            <div className="flex flex-col lg:flex-row gap-8 items-center relative z-10">
              <div className="flex-1 text-left max-[1024px]:text-center">
                <div className="inline-block px-4 py-2 bg-orange-600/20 mb-6">
                  <p className="text-orange-400 text-xs font-bold tracking-wider uppercase">Helping 100+ Job Seekers</p>
                </div>
                <blockquote className="text-2xl font-bold italic text-white mb-8 leading-tight max-[768px]:text-xl">
                  "I've seen brilliant people lose hope. Flashfire exists so they don't have to."
                </blockquote>
                <div className="flex items-center gap-4 max-[1024px]:justify-center">
                  <div className="text-left">
                    <p className="text-base font-bold text-white">Adit Jain</p>
                    <p className="text-sm text-gray-400">Partner</p>
                  </div>
                  <div className="h-8 w-px bg-gray-700"></div>
                  <div className="flex items-center gap-2">
                    <FlashfireLogo variant="white" width={24} height={24} />
                    <p className="font-bold text-white">Flashfire</p>
                  </div>
                </div>
              </div>

              <div className="relative w-full lg:w-2/5 h-72 lg:h-80 overflow-hidden shadow-2xl border-4 border-orange-600/20">
                <Image
                  src="https://pub-4518f8276e4445ffb4ae9629e58c26af.r2.dev/adit-jain.png"
                  alt="Adit Jain"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

