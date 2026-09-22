"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaPlane, FaHotel, FaShieldAlt, FaMapMarkedAlt, FaTrain, FaDollarSign } from "react-icons/fa";

import { PageHero } from "@/components/PageHero";

// Assets paths
const pic9 = "/assets/confg/pic9.webp";
const pic10 = "/assets/confg/pic10.jpg";
const pic8 = "/assets/copics/conf8.JPG";

// AboutHero Component
const AboutHero = () => {
  return (
    <PageHero
      badge="॥ तमसो मा ज्योतिर्गमय ॥ · PRAKASH 2027"
      title="About the Conference"
      subtitle="International Conference on Indian Knowledge Systems · 26–27 February 2027, Jaipur (Hybrid Mode)"
      tagline="Promoting Research, Advancement, and Knowledge Systems for Applied Sustainable Heritage (Legacy)"
      primaryCta={{ label: "View Call for Papers", href: "/callforpaper" }}
      secondaryCta={{ label: "View Committees", href: "/committees" }}
    />
  );
};

// AboutIntro Component
const programmeParticulars = [
  {
    particular: "Name of Programme",
    details: "International Conference on Indian Knowledge Systems"
  },
  {
    particular: "Proposed Titles",
    details: "PRAKASH 2027: Promoting Research, Advancement, and Knowledge Systems for Applied Sustainable Heritage (Legacy)"
  },
  {
    particular: "Organized By",
    details: "Department of Applied Sciences, Poornima Institute of Engineering & Technology, Jaipur, Rajasthan, India"
  },
  {
    particular: "Duration",
    details: "2 Days"
  },
  {
    particular: "Tentative Dates",
    details: "26 February 2027 to 27 February 2027"
  },
  {
    particular: "Time",
    details: "08:00 AM to 03:00 PM (8.00 AM – 3.00 PM)"
  },
  {
    particular: "Tentative Participants",
    details: "100–150 (including foreign delegates, academicians, research scholars, and industry professionals)"
  }
];

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

const stats = [
  {
    number: "5",
    label: "Conference Tracks",
    description: "Holistic IKS research areas",
    id: 1
  },
  {
    number: "2",
    label: "Conference Days",
    description: "26–27 February 2027",
    id: 2
  },
  {
    number: "100–150",
    label: "Participants",
    description: "Foreign delegates, scholars & professionals",
    id: 3
  },
  {
    number: "35+",
    label: "Sub-Tracks",
    description: "Traditional text to cutting-edge science",
    id: 4
  }
];

const objectives = [
  "To foster interdisciplinary synthesis by creating a platform for meaningful dialogue between traditional textual scholars and modern scientists, technologists, and educators.",
  "To demonstrate the modern relevance and application of ancient Indian concepts in mathematics, metallurgy, architecture, agriculture, healthcare, governance, and ethics by showcasing case studies and research that offer viable solutions to contemporary global challenges.",
  "To align research outcomes with policy frameworks such as NEP 2020, facilitating the seamless integration of IKS into mainstream higher education and school curricula.",
  "To discuss methodologies for preservation and digitization of ancient manuscripts, including computational linguistics and digital heritage preservation using modern tools like 3D scanning and archival technologies.",
  "To provide a platform for research scholars and early-career academicians to present their work, receive feedback from senior experts, and build collaborative networks.",
  "To encourage startups and entrepreneurs working in herbal product testing, green building technology, manuscript scanning, and related areas to showcase their innovations through the 'IKS Expo' zone.",
  "To promote international collaboration and position India as a global leader in the study and application of indigenous knowledge systems."
];

const AboutIntro = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.15 * index,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(30,58,95, 0.15)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  };

  return (
    <section
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

      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-20 flex flex-col gap-20">
        
        {/* Programme Particulars Table */}
        <motion.div
          className="max-w-4xl mx-auto w-full rounded-2xl overflow-hidden shadow-xl shadow-[#EA580C]/5 border border-[#F59E0B]/30 bg-[#FFFDF7]"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="bg-gradient-to-r from-[#7C2D12] via-[#C2410C] to-[#D97706] px-6 py-4 text-white">
            <span className="text-xs uppercase font-bold tracking-widest text-[#FED7AA]">Conference At A Glance</span>
            <h2 className="text-xl md:text-2xl font-bold">Programme Particulars</h2>
          </div>
          <div className="divide-y divide-[#F59E0B]/15">
            {programmeParticulars.map((item, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 sm:grid-cols-12 p-4 sm:p-5 gap-2 sm:gap-4 transition-colors ${
                  idx % 2 === 0 ? "bg-[#FFFDF7]" : "bg-[#FEF9EE]/60"
                }`}
              >
                <div className="sm:col-span-4 font-bold text-sm sm:text-base text-[#7C2D12] flex items-center">
                  {item.particular}
                </div>
                <div className="sm:col-span-8 text-sm sm:text-base text-[#2E1104] font-medium leading-relaxed">
                  {item.details}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* About the International Conference Narrative */}
        <motion.div
          className="max-w-4xl mx-auto rounded-2xl p-7 md:p-10 space-y-6"
          style={{ background: "#ffffff", border: "1px solid rgba(245,158,11,0.25)", boxShadow: "0 4px 24px rgba(234,88,12,0.06)" }}
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="border-b border-[#F59E0B]/20 pb-4 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C]">Preamble & Vision</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C0B02] mt-1">About the International Conference</h2>
          </div>
          <div className="text-sm md:text-base leading-relaxed text-justify space-y-5" style={{ color: "#2E1104", opacity: 0.85 }}>
            <p>
              Indian Knowledge Systems (IKS) represent a vast and sophisticated repository of intellectual traditions that have evolved over millennia. From the mathematical brilliance of the Kerala School of Mathematics to the surgical precision of the Sushruta Samhita, from the ecological wisdom embedded in Vedic hymns to the governance principles of Kautilya&apos;s Arthashastra, these systems offer profound insights that remain remarkably relevant in addressing contemporary global challenges.
            </p>

            <p>
              In an era dominated by rapid technological advancement, issues such as climate change, mental health crises, ethical governance of artificial intelligence, and social fragmentation highlight the limitations of a purely reductionist approach to knowledge. There is a growing global recognition that indigenous knowledge systems, with their holistic, ecological, and human-centric perspectives, can complement and enrich modern scientific methodologies.
            </p>

            <p>
              This International Conference is conceived as a platform to bridge the gap between traditional scholars (Shastris) and modern scientists, technologists, and educators. The conference aims to move beyond mere historical celebration and instead engage in rigorous academic discourse that validates, contextualizes, and applies ancient Indian concepts within contemporary research frameworks.
            </p>

            <p>
              The conference is strategically aligned with the <strong>National Education Policy (NEP) 2020</strong>, which emphasizes the integration of Indian Knowledge Systems into mainstream higher education and school curricula. The outcomes of this conference are expected to serve as valuable inputs for curriculum designers, policymakers, and educators.
            </p>
          </div>
        </motion.div>

        {/* Objectives Section - Bento grid border design */}
        <div className="max-w-5xl mx-auto border border-[#F59E0B]/30 rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#F59E0B]/20 shadow-xl shadow-[#EA580C]/5">
          <motion.div
            className="p-8 sm:p-10 bg-[#FFFDF7] flex flex-col justify-between"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="h-2 w-2 rounded-full bg-[#EA580C]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C]">Core Goals</span>
              </div>
              <h3 className="font-bold text-xl md:text-2xl mb-6" style={{ color: "#1C0B02" }}>
                Conference Objectives (1–4)
              </h3>
              <ul className="space-y-4">
                {objectives.slice(0, 4).map((obj, i) => (
                  <li key={i} className="flex gap-3 text-sm md:text-base text-justify" style={{ color: "#2E1104", opacity: 0.85 }}>
                    <span className="h-2 w-2 rounded-full mt-2 flex-shrink-0 bg-[#EA580C]" />
                    {obj}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="p-8 sm:p-10 bg-[#FFFDF7] flex flex-col justify-between"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="h-2 w-2 rounded-full bg-[#D97706]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">Policy & Innovation</span>
              </div>
              <h3 className="font-bold text-xl md:text-2xl mb-6" style={{ color: "#1C0B02" }}>
                Conference Objectives (5–7)
              </h3>
              <ul className="space-y-4">
                {objectives.slice(4).map((obj, i) => (
                  <li key={i} className="flex gap-3 text-sm md:text-base text-justify" style={{ color: "#2E1104", opacity: 0.85 }}>
                    <span className="h-2 w-2 rounded-full mt-2 flex-shrink-0 bg-[#D97706]" />
                    {obj}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-5 border-t border-[#F59E0B]/20 bg-[#FEF9EE] p-4 rounded-xl">
              <span className="text-xs font-bold text-[#EA580C] block mb-1">Special Highlight: IKS Expo Zone</span>
              <p className="text-xs text-[#2E1104]/80">
                Startups and entrepreneurs in herbal testing, green building technology, manuscript digitization, and traditional crafts will demonstrate innovations throughout both conference days.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Broad Areas to be Covered */}
        <motion.div
          className="max-w-5xl mx-auto w-full space-y-6"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C]">Thematic Framework</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C0B02] mt-1">Broad Areas to be Covered</h2>
            <div className="mx-auto mt-3 h-0.5 w-16 bg-gradient-to-r from-[#EA580C] to-[#D97706]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {broadAreas.map((area, idx) => (
              <div
                key={idx}
                className="bg-[#FFFDF7] p-6 rounded-2xl border border-[#F59E0B]/20 hover:border-[#EA580C]/40 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-[#EA580C] uppercase tracking-wider mb-2 block">
                    Area 0{idx + 1}
                  </span>
                  <h4 className="font-bold text-base text-[#1C0B02] mb-2 leading-snug">
                    {area.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#2E1104]/80 leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section - Grid border design */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#F59E0B]/20 border border-[#F59E0B]/30 rounded-3xl overflow-hidden max-w-6xl mx-auto shadow-xl shadow-[#EA580C]/5">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                className="flex flex-col items-center justify-center p-8 text-center bg-[#FFFDF7] transition-all duration-300 hover:bg-[#FEF9EE]"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
              >
                <div
                  className="text-4xl md:text-5xl font-extrabold mb-3"
                  style={{ color: index % 2 === 0 ? "#EA580C" : "#D97706" }}
                >
                  {stat.number}
                </div>
                <div className="text-sm font-semibold leading-tight mb-1" style={{ color: "#1C0B02" }}>
                  {stat.label}
                </div>
                <div className="text-xs text-[#2E1104]/70">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// AboutPIET Component
const highlights = [
  "Established in 2007",
  "Autonomous Institution",
  "AICTE Approved",
  "Affiliated to RTU, Kota",
  "NBA Accredited Programs",
  "NAAC Accredited Institution (Grade 'A')",
  "Strong Industry-Academia Collaboration",
  "Advanced Research Laboratories",
  "Smart Campus Infrastructure",
  "Innovation & Startup Ecosystem",
  "Center for Indian Knowledge Systems"
];

const pietMissionItems = [
  "To provide an academic environment that will allow students and faculty members to be skilled in creation and implementation of new ideas.",
  "To provide a platform to improve questioning, observing, testing, analyzing and communication skills.",
  "To provide qualitative education and generate new knowledge with integration of emerging technologies, research, and heritage traditions.",
  "To promote high standards of ethical values, transparency, professional competence, and social accountability."
];

const AboutPIET = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FEF9EE 0%, #FFFDF7 50%, #FEF9EE 100%)" }}
    >
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-16">
        <motion.div
          className="rounded-2xl p-7 md:p-10 flex flex-col lg:flex-row gap-12 lg:gap-16 max-w-7xl mx-auto items-start mb-12"
          style={{ background: "#ffffff", border: "1px solid rgba(245,158,11,0.25)", boxShadow: "0 4px 24px rgba(234,88,12,0.06)" }}
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Image Section */}
          <div className="lg:w-[35%] w-full mt-7">
            <div
              className="rounded-2xl overflow-hidden w-full space-y-4"
              style={{
                background: "rgba(234,88,12,0.03)",
                border: "1px solid rgba(245,158,11,0.2)",
                padding: "0.75rem",
              }}
            >
              <Image src={pic9} alt="PIET Institute" width={650} height={480} className="w-full h-auto object-cover rounded-xl shadow-sm" priority />
              <Image src={pic10} alt="PIET Campus" width={650} height={480} className="w-full h-auto object-cover rounded-xl shadow-sm" priority />
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-[65%] w-full">
            <h3
              className="font-bold leading-tight mb-6"
              style={{
                fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                color: "#1C0B02",
                letterSpacing: "-0.01em",
              }}
            >
              About Poornima Institute of Engineering and Technology (PIET)
            </h3>
            <div className="text-sm md:text-base leading-relaxed mb-8 space-y-5 text-justify" style={{ color: "#2E1104", opacity: 0.85 }}>
              <p>
                Poornima Institute of Engineering & Technology (PIET), Jaipur, Rajasthan, India, is a premier technical institution committed to quality education, innovation, research orientation and academic excellence. The institute offers engineering programmes in emerging and core domains and focuses on developing professional competence, research aptitude, technical skills and ethical values among students and faculty members.
              </p>
              <p>
                PIET provides an academic environment that encourages teaching-learning enhancement, research culture, innovation-driven thinking, interdisciplinary learning and continuous professional development. Accredited by NAAC with Grade &apos;A&apos;, approved by AICTE, recognized under Section 2(f) of the UGC Act, and affiliated with Rajasthan Technical University, Kota, PIET has been granted autonomous status from the academic session 2025-26 and has also been conferred Associate Membership of the Association of Indian Universities (AIU).
              </p>
              <p>
                PIET is widely recognized for its commitment to academic excellence, innovation, and research through initiatives such as the AICTE-sponsored IDEA Lab, Institution&apos;s Innovation Council (IIC), Centres of Excellence, and a vibrant innovation ecosystem. The institute has earned notable recognition in national and international rankings, including achievements in QS rankings, CII industry-linked assessments, and innovation-driven institutional evaluations.
              </p>
            </div>
            <a
              href="https://piet.poornima.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold tracking-tight transition-all duration-200 hover:scale-[1.04] active:scale-95 text-white"
              style={{
                background: "linear-gradient(135deg, #EA580C 0%, #D97706 100%)",
                boxShadow: "0 4px 20px rgba(234,88,12,0.35)",
              }}
            >
              Visit Institute Website
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Highlights, Vision, Mission Grid - Grid border design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#F59E0B]/20 border border-[#F59E0B]/30 rounded-3xl overflow-hidden max-w-7xl mx-auto shadow-xl shadow-[#EA580C]/5 animate-fade-in">
          {/* Highlights Card */}
          <motion.div
            className="p-8 sm:p-10 space-y-6 bg-[#FFFDF7]"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="font-bold text-xl md:text-2xl" style={{ color: "#1C0B02" }}>
              Institute Highlights
            </h3>
            <div className="h-px w-16 bg-[#EA580C] mb-6" />
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((hl, i) => (
                <li key={i} className="flex gap-2.5 text-sm font-medium" style={{ color: "#2E1104", opacity: 0.85 }}>
                  <span className="h-2 w-2 rounded-full mt-1.5 flex-shrink-0 bg-[#EA580C]" />
                  {hl}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Vision & Mission Card */}
          <motion.div
            className="p-8 sm:p-10 space-y-6 bg-[#FFFDF7]"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="space-y-4">
              <h3 className="font-bold text-xl md:text-2xl" style={{ color: "#1C0B02" }}>
                Vision of the Institute
              </h3>
              <div className="h-px w-16 bg-[#D97706]" />
              <p className="text-sm md:text-base leading-relaxed text-justify font-medium italic" style={{ color: "#2E1104", opacity: 0.85 }}>
                &ldquo;To create knowledge-based society with scientific temper through cutting-edge technologies, innovative research and to become a valuable resource for enriching mankind.&rdquo;
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#F59E0B]/20">
              <h3 className="font-bold text-xl md:text-2xl" style={{ color: "#1C0B02" }}>
                Mission of the Institute
              </h3>
              <div className="h-px w-16 bg-[#D97706]" />
              <ul className="space-y-3">
                {pietMissionItems.map((item, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-justify" style={{ color: "#2E1104", opacity: 0.85 }}>
                    <span className="h-2 w-2 rounded-full mt-1.5 flex-shrink-0 bg-[#D97706]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// AboutAppliedSciencesDepartment Component
const researchAreas = [
  "Indian Knowledge Systems (IKS) and Heritage Science",
  "Ancient Indian Mathematics & Kerala School Calculus",
  "Ethnobotany, Green Chemistry & Natural Products",
  "Environmental Ethics, TEK and Sustainable Architecture",
  "Philosophical Foundations of Ethics and Governance",
  "Computational Linguistics and Manuscriptology",
  "Optimization Techniques and Mathematical Modelling",
  "Interdisciplinary STEM & Humanities Pedagogy (NEP 2020)"
];

const deptMissionItems = [
  "Foster an academic environment that nurtures innovative thinking, analytical reasoning, and scientific temper.",
  "Deepen interdisciplinary connections between basic sciences, engineering applications, and heritage knowledge systems.",
  "Deliver outcome-based foundational education integrating modern scientific techniques with traditional insight.",
  "Promote high ethical standards, academic rigour, research orientation, and social commitment."
];

const AboutAppliedSciencesDepartment = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      className="relative w-full overflow-hidden animate-fade-in"
      style={{ background: "linear-gradient(180deg, #FFFDF7 0%, #FEF9EE 50%, #FFFDF7 100%)" }}
    >
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-16">
        <motion.div
          className="rounded-2xl p-7 md:p-10 flex flex-col lg:flex-row gap-12 lg:gap-16 max-w-7xl mx-auto items-start mb-12"
          style={{ background: "#ffffff", border: "1px solid rgba(245,158,11,0.25)", boxShadow: "0 4px 24px rgba(234,88,12,0.06)" }}
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Content Section */}
          <div className="lg:w-[65%] w-full order-2 lg:order-1">
            <h3
              className="font-bold leading-tight mb-6"
              style={{
                fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                color: "#1C0B02",
                letterSpacing: "-0.01em",
              }}
            >
              About Department of Applied Sciences
              <br />
              <span className="text-sm md:text-base font-semibold mt-2 block text-[#EA580C]">
                Poornima Institute of Engineering and Technology (PIET), Jaipur
              </span>
            </h3>
            <div className="text-sm md:text-base leading-relaxed mb-8 space-y-5 text-justify" style={{ color: "#2E1104", opacity: 0.85 }}>
              <p>
                The Department of Applied Sciences serves as the foundational pillar of the institute, offering core courses in Mathematics, Physics, Chemistry, and Humanities to engineering students. The department has a strong record of research publications, funded projects, and organizing national-level seminars and workshops.
              </p>
              <p>
                The department comprises highly qualified and experienced faculty members who actively contribute to teaching, research, innovation, consultancy, and interdisciplinary collaborations. It equips students with essential scientific principles, analytical thinking, computational skills, and problem-solving abilities required to address modern technological challenges.
              </p>
              <p>
                The proposed <strong>International Conference on Indian Knowledge Systems (PRAKASH 2027)</strong> is aligned with the institute&apos;s vision of strengthening academic quality, promoting meaningful research, and contributing to global intellectual discourse.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-[35%] w-full order-1 lg:order-2 mt-8">
            <div
              className="rounded-2xl overflow-hidden w-full space-y-4"
              style={{
                background: "rgba(234,88,12,0.03)",
                border: "1px solid rgba(245,158,11,0.2)",
                padding: "0.75rem",
              }}
            >
              <Image src={pic8} alt="Applied Sciences Faculty Meeting" width={400} height={280} className="w-full h-auto object-cover rounded-xl shadow-sm" priority />
            </div>
          </div>
        </motion.div>

        {/* Research Areas, Vision, Mission Grid - Grid border design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#F59E0B]/20 border border-[#F59E0B]/30 rounded-3xl overflow-hidden max-w-7xl mx-auto shadow-xl shadow-[#EA580C]/5 animate-fade-in">
          {/* Research Areas Card */}
          <motion.div
            className="p-8 sm:p-10 space-y-6 bg-[#FFFDF7]"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="font-bold text-xl md:text-2xl" style={{ color: "#1C0B02" }}>
              Focus Areas & Interdisciplinary Research
            </h3>
            <div className="h-px w-16 bg-[#EA580C] mb-6" />
            <ul className="grid grid-cols-1 gap-3.5">
              {researchAreas.map((ra, i) => (
                <li key={i} className="flex gap-2.5 text-sm font-medium" style={{ color: "#2E1104", opacity: 0.85 }}>
                  <span className="h-2 w-2 rounded-full mt-1.5 flex-shrink-0 bg-[#EA580C]" />
                  {ra}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Vision & Mission Card */}
          <motion.div
            className="p-8 sm:p-10 space-y-6 bg-[#FFFDF7]"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="space-y-4">
              <h3 className="font-bold text-xl md:text-2xl" style={{ color: "#1C0B02" }}>
                Vision of the Department
              </h3>
              <div className="h-px w-16 bg-[#D97706]" />
              <p className="text-sm md:text-base leading-relaxed text-justify font-medium italic" style={{ color: "#2E1104", opacity: 0.85 }}>
                &ldquo;To build strong scientific, mathematical, and ethical foundations that empower students to become innovative engineers, responsible leaders, and contributors to sustainable societal progress.&rdquo;
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#F59E0B]/20">
              <h3 className="font-bold text-xl md:text-2xl" style={{ color: "#1C0B02" }}>
                Mission of the Department
              </h3>
              <div className="h-px w-16 bg-[#D97706]" />
              <ul className="space-y-3">
                {deptMissionItems.map((item, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-justify" style={{ color: "#2E1104", opacity: 0.85 }}>
                    <span className="h-2 w-2 rounded-full mt-1.5 flex-shrink-0 bg-[#D97706]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// HostCitySection Component
const reasons = [
  {
    icon: <FaTrain className="w-5 h-5 text-[#EA580C]" />,
    title: "Excellent Connectivity",
    desc: "Seamless air, rail, and road network connecting Jaipur to major Indian cities."
  },
  {
    icon: <FaPlane className="w-5 h-5 text-[#D97706]" />,
    title: "International Airport Access",
    desc: "Direct flight connectivity to international hubs and national destinations."
  },
  {
    icon: <FaHotel className="w-5 h-5 text-[#EA580C]" />,
    title: "Modern Conference Venues",
    desc: "Equipped with state-of-the-art convention centers and premium business hotels."
  },
  {
    icon: <FaShieldAlt className="w-5 h-5 text-[#D97706]" />,
    title: "Safe & Welcoming Environment",
    desc: "Renowned for its safety, hospitality, and traditional values of guest service."
  },
  {
    icon: <FaMapMarkedAlt className="w-5 h-5 text-[#EA580C]" />,
    title: "Rich Heritage Experience",
    desc: "Vibrant local bazaars, historic forts, palaces, and UNESCO heritage architecture."
  },
  {
    icon: <FaDollarSign className="w-5 h-5 text-[#D97706]" />,
    title: "Affordable Stays & Travel",
    desc: "Wide range of budget-friendly accommodation and transit systems for participants."
  }
];

const attractions = [
  { name: "Amber Fort", desc: "A majestic hilltop fortress featuring classical Hindu style elements and ancient water harvesting kunds." },
  { name: "Jantar Mantar", desc: "A UNESCO World Heritage astronomical observatory reflecting ancient Indian celestial mechanics." },
  { name: "Hawa Mahal", desc: "The Palace of Winds, an iconic architectural marvel utilizing passive cooling and bio-climatic design." },
  { name: "City Palace", desc: "A gorgeous complex of courtyards, museums, and traditional architectural heritage." },
  { name: "Nahargarh Fort", desc: "Standing on the edge of the Aravalli Hills with sophisticated rainwater catchment systems." },
  { name: "Jal Mahal", desc: "A serene water palace exemplifying ancient Rajasthani lake architecture and hydrology." }
];

const HostCitySection = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FEF9EE 0%, #FFFDF7 50%, #FFFDF7 100%)" }}
    >
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(234,88,12,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(234,88,12,0.3) 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />

      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-16 flex flex-col gap-16 max-w-7xl mx-auto">

        {/* Jaipur Intro */}
        <motion.div
          className="rounded-2xl p-7 md:p-10"
          style={{ background: "#ffffff", border: "1px solid rgba(245,158,11,0.25)", boxShadow: "0 4px 24px rgba(234,88,12,0.06)" }}
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="flex-1">
              <span className="text-[#EA580C] text-xs font-bold tracking-[0.2em] uppercase block mb-3">Host City</span>
              <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl text-[#1C0B02] mb-6">
                Explore Jaipur &ndash; The Pink City of Living Heritage
              </h3>
              <div className="text-sm md:text-base leading-relaxed text-justify space-y-4 text-slate-700">
                <p>
                  Jaipur, popularly known as the &ldquo;Pink City of India,&rdquo; is the capital city of Rajasthan and one of the most renowned cultural and heritage destinations in the world. Recognized as a UNESCO World Heritage City, Jaipur was planned strictly according to the principles of <strong>Vastu Shastra and Shilpa Shastra</strong>, making it the ideal setting for an International Conference on Indian Knowledge Systems.
                </p>
                <p>
                  The city blends ancient wisdom—visible in the astronomical precision of Jantar Mantar and the passive cooling of its stepwells—with modern convention facilities. Jaipur forms an important part of the Golden Triangle Tourist Circuit and welcomes scholars from around the world.
                </p>
              </div>
            </div>

            {/* Visual element / frame for Jaipur info */}
            <div className="w-full lg:w-[38%] flex justify-center">
              <div
                className="bg-gradient-to-br from-[#2E1104] via-[#451A03] to-[#1C0B02] p-8 rounded-2xl shadow-xl w-full relative overflow-hidden border border-[#F59E0B]/30 flex flex-col justify-between"
                style={{ minHeight: "280px" }}
              >
                <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#EA580C]/20 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-[#F59E0B]/20 rounded-full blur-2xl pointer-events-none" />

                <div>
                  <h4
                    className="text-2xl font-bold mb-3 tracking-tight leading-snug text-[#FDE68A]"
                  >
                    Living IKS Heritage
                  </h4>

                  <p
                    className="text-sm leading-relaxed mb-6 text-[#FED7AA]/85"
                  >
                    Jaipur was inscribed as a World Heritage Site by UNESCO for its outstanding urban planning, Vedic grid architecture, water conservation kunds, and astronomical landmarks.
                  </p>
                </div>

                {/* Footer Tag */}
                <div className="pt-4 border-t border-[#F59E0B]/20 flex items-center justify-between mt-auto">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#FDE68A]/60">Circuit</span>
                  <div
                    className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider text-white"
                    style={{
                      background: "linear-gradient(135deg, #EA580C 0%, #D97706 100%)",
                    }}
                  >
                    Golden Triangle Circuit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why Jaipur is Ideal Venue */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-bold text-xl md:text-3xl text-[#1C0B02] mb-3">
              Why Jaipur is an Ideal Venue for PRAKASH 2027
            </h3>
            <p className="text-sm text-[#2E1104]/70">
              A vibrant historical ecosystem that harmonizes logistical convenience with an immersive cultural and academic experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#F59E0B]/20 border border-[#F59E0B]/30 rounded-3xl overflow-hidden shadow-xl shadow-[#EA580C]/5">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                className="bg-[#FFFDF7] p-6 transition-all duration-300 hover:bg-[#FEF9EE]"
                variants={fadeInUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-[#F59E0B]/25 flex items-center justify-center mb-4 shadow-sm">
                  {r.icon}
                </div>
                <h4 className="font-bold text-base text-[#1C0B02] mb-2">{r.title}</h4>
                <p className="text-xs md:text-sm text-[#2E1104]/75 leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Major Attractions */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-bold text-xl md:text-3xl text-[#1C0B02] mb-3">
              Major Attractions in Jaipur
            </h3>
            <p className="text-sm text-[#2E1104]/70">
              Participants attending PRAKASH 2027 can experience centuries of indigenous engineering, astronomy, and artistic traditions first-hand.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#F59E0B]/20 border border-[#F59E0B]/30 rounded-3xl overflow-hidden shadow-xl shadow-[#EA580C]/5">
            {attractions.map((a, i) => (
              <motion.div
                key={i}
                className="bg-[#FFFDF7] p-6 relative overflow-hidden transition-all duration-300 hover:bg-[#FEF9EE]"
                variants={fadeInUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#EA580C] to-[#F59E0B]" />
                <h4 className="font-bold text-lg text-[#1C0B02] mb-2">{a.name}</h4>
                <p className="text-sm text-[#2E1104]/75 leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <AboutIntro />
      <AboutPIET />
      <AboutAppliedSciencesDepartment />
      <HostCitySection />
    </div>
  );
}
