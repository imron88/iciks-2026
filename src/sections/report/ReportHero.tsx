"use client";
import { PageHero } from "@/components/PageHero";

export const ReportHero = () => {
  return (
    <PageHero
      badge="॥ तमसो मा ज्योतिर्गमय ॥ · PRAKASH 2027"
      title="Conference Report & Proceedings"
      subtitle="Comprehensive insights, delegate participation metrics, track deliberations, and key outcomes from PRAKASH 2027"
      primaryCta={{ label: "View All Tracks", href: "/callforpaper" }}
      secondaryCta={{ label: "Contact Secretariat", href: "/contact" }}
    />
  );
};
