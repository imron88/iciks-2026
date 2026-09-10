"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaUniversity, FaBook } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

// PartnersHero Component
const PartnersHero = () => {
  const heroRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full flex flex-col items-center justify-center overflow-hidden"
      style={{
        minHeight: "52vh",
        background: "linear-gradient(135deg, #1C0B02 0%, #2E1104 50%, #451A03 100%)",
      }}
    >
      {/* Grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,158,11,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,1) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Glow blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/4 h-64 w-64 rounded-full opacity-[0.15]"
        style={{ background: "radial-gradient(circle, #EA580C, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-1/4 h-52 w-52 rounded-full opacity-[0.12]"
        style={{ background: "radial-gradient(circle, #F59E0B, transparent 70%)" }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.6), rgba(234,88,12,0.4), transparent)" }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-4 py-20 sm:py-28">
        <motion.div
          className="flex flex-col items-center justify-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Conference Tag */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.18em] uppercase mb-5"
            style={{
              background: "linear-gradient(135deg, rgba(234,88,12,0.18), rgba(245,158,11,0.22))",
              border: "1px solid rgba(245,158,11,0.4)",
              color: "#FDE68A",
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />
            PRAKASH 2027 · 26–27 February 2027, Jaipur
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="font-bold leading-tight mb-5"
            style={{
              fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
              background: "linear-gradient(135deg, #FFFDF7 40%, #FDE68A 80%, #F59E0B 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.02em",
              maxWidth: "50rem",
            }}
          >
            Our Partners
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="italic text-base sm:text-lg"
            style={{ color: "rgba(254,243,199,0.85)", maxWidth: "36rem", lineHeight: 1.7 }}
          >
            &ldquo;PRAKASH 2027 is proudly supported by leading academic institutions, research centers, and cultural organizations dedicated to revitalizing Indian Knowledge Systems.&rdquo;
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom fade into content section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #FFFDF7)" }}
      />
    </section>
  );
};

// TechnicalPartnersSection Component
const ieteLogoPath = "/assets/pics/iete.png";
const ieeeLogoPath = "/assets/pics/ieee_sb.png";
const acmLogoPath = "/assets/pics/acm.png";

type PartnerType = "technical" | "publication" | "organizing";

interface Partner {
  id: string;
  name: string;
  bio: string;
  description: string;
  logo: string;
  type: PartnerType;
  website?: string;
}

const technicalPartners: Partner[] = [
  {
    id: "tech-1",
    name: "IETE",
    bio: "Institution of Electronics and Telecommunication Engineers - Promoting electronics and telecommunication engineering in India.",
    description: "The Institution of Electronics and Telecommunication Engineers (IETE) is a National Professional non-profit making Society for the Electronics and Telecommunication Engineering community in our country with the motto of advancing electronics, telecommunications, computers, and information technology. IETE conducts various programs for the development of Technical Education and to maintain the quality and relevance of technical education.",
    logo: ieteLogoPath,
    type: "technical",
    website: "https://www.iete.org/"
  },
  {
    id: "tech-2",
    name: "IEEE SB",
    bio: "IEEE Student Branch - Student organization promoting technology and innovation through IEEE.",
    description: "IEEE Student Branch is a student organization affiliated with IEEE, the world's largest technical professional organization. The Student Branch provides students with opportunities to network, develop technical skills, and participate in professional development activities. It inspires students to innovate for a better tomorrow through IEEE's highly cited publications, conferences, technology standards, and educational activities.",
    logo: ieeeLogoPath,
    type: "technical",
    website: "https://www.ieee.org/"
  },
  {
    id: "tech-3",
    name: "ACM",
    bio: "Association for Computing Machinery - International learned society for computing professionals and researchers.",
    description: "ACM is an international learned society for computing. It was founded in 1947 and is the world's largest scientific and educational computing society. The ACM is a non-profit professional membership group, claiming nearly 100,000 student and professional members. Its headquarters are in New York City. ACM brings together computing educators, researchers, and professionals to inspire dialogue, share resources, and address the field's challenges.",
    logo: acmLogoPath,
    type: "technical",
    website: "https://www.acm.org/"
  }
];

const TechnicalPartnersSection = () => {
  return (
    <section 
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FFFDF7 0%, #FEF9EE 50%, #FFFDF7 100%)",
      }}
    >
      {/* Grid texture */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#EA580C 1px, transparent 1px), linear-gradient(90deg, #EA580C 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="max-w-4xl mx-auto text-center mb-16 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C2D12] via-[#C2410C] to-[#D97706]">
              Technical Partners
            </span>
          </h2>
          <p className="text-lg text-[#451A03]/80 leading-relaxed max-w-2xl mx-auto mt-5">
            Leading professional organizations that provide technical expertise and support for advancing research standards in our field.
          </p>
        </div>

        <div className="mt-16 space-y-8 px-4">
          {technicalPartners.map((partner, index) => (
            <motion.div
              key={partner.id}
              className="group bg-[#FFFDF7] rounded-3xl border border-[#F59E0B]/20 overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_-10px_rgba(234,88,12,0.1)] hover:-translate-y-2 hover:border-[#EA580C]/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Left: Image */}
                <div className="md:w-80 flex-shrink-0 p-8 flex items-center justify-center bg-gradient-to-br from-[#FFFDF7] to-[#FEF3C7]/40">
                  <div className="relative">
                    <div className={twMerge(
                      "rounded-2xl overflow-hidden border-4 border-[#F59E0B]/20 shadow-md bg-white p-2 flex items-center justify-center transition-colors duration-300 group-hover:border-[#EA580C]/40",
                      index === 1 ? "w-72 h-40" : "w-32 h-32"
                    )}>
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        width={index === 1 ? 288 : 128}
                        height={index === 1 ? 160 : 128}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#EA580C] rounded-full flex items-center justify-center z-10 shadow-md shadow-[#EA580C]/30">
                      <FaUniversity className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="flex-1 p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-[#1C0B02] mb-2">{partner.name}</h3>
                      <p className="text-base text-[#EA580C] font-semibold">{partner.bio}</p>
                    </div>
                  </div>
                  <p className="text-base text-[#451A03]/80 leading-relaxed mb-6">
                    {partner.description}
                  </p>
                  {partner.website && partner.website !== "#" && (
                    <motion.a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#EA580C] hover:text-[#C2410C] font-semibold transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      Visit Website
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2 group-hover:translate-x-1 transition-transform">
                        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// PublicationPartnersSection Component
const crc = "/assets/pics/crc.png";
const taru = "/assets/pics/taru.png";
const aip = "/assets/pics/aip.jpg";

const publicationPartners: Partner[] = [
  {
    id: "pub-1",
    name: "AIP Conference Proceedings",
    bio: "Premier publisher of scientific conference proceedings from international meetings.",
    description: "AIP Conference Proceedings program reports the findings presented at scientific meetings from large international conferences to small specialist workshops. With a distinguished history of publishing high-quality research, AIP ensures that groundbreaking discoveries and innovations presented at conferences reach the global scientific community through rigorous peer-review and wide dissemination.",
    logo: aip,
    type: "publication",
    website: "https://aip.scitation.org/journal/apc"
  },
  {
    id: "pub-2",
    name: "Taru Publication",
    bio: "Leading publisher of academic research papers and technical journals.",
    description: "Taru Publication is a distinguished academic publisher specializing in high-quality research publications across various technical and scientific disciplines. With a commitment to advancing knowledge and promoting scholarly excellence, Taru Publication provides a platform for researchers to share their innovative work with the global academic community.",
    logo: taru,
    type: "publication",
    website: "#"
  },
  {
    id: "pub-3",
    name: "*CRC Publication",
    bio: "Premier publisher of technical and scientific resources with global reach.",
    description: "CRC Publication stands as a premier publisher in the technical and scientific publishing landscape, offering comprehensive resources that span multiple disciplines. With decades of experience in academic publishing, CRC Publication maintains rigorous editorial standards and provides authors with extensive support throughout the publication process.",
    logo: crc,
    type: "publication",
    website: "#"
  }
];

const PublicationPartnersSection = () => {
  return (
    <section 
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FEF9EE 0%, #FEF9EE 50%, #FFFDF7 100%)",
      }}
    >
      {/* Grid texture */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#EA580C 1px, transparent 1px), linear-gradient(90deg, #EA580C 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="max-w-4xl mx-auto text-center mb-16 px-4">          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C2D12] via-[#C2410C] to-[#D97706]">
              Publication Partners
            </span>
          </h2>
          <p className="text-lg text-[#451A03]/80 leading-relaxed max-w-2xl mx-auto mt-5">
            Renowned publishers committed to disseminating high-quality research and ensuring wide accessibility of scholarly work.
          </p>
        </div>

        <div className="mt-16 space-y-8 px-4">
          {publicationPartners.map((partner, index) => (
            <motion.div
              key={partner.id}
              className="group bg-[#FFFDF7] rounded-3xl border border-[#F59E0B]/20 overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_-10px_rgba(234,88,12,0.1)] hover:-translate-y-2 hover:border-[#EA580C]/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Left: Image */}
                <div className="md:w-64 flex-shrink-0 p-8 flex items-center justify-center bg-gradient-to-br from-[#FFFDF7] to-[#FEF3C7]/40">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-[#F59E0B]/20 shadow-md bg-white p-4 transition-colors duration-300 group-hover:border-[#EA580C]/40">
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        width={128}
                        height={128}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#EA580C] rounded-full flex items-center justify-center shadow-md shadow-[#EA580C]/30">
                      <FaBook className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="flex-1 p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-[#1C0B02] mb-2">{partner.name}</h3>
                      <p className="text-base text-[#EA580C] font-semibold">{partner.bio}</p>
                    </div>
                  </div>
                  <p className="text-base text-[#451A03]/80 leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function PartnersPage() {
  return (
    <>
      <PartnersHero />
      <TechnicalPartnersSection />
      <PublicationPartnersSection />
    </>
  );
}
