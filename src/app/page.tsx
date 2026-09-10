"use client";
import { useState, useEffect } from "react";
import { BentoGridSection } from "@/sections/BentoGridSection";
import { ContactSection } from "@/sections/ContactSection";
// import { AIPStrip } from "@/sections/AIPStrip";
import { Hero } from "@/sections/Hero";
import { IntroductionSection } from "@/sections/IntroductionSection";
import { PartnersSection } from "@/sections/PartnersSection";
import { SubmitPaperPopup } from "@/components/SubmitPaperPopup";

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Auto-open popup after 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      {/* <AIPStrip /> */}
      <Hero />
      <IntroductionSection />
      <BentoGridSection />
      {/* <PartnersSection /> */}
      {/* <ContactSection />s */}
      {/* <SubmitPaperPopup isOpen={isPopupOpen} onClose={handleClosePopup} /> */}
    </div>
  );
}
