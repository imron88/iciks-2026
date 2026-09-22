"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

import { PageHero } from "@/components/PageHero";

// CommitteesHero Component
const CommitteesHero = () => {
  return (
    <PageHero
      badge="॥ तमसो मा ज्योतिर्गमय ॥ · PRAKASH 2027"
      title="Conference Committees"
      subtitle="Organizing leadership, international & national advisory boards, and technical chairs steering PRAKASH 2027"
      tagline="Meet the distinguished scholars, traditional masters, and academic leaders steering PRAKASH 2027"
      primaryCta={{ label: "View Keynote Speakers", href: "/speakers" }}
      secondaryCta={{ label: "About Institute", href: "/about" }}
    />
  );
};

// CommitteesSection Component
const committeeData = {
  chiefPatron: [
    {
      id: 1,
      name: "Dr. Shashikant Singhi",
      role: "Chairman",
      organization: "Poornima Group"
    }
  ],
  patron: [
    {
      id: 2,
      name: "Ar. Rahul Singhi",
      role: "Group Director",
      organization: "Poornima Group"
    }
  ],
  chairperson: [
    {
      id: 3,
      name: "Dr. Dinesh Goyal",
      role: "Director & Principal",
      organization: "PIET, Jaipur"
    }
  ],
  conveners: [
    {
      id: 4,
      name: "Dr. Krati Sharma",
      role: "Professor",
      organization: "Department of Applied Sciences"
    },
    {
      id: 5,
      name: "Dr. Neetu Sharma",
      role: "Associate Professor",
      organization: "Department of Applied Sciences"
    }
  ],
  organizingMembers: [
    {
      sNo: 1,
      id: 6,
      name: "Dr. Rekha Nair",
      role: "Professor & HOD",
      organization: "Department of Applied Sciences"
    },
    {
      sNo: 2,
      id: 7,
      name: "Dr. Deepen Banoriya",
      role: "Professor & Dy. HOD (Admin)"
    },
    {
      sNo: 3,
      id: 8,
      name: "Dr. Rituraj Singh Rathore",
      role: "Associate Professor & Dy. HOD (Academics)"
    },
    {
      sNo: 4,
      id: 9,
      name: "Dr. O.P. Sikhwal",
      role: "Professor"
    },
    {
      sNo: 5,
      id: 10,
      name: "Dr. Nitin Mathur",
      role: "Associate Professor"
    },
    {
      sNo: 6,
      id: 11,
      name: "Dr. Prince Dawar",
      role: "Associate Professor"
    },
    {
      sNo: 7,
      id: 12,
      name: "Dr. Mahak Bhatia",
      role: "Associate Professor"
    },
    {
      sNo: 8,
      id: 13,
      name: "Ms. Neha Shekhawat",
      role: "Assistant Professor"
    },
    {
      sNo: 9,
      id: 14,
      name: "Ms. Charul Bapna",
      role: "Assistant Professor"
    },
    {
      sNo: 10,
      id: 15,
      name: "Ms. Rimjhim Jain",
      role: "Assistant Professor"
    },
    {
      sNo: 11,
      id: 16,
      name: "Mr. Vishal Rohela",
      role: "Assistant Professor"
    },
    {
      sNo: 12,
      id: 17,
      name: "Mr. Vishnu Prakash Sharma",
      role: "Assistant Professor"
    },
    {
      sNo: 13,
      id: 18,
      name: "Mr. Arvind Mathur",
      role: "Assistant Professor"
    },
    {
      sNo: 14,
      id: 19,
      name: "Mr. Himanshu Giria",
      role: "Assistant Professor"
    },
    {
      sNo: 15,
      id: 20,
      name: "Mr. Shiv Prakash Dadhich",
      role: "Assistant Professor"
    },
    {
      sNo: 16,
      id: 21,
      name: "Dr. Ashwani Kumar",
      role: "Dept of CS"
    },
    {
      sNo: 17,
      id: 22,
      name: "Dr. Vandana Rajawat",
      role: "Dept of IoT"
    },
    {
      sNo: 18,
      id: 23,
      name: "Ms. Jyoti Panchariya",
      role: "Dept of AI & DS"
    }
  ],
  internationalAdvisory: [
    {
      id: 201,
      name: "Vinay Deshpande",
      role: "Bhishma School of Indian Knowledge System",
      organization: "Australia Center"
    },
    {
      id: 202,
      name: "Shri. Chandrahas Jog",
      role: "Bhishma School of Indian Knowledge System",
      organization: "Australia Center"
    },
    {
      id: 203,
      name: "Dr. Pravina Rodrigues",
      role: "Assistant Professor & Editor-in-Chief, Journal of Dharma Studies (Springer)",
      organization: "Starr King School for the Ministry, California, USA"
    },
    {
      id: 204,
      name: "Dr. Antonio Marturano (PhD Law, Milan)",
      role: "Editor, JICES (Emerald) & Author, Leadership & Philosophy (Routledge 2025)",
      organization: "University of Rome Tor Vergata, Rome, Italy"
    },
  ],
  nationalAdvisory: [
    {
      id: 101,
      name: "Prof. Uday S. Dixit",
      role: "Head, Centre for Indian Knowledge Systems (CIKS)",
      organization: "Indian Institute of Technology (IIT) Guwahati"
    },
    {
      id: 102,
      name: "Prof. Kshitij Patukale",
      role: "Director & Scholar",
      organization: "Bhishma School of Indian Knowledge System, Pune"
    },
    {
      id: 103,
      name: "Prof. Deepa S P Mathur",
      role: "Professor, Department of English",
      organization: "University of Rajasthan, Jaipur"
    },
    {
      id: 104,
      name: "Prof. Amitabh Vikram Dwivedi",
      role: "Dean, Humanities and Social Sciences",
      organization: "Shri Mata Vaishno Devi University"
    },
    {
      id: 105,
      name: "Dr. Preeti Bhatt",
      role: "Associate Professor, Department of Humanities and Social Sciences",
      organization: "Malaviya National Institute of Technology (MNIT), Jaipur"
    },
    {
      id: 106,
      name: "Dr. Sanju Choudhary",
      role: "Assistant Professor",
      organization: "University of Rajasthan, Jaipur"
    },
    {
      id: 107,
      name: "Dr. Kaustubh Ranjan",
      role: "Assistant Professor, Department of English",
      organization: "Indira Kala Sangit Vishwavidyalaya, Khairagarh, Chhattisgarh"
    },
    {
      id: 108,
      name: "Dr. Anil Aaniket",
      role: "Assistant Professor, Department of History and Indian Culture",
      organization: "University of Rajasthan, Jaipur"
    },
    {
      id: 109,
      name: "Dr. Krishan Kumar Kumawat",
      role: "State Coordinator, Youth Skill Development Cell (NSS)",
      organization: "Commissionerate of College Education, Rajasthan, Jaipur"
    },
    {
      id: 110,
      name: "Dr. Gurpreet Kaur",
      role: "Assistant Professor & Head, Post Graduate Department of English",
      organization: "Sri Guru Teg Bahadur Khalsa College, Sri Anandpur Sahib, Punjab"
    },
    {
      id: 111,
      name: "Dr. M. Rajaram",
      role: "Associate Professor, PG and Research Department of English",
      organization: "M.V. Muthiah Government Arts College for Women, Dindigul, Tamil Nadu"
    },
    {
      id: 112,
      name: "Dr. Rajesh Sharma",
      role: "Academic Scholar & Expert in Indian Knowledge Systems",
      organization: "Rajasthan, India"
    },
    {
      id: 70,
      name: "Dr. Sandeep Tiwari",
      organization: "Vikram University, Ujjain (M.P.)"
    },
    {
      id: 71,
      name: "Prof. (Dr.) Binwal",
      organization: "Mody University of Science and Technology, Lakshamangarh, Sikar (Raj.) India"
    },
    {
      id: 72,
      name: "Dr. Ritu Agarwal",
      organization: "MNIT, Jaipur, (Raj.) India"
    },
    {
      id: 73,
      name: "Dr. S. D. Purohit",
      organization: "RTU Kota (Raj.) India"
    },
    {
      id: 74,
      name: "Prof. (Dr.) V. K. Gupta",
      organization: "Govt. Madhav Science College, Ujjain (M. P.) India"
    },
    {
      id: 75,
      name: "Prof. (Dr.) R. K. Sharma",
      organization: "Govt. P. G. College, Shujalpur (M. P.) India"
    },
    {
      id: 76,
      name: "Dr. Mamta Singh",
      organization: "Bundelkhand University, Jhansi, India"
    },
    {
      id: 77,
      name: "Dr. Ravi Gor",
      organization: "Gujarat University, Ahmedabad"
    },
  ]
};

const CommitteesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.02 * index,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }),
    hover: {
      y: -5,
      boxShadow: "0 20px 40px -10px rgba(30, 58, 95, 0.08)",
      borderColor: "rgba(30, 58, 95, 0.1)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const CommitteeCard = ({ member, index, cardWidthClass }: { member: any, index: number, cardWidthClass: string }) => {
    const cardContent = (
      <div className="flex flex-col justify-center h-full space-y-3">
        {member.sNo && (
          <div className="flex justify-center mb-1">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold bg-[#EA580C]/10 text-[#C2410C] border border-[#EA580C]/20 shadow-sm">
              {member.sNo}
            </span>
          </div>
        )}
        {member.logo && (
          <div className="mb-2 flex justify-center h-30 relative px-2">
            <Image
              src={member.logo}
              alt={`${member.name} logo`}
              width={200}
              height={80}
              className="object-contain h-full w-auto"
            />
          </div>
        )}
        <h3 className="font-bold text-lg md:text-xl tracking-tight text-[#1C0B02] leading-tight text-center">{member.name}</h3>
        {member.role && (
          <p className="text-sm md:text-base text-[#EA580C] font-semibold text-center">{member.role}</p>
        )}
        {member.organization && (
          <p className="text-sm md:text-base text-[#451A03]/80 leading-relaxed font-medium text-center">{member.organization}</p>
        )}
      </div>
    );

    return (
      <motion.div
        key={member.id}
        className={twMerge(
          "bg-[#FFFDF7] overflow-hidden p-6 min-h-[200px] flex flex-col justify-center transition-all duration-300 relative group hover:bg-[#FEF3C7]/40 border border-[#F59E0B]/10",
          cardWidthClass,
          member.website ? "cursor-pointer" : ""
        )}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        custom={index}
        onClick={() => member.website && member.website !== "#" && window.open(member.website, "_blank")}
      >
        {cardContent}
      </motion.div>
    );
  };

  const CommitteeSection = ({ title, members, startIndex }: { title: string, members: any[], startIndex: number }) => {
    const cardWidthClass =
      members.length === 1
        ? "w-full"
        : members.length === 2
          ? "w-full sm:w-[calc(50%-1px)]"
          : members.length === 3
            ? "w-full sm:w-[calc(50%-1px)] md:w-[calc(33.333%-1px)]"
            : "w-full sm:w-[calc(50%-1px)] md:w-[calc(33.333%-1px)] lg:w-[calc(25%-1px)]";

    const maxWithClass =
      members.length === 1
        ? "max-w-md"
        : members.length === 2
          ? "max-w-2xl"
          : members.length === 3
            ? "max-w-4xl"
            : "max-w-full";

    return (
      <div className="mb-20 relative z-10 w-full">
        <h3 className="text-2xl md:text-3xl font-bold text-center tracking-tight mb-10 pb-4 border-b border-[#F59E0B]/20 w-full px-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C2D12] via-[#C2410C] to-[#D97706]">
            {title}
          </span>
        </h3>
        <div className={`flex flex-wrap justify-center ${maxWithClass} gap-[1px] bg-[#F59E0B]/20 border border-[#F59E0B]/30 rounded-3xl overflow-hidden mx-auto shadow-xl shadow-[#EA580C]/5`}>
          {members.map((member, index) => (
            <CommitteeCard key={member.id} member={member} index={startIndex + index} cardWidthClass={cardWidthClass} />
          ))}
        </div>
      </div>
    );
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

      <div className="container px-4 relative z-10">
        <div className="mt-4 px-4 max-w-7xl mx-auto">
          <CommitteeSection title="CHIEF PATRON" members={committeeData.chiefPatron} startIndex={0} />
          <CommitteeSection title="PATRON" members={committeeData.patron} startIndex={1} />
          <CommitteeSection title="CHAIRPERSON" members={committeeData.chairperson} startIndex={2} />
          <CommitteeSection title="CONVENERS" members={committeeData.conveners} startIndex={3} />
          <CommitteeSection title="ORGANIZING MEMBERS" members={committeeData.organizingMembers} startIndex={5} />
          <CommitteeSection title="INTERNATIONAL ADVISORY COMMITTEE" members={committeeData.internationalAdvisory} startIndex={23} />
          <CommitteeSection title="NATIONAL ADVISORY COMMITTEE" members={committeeData.nationalAdvisory} startIndex={27} />
        </div>
      </div>
    </section>
  );
};

export default function CommitteesPage() {
  return (
    <div>
      <CommitteesHero />
      <CommitteesSection />
    </div>
  );
}
