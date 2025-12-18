"use client"

import { useState } from "react"
import Image from "next/image"
import { FaWhatsapp, FaPlus, FaTimes } from "react-icons/fa"
import FlashfireLogo from "@/src/components/FlashfireLogo"
import { questionsData } from "@/src/data/questionsData"
import faqStyles from "@/src/components/homePageFAQ/homePageFAQ.module.css"

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
      className="relative overflow-hidden bg-gradient-to-b from-[#fff6f4] via-white to-[#fff6f4] py-16 px-4 font-['Space_Grotesk',sans-serif] sm:px-6 lg:px-8 md:py-24"
    >
      <div className="pointer-events-none absolute -top-12 left-6 h-72 w-72 bg-orange-200/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 right-10 h-96 w-96 bg-orange-300/20 blur-3xl" />

      <header className="relative z-10 mx-auto mb-16 max-w-3xl text-center md:mb-20">
        
        <h2 className="font-['Satoshi',sans-serif] text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl">
          Why Choose Flashfire?
        </h2>
        <p className="mt-5 font-['Satoshi',sans-serif] text-base font-medium leading-relaxed text-gray-700 md:text-xl">
          We don&apos;t just apply, we <strong className="font-bold italic text-gray-900">make you get noticed.</strong>{" "}
          Flashfire combines <span className="text-orange-600 font-semibold">AI precision</span> with{" "}
          <span className="text-orange-700 font-semibold">human insight</span> to get you interviews that actually
          convert.
        </p>
      </header>

      <div className="relative z-10 mx-auto mb-16 max-w-7xl md:mb-20">
        {/* Top row - Floating cards with overlap effect */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8 mb-10 md:mb-12">
          {/* Card 1 - Elevated with shadow */}
          <article className="bg-white/80 p-7 text-left shadow-[0_10px_30px_rgba(0,0,0,0.06)] ring-1 ring-orange-100 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)] md:p-8">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center bg-[#ff4c00] shadow-[0_10px_20px_rgba(255,76,0,0.22)]">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900 md:text-2xl">AI-Powered Matching</h3>
            <p className="text-sm leading-relaxed text-gray-700 md:text-base">
              For each and every application, your base resume is automatically optimized to the job description with
              ATS-friendly keywords and skills.
            </p>
          </article>

          {/* Card 2 - Outlined style */}
          <article className="bg-gradient-to-br from-[#fff1ec] via-white to-white p-7 text-left shadow-[0_10px_30px_rgba(0,0,0,0.05)] ring-1 ring-orange-200 transition-all duration-300 hover:-translate-y-0.5 hover:ring-orange-300 hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)] md:p-8">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center bg-white shadow-sm ring-1 ring-orange-200">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900 md:text-2xl">Dynamic Resume Optimization</h3>
            <p className="text-sm leading-relaxed text-gray-700 md:text-base">
              We build your base resume from scratch and tailor it for each job, making it ATS-friendly and
              recruiter-visible.
            </p>
          </article>

          {/* Card 3 - Dark theme */}
          <article className="bg-black p-7 text-left shadow-[0_14px_40px_rgba(0,0,0,0.20)] ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_55px_rgba(0,0,0,0.25)] md:p-8">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center bg-[#ff4c00] shadow-[0_10px_20px_rgba(255,76,0,0.22)]">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-white md:text-2xl">LinkedIn Profile Optimization</h3>
            <p className="text-sm leading-relaxed text-gray-300 md:text-base">
              We professionally optimize your LinkedIn profile to boost recruiter visibility and align with your job
              search goals.
            </p>
          </article>
        </div>

        {/* Middle row - Wide cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 md:gap-8 mb-10 md:mb-12">
          {/* Card 4 - Horizontal card with icon on left */}
          <article className="bg-white/80 p-7 text-left shadow-[0_10px_30px_rgba(0,0,0,0.06)] ring-1 ring-orange-100 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)] md:p-8 flex items-start gap-6 max-[768px]:flex-col">
            <div className="flex-shrink-0 inline-flex h-16 w-16 items-center justify-center bg-orange-50 ring-1 ring-orange-100">
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
              <h3 className="mb-3 text-xl font-bold text-gray-900 md:text-2xl">Precision Targeting</h3>
              <p className="text-sm leading-relaxed text-gray-700 md:text-base">
                We only apply to jobs that fit your pay, location, company size, and career goals — and only to jobs
                posted in the last 24–48 hours.
              </p>
            </div>
          </article>

          {/* Card 5 - Horizontal card with gradient */}
          <article className="bg-gradient-to-br from-[#ff4c00] to-[#d93a00] p-7 text-left shadow-[0_14px_40px_rgba(255,76,0,0.18)] ring-1 ring-orange-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_55px_rgba(255,76,0,0.22)] md:p-8 flex items-start gap-6 max-[768px]:flex-col">
            <div className="flex-shrink-0 inline-flex h-16 w-16 items-center justify-center bg-white/15 ring-1 ring-white/20 backdrop-blur-sm">
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
              <h3 className="mb-3 text-xl font-bold text-white md:text-2xl">Dashboard &amp; Analytics</h3>
              <p className="text-sm leading-relaxed text-orange-50 md:text-base">
                Access a personalized dashboard to track applications, monitor success rates, and get real-time insights
                to improve your job search strategy.
              </p>
            </div>
          </article>
        </div>

        {/* Bottom row - Full width cards stacked */}
        <div className="space-y-6 md:space-y-8">
          {/* Card 6 - Full width with left accent */}
          <article className="bg-white/80 p-8 text-left shadow-[0_12px_34px_rgba(0,0,0,0.06)] ring-1 ring-orange-100 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_48px_rgba(0,0,0,0.10)] md:p-10">
            <div className="flex items-start gap-8 max-[768px]:flex-col">
              <div className="flex-shrink-0 inline-flex h-20 w-20 items-center justify-center bg-orange-50 ring-1 ring-orange-100 max-[768px]:h-16 max-[768px]:w-16">
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
                <h3 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl">
                  Lightning Fast Applications
                </h3>
                <p className="text-base leading-relaxed text-gray-700 md:text-lg">
                  A dedicated team of 4–5 people handles your job hunt, applying to 1200+ roles in 6–7 weeks.
                </p>
              </div>
            </div>
          </article>

          {/* Card 7 - Full width with right accent */}
          <article className="bg-black p-8 text-left shadow-[0_18px_55px_rgba(0,0,0,0.22)] ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_26px_70px_rgba(0,0,0,0.28)] md:p-10">
            <div className="flex items-start gap-8 max-[768px]:flex-col">
              <div className="flex-1">
                <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">Real-Time Updates</h3>
                <p className="text-base leading-relaxed text-gray-300 md:text-lg">
                  We'll keep you posted with every update in a WhatsApp group made just for you. Never miss an
                  application, response, or opportunity.
                </p>
              </div>
              <div className="flex-shrink-0 inline-flex h-20 w-20 items-center justify-center bg-[#ff4c00] shadow-[0_12px_26px_rgba(255,76,0,0.22)] ring-1 ring-orange-200 max-[768px]:h-16 max-[768px]:w-16">
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

      {/* FAQ Section (match HomePage FAQ UI 1:1) */}
      <section id="faq" className={`${faqStyles.faqSection} relative z-10`}>
        <div id="faq-header" className={faqStyles.header}>
          
          <h2>Question? We Got You Answers.</h2>
          <p>
            We get it, AI job search can sound complex. Here&apos;s everything explained, plain and simple.
          </p>
        </div>

        <div className={`${faqStyles.faqContainer} text-left !rounded-none`}>
          {questionsData.slice(0, 6).map((faq, index) => (
            <div
              key={faq.question}
              className={`${faqStyles.faqItem} ${activeFaq === index ? faqStyles.active : ""}`}
            >
              <button className={faqStyles.faqQuestion} onClick={() => handleFaqToggle(index)}>
                <span>{faq.question}</span>
                <span className={faqStyles.icon}>{activeFaq === index ? <FaTimes /> : <FaPlus />}</span>
              </button>

              {activeFaq === index && (
                <div className={`${faqStyles.faqAnswer} text-left`}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-16 flex justify-center relative z-10">
        <div className="flex justify-between items-stretch gap-4 bg-[rgba(251,240,235,1)] border border-[#f1e4df] p-3 max-w-[80rem] w-full mx-auto overflow-hidden relative max-[1024px]:flex-col max-[1024px]:items-center max-[1024px]:p-8 max-[768px]:p-6 max-[480px]:p-5">
          <div className="flex-1 text-left bg-white p-8 flex flex-col justify-center relative overflow-hidden max-[1024px]:text-center max-[1024px]:p-6 max-[768px]:p-5">
            <h3 className="text-[1.6rem] font-bold text-[#111] mb-3 max-[480px]:text-[1.2rem]">
              Still Confused?
            </h3>
            <p className="text-[#333] text-[1rem] font-bold leading-[1.5] mb-5 max-[480px]:text-[0.9rem]">
              Feel free to post your queries <br /> over our WhatsApp Support.
            </p>
            <button
              type="button"
              className="bg-[#ff4c00] text-white border-0 border-b-[3px] border-b-black py-[0.9rem] px-[1.6rem] font-semibold rounded-[0.5rem] cursor-pointer transition-all duration-300 w-fit z-10 relative shadow-[0_0.2rem_0_#000] hover:bg-[#e24300] hover:border-b-[5px] max-[1024px]:mx-auto"
              onClick={handleWhatsAppClick}
            >
              Connect on WhatsApp
            </button>
            <div className="pointer-events-none absolute right-[-8rem] top-1/2 -translate-y-1/2 text-[18rem] text-[rgba(251,240,235,1)] opacity-90 max-[1024px]:hidden">
              <FaWhatsapp />
            </div>
          </div>

          <div className="flex-[1.3] bg-black p-8  flex flex-row justify-between items-start relative overflow-hidden max-[1024px]:w-full max-[1024px]:mt-6 max-[1024px]:text-center max-[768px]:flex-col max-[768px]:items-center max-[768px]:p-6">
            <div className="w-1/2 flex flex-col items-start justify-start text-left max-[1024px]:w-full max-[1024px]:items-center max-[1024px]:text-center">
              <p className="text-[#fffaf8] text-[0.75rem] font-semibold mb-3">
                HELPING 100+ JOB SEEKERS
              </p>
              <blockquote className="text-[1.6rem] font-bold italic text-[#eee] mb-4 leading-tight max-[1024px]:text-[1.2rem] max-[768px]:text-[1rem]">
                "I've seen brilliant people lose hope. Flashfire exists so they
                don't have to."
              </blockquote>
              <div className="flex justify-start items-center gap-4 text-left max-[1024px]:justify-center max-[1024px]:text-center">
                <div>
                  <p className="text-[0.95rem] font-semibold">Adit Jain</p>
                  <p className="text-[0.8rem] text-[#aaa]">Partner</p>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <FlashfireLogo
                      variant="white"
                      width={24}
                      height={24}
                      className="brightness-100"
                    />
                  </div>
                  <p className="font-semibold">Flashfire</p>
                </div>
              </div>
            </div>

            <div className="relative flex-1 max-w-[60%] h-[13rem] overflow-hidden rounded-[0.5rem] max-[1024px]:static max-[1024px]:w-full max-[1024px]:h-[220px] max-[1024px]:mt-4 max-[1024px]:max-w-full max-[768px]:flex max-[768px]:justify-center max-[768px]:items-center max-[480px]:h-[180px]">
              <Image
                src="https://pub-4518f8276e4445ffb4ae9629e58c26af.r2.dev/adit-jain.png"
                alt="Adit Jain"
                width={260}
                height={480}
                className="absolute top-[-70%] right-[-9%] h-[300%] w-auto object-contain brightness-100 contrast-105 max-[1024px]:static max-[1024px]:h-full max-[1024px]:w-full max-[1024px]:object-contain max-[1024px]:top-0 max-[1024px]:right-0 max-[768px]:object-cover max-[768px]:scale-110 max-[480px]:object-top"
                unoptimized
              />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 via-black/30 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

