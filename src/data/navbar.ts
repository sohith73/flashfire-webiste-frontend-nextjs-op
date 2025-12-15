import type { NavLink, NavbarCTA } from "../types/navbarData";

export const navbarLinks: NavLink[] = [
  { name: "Testimonials", href: "/testimonials" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blogs", target: "_blank" },
  { name: "Employers", href: "/employers", target: "_blank" },
];

export const navbarCTAs: NavbarCTA = {
  primary: { label: "Talk to an Expert →", href: "/talk-to-an-expert" },
  // When clicked, this should take the user to the "How it works" video
  // section on the homepage (handled via smooth scrolling in NavbarClient).
  secondary: { label: "How It Works", href: "/" },
};
