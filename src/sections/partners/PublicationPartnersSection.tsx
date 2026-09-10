"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaBook } from "react-icons/fa";

// Using direct public path
const crc = "/assets/pics/crc.png";
const iete = "/assets/pics/iete.png";
const taru = "/assets/pics/taru.png";
const aip = "/assets/pics/aip.jpg";

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
  },
  // {
  //   id: "pub-4",
  //   name: "IETE Publication",
  //   bio: "International Journal of Technical Education specializing in educational technology research.",
  //   description: "The International Journal of Technical Education (IJTE) by IETE is a peer-reviewed publication dedicated to advancing technical education research and practice. The journal publishes original research articles, case studies, and reviews that contribute to the understanding and improvement of technical education methodologies, curriculum development, and educational technology applications.",
  //   logo: iete,
  //   type: "publication",
  //   website: "#"
  // }
];

export const PublicationPartnersSection = () => {
  return (
    <section 
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FDFDF6 0%, #FDFDF6 50%, #ffffff 100%)",
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
              Publication Partners
            </span>
          </h2>
          <p className="text-lg text-[#0b0f19]/70 leading-relaxed max-w-2xl mx-auto mt-5">
            Renowned publishers committed to disseminating high-quality research and ensuring wide accessibility of scholarly work.
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {publicationPartners.map((partner, index) => (
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
                <div className="md:w-64 flex-shrink-0 p-8 flex items-center justify-center bg-gradient-to-br from-[#F8FAFF] to-[#E6ECFF]">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-[#4849F8]/5 shadow-md bg-white p-4 transition-colors duration-300 group-hover:border-[#4849F8]/20">
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        width={128}
                        height={128}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#4849F8] rounded-full flex items-center justify-center">
                      <FaBook className="w-4 h-4 text-white" />
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
                  <p className="text-base text-[#0b0f19]/80 leading-relaxed">
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
