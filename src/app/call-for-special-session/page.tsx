"use client";
import { motion } from "framer-motion";
import { FaFileAlt, FaUniversity, FaUserTie, FaCheckCircle, FaUsers } from "react-icons/fa";

import { PageHero } from "@/components/PageHero";

// SpecialSessionHero Component
const SpecialSessionHero = () => {
  return (
    <PageHero
      badge="॥ तमसो मा ज्योतिर्गमय ॥ · PRAKASH 2027"
      title="Call for Special Sessions"
      subtitle="A forum for focused discussions on emerging topics, indigenous technologies, and innovative IKS applications"
      tagline="A forum for focused discussions on emerging topics and innovative IKS applications"
      primaryCta={{ label: "Download Proposal Template", href: "/assets/special-session-proposal.docx" }}
      secondaryCta={{ label: "Submit via Email", href: "mailto:iksconf.prakash@poornima.org?subject=Special%20Session%20Proposal%20-%20PRAKASH%202027" }}
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
          background: "linear-gradient(135deg, rgba(234,88,12,0.1), rgba(245,158,11,0.15))",
          border: "1px solid rgba(245,158,11,0.3)",
          color: "#EA580C",
        }}
      >
        {label}
      </span>
      <h2
        className="font-bold leading-tight mt-2"
        style={{
          fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
          background: "linear-gradient(135deg, #7C2D12 20%, #C2410C 60%, #D97706 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </h2>
      {desc && (
        <p className="mt-3 mx-auto text-base text-[#451A03]/80" style={{ maxWidth: "40rem", lineHeight: 1.75 }}>
          {desc}
        </p>
      )}
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#EA580C] to-[#F59E0B]" />
    </div>
  );
}

// SpecialSessionContent Component
const SpecialSessionContent = () => {
  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] } },
  });

  const accountDetails = [
    { label: "Account Name", value: "POORNIMA INSTITUTE PART TWO" },
    { label: "Account Number", value: "50200067728688" },
    { label: "Bank Name", value: "HDFC BANK LTD." },
    { label: "Branch", value: "F-129 RIICO INDUSTRIAL AREA SITAPURA, JAIPUR" },
    { label: "IFSC Code", value: "HDFC0003873" },
    { label: "SWIFT Code", value: "HDFCINBBXXX" }
  ];

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FFFDF7 0%, #FEF9EE 50%, #FFFDF7 100%)" }}
    >
      {/* Faint grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(234,88,12,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(234,88,12,0.5) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-20 flex flex-col gap-24 max-w-7xl mx-auto">

        {/* Intro Section */}
        <motion.div variants={fadeUp(0)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <SectionHeading label="Focus Area" title="Special Session Proposals" />
          <div
            className="max-w-4xl mx-auto rounded-2xl p-7 md:p-10 space-y-6 bg-[#FFFDF7] border border-[#F59E0B]/25 shadow-xl shadow-[#EA580C]/5"
          >
            <p className="text-sm md:text-base leading-relaxed text-justify text-[#451A03]/85">
              Special Session organization is highly encouraged. The goal of these sessions is to provide a forum for focused discussions on emerging topics, ancient Indian mathematical innovations, computational methodologies, or specialized intelligent applications.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-justify text-[#451A03]/85">
              Proposers are invited to submit their session proposal template containing details of the session theme, target areas, and expected organizers. Multiple proposals addressing similar topics will be reviewed, and if approved, will be accommodated in different slots over the conference period.
            </p>
          </div>
        </motion.div>

        {/* Submission Guidelines */}
        <motion.div variants={fadeUp(0.1)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <SectionHeading label="Proposals" title="Guidelines & Organizer Benefits" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-[#F59E0B]/20 border border-[#F59E0B]/30 rounded-3xl overflow-hidden shadow-xl shadow-[#EA580C]/5 max-w-6xl mx-auto items-start">

            {/* Requirements Card */}
            <div className="bg-[#FFFDF7] p-7 md:p-8 space-y-6">
              <h3 className="font-bold text-lg mb-4 text-[#1C0B02] flex items-center gap-2">
                <FaUserTie className="text-[#EA580C]" />
                Organizer Requirements
              </h3>
              <ul className="space-y-4">
                {[
                  "A minimum of 10 registered papers is required to sustain an approved special session.",
                  "One paper registration fee is fully waived for the session organizer.",
                  "Session organizers have full authority in soliciting, coordinating reviews, and selecting papers under the final oversight of the conference Technical Program Committee.",
                  "Each session is limited to a maximum of 3 co-organizers.",
                  "Organizers will be formally designated as Session Chairs / Co-Chairs in the proceedings and program booklet."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-[#451A03]/80 leading-normal">
                    <span className="h-1.5 w-1.5 rounded-full mt-1.5 bg-[#EA580C] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Bank Details Card */}
            <div className="bg-[#FFFDF7] p-7 md:p-8 space-y-5">
              <div className="flex items-center gap-3">
                <FaUniversity className="w-5 h-5 text-[#EA580C]" />
                <h3 className="font-bold text-lg text-[#1C0B02]">RTGS / Bank Details</h3>
              </div>

              <div className="rounded-xl overflow-hidden border border-[#F59E0B]/20">
                <table className="w-full text-xs sm:text-sm border-collapse">
                  <tbody>
                    {accountDetails.map((row, i) => (
                      <tr
                        key={i}
                        className="border-b last:border-0 border-[#F59E0B]/15"
                        style={{
                          background: i % 2 === 0 ? "rgba(245,158,11,0.04)" : "#FFFDF7",
                        }}
                      >
                        <td className="py-2.5 px-3 font-semibold text-[#451A03]/80 whitespace-nowrap">
                          {row.label}
                        </td>
                        <td className="py-2.5 px-3 font-mono text-[#EA580C] font-semibold break-all">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs italic text-[#451A03]/60">
                *Please share the transaction receipt with the organizing committee after completing payment.
              </p>
            </div>

          </div>
        </motion.div>

        {/* Invited Speakers & Final Step */}
        <motion.div variants={fadeUp(0.2)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <SectionHeading label="Invited Papers" title="Selection of Invited Speakers" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#F59E0B]/20 border border-[#F59E0B]/30 rounded-3xl overflow-hidden shadow-xl shadow-[#EA580C]/5 max-w-5xl mx-auto">
            
            <div className="bg-[#FFFDF7] p-6 sm:p-8 flex flex-col gap-4 border border-[#F59E0B]/10">
              <div className="h-8 w-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#EA580C]/10 text-[#EA580C] border border-[#F59E0B]/30 font-bold text-sm">
                1
              </div>
              <p className="text-sm text-[#451A03]/80 leading-relaxed text-justify">
                Each special session will consist of a minimum of 10 papers, including invited papers and contribution papers related to the session theme.
              </p>
            </div>

            <div className="bg-[#FFFDF7] p-6 sm:p-8 flex flex-col gap-4 border border-[#F59E0B]/10">
              <div className="h-8 w-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#D97706]/10 text-[#D97706] border border-[#F59E0B]/30 font-bold text-sm">
                2
              </div>
              <p className="text-sm text-[#451A03]/80 leading-relaxed text-justify">
                A session chair or co-chair can make an invitation for a paper. An invited paper is expected to present a significant contribution or a comprehensive review of state-of-the-art topics.
              </p>
            </div>

            <div className="bg-[#FFFDF7] p-6 sm:p-8 flex flex-col gap-4 border border-[#F59E0B]/10">
              <div className="h-8 w-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#EA580C]/10 text-[#EA580C] border border-[#F59E0B]/30 font-bold text-sm">
                3
              </div>
              <p className="text-sm text-[#451A03]/80 leading-relaxed text-justify">
                All invited papers must follow the same review process as regular submissions and must conform to the Springer formatting instructions.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default function CallForSpecialSessionPage() {
  return (
    <div>
      <SpecialSessionHero />
      <SpecialSessionContent />
    </div>
  );
}
