"use client";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { FaCalculator, FaHeartbeat, FaLeaf, FaBalanceScale, FaBookOpen } from "react-icons/fa";

// Theme accents per card: Saffron, Gold, Terracotta, Amber
const SAFFRON = "#EA580C";
const GOLD = "#D97706";
const TERRACOTTA = "#C2410C";
const AMBER = "#B45309";

const features = [
  {
    trackNum: "Track 1",
    title: "Scientific Heritage, Mathematics, and Technology",
    subtitle: "Sulba Sutras, Astronomy & Computing",
    description:
      "Investigating the Kerala School of Mathematics, ancient astronomy, Aryabhata, Sulba Sutras sacred geometry, traditional metallurgy (Wootz steel), hydrological engineering (stepwells), and Paninian grammar in NLP and AI logic.",
    icon: <FaCalculator className="h-6 w-6" />,
    accent: SAFFRON,
  },
  {
    trackNum: "Track 2",
    title: "Holistic Health, Wellness, and Life Sciences",
    subtitle: "Charaka Samhita, Ayurveda & Yoga",
    description:
      "Evidence-based Ayurveda with clinical trials, Charaka Samhita herbal pharmacognosy, Yoga and neuroplasticity, ethnobotany, Siddha & Unani systems, Dinacharya chronobiology, and holistic mental health.",
    icon: <FaHeartbeat className="h-6 w-6" />,
    accent: GOLD,
  },
  {
    trackNum: "Track 3",
    title: "Environmental Ethics, Sustainable Architecture, and Agriculture",
    subtitle: "Temple Architecture, Vastu & Eco-Cosmology",
    description:
      "Temple Gopuram architecture, Vastu Shastra climate-responsive design, Sacred Groves and Traditional Ecological Knowledge (TEK), organic Vedic farming, seed sovereignty, ancient stepwell water harvesting, and Vedic eco-cosmology.",
    icon: <FaLeaf className="h-6 w-6" />,
    accent: TERRACOTTA,
  },
  {
    trackNum: "Track 4",
    title: "Governance, Economics, Ethics, and Management",
    subtitle: "Arthashastra, Dharma & Vedic Leadership",
    description:
      "Kautilya's Arthashastra, Dharma and Nyaya jurisprudence, ancient Indian trade guilds (Shreni), maritime trade networks, conflict resolution strategies from epics, fiscal welfare economics, and Upanishadic ethical leadership.",
    icon: <FaBalanceScale className="h-6 w-6" />,
    accent: AMBER,
  },
  {
    trackNum: "Track 5",
    title: "Literature, Pedagogy, Arts, and Cultural Heritage",
    subtitle: "Upanishadic Wisdom, Gurukul & Digital Preservation",
    description:
      "IKS curriculum integration under NEP 2020, experiential Gurukul models, Vedic chanting, Natya Shastra aesthetics, 3D laser scanning & AI digitization of ancient palm-leaf manuscripts, epigraphy, and cultural tourism.",
    icon: <FaBookOpen className="h-6 w-6" />,
    accent: SAFFRON,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function BentoGridSection() {
  return (
    <section
      className="relative w-full py-12 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FFFDF7 0%, #FEF9EE 40%, #FFFDF7 100%)" }}
    >
      {/* Faint saffron grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(234,88,12,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(234,88,12,0.3) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      {/* Glow blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 right-1/3 h-64 w-64 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #EA580C, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/4 h-56 w-56 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #F59E0B, transparent 70%)" }}
      />

      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">

        {/* ── Section header ── */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          <span
            className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.18em] uppercase mb-4"
            style={{
              background: "linear-gradient(135deg, rgba(234,88,12,0.1), rgba(245,158,11,0.18))",
              border: "1px solid rgba(234,88,12,0.25)",
              color: "#C2410C",
            }}
          >
            Conference Tracks
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
            Tracks @ PRAKASH 2027
          </h2>

          <p
            className="mt-4 mx-auto text-base sm:text-lg"
            style={{ color: "#2E1104", opacity: 0.75, maxWidth: "42rem", lineHeight: 1.75 }}
          >
            Explore the five broad thematic areas covered at the International Conference on Indian Knowledge Systems, bridging ancient wisdom and modern scientific research.
          </p>

          <div
            className="mx-auto mt-5 h-px w-20"
            style={{ background: "linear-gradient(90deg, #EA580C, #F59E0B)" }}
          />
        </motion.div>

        {/* ── Cards container: 3 on top row, last 2 wrapped and centered in middle on desktop ── */}
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="group relative flex flex-col gap-4 p-8 bg-[#FFFDF7] border border-[#F59E0B]/30 rounded-3xl shadow-xl shadow-[#EA580C]/5 transition-all duration-300 hover:bg-[#FEF9EE] hover:border-[#EA580C]/40 hover:-translate-y-1.5 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              {/* Subtle top accent line */}
              <div
                className="absolute top-0 left-6 right-6 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, ${f.accent}, transparent)` }}
              />

              {/* Track badge + Icon row */}
              <div className="flex items-center justify-between">
                <div
                  className="h-11 w-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${f.accent}15`,
                    border: `1px solid ${f.accent}35`,
                    color: f.accent,
                  }}
                >
                  {f.icon}
                </div>
                <div className="flex flex-col items-end">
                  <span
                    className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                    style={{
                      background: `${f.accent}12`,
                      border: `1px solid ${f.accent}25`,
                      color: f.accent,
                    }}
                  >
                    {f.trackNum}
                  </span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D97706]">
                  {f.subtitle}
                </span>
                <h3
                  className="font-bold text-base leading-snug mt-1"
                  style={{ color: "#1C0B02" }}
                >
                  {f.title}
                </h3>
              </div>

              {/* Description */}
              <p
                className="text-sm leading-relaxed flex-grow text-justify transition-opacity duration-300 opacity-75 group-hover:opacity-95"
                style={{ color: "#2E1104" }}
              >
                {f.description}
              </p>

              {/* Bottom accent dot */}
              <div className="flex items-center gap-1.5 mt-auto pt-2">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: f.accent }}
                />
                <span
                  className="text-[11px] font-semibold tracking-wider uppercase"
                  style={{ color: f.accent }}
                >
                  PRAKASH 2027
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── CTA ── */}
        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/callforpaper"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold tracking-tight transition-all duration-200 hover:scale-[1.04] active:scale-95 text-white shadow-lg shadow-[#EA580C]/25"
            style={{
              background: "linear-gradient(135deg, #EA580C 0%, #D97706 100%)",
            }}
          >
            View All Sub-Tracks & Call for Papers
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}