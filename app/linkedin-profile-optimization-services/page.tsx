"use client"

import React from "react"
import Navbar from "@/src/components/navbar/navbar"
import Footer from "@/src/components/footer/footer"
import { ArrowRight, Check, Zap, Sparkles, Target, BarChart3, Users, FileText } from "lucide-react"

// Minimal UI primitives
const Button = ({
  children,
  variant = "default",
  size = "md",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default" | "outline" | "secondary"; size?: "md" | "lg" }) => {
  const base =
    "inline-flex items-center justify-center rounded-full font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-1"
  const variants: Record<string, string> = {
    default: "bg-[#ff4c00] text-white hover:bg-[#e24400] focus:ring-[#ff4c00]/80",
    outline: "border border-[#ffd7c4] text-[#0f172a] bg-white hover:bg-[#fff6f0] focus:ring-[#ff4c00]/60",
    secondary: "bg-white text-[#0f172a] border border-[#ffd7c4] hover:bg-[#fff6f0] focus:ring-[#ff4c00]/60",
  }
  const sizes: Record<string, string> = { md: "px-4 py-2 text-sm", lg: "px-5 py-3 text-base" }
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}

const Badge = ({
  children,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "outline"
  className?: string
}) => {
  const styles =
    variant === "outline"
      ? "border border-[#ffd7c4] text-[#0f172a] bg-white"
      : variant === "secondary"
      ? "bg-[#fff2ea] text-[#0f172a] border border-[#ffd7c4]"
      : "bg-[#ff4c00] text-white border border-[#ff4c00]"
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${styles} ${className}`}>
      {children}
    </span>
  )
}

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div
    className={`rounded-2xl border border-[#ffd7c4] bg-white shadow-[0_10px_28px_rgba(255,76,0,0.08)] backdrop-blur-sm ${className}`}
  >
    {children}
  </div>
)
const CardHeader = ({ children }: { children: React.ReactNode }) => <div className="p-5">{children}</div>
const CardTitle = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>
)
const CardDescription = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-sm text-[#374151] ${className}`}>{children}</p>
)

type AccordionProps = React.HTMLAttributes<HTMLDivElement> & { type?: string; collapsible?: boolean }
type AccordionItemProps = React.HTMLAttributes<HTMLDivElement> & { value?: string }

const Accordion = ({ children, className = "", ...props }: AccordionProps) => (
  <div className={`space-y-2 ${className}`} {...props}>
    {children}
  </div>
)
const AccordionItem = ({ children, className = "", ...props }: AccordionItemProps) => (
  <div className={`rounded-lg border ${className}`} {...props}>
    {children}
  </div>
)
const AccordionTrigger = ({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`cursor-pointer px-4 py-3 font-semibold text-left ${className}`} {...props}>
    {children}
  </div>
)
const AccordionContent = ({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`px-4 pb-4 text-sm text-[#374151] ${className}`} {...props}>
    {children}
  </div>
)

const Avatar = ({ children }: { children: React.ReactNode }) => (
  <div className="h-10 w-10 overflow-hidden rounded-full border border-[#ffd7c4] bg-[#fff6f0]">{children}</div>
)
const AvatarImage = ({ src, alt }: { src?: string; alt?: string }) => (
  <img src={src} alt={alt} className="h-full w-full object-cover" />
)
const AvatarFallback = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-full w-full items-center justify-center text-xs font-semibold text-[#0f172a]">{children}</div>
)

export default function LinkedInOptimizationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#0f172a]">
      <Navbar />

      <main className="flex-1 text-[#0f172a]">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#fff0e6] via-[#fff7f2] to-[#fffaf7] py-20 sm:py-32">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <Badge variant="secondary" className="mb-4">
                <Sparkles className="mr-1 h-3 w-3" />
                Trusted by 10,000+ professionals
              </Badge>
              <h1 className="mb-6 max-w-4xl text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-[#0f172a]">
                Transform Your LinkedIn Profile Into a <span className="text-primary">Job Magnet</span>
              </h1>
              <p className="mb-8 max-w-2xl text-pretty text-lg text-[#374151] sm:text-xl">
                Get more profile views, stronger connections, and interview calls with AI-powered LinkedIn optimization.
                See results in minutes, not months.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="gap-2">
                  Optimize Your Profile <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  See How It Works
                </Button>
              </div>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-sm text-[#374151]">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Free profile scan</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Instant results</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="border-y bg-white py-12">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="mb-8 text-center text-sm font-medium text-[#374151]">
              Trusted by professionals hired at
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
              {["Microsoft", "Google", "Amazon", "Meta", "Apple"].map((company) => (
                <div key={company} className="text-lg font-semibold text-[#374151]">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-3">
              <Card className="bg-white/95">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">132%</CardTitle>
                  <CardDescription className="text-base">Average increase in profile views</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-white/95">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">2.3x</CardTitle>
                  <CardDescription className="text-base">More interview invitations</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-white/95">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">89%</CardTitle>
                  <CardDescription className="text-base">Users land a new job within 3 months</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-white py-16 sm:py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <Badge variant="outline" className="mb-4">
                <Sparkles className="mr-1 h-3 w-3" />
                Features
              </Badge>
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Everything You Need to Stand Out</h2>
              <p className="mx-auto max-w-2xl text-pretty text-lg text-[#374151]">
                Our AI-powered platform analyzes your profile and provides actionable recommendations to help you get
                noticed by recruiters.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white/95 hover:-translate-y-1 transition">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Instant Profile Scan</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Get a comprehensive analysis of your LinkedIn profile in seconds with our AI-powered scanner.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white/95 hover:-translate-y-1 transition">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Keyword Optimization</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Target the right keywords that recruiters search for in your industry and role.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white/95 hover:-translate-y-1 transition">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Headline Generator</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Create compelling headlines that grab attention and showcase your unique value proposition.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white/95 hover:-translate-y-1 transition">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Profile Score</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Track your optimization progress with a clear, actionable score that shows what to improve.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white/95 hover:-translate-y-1 transition">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Experience Optimization</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Transform your work experience into achievement-focused bullet points that impress recruiters.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white/95 hover:-translate-y-1 transition">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Skills Alignment</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Ensure your skills section matches what hiring managers are looking for in your field.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Get more interviews / social proof */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-3">
              <h2 className="text-3xl font-bold sm:text-4xl">Get 10x More Interviews</h2>
              <p className="text-lg text-[#374151] max-w-3xl mx-auto">
                Be first in line, not lost in the pile. Your AI assistant tailors every application and keeps momentum so
                you land more recruiter calls.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Always First in Line",
                  desc: "Applies within seconds so you’re first in, not buried under hundreds of applicants.",
                },
                {
                  title: "Smarter Resumes",
                  desc: "Tailors each resume to beat ATS filters and boost visibility.",
                },
                {
                  title: "Weekly Momentum",
                  desc: "Stay on track with at least one interview secured every week.",
                },
                {
                  title: "Clear Insights",
                  desc: "Track every application, response, and interview in one view.",
                },
              ].map((item) => (
                <Card key={item.title} className="h-full bg-[#fffaf7] border-[#ffe2d1] shadow-[0_12px_30px_rgba(255,76,0,0.08)] hover:-translate-y-1 transition">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{item.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="pt-6 space-y-3 text-center">
              <p className="text-sm font-medium text-[#374151]">As seen in</p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm sm:text-base font-semibold text-[#374151]/80">
                {["Los Angeles Times", "SFGATE", "Entrepreneur", "Newsweek", "Forbes", "Yahoo! Finance"].map((brand) => (
                  <span key={brand} className="rounded-md border border-[#ffe2d1] px-3 py-1 bg-[#fff8f4] shadow-[0_8px_18px_rgba(255,76,0,0.06)]">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Competing with AI + comparison */}
        <section className="bg-muted/40 py-16 sm:py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold sm:text-4xl">You’re Competing With People Using AI</h2>
              <p className="text-lg text-[#374151]">
                Roles get hundreds of applicants in minutes. Let AI optimize and apply so you’re first in line, not last
                to the party.
              </p>
              <Card className="bg-white/95 shadow-[0_12px_28px_rgba(255,76,0,0.08)]">
                <CardHeader>
                  <CardTitle className="text-base">The New Job Market Reality</CardTitle>
                  <div className="text-base leading-relaxed text-[#374151]">
                    <ul className="space-y-2 list-disc list-inside">
                      <li>5x more likely to get interviews using AI</li>
                      <li>72% faster search time on average</li>
                      <li>18% higher compensation on secured roles</li>
                    </ul>
                  </div>
                </CardHeader>
              </Card>
            </div>

            <Card className="bg-white/95 shadow-[0_12px_28px_rgba(255,76,0,0.08)]">
              <CardHeader>
                <CardTitle className="text-lg">Manual vs. Your AI Copilot</CardTitle>
              </CardHeader>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-6 pb-6">
                {[
                  {
                    label: "Time spent on applications",
                    manual: "11+ hours/week",
                    ai: "30 minutes setup",
                  },
                  {
                    label: "Application volume",
                    manual: "5–10 per week",
                    ai: "15–50 per week",
                  },
                  {
                    label: "ATS optimization",
                    manual: "Generic for all roles",
                    ai: "Custom per role",
                  },
                ].map((row) => (
                  <div key={row.label} className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">{row.label}</p>
                    <div className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                      Manual: {row.manual}
                    </div>
                    <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
                      AI: {row.ai}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="bg-white py-16 sm:py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <Badge variant="outline" className="mb-4">
                <Zap className="mr-1 h-3 w-3" />
                Simple Process
              </Badge>
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Get Optimized in 3 Simple Steps</h2>
              <p className="mx-auto max-w-2xl text-pretty text-lg text-[#374151]">
                No complicated setup. Just paste your LinkedIn URL and let our AI do the heavy lifting.
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-3">
              <div className="relative">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="mb-2 text-xl font-semibold">Paste Your LinkedIn URL</h3>
                <p className="text-pretty text-[#374151] leading-relaxed">
                  Simply enter your LinkedIn profile URL to get started. No login required, completely secure.
                </p>
              </div>

              <div className="relative">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="mb-2 text-xl font-semibold">Get Your Profile Score</h3>
                <p className="text-pretty text-[#374151] leading-relaxed">
                  Our AI scans your profile and provides a detailed score with specific areas to improve.
                </p>
              </div>

              <div className="relative">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="mb-2 text-xl font-semibold">Apply Recommendations</h3>
                <p className="text-pretty text-[#374151] leading-relaxed">
                  Follow our actionable tips to optimize your profile and start getting more views and connections.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" className="gap-2">
                Start Optimizing Now <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="bg-white py-16 sm:py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <Badge variant="outline" className="mb-4">
                <Users className="mr-1 h-3 w-3" />
                Testimonials
              </Badge>
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Loved by Thousands of Professionals</h2>
              <p className="mx-auto max-w-2xl text-pretty text-lg text-[#374151]">
                See what our users have to say about their success stories.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="mb-4 flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" alt="Sarah Chen" />
                      <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">Sarah Chen</CardTitle>
                      <CardDescription>Software Engineer at Google</CardDescription>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed text-[#374151]">
                    "Within 2 weeks of optimizing my profile, I got 3 interview requests from top tech companies. The
                    keyword suggestions were spot on!"
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-4 flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" alt="Michael Rodriguez" />
                      <AvatarFallback>MR</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">Michael Rodriguez</CardTitle>
                      <CardDescription>Product Manager at Amazon</CardDescription>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed text-[#374151]">
                    "I was skeptical at first, but the profile score showed me exactly what I was missing. My profile
                    views increased by 200% in the first month."
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-4 flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" alt="Emily Thompson" />
                      <AvatarFallback>ET</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">Emily Thompson</CardTitle>
                      <CardDescription>Marketing Director at Meta</CardDescription>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed text-[#374151]">
                    "The headline generator alone was worth it. I went from generic titles to a compelling headline that
                    actually represents my value. Highly recommend!"
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 sm:py-24">
          <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <Badge variant="outline" className="mb-4">
                FAQ
              </Badge>
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Frequently Asked Questions</h2>
              <p className="text-pretty text-lg text-[#374151]">
                Everything you need to know about LinkedIn optimization.
              </p>
            </div>

            <Accordion className="w-full">
              <AccordionItem>
                <AccordionTrigger>How does the LinkedIn profile scanner work?</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-[#374151]">
                  Our AI-powered scanner analyzes your LinkedIn profile by checking your headline, summary, experience,
                  skills, and other key sections. It compares your profile against successful profiles in your industry
                  and provides specific recommendations to improve visibility and engagement.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem>
                <AccordionTrigger>Is my LinkedIn data secure?</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-[#374151]">
                  Absolutely. We only access publicly available information from your LinkedIn profile. We never ask for
                  your LinkedIn login credentials and all data is encrypted and processed securely. Your privacy is our
                  top priority.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem>
                <AccordionTrigger>How long does it take to see results?</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-[#374151]">
                  Most users see an increase in profile views within the first week of implementing our recommendations.
                  However, the full impact typically becomes noticeable within 2-4 weeks as LinkedIn's algorithm starts
                  promoting your optimized profile.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem>
                <AccordionTrigger>Do I need a LinkedIn Premium account?</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-[#374151]">
                  No, you don't need LinkedIn Premium to use our optimization tool. However, Premium can complement our
                  service by giving you additional insights into who's viewing your profile after you've optimized it.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem>
                <AccordionTrigger>What if I'm not satisfied with the results?</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-[#374151]">
                  We offer a 30-day money-back guarantee. If you don't see improvements in your profile engagement after
                  implementing our recommendations, we'll provide a full refund, no questions asked.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-primary py-16 text-primary-foreground sm:py-24">
          <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Ready to Transform Your LinkedIn Profile?</h2>
            <p className="mb-8 inline-block rounded-lg bg-white/90 px-4 py-2 text-pretty text-lg font-semibold text-[#0f172a] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              Join 10,000+ professionals who have already optimized their profiles and landed their dream jobs.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" className="gap-2">
                Get Started Free <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
