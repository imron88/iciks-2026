"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Using direct public paths
const arrowRightPath = "/assets/arrow-right.svg";
const ktlogoPath = "/assets/ktlogo.png";

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Mr. Hari Singh Shekhawat",
    role: "Director (Infrastructure)",
    bio: "Poornima Group, Jaipur",
    image: ktlogoPath
  },
  {
    id: 2,
    name: "Mr. MKM Shah",
    role: "Director (Admin & Finance)",
    bio: "Poornima Group, Jaipur",
    image: ktlogoPath
  },
  {
    id: 3,
    name: "Deepak Mathur",
    role: "Honorary Chair",
    bio: "",
    image: ktlogoPath
  },
  {
    id: 4,
    name: "Prof. (Dr.) Carlos M. Travieso-Gonzalez",
    role: "General Chair",
    bio: "University of Las Palmas de Gran Canaria, Spain",
    image: ktlogoPath
  },
  {
    id: 5,
    name: "Prof. (Dr.) Dinesh Goyal",
    role: "Conference Chair",
    bio: "Principal & Director, PIET, Jaipur",
    image: ktlogoPath
  },
  {
    id: 6,
    name: "Prof. (Dr.) Payal Bansal",
    role: "Organizing Chair",
    bio: "HOD, IoT Department, PIET, Jaipur",
    image: ktlogoPath
  }
];

export const TeamSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }),
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#FFFDF7] w-full relative overflow-hidden">
      {/* Subtle glow blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-10 left-1/4 h-64 w-64 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #EA580C, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 right-1/4 h-64 w-64 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #F59E0B, transparent 70%)" }}
      />

      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 relative z-10">
        <div className="section-heading w-full text-center">
          <span
            className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.18em] uppercase mb-3"
            style={{
              background: "linear-gradient(135deg, rgba(234,88,12,0.1), rgba(245,158,11,0.18))",
              border: "1px solid rgba(234,88,12,0.25)",
              color: "#C2410C",
            }}
          >
            Leadership & Organization
          </span>
          <h2
            className="font-bold leading-tight mt-3 text-3xl sm:text-4xl md:text-5xl"
            style={{
              background: "linear-gradient(135deg, #1C0B02 30%, #7C2D12 70%, #EA580C 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.02em",
            }}
          >
            Organizing Committee
          </h2>
          <p className="mt-4 mx-auto text-base sm:text-lg max-w-2xl" style={{ color: "#2E1104", opacity: 0.75 }}>
            Meet the distinguished leaders and organizers who are driving PRAKASH 2027 forward.
          </p>
          <div
            className="mx-auto mt-5 h-px w-20"
            style={{ background: "linear-gradient(90deg, #EA580C, #F59E0B)" }}
          />
        </div>

        {/* Team grid */}
        <div className="mt-14 px-4 w-full mx-auto relative">
          <div
            ref={containerRef}
            className="h-auto overflow-visible pr-4 pb-2"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  className="rounded-2xl border border-[#F59E0B]/25 shadow-md bg-white hover:border-[#EA580C]/60 hover:shadow-xl hover:shadow-[#EA580C]/10 overflow-hidden flex flex-col h-auto min-h-[180px] p-8 transition-all duration-300 group"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={index}
                >
                  <div className="flex flex-col justify-center flex-grow space-y-2">
                    <h3 className="font-bold text-xl md:text-2xl tracking-tight text-[#1C0B02] leading-tight group-hover:text-[#EA580C] transition-colors">{member.name}</h3>
                    <p className="text-base md:text-lg text-[#EA580C] font-bold">{member.role}</p>
                    <p className="text-sm md:text-base text-[#2E1104]/80 leading-relaxed font-medium">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <a href="/committees">
            <button className="text-white px-7 py-3 rounded-xl font-bold text-base inline-flex items-center justify-center tracking-tight transition-all shadow-lg hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #EA580C 0%, #D97706 100%)",
                boxShadow: "0 4px 18px rgba(234,88,12,0.35)",
              }}
            >
              View Full Committee
              <Image src={arrowRightPath} alt="Arrow right" width={20} height={20} className="h-4 w-4 ml-2 filter invert" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};