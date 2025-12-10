"use client";

import { useState, useMemo } from "react";
import { FaBolt } from "react-icons/fa";
import { trackButtonClick } from "@/src/utils/PostHogTracking";
import { GTagUTM } from "@/src/utils/GTagUTM";

interface PricingPlan {
  title: string;
  tag?: string;
  subTitle: string;
  description: string;
  price: string;
  oldPrice?: string;
  features: string[];
  addOn?: boolean;
  highlight?: boolean;
  paymentLink?: string;
}

interface PricingCardProps {
  title: string;
  tag?: string;
  subTitle: string;
  description: string;
  price: string;
  oldPrice?: string;
  features: string[];
  addOn?: boolean;
  highlight?: boolean;
  paymentLink?: string;
  allPlans?: PricingPlan[];
  onUpgradeClick?: (planTitle: string) => void;
  isUpgradeOptionsVisible?: boolean;
  onBoosterClick?: (planTitle: string) => void;
  isBoosterOptionsVisible?: boolean;
  onOptionsClick?: (planTitle: string) => void;
  isOptionsVisible?: boolean;
}

export default function PricingCard({
  title,
  tag,
  subTitle,
  description,
  price,
  oldPrice,
  features,
  addOn,
  highlight,
  paymentLink,
  allPlans = [],
  onUpgradeClick,
  isUpgradeOptionsVisible = false,
  onBoosterClick,
  isBoosterOptionsVisible = false,
  onOptionsClick,
  isOptionsVisible = false,
}: PricingCardProps) {
  // Check if this plan has upgrade options
  const hasUpgradeOptions = useMemo(() => {
    if (!allPlans || allPlans.length === 0) return false;
    
    const planHierarchy = ["PRIME", "IGNITE", "PROFESSIONAL", "EXECUTIVE"];
    const currentPlanIndex = planHierarchy.indexOf(title);
    
    if (currentPlanIndex === -1 || currentPlanIndex === planHierarchy.length - 1) {
      return false;
    }
    
    // Check if there are any plans higher in hierarchy (excluding IGNITE from PRIME)
    return allPlans.some(plan => {
      const planIndex = planHierarchy.indexOf(plan.title);
      if (title === "PRIME" && plan.title === "IGNITE") {
        return false;
      }
      return planIndex > currentPlanIndex;
    });
  }, [title, allPlans]);

  // Parse base price from string (handles "$199" or "CA$279")
  const basePrice = useMemo(() => {
    const priceMatch = price.match(/[\d.]+/);
    return priceMatch ? parseFloat(priceMatch[0]) : 0;
  }, [price]);

  // Get currency symbol
  const currencySymbol = useMemo(() => {
    if (price.includes("CA$")) return "CA$";
    if (price.includes("$")) return "$";
    return "$";
  }, [price]);

  // Calculate displayed price: show base price
  const displayedPrice = useMemo(() => {
    return basePrice;
  }, [basePrice]);

  // Format price with currency
  const formattedPrice = useMemo(() => {
    return `${currencySymbol}${displayedPrice.toFixed(0)}`;
  }, [displayedPrice, currencySymbol]);

  // Get payment URL: use original paymentLink
  const currentPaymentLink = useMemo(() => {
    return paymentLink;
  }, [paymentLink]);
  
  return (
    <div className="flex flex-col w-full h-full">
    <div
      className={`bg-white border rounded-[0.3rem] p-8 flex-1 flex flex-col text-left relative transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.05)] max-[768px]:p-6 ${highlight ? "border-2 border-[#ff4c00]" : "border border-black"}`}
    >
      {tag && (
        <div
          className={`absolute -top-3 left-1/2 -translate-x-1/2 text-white text-[0.9rem] font-semibold rounded px-3 py-1 ${
            tag === "MOST POPULAR" ? "bg-[#ff4c00]" : "bg-[#111]"
          }`}
        >
          {tag}
        </div>
      )}

      <h4 className="text-[#ff4c00] text-[1.5rem] font-bold mb-1 max-[768px]:text-[1.3rem] max-[480px]:text-[1.2rem]">
        {title}
      </h4>
      
      <div className="flex items-baseline gap-2.5 mb-3">
        <h3 className="text-[1.8rem] font-bold text-black max-[768px]:text-[1.6rem]">
          {formattedPrice}
        </h3>
        {oldPrice && (
          <span className="text-base text-[#999] line-through max-[768px]:text-sm">
            {oldPrice}
          </span>
        )}
      </div>

      <p className="text-[#555] text-base mb-6 max-[768px]:text-[0.9rem]">
        {description}
      </p>

      <hr className="-mt-1 mb-3 text-black" />

      <ul className="list-none p-0 mb-6 flex-grow max-[480px]:min-h-[10rem]">
        {/* Subtitle as first feature item - bold and colored */}
        <li className="flex items-center gap-2 text-base font-extrabold text-[#ff4c00] mb-3 max-[768px]:text-[0.95rem] max-[480px]:text-[0.9rem]">
          <FaBolt className="text-[#ff4c00] text-lg flex-shrink-0" /> 
          <span className="font-extrabold text-[#ff4c00]">{subTitle}</span>
        </li>
        {features.map((feature, i) => (
          <li
            key={i}
            className="flex items-center gap-2 text-base text-black mb-2 max-[768px]:text-[0.9rem] max-[480px]:text-[0.85rem]"
          >
            <FaBolt className="text-[#ff4c00] text-base" /> {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto">
      {(addOn || hasUpgradeOptions) ? (
        <button
          onClick={() => {
            if (onOptionsClick) {
              onOptionsClick(title);
            } else {
              // Fallback to individual handlers if combined handler not provided
              if (addOn && onBoosterClick) {
                onBoosterClick(title);
              } else if (hasUpgradeOptions && onUpgradeClick) {
                onUpgradeClick(title);
              }
            }
          }}
          className="bg-[#ff4c00] text-white border-none py-2 px-4 font-semibold text-sm rounded-[0.5rem] w-full cursor-pointer transition-all duration-300 hover:bg-[#e24300] mb-4"
        >
          {addOn && hasUpgradeOptions ? "View Options" : addOn && title === "EXECUTIVE" ? "View Options" : addOn ? "Booster Add-On" : "Upgrade Plan"}
        </button>
      ) : (
        <div className="mb-4 h-[2.5rem]"></div>
      )}

       {/* <p className="text-[0.85rem] text-[#555] mb-5">
        Total {subTitle.toLowerCase()} included
      </p> */}

      <button
        className="bg-black text-white border-none py-[0.9rem] px-4 font-semibold text-[0.95rem] rounded-[0.4rem] w-full cursor-pointer transition-all duration-300 hover:bg-[#111] max-[768px]:text-[0.9rem] max-[768px]:py-3 max-[480px]:text-[0.85rem] max-[480px]:py-[0.7rem] max-[480px]:px-[0.9rem]"
        onClick={() => {
          const utmSource = typeof window !== "undefined"
            ? localStorage.getItem("utm_source") || "WEBSITE"
            : "WEBSITE";
          const utmMedium = typeof window !== "undefined"
            ? localStorage.getItem("utm_medium") || "Pricing_Section"
            : "Pricing_Section";
          
          const finalPlanName = title;
          const finalPrice = formattedPrice;
          const finalSubtitle = subTitle;
          
          if (typeof window !== "undefined") {
            GTagUTM({
              eventName: "pricing_cta_click",
              label: `Pricing_${finalPlanName}_Button`,
              utmParams: {
                utm_source: utmSource,
                utm_medium: utmMedium,
                utm_campaign: localStorage.getItem("utm_campaign") || "Website",
              },
            });
          }
          
          // PostHog tracking
          trackButtonClick(`Start Now - ${finalPlanName}`, "pricing_cta", "cta", {
            button_location: "pricing_plan",
            plan_name: finalPlanName,
            original_plan: title,
            plan_price: finalPrice,
            plan_subtitle: finalSubtitle,
            selected_booster: null,
            total_price: finalPrice
          });
          
          if (currentPaymentLink) {
            window.open(currentPaymentLink, "_blank");
          }
        }}
      >
       Start Now
      </button>
      </div>
    </div>

    </div>
  );
}
