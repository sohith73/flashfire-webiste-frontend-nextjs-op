"use client";

import { useEffect, useState, useLayoutEffect } from "react";
import HomePage from "@/src/components/pages/home/Home";
import AboutUs from "@/src/components/pages/aboutUs/AboutUs";
import Features from "@/src/components/pages/features/Features";
import Navbar from "@/src/components/navbar/navbar";
import Footer from "@/src/components/footer/footer";
import dynamic from "next/dynamic";

const ATSPage = dynamic(() => import("@/app/ats-optimized-resume-checker/page"), {
  ssr: false,
});

const JobAutomationPage = dynamic(() => import("@/app/job-application-automation/page"), {
  ssr: false,
});

const LinkedInPage = dynamic(() => import("@/app/linkedin-profile-optimization-services/page"), {
  ssr: false,
});

export default function GetMeInterviewPage() {
    const [previousPage, setPreviousPage] = useState<string | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    useLayoutEffect(() => {
        setIsMounted(true);
        
        const savedPreviousPage = sessionStorage.getItem('previousPageBeforeGetMeInterview');
        if (savedPreviousPage) {
            setPreviousPage(savedPreviousPage);
        }
        
        const savedScrollY = sessionStorage.getItem('preserveScrollPosition');
        if (savedScrollY) {
            const scrollY = parseInt(savedScrollY, 10);
            
            window.scrollTo({ top: scrollY, behavior: 'instant' });
            
            const restoreScroll = () => {
                window.scrollTo({ top: scrollY, behavior: 'instant' });
            };
            
            requestAnimationFrame(() => {
                restoreScroll();
                requestAnimationFrame(() => {
                    restoreScroll();
                    setTimeout(() => {
                        restoreScroll();
                        sessionStorage.removeItem('preserveScrollPosition');
                    }, 100);
                });
            });
        }
    }, []);

    if (!isMounted) {
        return <HomePage />;
    }

    if (previousPage === '/about-us' || previousPage === '/en-ca/about-us') {
        return (
            <>
                <Navbar />
                <AboutUs />
                <Footer />
            </>
        );
    }

    if (previousPage === '/features' || previousPage === '/feature' || 
        previousPage === '/en-ca/features' || previousPage === '/en-ca/feature') {
        return (
            <>
                <Navbar />
                <Features />
                <Footer />
            </>
        );
    }

    if (previousPage === '/ats-optimized-resume-checker' || 
        previousPage === '/en-ca/ats-optimized-resume-checker') {
        return <ATSPage />;
    }

    if (previousPage === '/job-application-automation' || 
        previousPage === '/en-ca/job-application-automation') {
        return <JobAutomationPage />;
    }

    if (previousPage === '/linkedin-profile-optimization-services' || 
        previousPage === '/en-ca/linkedin-profile-optimization-services') {
        return <LinkedInPage />;
    }

    return <HomePage />;
}
