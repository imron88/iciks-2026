"use client";
import { PageHero } from "@/components/PageHero";

export const PartnersHero = () => {
  return (
    <PageHero
      badge="॥ तमसो मा ज्योतिर्गमय ॥ · PRAKASH 2027"
      title="Sponsors & Partners"
      subtitle="Join hands with PRAKASH 2027 to champion research, heritage preservation, and indigenous innovation"
      tagline="Empowering sustainable heritage through academic, institutional, and industrial collaboration"
      primaryCta={{
        label: "Partner with Us",
        href: "mailto:iksconf.prakash@poornima.org?subject=Partnership%20Inquiry%20-%20PRAKASH%202027",
      }}
      secondaryCta={{ label: "About Conference", href: "/about" }}
    />
  );
};
