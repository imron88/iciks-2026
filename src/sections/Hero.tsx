"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaGlobe,
  FaArrowRight,
  FaBookOpen,
  FaSun,
  FaUniversity,
  FaScroll,
  FaAward,
  FaUsers,
  FaLeaf,
} from "react-icons/fa";

const heroBg = "/assets/vedic_hero_bg.jpg";

const conferenceHighlights = [
  {
    icon: <FaScroll className="text-[#FBBF24] text-lg" />,
    value: "5 Tracks",
    label: "35+ Sub-Tracks",
    desc: "Mathematics, Ayurveda, Vastu, Economics & Arts",
  },
  {
    icon: <FaAward className="text-[#FBBF24] text-lg" />,
    value: "NEP 2020",
    label: "Curriculum Integration",
    desc: "Empowering higher education with indigenous wisdom",
  },
  {
    icon: <FaLeaf className="text-[#FBBF24] text-lg" />,
    value: "IKS Expo",
    label: "Startups & Innovators",
    desc: "Live exhibitions of herbal tech, green building & manuscripts",
  },
  {
    icon: <FaUsers className="text-[#FBBF24] text-lg" />,
    value: "100–150",
    label: "Global Delegates",
    desc: "Academicians, Shastris & scientists from across the globe",
  },
];

export const Hero = () => {
  const heroRef = useRef(null);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[94vh] flex flex-col justify-between items-center overflow-hidden"
      aria-label="PRAKASH 2027 Conference Hero"
    >
      {/* ── BACKGROUND: Majestic Vedic Temple Sunrise ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.04 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6, ease: "easeOut" }}
        >
          <Image
            src={heroBg}
            alt="Sacred Vedic Temple Architecture in the radiant morning light of Prakash 2027"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            quality={92}
          />
        </motion.div>

        {/* Central radial vignette: softens background behind text without ugly hard boxes */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 75% at 50% 45%, rgba(18, 6, 2, 0.82) 0%, rgba(20, 7, 2, 0.92) 55%, rgba(14, 4, 1, 0.98) 100%)",
          }}
        />

        {/* Radiant golden sunburst flare centered from top */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[550px] w-[750px] rounded-full opacity-35 blur-[140px]"
          style={{ background: "radial-gradient(circle, #FBBF24 0%, #EA580C 50%, transparent 80%)" }}
        />

        {/* Smooth bottom fade into next section */}
        <div
          className="absolute inset-x-0 bottom-0 h-36"
          style={{
            background: "linear-gradient(to top, #140601 0%, rgba(20, 7, 2, 0.7) 60%, transparent 100%)",
          }}
        />
      </div>

      {/* ── MAIN CENTERPIECE HERO CONTENT ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-12 flex flex-col items-center text-center flex-grow justify-center">

        {/* 1. Sanskrit Invocation Pill */}
        <div
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-6 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-black/30"
          style={{
            background: "linear-gradient(135deg, rgba(234,88,12,0.25) 0%, rgba(245,158,11,0.18) 100%)",
            border: "1px solid rgba(251, 191, 36, 0.45)",
            boxShadow: "0 0 25px rgba(245, 158, 11, 0.18)",
          }}
        >
          <FaSun className="text-[#FBBF24] text-xs animate-spin" style={{ animationDuration: "14s" }} />
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#FDE68A]">
            ॥ असतो मा सद्गमय । तमसो मा ज्योतिर्गमय ॥
          </span>
          <span className="hidden md:inline text-xs text-[#FED7AA]/80 font-medium">
            · From Darkness, Lead Us Unto Light
          </span>
        </div>

        {/* 2. Conference Acronym Headline */}
        <div className="relative mb-3">
          <h1
            className="font-black leading-none tracking-tight select-none"
            style={{
              fontSize: "clamp(3.5rem, 8.5vw, 6.2rem)",
              color: "#FEF08A",
              background:
                "linear-gradient(135deg, #FFFFFF 15%, #FEF08A 45%, #FBBF24 75%, #EA580C 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.03em",
              filter: "drop-shadow(0 6px 28px rgba(234, 88, 12, 0.45))",
            }}
          >
            PRAKASH 2027
          </h1>
        </div>

        {/* 3. Full Conference Name */}
        <h2
          className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#FFFDF7] leading-snug tracking-tight mb-3 max-w-4xl"
          style={{ textShadow: "0 2px 14px rgba(0,0,0,0.6)" }}
        >
          International Conference on Indian Knowledge Systems
        </h2>

        {/* 4. Theme Quote / Motto */}
        <p className="text-sm sm:text-base md:text-lg text-[#FED7AA]/95 italic font-medium leading-relaxed max-w-3xl mb-7">
          &ldquo;Promoting Research, Advancement, and Knowledge Systems for Applied Sustainable Heritage (Legacy)&rdquo;
        </p>

        {/* 5. Clean Conference Metadata Ribbon */}
        <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-6 py-2.5 rounded-2xl bg-black/40 border border-[#F59E0B]/30 backdrop-blur-md text-xs sm:text-sm text-[#FEF08A] font-semibold mb-8 shadow-xl shadow-black/30">
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-[#EA580C]" />
            <span>26–27 February 2027</span>
          </div>
          <span className="hidden sm:inline text-[#F59E0B]/50">•</span>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-[#FBBF24]" />
            <span>PIET, Jaipur (Rajasthan), India</span>
          </div>
          <span className="hidden sm:inline text-[#F59E0B]/50">•</span>
          <div className="flex items-center gap-2">
            <FaGlobe className="text-[#EA580C]" />
            <span>Hybrid Mode (Physical + Virtual)</span>
          </div>
        </div>

        {/* 6. Clean, Impactful Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mb-7">
          <Link
            href="/callforpaper"
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl font-bold text-sm sm:text-base tracking-tight text-white transition-all duration-300 hover:scale-[1.04] active:scale-95 shadow-xl shadow-[#EA580C]/40 hover:shadow-[#EA580C]/60"
            style={{
              background: "linear-gradient(135deg, #EA580C 0%, #D97706 60%, #F59E0B 100%)",
            }}
          >
            <span>Call for Papers & Submissions</span>
            <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm sm:text-base tracking-tight text-[#FDE68A] transition-all duration-300 hover:scale-[1.04] active:scale-95 bg-black/35 hover:bg-[#EA580C]/20 border border-[#F59E0B]/50 backdrop-blur-md shadow-lg shadow-black/40"
          >
            <FaBookOpen className="text-xs text-[#FBBF24]" />
            <span>About Conference</span>
          </Link>

          <Link
            href="/registration"
            className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold text-[#FED7AA] hover:text-[#FEF08A] hover:bg-[#F59E0B]/10 rounded-2xl transition-all duration-200"
          >
            <span>Registration Guidelines</span>
            <span>&rarr;</span>
          </Link>
        </div>

        {/* 7. Institutional Organizer, Collaboration & Publishing Partner Attribution */}
        <div className="flex flex-col items-center gap-3.5 max-w-4xl mx-auto w-full">
          {/* Organizer */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#FED7AA]/85 font-medium">
            <FaUniversity className="text-[#FBBF24] text-xs flex-shrink-0" />
            <span>
              Organized by <strong className="text-[#FDE68A]">Department of Applied Sciences</strong>, Poornima Institute of Engineering & Technology
            </span>
          </div>

          {/* In Collaboration With & Publishing Partner Badges */}
          <div className="flex flex-wrap items-stretch justify-center gap-3 sm:gap-4 mt-1 w-full max-w-3xl">
            {/* In Collaboration with Bhishma */}
            <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-black/45 border border-[#F59E0B]/40 backdrop-blur-md text-left transition-all duration-200 hover:border-[#FBBF24]/70 shadow-lg flex-1 min-w-[280px]">
              <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-white p-0.5 border border-[#F59E0B]/50 shadow-sm">
                <Image
                  src="/assets/pics/bhishma-logo.png"
                  alt="Bhishma School of Indian Knowledge System"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#FBBF24]">In Collaboration With</span>
                <span className="text-xs sm:text-sm font-bold text-[#FFFDF7] leading-tight">
                  Bhishma School of Indian Knowledge System
                </span>
                <span className="text-[9px] text-[#FED7AA]/80 leading-tight mt-0.5">
                  Affiliated to Bhishma Sanatan Vedic Hindu Univ., America & Central Sanskrit Univ., New Delhi
                </span>
              </div>
            </div>

            {/* Publishing Partner: Journal of Dharma Studies (Springer Nature) */}
            <a
              href="https://www.springer.com/journal/42240"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-black/45 border border-[#EA580C]/45 backdrop-blur-md text-left transition-all duration-200 hover:border-[#EA580C]/80 shadow-lg group flex-1 min-w-[280px]"
            >
              <div className="relative h-10 w-16 rounded-lg overflow-hidden flex-shrink-0 bg-[#4A150D] p-1 border border-[#EA580C]/40 flex items-center justify-center shadow-sm">
                <Image
                  src="/assets/pics/journal-dharma-studies.png"
                  alt="Journal of Dharma Studies - Springer Nature"
                  width={64}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#EA580C]">Publishing Partner · Springer Nature</span>
                <span className="text-xs sm:text-sm font-bold text-[#FFFDF7] leading-tight group-hover:text-[#FDE68A] transition-colors">
                  Journal of Dharma Studies
                </span>
                <span className="text-[9px] text-[#FED7AA]/80 leading-tight mt-0.5">
                  Asian and Transcultural Religion, Philosophy, & Ethics
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* ── CLEAN 4-COLUMN HIGHLIGHTS RIBBON ── */}
      <div className="relative z-10 w-full border-t border-[#F59E0B]/30 backdrop-blur-xl bg-gradient-to-r from-[#140601]/95 via-[#200A02]/92 to-[#140601]/95 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {conferenceHighlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-3 rounded-2xl transition-all duration-200 hover:bg-[#F59E0B]/10 group"
              >
                <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-[#EA580C]/20 border border-[#F59E0B]/40 flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-black text-[#FBBF24] tracking-tight">
                      {item.value}
                    </span>
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      {item.label}
                    </span>
                  </div>
                  <p className="text-xs text-[#FED7AA]/75 leading-relaxed mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
