"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { PageHero } from "@/components/PageHero";

// SpeakersHero Component
const SpeakersHero = () => {
  return (
    <PageHero
      badge="॥ तमसो मा ज्योतिर्गमय ॥ · PRAKASH 2027"
      title="Keynote Speakers & Experts"
      subtitle="Eminent scholars, traditional masters, and research innovators bridging ancient Indian wisdom with contemporary scientific frontiers"
      tagline="Learn from distinguished scholars, traditional masters, and researchers bridging ancient Indian wisdom with contemporary innovation"
      primaryCta={{ label: "View Committees", href: "/committees" }}
      secondaryCta={{ label: "Explore 5 Tracks", href: "/callforpaper" }}
    />
  );
};

// SpeakersSection Component
const defaultPhoto = "/assets/user.jpeg";

interface Speaker {
  id: string;
  name: string;
  designation: string;
  institution: string;
  country: string;
  image: string;
}

const speakers: Speaker[] = [
  {
    id: "speaker-1",
    name: "Vinay Deshpande",
    designation: "Academic & IKS Representative",
    institution: "Bhishma School of Indian Knowledge System, Australia Center",
    country: "Australia",
    image: defaultPhoto,
  },
  {
    id: "speaker-2",
    name: "Shri. Chandrahas Jog",
    designation: "Vedic & IKS Scholar",
    institution: "Bhishma School of Indian Knowledge System, Australia Center",
    country: "Australia",
    image: defaultPhoto,
  },
  {
    id: "speaker-3",
    name: "Dr. Pravina Rodrigues",
    designation: "Assistant Professor, Comparative Theology & Ethics | Editor-in-Chief, Journal of Dharma Studies (Springer)",
    institution: "Starr King School for the Ministry, California",
    country: "USA",
    image: defaultPhoto,
  },
  {
    id: "speaker-4",
    name: "Dr. Antonio Marturano (PhD Law, Milan)",
    designation: "Editor, JICES (Emerald) & Author, Leadership & Philosophy (Routledge 2025)",
    institution: "University of Rome Tor Vergata",
    country: "Italy",
    image: defaultPhoto,
  },
  {
    id: "speaker-5",
    name: "Prof. Uday S. Dixit",
    designation: "Head, Centre for Indian Knowledge Systems (CIKS)",
    institution: "IIT Guwahati",
    country: "India",
    image: defaultPhoto,
  },
  {
    id: "speaker-7",
    name: "Prof. Deepa S P Mathur",
    designation: "Professor, Department of English",
    institution: "University of Rajasthan, Jaipur",
    country: "India",
    image: defaultPhoto,
  },
  {
    id: "speaker-8",
    name: "Prof. Amitabh Vikram Dwivedi",
    designation: "Dean, Humanities and Social Sciences",
    institution: "Shri Mata Vaishno Devi University",
    country: "India",
    image: defaultPhoto,
  },
  {
    id: "speaker-9",
    name: "Dr. Preeti Bhatt",
    designation: "Associate Professor, Dept. of Humanities & Social Sciences",
    institution: "MNIT Jaipur",
    country: "India",
    image: defaultPhoto,
  },
  {
    id: "speaker-10",
    name: "Dr. Sanju Choudhary",
    designation: "Assistant Professor",
    institution: "University of Rajasthan, Jaipur",
    country: "India",
    image: defaultPhoto,
  },
  {
    id: "speaker-11",
    name: "Dr. Kaustubh Ranjan",
    designation: "Assistant Professor, Department of English",
    institution: "Indira Kala Sangit Vishwavidyalaya, Khairagarh",
    country: "India",
    image: defaultPhoto,
  },
  {
    id: "speaker-12",
    name: "Dr. Anil Aaniket",
    designation: "Assistant Professor, Dept. of History and Indian Culture",
    institution: "University of Rajasthan, Jaipur",
    country: "India",
    image: defaultPhoto,
  },
  {
    id: "speaker-13",
    name: "Dr. Krishan Kumar Kumawat",
    designation: "State Coordinator, Youth Skill Development Cell (NSS)",
    institution: "Commissionerate of College Education, Rajasthan, Jaipur",
    country: "India",
    image: defaultPhoto,
  },
  {
    id: "speaker-14",
    name: "Dr. Gurpreet Kaur",
    designation: "Assistant Professor & Head, Post Graduate Dept. of English",
    institution: "Sri Guru Teg Bahadur Khalsa College, Sri Anandpur Sahib",
    country: "India",
    image: defaultPhoto,
  },
  {
    id: "speaker-15",
    name: "Dr. M. Rajaram",
    designation: "Associate Professor, PG & Research Dept. of English",
    institution: "M.V. Muthiah Govt. Arts College for Women, Dindigul",
    country: "India",
    image: defaultPhoto,
  },
  {
    id: "speaker-16",
    name: "Dr. Rajesh Sharma",
    designation: "Academic Scholar & Expert in Indian Knowledge Systems",
    institution: "Jaipur, Rajasthan",
    country: "India",
    image: defaultPhoto,
  },
];

const SpeakersSection = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * (index % 6), // Stagger delay reset per row-like grouping
        duration: 0.5
      }
    })
  };

  return (
    <section
      className="py-12 sm:py-16 md:py-24 relative overflow-hidden"
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

      <div className="container px-4 relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C0B02] mb-4">
            Distinguished Keynote Speakers & Dignitaries
          </h2>
          <p className="text-[#451A03]/75 text-sm sm:text-base max-w-4xl mx-auto leading-relaxed">
            PRAKASH 2027 will feature keynote addresses and plenary talks by distinguished academicians, traditional scholars (Shastris), scientists, and industry innovators from prestigious institutions worldwide, fostering interdisciplinary synthesis across Indian Knowledge Systems.
          </p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#EA580C] to-[#F59E0B]" />
        </div>

        <div className="px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1px] bg-[#F59E0B]/20 border border-[#F59E0B]/30 rounded-3xl overflow-hidden max-w-7xl mx-auto shadow-xl shadow-[#EA580C]/5">
            {speakers.map((speaker, index) => (
              <motion.div
                key={speaker.id}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                custom={index}
                className="group p-6 bg-[#FFFDF7] transition-all duration-300 hover:bg-[#FEF3C7]/40 flex flex-col h-full items-center text-center border border-[#F59E0B]/10"
              >
                {/* Speaker Image */}
                <div className="w-28 h-28 mb-5 rounded-full overflow-hidden shadow-md border-4 border-[#F59E0B]/20 group-hover:border-[#EA580C]/50 transition-colors duration-300 relative flex-shrink-0">
                  <Image
                    src={speaker.image}
                    alt={`${speaker.name} photo`}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>

                {/* Speaker Details */}
                <div className="flex-grow flex flex-col w-full">
                  <h3 className="font-bold text-lg tracking-tight text-[#1C0B02] mb-1.5 group-hover:text-[#EA580C] transition-colors line-clamp-1">
                    {speaker.name}
                  </h3>
                  <p className="text-xs text-[#EA580C] font-bold mb-3 line-clamp-2 min-h-[2rem] flex items-center justify-center">
                    {speaker.designation}
                  </p>
                  <div className="mt-auto pt-3 border-t border-[#F59E0B]/15 w-full">
                    <p className="text-xs text-[#451A03]/80 font-medium mb-1 line-clamp-2 min-h-[2rem]">
                      {speaker.institution}
                    </p>
                    <p className="text-[10px] text-[#EA580C] font-bold uppercase tracking-wider">
                      {speaker.country}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Keynote Sessions Insights (Outro) */}
        <div className="mt-16 text-center max-w-4xl mx-auto px-4">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFDF7] border border-[#F59E0B]/30 shadow-lg backdrop-blur-sm">
            <p className="text-[#451A03]/85 text-sm sm:text-base leading-relaxed">
              The keynote sessions will provide profound insights into Indian scientific heritage, Vedic mathematics, evidence-based Ayurveda, sacred architecture, sustainable ecology, Kautilyan statecraft, and NEP 2020 integration, bridging timeless wisdom with cutting-edge global research.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function SpeakersPage() {
  return (
    <div>
      <SpeakersHero />
      <SpeakersSection />
    </div>
  );
}
