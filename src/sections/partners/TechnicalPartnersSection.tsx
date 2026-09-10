"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaUniversity } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

// Using direct public path
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

export const TechnicalPartnersSection = () => {
  return (
    <section 
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #FDFDF6 50%, #FDFDF6 100%)",
      }}
    >
      {/* Grid texture */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#4849F8 1px, transparent 1px), linear-gradient(90deg, #4849F8 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4849F8] to-[#0b0f19]">
              Technical Partners
            </span>
          </h2>
          <p className="text-lg text-[#0b0f19]/70 leading-relaxed max-w-2xl mx-auto mt-5">
            Leading professional organizations that provide technical expertise and support for advancing research standards in our field.
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {technicalPartners.map((partner, index) => (
            <motion.div
              key={partner.id}
              className="group bg-white rounded-3xl border border-[#4849F8]/5 overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_-10px_rgba(72,73,248,0.08)] hover:-translate-y-2 hover:border-[#4849F8]/15"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Left: Image */}
                <div className="md:w-80 flex-shrink-0 p-8 flex items-center justify-center bg-gradient-to-br from-[#F8FAFF] to-[#E6ECFF]">
                  <div className="relative">
                    <div className={twMerge(
                      "rounded-2xl overflow-hidden border-4 border-[#4849F8]/5 shadow-md bg-white p-2 flex items-center justify-center transition-colors duration-300 group-hover:border-[#4849F8]/20",
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
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#4849F8] rounded-full flex items-center justify-center z-10">
                      <FaUniversity className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="flex-1 p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-[#0b0f19] mb-2">{partner.name}</h3>
                      <p className="text-base text-[#4849F8] font-medium">{partner.bio}</p>
                    </div>
                  </div>
                  <p className="text-base text-[#0b0f19]/80 leading-relaxed mb-6">
                    {partner.description}
                  </p>
                  {partner.website && partner.website !== "#" && (
                    <motion.a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#4849F8] hover:text-[#0b0f19] font-medium transition-colors group"
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
