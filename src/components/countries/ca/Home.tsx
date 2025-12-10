"use client";

import { useEffect } from "react";
import HeroSection from "../../heroSection/heroSection";
import HomePageVideo from "../../homePageVideo/homePageVideo";
import HomePageResultStats from "../../homePageResultStats/homePageResultStats";
import HomePageMilestones from "../../homePageMilestones/homePageMilestones";
import HomePageSteps from "../../homePageSteps/homePageSteps";
import HomePageOfferLetters from "../../homePageOfferLetters/homePageOfferLetters";
import HomePageWhyChooseFF from "../../homePageWhyChooseFF/homePageWhyChooseFF";
import HomePageHappyUsers from "../../homePageHappyUsers/homePageHappyUsers";
import HomePagePTNote from "../../homePagePTNote/homePagePTNote";
import HomePageFAQ from "../../homePageFAQ/homePageFAQ";
import HomePageFoundersNote from "../../homePageFoundersNote/homePageFoundersNote";
import HomePageCareerCTA from "../../homePageCareerCTA/homePageCareerCTA";
import Navbar from "../../navbar/navbar";
import Footer from "../../footer/footer";
import { usePathname } from "next/navigation";

export default function CanadaHome() {
  const pathname = usePathname();

  useEffect(() => {
    // Track Canada-specific page view
    // Add PostHog tracking here if needed
    
    // Scroll to top when navigating to Canada home page
    const isCanadaHomePage = pathname === "/en-ca";
    
    if (isCanadaHomePage) {
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
        
        // Also scroll after a short delay to catch any late scrolls from browser restoration
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "instant" });
        }, 50);
        
        // One more check after layout
        requestAnimationFrame(() => {
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "instant" });
          }, 100);
        });
      });
    }
  }, [pathname]);

  return (
    <>
      <Navbar />
      <HeroSection />
      <HomePageVideo />
      <HomePageResultStats />
      <HomePageMilestones />
      <HomePageSteps />
      <HomePageOfferLetters />
      <HomePageWhyChooseFF />
      <HomePageHappyUsers />
      <HomePagePTNote />
      <HomePageFAQ />
      <HomePageFoundersNote />
      <HomePageCareerCTA />
      <Footer />
    </>
  );
}

