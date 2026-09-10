"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLightbulb } from "react-icons/fa";

// Using direct public path
const idea = "/assets/pics/idea.png";

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

const organizingPartners: Partner[] = [
  {
    id: "org-1",
    name: "AICTE IDEA Lab, PIET",
    bio: "Innovation, Design, Engineering, and Art Laboratory at Poornima Institute of Engineering & Technology.",
    description: "IDEA LAB at PIET is a state-of-the-art innovation hub that fosters creativity, research, and technological advancement. The laboratory serves as a catalyst for interdisciplinary collaboration, bringing together students, faculty, and industry professionals to work on cutting-edge projects in engineering, technology, and design. With modern facilities and equipment, IDEA LAB provides an environment where innovative ideas can be transformed into practical solutions.",
    logo: idea,
    type: "organizing",
    website: "#"
  }
];

export const OrganizingPartnersSection = () => {
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
              Organizing Partners
            </span>
          </h2>
          <p className="text-lg text-[#0b0f19]/70 leading-relaxed max-w-2xl mx-auto mt-5">
            Institutional partners who provide essential support and resources for successfully conducting PRAKASH 2027.
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {organizingPartners.map((partner, index) => (
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
                      <FaLightbulb className="w-4 h-4 text-white" />
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
