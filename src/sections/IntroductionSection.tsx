"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaCalculator,
  FaHeartbeat,
  FaLeaf,
  FaBookOpen,
  FaSun,
  FaArrowRight,
  FaScroll,
  FaCheckCircle,
} from "react-icons/fa";

const vedicManuscriptImg = "/assets/vedic_manuscript.jpg";

const featureCards = [
  {
    id: 1,
    title: "Scientific Heritage & Math",
    subtitle: "Sulba Sutras & Astronomy",
    description:
      "Investigating the Kerala School, ancient Indian astronomy, Sulba Sutras sacred geometry, Wootz steel metallurgy, and Paninian grammar in AI logic.",
    icon: <FaCalculator className="w-5 h-5 text-[#EA580C]" />,
    accent: "#EA580C",
    tag: "Track 01",
  },
  {
    id: 2,
    title: "Holistic Health & Life Sciences",
    subtitle: "Charaka Samhita & Yoga",
    description:
      "Bridging Charaka Samhita with modern clinical trials, neuroplasticity in Yoga, ethnobotany, Siddha, and chronobiology in lifestyle medicine.",
    icon: <FaHeartbeat className="w-5 h-5 text-[#D97706]" />,
    accent: "#D97706",
    tag: "Track 02",
  },
  {
    id: 3,
    title: "Sustainable Heritage & TEK",
    subtitle: "Vastu & Bio-Cosmology",
    description:
      "Drawing on Traditional Ecological Knowledge (TEK), Vastu Shastra passive cooling, organic Vedic polyculture, and ancient stepwell rainwater harvesting.",
    icon: <FaLeaf className="w-5 h-5 text-[#C2410C]" />,
    accent: "#C2410C",
    tag: "Track 03",
  },
  {
    id: 4,
    title: "NEP 2020 & Digital Heritage",
    subtitle: "Manuscripts & Pedagogy",
    description:
      "Integrating IKS into mainstream university curricula, 3D laser scanning of ancient palm-leaf manuscripts, epigraphy, and the vibrant IKS Expo.",
    icon: <FaBookOpen className="w-5 h-5 text-[#EA580C]" />,
    accent: "#EA580C",
    tag: "Track 05",
  },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
});

export const IntroductionSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-16 lg:py-20 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FFFDF7 0%, #FEF9EE 50%, #FFFDF7 100%)" }}
    >
      {/* Subtle Vedic mandala / sacred geometry grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(234,88,12,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(234,88,12,0.35) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Warm Golden Glow accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/4 h-80 w-80 rounded-full opacity-[0.16] blur-3xl"
        style={{ background: "radial-gradient(circle, #EA580C, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full opacity-[0.18] blur-3xl"
        style={{ background: "radial-gradient(circle, #F59E0B, transparent 70%)" }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <motion.div
          className="text-center mb-14"
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Eyebrow label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.18em] uppercase mb-4 shadow-sm"
            style={{
              background: "linear-gradient(135deg, rgba(234,88,12,0.12), rgba(245,158,11,0.22))",
              border: "1px solid rgba(234,88,12,0.3)",
              color: "#C2410C",
            }}
          >
            <FaSun className="text-[#EA580C] text-[10px]" />
            About the Conference
          </div>

          <h2
            className="font-black leading-tight mt-2"
            style={{
              fontSize: "clamp(2.1rem, 4.2vw, 3.2rem)",
              background: "linear-gradient(135deg, #1C0B02 20%, #7C2D12 60%, #EA580C 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.02em",
            }}
          >
            PRAKASH 2027
          </h2>

          <p
            className="mt-3 mx-auto text-base sm:text-lg font-medium"
            style={{ color: "#2E1104", opacity: 0.85, maxWidth: "46rem", lineHeight: 1.7 }}
          >
            International Conference on Indian Knowledge Systems · 26–27 February 2027 (Hybrid Mode)
          </p>

          <div
            className="mx-auto mt-5 h-1 w-24 rounded-full"
            style={{ background: "linear-gradient(90deg, #EA580C, #F59E0B)" }}
          />
        </motion.div>

        {/* ── Main Showcase Bento Card ── */}
        <div className="border border-[#F59E0B]/35 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-[1px] bg-[#F59E0B]/25 shadow-2xl shadow-[#EA580C]/8 mb-10">

          {/* Left: Comprehensive Conference Overview (7 cols) */}
          <motion.div
            className="lg:col-span-7 p-8 sm:p-10 lg:p-12 bg-[#FFFDF7] flex flex-col justify-between"
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#EA580C] mb-3">
                <FaScroll className="text-xs" />
                <span>Legacy & Objectives</span>
              </div>

              <h3
                className="font-extrabold mb-5 leading-snug"
                style={{
                  fontSize: "clamp(1.35rem, 2.3vw, 1.75rem)",
                  color: "#1C0B02",
                  letterSpacing: "-0.01em",
                }}
              >
                Bridging Millennia of Wisdom with Modern Science
              </h3>

              <div className="text-sm sm:text-[15px] leading-relaxed mb-8 space-y-4 text-justify" style={{ color: "#2E1104", opacity: 0.9 }}>
                <p>
                  The Department of Applied Sciences, Poornima Institute of Engineering and Technology (PIET), Jaipur, proudly presents the <strong>International Conference on Indian Knowledge Systems (PRAKASH 2027)</strong>: <em>Promoting Research, Advancement, and Knowledge Systems for Applied Sustainable Heritage</em> on <strong>26th–27th February 2027</strong> in Hybrid Mode.
                </p>
                <p>
                  Indian Knowledge Systems (IKS) embody a sophisticated, empirical repository of intellectual traditions developed over millennia. From the infinite calculus series of the <strong>Kerala School of Mathematics</strong> to the anatomical insights of the <strong>Charaka Samhita</strong>, and from <strong>Vastu bio-climatic design</strong> to <strong>Kautilya&apos;s Arthashastra</strong>, these methodologies provide crucial solutions for modern global challenges.
                </p>
                <p>
                  In strategic alignment with the <strong>National Education Policy (NEP) 2020</strong>, PRAKASH 2027 fosters cross-disciplinary dialogue between traditional scholars (Shastris), cutting-edge researchers, and technologists, featuring an exclusive <strong>&quot;IKS Expo&quot;</strong> for startups and innovators.
                </p>
              </div>

              {/* Bullet highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  "5 Interdisciplinary Research Tracks",
                  "NEP 2020 Curriculum Frameworks",
                  "IKS Innovation & Startup Expo",
                  "100–150 Global Delegates & Keynotes",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#1C0B02]">
                    <FaCheckCircle className="text-[#EA580C] text-xs flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#F59E0B]/20">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold tracking-tight text-white transition-all duration-200 hover:scale-[1.04] active:scale-95 shadow-md shadow-[#EA580C]/30"
                style={{
                  background: "linear-gradient(135deg, #EA580C 0%, #D97706 60%, #F59E0B 100%)",
                }}
              >
                <span>Explore Full Conference Story</span>
                <FaArrowRight className="text-xs" />
              </Link>

              <Link
                href="/callforpaper"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold tracking-tight text-[#C2410C] bg-[#EA580C]/10 hover:bg-[#EA580C]/18 border border-[#EA580C]/25 transition-all duration-200"
              >
                <span>View Call for Papers</span>
              </Link>
            </div>
          </motion.div>

          {/* Right: Authentic Vedic Research & Manuscript Artwork (5 cols) */}
          <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full overflow-hidden group bg-[#1C0B02]">
            <Image
              src={vedicManuscriptImg}
              alt="Ancient Indian palm-leaf manuscript with Sanskrit astronomy instruments"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />

            {/* Gradient vignette */}
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(28,11,2,0.2) 0%, transparent 40%, rgba(28,11,2,0.85) 100%)",
              }}
            />

            {/* Bottom Caption Pill */}
            <div
              className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between gap-3 p-4 rounded-2xl backdrop-blur-md border border-[#F59E0B]/40 shadow-xl"
              style={{
                background: "rgba(255, 253, 247, 0.94)",
              }}
            >
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-[#EA580C]/15 border border-[#EA580C]/30 text-[#EA580C]">
                  <FaSun className="text-xs animate-spin" style={{ animationDuration: "16s" }} />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#EA580C] block">
                    Vedic Manuscriptology
                  </span>
                  <span className="text-xs font-bold text-[#1C0B02]">
                    Preserving Indigenous Science & AI Logic
                  </span>
                </div>
              </div>
              <span className="text-[11px] font-bold text-[#C2410C] bg-[#EA580C]/15 px-2.5 py-1 rounded-full flex-shrink-0">
                PIET 2027
              </span>
            </div>
          </div>

        </div>

        {/* ── 4 Thematic Domain Highlight Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureCards.map((card, index) => (
            <motion.div
              key={card.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.1 * index, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="group relative flex flex-col gap-4 p-7 bg-[#FFFDF7] border border-[#F59E0B]/30 rounded-3xl shadow-xl shadow-[#EA580C]/5 transition-all duration-300 hover:bg-[#FEF9EE] hover:border-[#EA580C]/40 hover:-translate-y-1"
            >
              {/* Top Accent Line */}
              <div
                className="absolute top-0 left-6 right-6 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, ${card.accent}, transparent)` }}
              />

              {/* Icon & Track Tag */}
              <div className="flex items-center justify-between">
                <div
                  className="h-11 w-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-sm"
                  style={{
                    background: `${card.accent}15`,
                    border: `1px solid ${card.accent}35`,
                  }}
                >
                  {card.icon}
                </div>
                <span
                  className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                  style={{
                    background: `${card.accent}12`,
                    border: `1px solid ${card.accent}25`,
                    color: card.accent,
                  }}
                >
                  {card.tag}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D97706]">
                  {card.subtitle}
                </span>
                <h3 className="font-bold text-base leading-snug mt-1 text-[#1C0B02]">
                  {card.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed flex-grow text-justify text-[#2E1104]/85">
                {card.description}
              </p>

              {/* Bottom accent dot */}
              <div className="flex items-center gap-1.5 mt-auto pt-3 border-t border-[#F59E0B]/15">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: card.accent }}
                />
                <span
                  className="text-[11px] font-bold tracking-wider uppercase"
                  style={{ color: card.accent }}
                >
                  PRAKASH 2027
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};