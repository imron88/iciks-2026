"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaQuestionCircle } from "react-icons/fa";

import { PageHero } from "@/components/PageHero";

// ContactHero Component
const ContactHero = () => {
  return (
    <PageHero
      badge="॥ तमसो मा ज्योतिर्गमय ॥ · PRAKASH 2027"
      title="Contact Secretariat"
      subtitle="Have questions about PRAKASH 2027? Reach out to the organizing team for paper submissions, IKS Expo participation, and registration inquiries."
      primaryCta={{ label: "Email Secretariat", href: "mailto:iks2027@poornima.org" }}
      secondaryCta={{ label: "View Campus Location", href: "#map" }}
    />
  );
};

// ContactInfoSection Component
const ContactInfoSection = () => (
  <section
    className="py-16 md:py-24 relative overflow-hidden"
    style={{ background: "linear-gradient(180deg, #FFFDF7 0%, #FEF9EE 50%, #FFFDF7 100%)" }}
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

    <div className="container px-4 relative z-10 mx-auto max-w-7xl">
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#F59E0B]/20 border border-[#F59E0B]/30 rounded-3xl overflow-hidden shadow-xl shadow-[#EA580C]/5">
        {/* Location Card */}
        <motion.div
          className="group relative bg-[#FFFDF7] p-8 text-center transition-all duration-300 hover:bg-[#FEF3C7]/40 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0, duration: 0.6 }}
        >
          <div className="relative w-24 h-24 mx-auto mb-8 rounded-full bg-[#EA580C]/10 flex items-center justify-center border border-[#F59E0B]/30 group-hover:border-[#EA580C]/50 group-hover:scale-110 transition-all duration-500">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#EA580C] to-[#D97706] flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] transition-all duration-500">
              <FaMapMarkerAlt className="w-8 h-8 text-white" />
            </div>
          </div>

          <h3 className="relative text-2xl font-bold text-[#1C0B02] mb-4 tracking-tight group-hover:text-[#EA580C] transition-colors duration-300">Conference Venue</h3>

          <div className="relative h-1 w-12 bg-gradient-to-r from-transparent via-[#EA580C]/40 to-transparent mx-auto mb-6 rounded-full" />

          <p className="relative text-base text-[#451A03]/80 leading-relaxed font-medium">
            Department of Applied Sciences
            <br />
            Poornima Institute of Engineering & Technology (PIET)
            <br />
            ISI-2, RIICO Institutional Area, Sitapura, Jaipur - 302022
            <br />
            Rajasthan, India
            <br />
            <span className="text-xs text-[#EA580C] font-bold mt-2 inline-block">Timings: 09:00 AM to 03:00 PM (IST)</span>
          </p>
        </motion.div>

        {/* Email Card */}
        <motion.div
          className="group relative bg-[#FFFDF7] p-8 text-center transition-all duration-300 hover:bg-[#FEF3C7]/40 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <div className="relative w-24 h-24 mx-auto mb-8 rounded-full bg-[#EA580C]/10 flex items-center justify-center border border-[#F59E0B]/30 group-hover:border-[#EA580C]/50 group-hover:scale-110 transition-all duration-500">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#EA580C] to-[#D97706] flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] transition-all duration-500">
              <FaEnvelope className="w-8 h-8 text-white" />
            </div>
          </div>

          <h3 className="relative text-2xl font-bold text-[#1C0B02] mb-4 tracking-tight group-hover:text-[#EA580C] transition-colors duration-300">Email Address</h3>

          <div className="relative h-1 w-12 bg-gradient-to-r from-transparent via-[#EA580C]/40 to-transparent mx-auto mb-6 rounded-full" />

          <p className="relative text-base text-[#451A03]/80 mb-4 font-medium">
            For all conference and submission inquiries:
          </p>
          <div className="relative flex flex-col gap-2">
            <a
              href="mailto:iks2027@poornima.org"
              className="text-lg text-[#EA580C] hover:text-[#C2410C] font-bold transition-all"
            >
              iks2027@poornima.org
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// MapSection Component
const MapSection = () => (
  <section
    className="py-16 md:py-24 relative overflow-hidden"
    style={{ background: "linear-gradient(180deg, #FEF9EE 0%, #FEF9EE 50%, #FFFDF7 100%)" }}
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

    <div className="container px-4 relative z-10 mx-auto max-w-7xl">
      <div className="max-w-4xl mx-auto text-center mb-16 px-4">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C2D12] via-[#C2410C] to-[#D97706]">
            Find Us
          </span>
        </h2>
        <p className="text-lg text-[#451A03]/80 leading-relaxed max-w-2xl mx-auto mt-5">
          PIET is conveniently located in the RIICO Institutional Area, Sitapura, making it easily accessible from all parts of Jaipur.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-[1px] bg-[#F59E0B]/20 border border-[#F59E0B]/30 rounded-3xl overflow-hidden shadow-xl shadow-[#EA580C]/5 max-w-6xl mx-auto">
        <motion.div
          className="bg-[#FFFDF7] p-2 flex justify-center w-full overflow-hidden rounded-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.1234567890123!2d75.8!3d26.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4c0e0e0e0e0%3A0x1234567890abcdef!2sPoornima%20Institute%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full rounded-2xl"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

// FAQSection Component
const faqs = [
  {
    question: "Is the conference hybrid?",
    answer: "Yes, PRAKASH 2027 will be conducted in Hybrid Mode (both in-person at PIET, Jaipur and online sessions for foreign delegates and remote participants)."
  },
  {
    question: "What is the IKS Expo zone?",
    answer: "The IKS Expo zone is a dedicated platform for startups, innovators, and practitioners working in herbal product testing, green building technology, manuscript scanning, natural fiber engineering, and organic systems to showcase their innovations."
  },
  {
    question: "Will accepted papers be published in indexed proceedings?",
    answer: "Accepted, peer-reviewed, and presented papers will be proposed for publication in reputed indexed proceedings volumes and partner Scopus/UGC-CARE journals subject to quality and peer review standards."
  },
  {
    question: "Is plagiarism checking mandatory?",
    answer: "Yes, all submissions will undergo rigorous plagiarism checking (under 15% similarity excluding references) and 0% unverified AI-generated content checking."
  },
  {
    question: "What is the recommended paper length?",
    answer: "The recommended paper length is 10–12 pages, including figures, tables, and references, following standard academic conference formatting."
  },
  {
    question: "Will certificates and conference materials be provided?",
    answer: "Yes, registered participants, authors, and session chairs will receive official certificates of presentation/participation and conference materials."
  }
];

const FAQSection = () => (
  <section
    className="py-16 md:py-24 relative overflow-hidden"
    style={{ background: "linear-gradient(180deg, #FFFDF7 0%, #FEF9EE 50%, #FFFDF7 100%)" }}
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

    <div className="container px-4 relative z-10 max-w-6xl mx-auto">
      <div className="max-w-4xl mx-auto text-center mb-16 px-4">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C2D12] via-[#C2410C] to-[#D97706]">
            Frequently Asked Questions
          </span>
        </h2>
        <p className="text-base sm:text-lg text-[#451A03]/80 leading-relaxed max-w-2xl mx-auto mt-5">
          Find quick answers to common questions about PRAKASH 2027. Can&apos;t find what you&apos;re looking for? Contact us directly.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-[#F59E0B]/20 border border-[#F59E0B]/30 rounded-3xl overflow-hidden shadow-xl shadow-[#EA580C]/5">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className={`group bg-[#FFFDF7] p-8 transition-all duration-300 hover:bg-[#FEF3C7]/40 flex flex-col justify-start border border-[#F59E0B]/10 ${index === faqs.length - 1 && faqs.length % 2 !== 0 ? "lg:col-span-2" : ""
              }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: (index % 3) * 0.1, duration: 0.6 }}
          >
            <div className="flex items-start mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#EA580C] to-[#D97706] rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-md shadow-[#EA580C]/20">
                <FaQuestionCircle className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#1C0B02]">{faq.question}</h3>
            </div>
            <p className="text-sm sm:text-base text-[#451A03]/85 leading-relaxed ml-14">{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfoSection />
      <MapSection />
      <FAQSection />
    </>
  );
}
