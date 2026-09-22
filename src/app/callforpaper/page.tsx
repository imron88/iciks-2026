"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaFileAlt,
  FaCheckCircle,
  FaExclamationTriangle,
  FaAward,
  FaChartBar,
  FaExternalLinkAlt,
  FaBookOpen,
  FaShieldAlt,
  FaGavel,
  FaTrophy,
  FaMedal,
  FaStore,
  FaUsers,
  FaUniversity,
  FaBook
} from "react-icons/fa";

import { PageHero } from "@/components/PageHero";

// CallForPaperHero Component
const CallForPaperHero = () => {
  return (
    <PageHero
      badge="॥ तमसो मा ज्योतिर्गमय ॥ · PRAKASH 2027"
      title="Call for Papers"
      subtitle="Submit original, high-quality research across 5 broad tracks & 35+ sub-tracks in Indian Knowledge Systems"
      tagline="Promoting Research, Advancement, and Knowledge Systems for Applied Sustainable Heritage (Legacy)"
      primaryCta={{ label: "Submit Paper via Email", href: "mailto:iksconf.prakash@poornima.org?subject=Paper%20Submission%20-%20PRAKASH%202027" }}
      secondaryCta={{ label: "Explore 5 Tracks", href: "#tracks" }}
    />
  );
};

// SectionHeading Sub-component
function SectionHeading({ label, title, desc }: { label: string; title: string; desc?: string }) {
  return (
    <div className="text-center mb-12">
      <span
        className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.18em] uppercase mb-4"
        style={{
          background: "linear-gradient(135deg, rgba(234,88,12,0.1), rgba(245,158,11,0.18))",
          border: "1px solid rgba(234,88,12,0.25)",
          color: "#C2410C",
        }}
      >
        {label}
      </span>
      <h2
        className="font-bold leading-tight mt-2"
        style={{
          fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
          background: "linear-gradient(135deg, #1C0B02 30%, #7C2D12 70%, #EA580C 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </h2>
      {desc && (
        <p className="mt-3 mx-auto text-base" style={{ color: "#2E1104", opacity: 0.75, maxWidth: "42rem", lineHeight: 1.75 }}>
          {desc}
        </p>
      )}
      <div className="mx-auto mt-4 h-px w-16" style={{ background: "linear-gradient(90deg, #EA580C, #F59E0B)" }} />
    </div>
  );
}

// Broad Thematic Areas
const broadAreas = [
  {
    title: "Scientific Heritage, Mathematics, and Technology",
    desc: "Historical developments in Indian mathematics, astronomy, metallurgy, water management, and computational linguistics."
  },
  {
    title: "Holistic Health, Wellness, and Life Sciences",
    desc: "Integration of Ayurveda, Siddha, and Yoga into modern healthcare systems; ethnobotany and natural product chemistry."
  },
  {
    title: "Environmental Ethics, Sustainable Architecture, and Agriculture",
    desc: "Vastu Shastra, Traditional Ecological Knowledge (TEK), ancient water conservation, organic farming, and climate change mitigation."
  },
  {
    title: "Governance, Economics, Ethics, and Management",
    desc: "Kautilya's Arthashastra, Dharma, and Nyaya as foundations for leadership, ethics, and policy; sustainable trade traditions."
  },
  {
    title: "Pedagogy, Arts, and Cultural Heritage",
    desc: "Implementation of IKS in mainstream education under NEP 2020; Kalas (art forms), performance arts, digitization, and manuscriptology."
  }
];

// Complete 5 Tracks & 35+ Sub-tracks Data
const tracksData = [
  {
    trackNo: "Track 1",
    title: "Scientific Heritage, Mathematics, and Technology",
    desc: "This track investigates the mathematical and engineering marvels of ancient India and their interface with modern computational sciences.",
    subtracks: [
      { code: "1.1", text: "The Kerala School of Mathematics – Infinite Series, Calculus, and their Global Legacy" },
      { code: "1.2", text: "Ancient Indian Astronomy – Planetary Models, Celestial Mechanics, and Observational Instruments" },
      { code: "1.3", text: "Traditional Metallurgy and Material Science – Wootz Steel, Zinc Distillation, and Corrosion Resistance Techniques" },
      { code: "1.4", text: "Hydrological Engineering – Ancient Dams, Stepwells, and Urban Water Distribution Systems" },
      { code: "1.5", text: "Paninian Grammar and Formal Language Theory – Applications in NLP, Machine Translation, and AI Logic" },
      { code: "1.6", text: "Indigenous Geometric Principles – Sulba Sutras, Fractal Geometry, and Sacred Architectural Mathematics" },
      { code: "1.7", text: "Traditional Textile Technology – Dyeing, Weaving, and the Physics of Natural Fiber Engineering" }
    ]
  },
  {
    trackNo: "Track 2",
    title: "Holistic Health, Wellness, and Life Sciences",
    desc: "This track explores the integration of traditional medical systems with modern clinical practices and pharmacological research.",
    subtracks: [
      { code: "2.1", text: "Evidence-based Ayurveda – Bridging Samhitas with Modern Clinical Trial Protocols" },
      { code: "2.2", text: "Yoga and Neuroplasticity – Therapeutic Interventions for Stress, Anxiety, and Neurological Disorders" },
      { code: "2.3", text: "Ethnobotany and Pharmacognosy – Drug Discovery from Indigenous Flora and Natural Product Chemistry" },
      { code: "2.4", text: "Siddha and Unani Systems – Clinical Efficacy in Primary and Community Healthcare" },
      { code: "2.5", text: "Dinacharya (Daily Regimen) – Chronobiology, Nutritional Metabolomics, and Lifestyle Medicine" },
      { code: "2.6", text: "Mental Health Interventions – Mindfulness, Meditative Practices, and Traditional Cognitive Therapies" },
      { code: "2.7", text: "Veterinary Sciences and Animal Husbandry – Ancient Care Practices and Livestock Management" }
    ]
  },
  {
    trackNo: "Track 3",
    title: "Environmental Ethics, Sustainable Architecture, and Agriculture",
    desc: "This track draws upon traditional ecological knowledge to address current environmental crises and architectural sustainability.",
    subtracks: [
      { code: "3.1", text: "Vastu Shastra and Climate-Responsive Design – Passive Cooling, Solar Orientation, and Bio-Climatic Architecture" },
      { code: "3.2", text: "Sacred Groves and Traditional Ecological Knowledge (TEK) – Biodiversity Hotspots and Community Conservation" },
      { code: "3.3", text: "Organic Farming and Seed Sovereignty – Indigenous Crop Rotation, Polyculture, and Seed Preservation" },
      { code: "3.4", text: "Ancient Water Harvesting – Kunds, Baolis, Artificial Lakes, and Urban Stormwater Management" },
      { code: "3.5", text: "Forest Stewardship and Wildlife Ethics – Vedic Ecology and the Concept of Ahimsa in Conservation" },
      { code: "3.6", text: "Eco-Cosmology – Planetary Ethics, Rta (Cosmic Order), and Climate Change Philosophy" },
      { code: "3.7", text: "Biodegradable Materials – Lime Plasters, Natural Adhesives, and Circular Economy Models in Ancient Construction" }
    ]
  },
  {
    trackNo: "Track 4",
    title: "Governance, Economics, Ethics, and Management",
    desc: "This track applies the principles of ancient Indian polity and ethics to modern leadership, corporate governance, and economic policy.",
    subtracks: [
      { code: "4.1", text: "Kautilya's Arthashastra – Statecraft, Public Administration, and Geopolitical Strategy" },
      { code: "4.2", text: "Dharma and Nyaya – Foundations of Corporate Ethics, Legal Theory, and Social Justice, Buddhism, Vidhur Niti." },
      { code: "4.3", text: "Ancient Trade Networks – Maritime Commerce, Supply Chain Logistics, and Economic Diplomacy, Chalukya’s & Chola Administration System, Gupta Administration" },
      { code: "4.4", text: "The Shreni System – Guild Management, Worker Welfare, and Community-driven Commerce" },
      { code: "4.5", text: "Conflict Resolution – Dialogic Processes and Peacemaking Strategies from the Mahabharata and Ramayana" },
      { code: "4.6", text: "Fiscal Policies and Taxation – Wealth Distribution Models and Welfare Economics in Ancient Polity" },
      { code: "4.7", text: "Leadership Traits – Mentorship skills, Decision-making, and Human Resource Management from Upanishadic Dialogues, Vedas" }
    ]
  },
  {
    trackNo: "Track 5",
    title: "Literature, Pedagogy, Arts, and Cultural Heritage",
    desc: "This track addresses the integration of IKS into education and the preservation of intangible cultural assets.",
    subtracks: [
      { code: "5.1", text: "Curriculum Design – Developing Modular IKS Courses and Electives under NEP 2020" },
      { code: "5.2", text: "Experiential Learning – Hands-on Pedagogy, Gurukul-inspired Models, and STEM-IKS Integration" },
      { code: "5.3", text: "Sangeet and Natya Shastra – The Role of Performance Arts in Cognitive and Emotional Intelligence" },
      { code: "5.4", text: "3D Digitization and Epigraphy – Modern Archival Tools for Manuscriptology and Inscription Studies" },
      { code: "5.5", text: "Indigenous Visual Arts – Chitrasutra, Iconometry, and Aesthetic Principles in Ancient Painting" },
      { code: "5.6", text: "Gamification of Learning – Teaching Humanities and Logic through Traditional Board Games" },
      { code: "5.7", text: "Heritage Tourism and Digital Museums – Curation, Storytelling, and Public Outreach for Cultural Assets" },
      { code: "5.8", text: "Intersecting Theories of Bharthari, Vishnudutt, Panini, Bharat Muni, SIKSAS, Bhagwat Geeta," },
      { code: "5.9", text: "Ancient Poets & Texts, Folk Narratives, Local Voices Global Narratives" }
    ]
  }
];

const importantDates = [
  { label: "Paper Submission Deadline", date: "15 December 2026" },
  { label: "Acceptance Notification", date: "15 January 2027" },
  { label: "Camera Ready Submission", date: "30 January 2027" },
  { label: "Registration Deadline", date: "05 February 2027" },
  { label: "Conference Dates", date: "26–27 February 2027", highlight: true },
];

const registrationFees = [
  { category: "Indian Academicians & Faculty", earlyBird: "₹2,000", regular: "₹2,000" },
  { category: "Research Scholars & Students", earlyBird: "₹1,000", regular: "₹1,000" },
  { category: "Foreign Delegates", earlyBird: "$150", regular: "$300" },
];

const registrationIncludes = [
  "Access to all 5 Thematic Technical Tracks",
  "Keynote Sessions & Plenary Dialogues",
  "Conference Kit & Official Certificate",
  "Access to the Interactive 'IKS Expo' Zone",
  "Networking with Traditional Shastris & Modern Scientists",
  "Lunch & Refreshments during Conference Days"
];

const qaMeasures = [
  "Double-blind peer-review by academic and domain scholars",
  "Rigorous evaluation of methodology, textual accuracy, and modern contextualization",
  "Plagiarism verification using standard academic similarity tools (under 15%)",
  "AI-content verification (0% or negligible machine-generated text)",
  "Alignment check with National Education Policy (NEP) 2020 principles",
  "Technical review and final approval by the Technical Program Committee"
];

const CallForPaperContent = () => {
  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] } },
  });

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FFFDF7 0%, #FEF9EE 50%, #FFFDF7 100%)" }}
    >
      {/* Faint saffron grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(234,88,12,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(234,88,12,0.3) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-20 flex flex-col gap-24 max-w-7xl mx-auto">

        {/* ── Section 1: Intro & Invitation ── */}
        <motion.div id="call-for-papers" variants={fadeUp(0)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <SectionHeading label="Introduction" title="Call for Papers Invitation" />

          <div
            className="rounded-2xl p-7 md:p-10 space-y-6"
            style={{ background: "#ffffff", border: "1px solid rgba(245,158,11,0.25)", boxShadow: "0 4px 24px rgba(234,88,12,0.06)" }}
          >
            <p className="text-sm md:text-base leading-relaxed text-justify text-slate-700">
              PRAKASH 2027 invites original, unpublished, and high-quality research papers, critical reviews, and applied case studies from traditional textual scholars (Shastris), modern scientists, academicians, engineers, research scholars, and industry professionals.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-justify text-slate-700">
              The conference seeks to move beyond mere historical celebration and instead engage in rigorous academic discourse that validates, contextualizes, and applies ancient Indian concepts within contemporary research frameworks, particularly addressing global challenges like climate change, mental health, ecological sustainability, and ethical technology.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-justify text-slate-900 font-semibold border-l-4 border-[#EA580C] pl-4">
              All submissions must represent authentic, original scholarship and must adhere to academic integrity standards.
            </p>

            {/* In Collaboration With & Publishing Partner Highlight */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[#F59E0B]/20">
              {/* Collaboration Card */}
              <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#FEF9EE] border border-[#F59E0B]/30">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-white p-1 border border-[#EA580C]/30 shadow-sm">
                  <Image
                    src="/assets/pics/bhishma-logo.png"
                    alt="Bhishma School of Indian Knowledge System"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#EA580C] block">In Collaboration With</span>
                  <h4 className="text-sm font-bold text-[#1C0B02] leading-tight">
                    Bhishma School of Indian Knowledge System
                  </h4>
                  <p className="text-[10px] text-[#7C2D12] mt-0.5 leading-tight">
                    Affiliated to Bhishma Sanatan Vedic Hindu Univ., America & Central Sanskrit Univ., New Delhi
                  </p>
                </div>
              </div>

              {/* Publishing Partner Card */}
              <a
                href="https://www.springer.com/journal/42240"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-xl bg-[#FEF9EE] border border-[#EA580C]/30 hover:border-[#EA580C] hover:shadow-md transition-all group"
              >
                <div className="relative h-12 w-20 rounded-lg overflow-hidden flex-shrink-0 bg-[#4A150D] p-1 border border-[#EA580C]/30 flex items-center justify-center shadow-sm">
                  <Image
                    src="/assets/pics/journal-dharma-studies.png"
                    alt="Journal of Dharma Studies - Springer Nature"
                    width={80}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#EA580C] block">Publishing Partner · Springer Nature</span>
                  <h4 className="text-sm font-bold text-[#1C0B02] group-hover:text-[#EA580C] transition-colors leading-tight">
                    Journal of Dharma Studies
                  </h4>
                  <p className="text-[10px] text-[#7C2D12] mt-0.5 leading-tight">
                    Asian and Transcultural Religion, Philosophy, & Ethics · Selected papers considered for publication
                  </p>
                </div>
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── Section 2: 5 Detailed Tracks & 35+ Sub-tracks ── */}
        <motion.div id="tracks" variants={fadeUp(0)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          <SectionHeading
            label="Broad Thematic Areas"
            title="Conference Tracks & Sub-Tracks"
            desc="Explore the 5 core tracks and 35+ specialized sub-tracks covering scientific heritage, healthcare, sustainability, statecraft, and pedagogy."
          />

          {/* Broad Thematic Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto mb-12">
            {broadAreas.map((area, bIdx) => (
              <div
                key={bIdx}
                className="bg-[#FFFDF7] p-5 rounded-2xl border border-[#F59E0B]/25 hover:border-[#EA580C]/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold text-[#EA580C] uppercase tracking-wider mb-1.5 block">
                    Thematic Area 0{bIdx + 1}
                  </span>
                  <h4 className="font-bold text-sm sm:text-base text-[#1C0B02] mb-1.5 leading-snug">
                    {area.title}
                  </h4>
                  <p className="text-xs text-[#2E1104]/80 leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-8 max-w-7xl mx-auto">
            {tracksData.map((track, idx) => (
              <div
                key={idx}
                className="bg-[#FFFDF7] p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:shadow-xl border border-[#F59E0B]/25 hover:border-[#EA580C]/40"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#F59E0B]/15 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EA580C] text-white">
                      {track.trackNo}
                    </span>
                    <h3 className="font-bold text-lg sm:text-xl text-[#1C0B02]">
                      {track.title}
                    </h3>
                  </div>
                  <span className="text-xs text-[#EA580C] font-semibold">{track.subtracks.length} Sub-Tracks</span>
                </div>

                <p className="text-sm text-[#2E1104]/80 italic mb-5 leading-relaxed">
                  {track.desc}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {track.subtracks.map((sub, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#F59E0B]/20 hover:bg-[#FEF9EE] hover:border-[#EA580C]/35 hover:shadow-sm transition-all"
                    >
                      <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-[#EA580C]/10 text-[#EA580C] flex-shrink-0 mt-0.5">
                        {sub.code}
                      </span>
                      <span className="text-xs sm:text-sm text-[#2E1104] leading-normal">
                        {sub.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Section 2.5: IKS Expo Zone Feature ── */}
        <motion.div variants={fadeUp(0)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          <div
            className="rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-[#F59E0B]/30"
            style={{
              background: "linear-gradient(135deg, #2E1104 0%, #451A03 60%, #1C0B02 100%)",
              color: "white"
            }}
          >
            <div className="max-w-3xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EA580C]/20 text-[#FDE68A] border border-[#F59E0B]/40 mb-4">
                <FaStore className="w-3.5 h-3.5" />
                Special Exhibition Zone
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-[#FDE68A]">
                The &quot;IKS Expo&quot; Zone for Startups & Entrepreneurs
              </h3>
              <p className="text-sm sm:text-base text-white/85 leading-relaxed mb-6">
                Are you building a product or enterprise based on Indian Knowledge Systems? PRAKASH 2027 features a dedicated <strong>IKS Expo</strong> zone to encourage startups, researchers, and innovators working in:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  "Herbal product testing & validation",
                  "Green building & Vedic eco-architecture",
                  "Ancient manuscript scanning & 3D archiving",
                  "Traditional textile dyes & fiber engineering",
                  "Ayurvedic nutraceuticals & chronobiology tools",
                  "Educational games based on traditional logic & shastras"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
                    <FaCheckCircle className="text-[#F59E0B] w-3.5 h-3.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#FED7AA]/80 italic">
                To reserve an exhibition kiosk or present in the startup demo session, write to us at <a href="mailto:iksconf.prakash@poornima.org" className="underline text-[#FBBF24]">iksconf.prakash@poornima.org</a>.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Section 3: Paper Submission Guidelines ── */}
        <motion.div id="guidelines" variants={fadeUp(0)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          <SectionHeading label="Guidelines" title="Paper Submission Guidelines" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Left Card: Guidelines List */}
            <div className="bg-[#FFFDF7] p-6 sm:p-8 rounded-2xl flex flex-col gap-6 border border-[#F59E0B]/25">
              <div>
                <h3 className="font-bold text-lg mb-3 text-[#1C0B02] flex items-center gap-2">
                  <FaFileAlt className="text-[#EA580C]" />
                  Manuscript Preparation
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mb-4 italic">
                  Authors must submit original, rigorously researched papers written in English or Sanskrit with English summary.
                </p>
                <ul className="space-y-3">
                  {[
                    "Recommended paper length: 8–12 pages, including citations and references.",
                    "Similarity index must be below 15% (excluding standard classical references and quotes).",
                    "AI-generated content similarity must be 0% or negligible.",
                    "Papers must clearly state objectives, methodology, historical/textual basis, results, and modern relevance.",
                    "Submissions must adhere to ethical research standards and acknowledge primary traditional sources accurately."
                  ].map((bullet, i) => (
                    <li key={i} className="flex gap-3 text-xs sm:text-sm text-[#2E1104]/80 leading-normal">
                      <FaCheckCircle className="text-[#EA580C] w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-[#F59E0B]/20 pt-6">
                <h3 className="font-bold text-lg mb-3 text-[#1C0B02] flex items-center gap-2">
                  <FaShieldAlt className="text-[#EA580C]" />
                  Review & Presentation
                </h3>
                <ul className="space-y-3">
                  {[
                    "All manuscripts will undergo double-blind peer review by domain scholars and technical experts.",
                    "At least one author of each accepted paper must register and present the paper either physically or virtually.",
                    "Selected papers will be invited for presentation in dedicated thematic technical sessions."
                  ].map((bullet, i) => (
                    <li key={i} className="flex gap-3 text-xs sm:text-sm text-[#2E1104]/80 leading-normal">
                      <FaCheckCircle className="text-[#EA580C] w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Card: Portals & Contact */}
            <div className="flex flex-col gap-6">
              <div
                className="bg-[#FFFDF7] p-6 sm:p-8 rounded-2xl flex flex-col gap-4 border border-[#F59E0B]/25 shadow-sm"
              >
                <h3 className="font-bold text-lg text-[#1C0B02]">Paper Submission Mode</h3>
                <p className="text-xs sm:text-sm text-[#2E1104]/80 leading-relaxed">
                  Authors can submit their complete research paper (PDF and editable Word document) directly to the conference editorial desk:
                </p>

                <a
                  href="mailto:iksconf.prakash@poornima.org?subject=Paper%20Submission%20-%20PRAKASH%202027"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold tracking-tight transition-all duration-200 hover:scale-[1.02] hover:shadow-md text-white w-full shadow-md shadow-[#EA580C]/25"
                  style={{
                    background: "linear-gradient(135deg, #EA580C 0%, #D97706 100%)",
                  }}
                >
                  Submit Paper to iksconf.prakash@poornima.org
                  <FaExternalLinkAlt className="text-xs" />
                </a>

                <div className="bg-white border border-[#F59E0B]/20 rounded-xl p-4 mt-2">
                  <h4 className="text-xs font-bold text-[#EA580C] uppercase tracking-wider mb-1">Subject Format</h4>
                  <p className="text-[11px] sm:text-xs text-[#2E1104] leading-relaxed font-mono">
                    Subject: Paper Submission_Track Number_Author Name
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Example: Paper Submission_Track 1.1_Dr. Sanju Choudhary
                  </p>
                </div>
              </div>

              {/* Conference Timing Card */}
              <div className="bg-[#FFFDF7] p-6 sm:p-8 rounded-2xl border border-[#F59E0B]/25 flex flex-col gap-3">
                <h4 className="font-bold text-base text-[#1C0B02] flex items-center gap-2">
                  <FaCalendarAlt className="text-[#EA580C]" />
                  Conference Schedule Details
                </h4>
                <div className="text-xs sm:text-sm text-[#2E1104]/85 space-y-2">
                  <div className="flex justify-between border-b border-[#F59E0B]/15 pb-2">
                    <span className="font-semibold text-[#1C0B02]">Dates:</span>
                    <span>26 February 2027 – 27 February 2027</span>
                  </div>
                  <div className="flex justify-between border-b border-[#F59E0B]/15 pb-2">
                    <span className="font-semibold text-[#1C0B02]">Duration:</span>
                    <span>2 Days</span>
                  </div>
                  <div className="flex justify-between border-b border-[#F59E0B]/15 pb-2">
                    <span className="font-semibold text-[#1C0B02]">Daily Timing:</span>
                    <span>08:00 AM – 03:00 PM (IST)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-[#1C0B02]">Expected Attendance:</span>
                    <span>100–150 Delegates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Section 4: Important Dates & Registration ── */}
        <motion.div id="dates-and-registration" variants={fadeUp(0)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          <SectionHeading label="Schedule & Fees" title="Important Dates & Registration" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto items-start">
            {/* Dates & Inclusion (Left 5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Important Dates Box */}
              <div className="bg-[#FFFDF7] p-6 sm:p-8 rounded-2xl flex flex-col gap-6 hover:shadow-lg transition-shadow duration-300 border border-[#F59E0B]/25">
                <h3 className="font-bold text-lg text-[#1C0B02] flex items-center gap-2 pb-3 border-b border-[#F59E0B]/15">
                  <FaCalendarAlt className="text-[#EA580C]" />
                  Important Dates
                </h3>
                <div className="space-y-3.5">
                  {importantDates.map((d, i) => (
                    <div
                      key={i}
                      className="group flex items-center justify-between gap-4 py-3 px-4 rounded-xl border transition-all duration-200"
                      style={{
                        background: d.highlight ? `linear-gradient(135deg, rgba(234,88,12,0.1), rgba(245,158,11,0.15))` : "#ffffff",
                        borderColor: d.highlight ? `rgba(234,88,12,0.35)` : "rgba(245,158,11,0.2)",
                        boxShadow: d.highlight ? "0 4px 12px rgba(234,88,12,0.06)" : "none"
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{
                            background: d.highlight ? "rgba(234,88,12,0.15)" : "rgba(245,158,11,0.08)",
                            color: d.highlight ? "#EA580C" : "#D97706"
                          }}
                        >
                          <span className="text-xs font-bold font-mono">0{i+1}</span>
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-[#2E1104]">
                          {d.label}
                        </span>
                      </div>
                      <span
                        className="text-xs sm:text-sm font-extrabold px-3 py-1 rounded-full text-right"
                        style={{
                          background: d.highlight ? "#EA580C" : "rgba(234,88,12,0.08)",
                          color: d.highlight ? "#ffffff" : "#EA580C"
                        }}
                      >
                        {d.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Registration Includes */}
              <div className="bg-[#FFFDF7] p-6 sm:p-8 rounded-2xl flex flex-col gap-4 border border-[#F59E0B]/25">
                <h3 className="font-bold text-lg text-[#1C0B02] flex items-center gap-2">
                  <FaAward className="text-[#EA580C]" />
                  Registration Includes
                </h3>
                <ul className="grid grid-cols-1 gap-2">
                  {registrationIncludes.map((item, i) => (
                    <li key={i} className="flex gap-2.5 text-xs sm:text-sm text-[#2E1104]/80 leading-normal">
                      <FaCheckCircle className="text-[#EA580C] w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Registration Table (Right 7 Cols) */}
            <div className="lg:col-span-7 bg-[#FFFDF7] p-6 sm:p-8 rounded-2xl flex flex-col gap-6 hover:shadow-lg transition-shadow duration-300 border border-[#F59E0B]/25">
              <div>
                <h3 className="font-bold text-lg text-[#1C0B02] mb-1 flex items-center gap-2 pb-3 border-b border-[#F59E0B]/15">
                  <span className="p-1.5 rounded-lg bg-[#EA580C]/10 text-[#EA580C]"><FaAward className="w-4 h-4" /></span>
                  Registration Fee Structure
                </h3>
                <p className="text-xs text-[#2E1104]/60 mt-2 mb-4">
                  (Official fee structure for PRAKASH 2027 hybrid conference delegates)
                </p>

                <div className="overflow-x-auto border border-[#F59E0B]/20 rounded-xl">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-[#FEF9EE] text-[#1C0B02] font-semibold border-b border-[#F59E0B]/20">
                        <th className="py-4 px-4 font-bold tracking-tight">Category</th>
                        <th className="py-4 px-4 text-center font-bold tracking-tight">Early Bird</th>
                        <th className="py-4 px-4 text-center font-bold tracking-tight">Regular</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F59E0B]/15 text-[#2E1104]">
                      {registrationFees.map((fee, idx) => (
                        <tr key={idx} className="hover:bg-[#FEF9EE]/60 transition-colors group">
                          <td className="py-3.5 px-4 font-semibold text-[#1C0B02] group-hover:text-[#EA580C] transition-colors leading-relaxed">
                            {fee.category}
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            <span className="inline-block font-extrabold text-xs sm:text-sm px-3 py-1 rounded-lg bg-[#EA580C]/10 text-[#EA580C] border border-[#EA580C]/20">
                              {fee.earlyBird}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            <span className="inline-block font-extrabold text-xs sm:text-sm px-3 py-1 rounded-lg bg-[#D97706]/10 text-[#D97706] border border-[#D97706]/20">
                              {fee.regular}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-[11px] text-[#2E1104]/60 leading-relaxed mt-4">
                  Registration fees cover participation in all technical sessions, presentation slots, digital proceedings access, and kit.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Section 5: Review Process & Quality Assurance ── */}
        <motion.div id="review-process" variants={fadeUp(0)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          <SectionHeading label="Quality" title="Review Process & Quality Assurance" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto items-stretch">
            {/* Left: Review Policy & Criteria */}
            <div className="bg-[#FFFDF7] p-6 sm:p-8 rounded-2xl flex flex-col gap-6 justify-between border border-[#F59E0B]/25">
              <div className="space-y-4">
                <h3 className="font-bold text-lg text-[#1C0B02] flex items-center gap-2">
                  <FaFileAlt className="text-[#EA580C]" />
                  Peer Review Policy
                </h3>
                <p className="text-xs sm:text-sm text-[#2E1104]/80 text-justify leading-relaxed">
                  PRAKASH 2027 follows a rigorous double-blind peer-review process to ensure scholarly quality and research integrity. Each submitted manuscript will be evaluated by experts in traditional texts and contemporary research across these metrics:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                  {[
                    "Originality & Depth",
                    "Authenticity of Traditional Sources",
                    "Modern Scientific Relevance",
                    "Clarity of Presentation",
                    "Alignment with NEP 2020",
                    "Practical & Policy Significance"
                  ].map((criteria, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#2E1104]/80">
                      <FaCheckCircle className="text-[#EA580C] w-3.5 h-3.5 flex-shrink-0" />
                      <span>{criteria}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expected Stats Grid */}
              <div className="border-t border-[#F59E0B]/20 pt-6">
                <h4 className="font-bold text-sm text-[#1C0B02] mb-3 flex items-center gap-2">
                  <FaChartBar className="text-[#EA580C]" />
                  Conference Projections
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { value: "100–150", label: "Delegates" },
                    { value: "5", label: "Thematic Tracks" },
                    { value: "35+", label: "Sub-Tracks" },
                    { value: "2 Days", label: "Duration" },
                    { value: "Hybrid", label: "Presentation Mode" },
                    { value: "16+", label: "Advisory Experts" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white rounded-xl p-2.5 text-center border border-[#F59E0B]/20">
                      <span className="block font-extrabold text-sm sm:text-base text-[#EA580C]">{stat.value}</span>
                      <span className="text-[10px] font-semibold text-[#2E1104]/60 uppercase tracking-wide">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Quality Assurance Measures */}
            <div className="bg-[#FFFDF7] p-6 sm:p-8 rounded-2xl flex flex-col gap-6 border border-[#F59E0B]/25">
              <h3 className="font-bold text-lg text-[#1C0B02] flex items-center gap-2">
                <FaShieldAlt className="text-[#EA580C]" />
                Quality Assurance Mechanism
              </h3>
              <p className="text-xs sm:text-sm text-[#2E1104]/80 text-justify leading-relaxed">
                PRAKASH 2027 is committed to academic rigor, authenticity of indigenous wisdom, and ethical scholarship:
              </p>
              <ul className="space-y-3.5">
                {qaMeasures.map((measure, i) => (
                  <li key={i} className="flex gap-3 text-xs sm:text-sm text-[#2E1104]/85 leading-normal">
                    <span
                      className="flex-shrink-0 h-6 w-6 rounded-lg flex items-center justify-center text-[11px] font-bold"
                      style={{
                        background: "rgba(234,88,12,0.1)",
                        color: "#EA580C",
                        border: "1px solid rgba(234,88,12,0.25)"
                      }}
                    >
                      {i + 1}
                    </span>
                    <span>{measure}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* ── Section 6: AI-Generated Content Policy ── */}
        <motion.div id="ai-policy" variants={fadeUp(0)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          <SectionHeading label="Ethics" title="Research Integrity & Ethics Policy" />

          <div
            className="bg-white rounded-2xl p-6 sm:p-8 space-y-8 max-w-7xl mx-auto"
            style={{ border: "1px solid rgba(30,58,95,0.08)", boxShadow: "0 4px 24px rgba(30,58,95,0.04)" }}
          >
            {/* Header Info Banner */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex flex-col sm:flex-row gap-4 items-start">
              <FaExclamationTriangle className="text-amber-500 text-2xl flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-amber-900 text-sm sm:text-base">Notice on Academic & Textual Integrity</h4>
                <p className="text-xs sm:text-sm text-amber-800 leading-relaxed mt-1">
                  Authors submitting manuscripts must ensure that all references to ancient texts, Samhitas, Sutras, and classical commentaries are authentic and verifiable. Generative AI tools must not be used to fabricate citations, invent translations, or generate research claims.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-6">
              <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wide flex items-center gap-2 mb-3">
                <FaGavel className="text-slate-600" />
                Publication Ethics & Originality
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                PRAKASH 2027 strictly prohibits plagiarism, duplicate submissions, and data fabrication. All papers undergo automated plagiarism detection and review by domain scholars.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default function CallForPaperPage() {
  return (
    <div>
      <CallForPaperHero />
      <CallForPaperContent />
    </div>
  );
}
