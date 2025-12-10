"use client";

import { useEffect } from "react";
import Navbar from "@/src/components/navbar/navbar";
import Footer from "@/src/components/footer/footer";
import HomePagePricingPlans from "@/src/components/homePagePricingPlans/homePagePricingPlans";
import HomePageHappyUsers from "@/src/components/homePageHappyUsers/homePageHappyUsers";
import HomePageFoundersNote from "@/src/components/homePageFoundersNote/homePageFoundersNote";
import HomePageFAQ from "@/src/components/homePageFAQ/homePageFAQ";

export default function PricingPageClient() {
  useEffect(() => {
    // Always scroll to top when navigating to pricing page
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
  }, []);

  return (
    <>
      <Navbar />
      <HomePagePricingPlans />
      <HomePageHappyUsers />
      <HomePageFoundersNote />
      <HomePageFAQ />
      <Footer />
    </>
  );
}
