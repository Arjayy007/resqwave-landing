import { ChatbotConvo } from "@/pages/LandingPage/components/ChatbotConvo";
import { LandingHeader } from "@/pages/LandingPage/components/Header";
import { LandingHero } from "@/pages/LandingPage/components/Hero";
import { useEffect, useState } from "react";
import { LandingCTA } from "./components/CTA";
import { LandingFAQs } from "./components/FAQs";
import { LandingFooter } from "./components/Footer";
import { LandingGoal } from "./components/Goal";
import { LandingHowItWorks } from "./components/HowItWorks";
import { LandingNumbers } from "./components/Numbers";

export function LandingPage() {
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Apply background/fixed style after minimal scroll
          if (currentScrollY > 20) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }

          // Hide/show logic - only when scrolled down significantly
          if (currentScrollY < 100) {
            // Always show near top
            setShowHeader(true);
          } else if (currentScrollY < lastScrollY - 5) {
            // Scrolling up (with small buffer to avoid jitter)
            setShowHeader(true);
          } else if (currentScrollY > lastScrollY + 5) {
            // Scrolling down (with small buffer to avoid jitter)
            setShowHeader(false);
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="min-h-screen text-white flex flex-col bg-[#171717] relative overflow-x-hidden w-full">
      {/* Global Radial Gradient Backgrounds with animation */}
      <div
        className="fixed z-0 rounded-full pointer-events-none blur-[100px] w-[clamp(300px,45vw,500px)] h-[clamp(300px,45vw,500px)] -right-[10%] top-[85%] lg:top-[90%]"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 30, 90, 0.28) 0%, rgba(0, 50, 150, 0.28) 50%, rgba(23, 23, 23, 0.1) 100%)",
        }}
      />
      <div
        className="fixed z-0 rounded-full pointer-events-none blur-[100px] w-[clamp(350px,50vw,550px)] h-[clamp(350px,50vw,550px)] -left-[15%] lg:-left-[10%] -top-[30%] lg:-top-[35%]"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 30, 90, 0.28) 0%, rgba(0, 50, 150, 0.28) 40%, rgba(23, 23, 23, 0.1) 100%)",
        }}
      />
      {/* Header */}
      <LandingHeader
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        isScrolled={isScrolled}
        showHeader={showHeader}
      />
      {/* Hero Section */}
      <LandingHero />
      <LandingGoal />
      <LandingHowItWorks />
      <LandingNumbers />
      <LandingFAQs />
      <LandingCTA />
      <LandingFooter />
      {/* Floating Chatbot Widget */}
      <ChatbotConvo />
    </div>
  );
}
