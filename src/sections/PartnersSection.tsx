"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const ieeeLogoPath = "/assets/pics/ieee_sb.png";
const acmLogoPath = "/assets/pics/acm.png";
const ieteLogoPath = "/assets/pics/iete.png";
const crc = "/assets/pics/crc.png";
const taru = "/assets/pics/taru.png";
const idea = "/assets/pics/idea.png";
const logoIci = "/assets/pics/logo-ici.png";
const bhishmaLogo = "/assets/pics/bhishma-logo.png";
const journalDharmaLogo = "/assets/pics/journal-dharma-studies.png";

type PartnerType = "collaboration" | "publication" | "technical";

interface Partner {
  id: string;
  name: string;
  bio: string;
  logo: string;
  type: PartnerType;
  website?: string;
  affiliation?: string;
}

const partners: Partner[] = [
  {
    id: "collab-1",
    name: "Bhishma School of Indian Knowledge System",
    bio: "In collaboration with Bhishma School of Indian Knowledge System. Affiliated to Bhishma Sanatan Vedic Hindu University (America) & Central Sanskrit University (New Delhi). Dedicated to research, preservation, and education across Indian Knowledge Systems.",
    logo: bhishmaLogo,
    type: "collaboration",
  },
  {
    id: "pub-dharma",
    name: "Journal of Dharma Studies",
    bio: "Publishing Partner: Journal of Dharma Studies — Asian and Transcultural Religion, Philosophy, & Ethics. International peer-reviewed research journal published by Springer Nature.",
    logo: journalDharmaLogo,
    type: "publication",
  },
  {
    id: "pub-1",
    name: "Springer Conference Proceedings",
    bio: "Proposed publisher of scientific conference proceedings, including Lecture Notes in Networks and Systems (LNNS) or CCIS series.",
    logo: logoIci,
    type: "publication",
  },
  {
    id: "pub-2",
    name: "Taru Publication",
    bio: "Leading publisher of academic research papers and technical journals.",
    logo: taru,
    type: "publication",
  },
  {
    id: "pub-3",
    name: "*CRC Publication",
    bio: "Premier publisher of technical and scientific resources with global reach.",
    logo: crc,
    type: "publication",
  },
  {
    id: "tech-1",
    name: "IETE",
    bio: "Institution of Electronics and Telecommunication Engineers — promoting electronics and telecommunication engineering in India.",
    logo: ieteLogoPath,
    type: "technical",
  },
  {
    id: "tech-2",
    name: "IEEE Student Branch",
    bio: "IEEE Student Branch STB10159 at Poornima Institute of Engineering and Technology.",
    logo: ieeeLogoPath,
    type: "technical",
  },
  {
    id: "tech-3",
    name: "ACM",
    bio: "Association for Computing Machinery — international learned society for computing professionals and researchers.",
    logo: acmLogoPath,
    type: "technical",
  },
];

const tabs: { key: PartnerType; label: string }[] = [
  { key: "collaboration", label: "In Collaboration With" },
  { key: "publication", label: "Publication Partners" },
  { key: "technical", label: "Technical Partners" },
];

const contentVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, staggerChildren: 0.08 } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.25 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export const PartnersSection = () => {
  const [activeTab, setActiveTab] = useState<PartnerType>("collaboration");
  const filtered = partners.filter((p) => p.type === activeTab);

  return (
    <section
      className="relative w-full py-12 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FFFDF7 0%, #FEF9EE 50%, #FFFDF7 100%)" }}
    >
      {/* Subtle saffron grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(234,88,12,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(234,88,12,0.3) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      {/* Glow blobs */}
      <div aria-hidden className="pointer-events-none absolute -top-20 left-1/3 h-64 w-64 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #EA580C, transparent 70%)" }} />
      <div aria-hidden className="pointer-events-none absolute bottom-0 right-1/4 h-52 w-52 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #F59E0B, transparent 70%)" }} />

      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">

        {/* ── Section header ── */}
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.18em] uppercase mb-4"
            style={{
              background: "linear-gradient(135deg, rgba(234,88,12,0.1), rgba(245,158,11,0.18))",
              border: "1px solid rgba(234,88,12,0.25)",
              color: "#C2410C",
            }}
          >
            Partners & Supporters
          </span>

          <h2
            className="font-bold leading-tight mt-3"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              background: "linear-gradient(135deg, #1C0B02 30%, #7C2D12 70%, #EA580C 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.02em",
            }}
          >
            Our Partners
          </h2>

          <p
            className="mt-3 mx-auto text-base sm:text-lg"
            style={{ color: "#2E1104", opacity: 0.75, maxWidth: "38rem", lineHeight: 1.75 }}
          >
            PRAKASH 2027 is proudly supported by leading academic and cultural institutions dedicated to advancing Indian Knowledge Systems research and innovation.
          </p>

          <div
            className="mx-auto mt-5 h-px w-20"
            style={{ background: "linear-gradient(90deg, #EA580C, #F59E0B)" }}
          />
        </div>

        {/* ── Tab switcher ── */}
        <div className="flex justify-center mb-12">
          <div
            className="inline-flex rounded-xl p-1 gap-1"
            style={{
              background: "rgba(234,88,12,0.06)",
              border: "1px solid rgba(245,158,11,0.25)",
            }}
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className="relative px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 tracking-wide"
                  style={{
                    color: isActive ? "#ffffff" : "#1C0B02",
                    opacity: isActive ? 1 : 0.7,
                    background: "transparent",
                    boxShadow: "none",
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="tab-pill"
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background: "linear-gradient(135deg, #EA580C 0%, #D97706 100%)",
                        boxShadow: "0 2px 10px rgba(234,88,12,0.35)",
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className={`relative z-10 ${isActive ? "text-white font-bold" : ""}`}>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Cards grid — centred ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-wrap justify-center gap-6"
          >
            {filtered.map((partner) => (
              <motion.div
                key={partner.id}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { type: "spring", stiffness: 300, damping: 22 } }}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden transition-all duration-200"
                style={{
                  width: "clamp(240px, 28vw, 300px)",
                  border: "1px solid rgba(245, 158, 11, 0.25)",
                  boxShadow: "0 2px 18px rgba(234, 88, 12, 0.06)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.border = "1px solid rgba(234,88,12,0.5)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(234,88,12,0.16)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.border = "1px solid rgba(245,158,11,0.25)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 18px rgba(234,88,12,0.06)";
                }}
              >
                {/* Logo area */}
                <div
                  className="flex items-center justify-center p-8 bg-[#FEF9EE]/60"
                  style={{ minHeight: 160 }}
                >
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={160}
                    height={100}
                    className="object-contain w-auto"
                    style={{ maxHeight: 90 }}
                  />
                </div>

                {/* Divider */}
                <div
                  className="h-px w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(90deg, transparent, #EA580C, transparent)" }}
                />

                {/* Content */}
                <div className="flex flex-col gap-2 p-5 flex-grow bg-[#FFFDF7]">
                  <h3
                    className="font-bold text-base text-center leading-snug"
                    style={{ color: "#1C0B02" }}
                  >
                    {partner.name}
                  </h3>
                  <p
                    className="text-xs text-center leading-relaxed"
                    style={{ color: "#2E1104", opacity: 0.75 }}
                  >
                    {partner.bio}
                  </p>

                  {/* Footer badge */}
                  <div className="flex justify-center mt-auto pt-3">
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase"
                      style={{
                        background: "rgba(234,88,12,0.08)",
                        border: "1px solid rgba(245,158,11,0.25)",
                        color: "#C2410C",
                      }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#EA580C]" />
                      PRAKASH 2027
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};