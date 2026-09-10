"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaSun, FaCalendarAlt, FaMapMarkerAlt, FaGlobe, FaArrowRight } from "react-icons/fa";

interface PageHeroProps {
  title: string;
  subtitle: string;
  badge?: string;
  tagline?: string;
  chips?: Array<{ icon?: React.ReactNode; text: string }>;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

const heroBg = "/assets/vedic_hero_bg.jpg";

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  badge = "॥ तमसो मा ज्योतिर्गमय ॥ · PRAKASH 2027",
  tagline,
  chips = [
    { icon: <FaCalendarAlt className="text-[#EA580C]" />, text: "26–27 February 2027" },
    { icon: <FaMapMarkerAlt className="text-[#FBBF24]" />, text: "PIET, Jaipur, Rajasthan" },
    { icon: <FaGlobe className="text-[#EA580C]" />, text: "Hybrid Mode" },
  ],
  primaryCta,
  secondaryCta,
}) => {
  return (
    <section
      className="relative w-full min-h-[46vh] lg:min-h-[52vh] flex items-center justify-center overflow-hidden py-16 sm:py-20 px-4"
      aria-label={title}
    >
      {/* ── BACKGROUND: Sacred Vedic Temple Sunrise Artwork ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 5, ease: "easeOut" }}
        >
          <Image
            src={heroBg}
            alt="Sacred Vedic Temple Architecture in the golden morning light of Prakash 2027"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            quality={90}
          />
        </motion.div>

        {/* Dark-amber atmospheric vignette ensuring 100% text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 95% 80% at 50% 45%, rgba(18, 6, 2, 0.86) 0%, rgba(22, 8, 2, 0.94) 65%, rgba(14, 4, 1, 0.98) 100%)",
          }}
        />

        {/* Top golden bloom */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full opacity-30 blur-[120px]"
          style={{ background: "radial-gradient(circle, #FBBF24 0%, #EA580C 60%, transparent 80%)" }}
        />

        {/* Bottom smooth fade to content section */}
        <div
          className="absolute inset-x-0 bottom-0 h-28"
          style={{
            background: "linear-gradient(to top, rgba(18, 6, 2, 0.95) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* ── CONTENT CONTAINER ── */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">

        {/* 1. Sanskrit / Edition Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 backdrop-blur-md shadow-md"
          style={{
            background: "linear-gradient(135deg, rgba(234,88,12,0.28) 0%, rgba(245,158,11,0.2) 100%)",
            border: "1px solid rgba(251, 191, 36, 0.45)",
            boxShadow: "0 0 20px rgba(245, 158, 11, 0.16)",
          }}
        >
          <FaSun className="text-[#FBBF24] text-[11px] animate-spin" style={{ animationDuration: "14s" }} />
          <span className="text-xs sm:text-[13px] font-bold tracking-wider text-[#FDE68A]">
            {badge}
          </span>
        </motion.div>

        {/* 2. Main Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="font-black leading-tight tracking-tight mb-4"
          style={{
            fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
            color: "#FEF08A",
            background: "linear-gradient(135deg, #FFFFFF 20%, #FEF08A 50%, #FBBF24 75%, #EA580C 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 4px 20px rgba(234, 88, 12, 0.35))",
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </motion.h1>

        {/* 3. Subtitle / Description */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="text-sm sm:text-base md:text-lg text-[#FED7AA]/90 font-medium leading-relaxed max-w-2xl mb-6"
        >
          {subtitle}
        </motion.p>

        {/* Optional Tagline */}
        {tagline && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="italic text-xs sm:text-sm text-[#FDE68A]/80 mb-6 max-w-xl"
          >
            &ldquo;{tagline}&rdquo;
          </motion.p>
        )}

        {/* 4. Metadata Chips */}
        {chips && chips.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-4 sm:px-5 py-2 rounded-2xl bg-black/45 border border-[#F59E0B]/30 backdrop-blur-md text-xs sm:text-sm text-[#FEF08A] font-semibold mb-6 shadow-xl"
          >
            {chips.map((chip, idx) => (
              <React.Fragment key={idx}>
                <div className="flex items-center gap-1.5">
                  {chip.icon}
                  <span>{chip.text}</span>
                </div>
                {idx < chips.length - 1 && (
                  <span className="hidden sm:inline text-[#F59E0B]/50">•</span>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        )}

        {/* 5. Optional CTAs */}
        {(primaryCta || secondaryCta) && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white transition-all duration-300 hover:scale-[1.04] active:scale-95 shadow-lg shadow-[#EA580C]/35"
                style={{
                  background: "linear-gradient(135deg, #EA580C 0%, #D97706 60%, #F59E0B 100%)",
                }}
              >
                <span>{primaryCta.label}</span>
                <FaArrowRight className="text-xs" />
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-[#FDE68A] transition-all duration-300 hover:scale-[1.04] active:scale-95 bg-black/40 hover:bg-[#EA580C]/20 border border-[#F59E0B]/50 backdrop-blur-md"
              >
                <span>{secondaryCta.label}</span>
              </Link>
            )}
          </motion.div>
        )}

      </div>
    </section>
  );
};
