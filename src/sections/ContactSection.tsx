"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const arrowRightPath = "/assets/arrow-right.svg";

const contactItems = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    lines: ["iksconf.prakash@poornima.org"],
    accent: "#EA580C",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    lines: ["+91-9785487195", "+91-7908498707", "+91-9887838292"],
    accent: "#D97706",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Address",
    lines: [
      "Poornima Institute of Engineering and Technology,",
      "ISI-2, RIICO Institutional Area, Sitapura,",
      "Jaipur-302022, Rajasthan, INDIA",
    ],
    accent: "#C2410C",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
  }),
};

export const ContactSection = () => {
  return (
    <section
      className="relative w-full overflow-hidden py-12 md:py-16"
      style={{ background: "linear-gradient(180deg, #FFFDF7 0%, #FEF9EE 50%, #FFFDF7 100%)" }}
    >
      {/* ── Grid background ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(234,88,12,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(234,88,12,0.3) 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />

      {/* ── Glow blobs ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/4 h-72 w-72 rounded-full opacity-[0.14]"
        style={{ background: "radial-gradient(circle, #EA580C, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-1/4 h-60 w-60 rounded-full opacity-[0.16]"
        style={{ background: "radial-gradient(circle, #F59E0B, transparent 70%)" }}
      />

      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">

        {/* ── Section Heading ── */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Label pill */}
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.18em] uppercase mb-5"
            style={{
              background: "linear-gradient(135deg, rgba(234,88,12,0.1), rgba(245,158,11,0.18))",
              border: "1px solid rgba(234,88,12,0.25)",
              color: "#C2410C",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] animate-pulse" />
            Get In Touch
          </span>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
            style={{
              background: "linear-gradient(135deg, #1C0B02 30%, #7C2D12 70%, #EA580C 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.02em",
            }}
          >
            Contact Us
          </h2>
          <p
            className="mt-4 mx-auto text-base sm:text-lg leading-relaxed"
            style={{ color: "#2E1104", opacity: 0.75, maxWidth: "36rem" }}
          >
            Have questions or need more information? Reach out to our organizing team directly.
          </p>

          {/* Gradient divider */}
          <div
            className="mx-auto mt-6 h-px w-24"
            style={{ background: "linear-gradient(90deg, #EA580C, #F59E0B)" }}
          />
        </motion.div>

        {/* ── Main layout ── */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-stretch w-full">

          {/* Left: Contact info cards + buttons */}
          <div className="w-full lg:w-1/2 flex flex-col gap-5">

            {contactItems.map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="group flex items-start gap-4 p-5 rounded-2xl transition-all duration-200"
                style={{
                  background: "#FFFDF7",
                  border: "1px solid rgba(245,158,11,0.25)",
                  boxShadow: "0 2px 16px rgba(234,88,12,0.06)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.border = `1px solid ${item.accent}55`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 20px rgba(234,88,12,0.12)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.border = "1px solid rgba(245,158,11,0.25)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(234,88,12,0.06)";
                }}
              >
                {/* Icon bubble */}
                <div
                  className="flex-shrink-0 h-11 w-11 rounded-xl flex items-center justify-center transition-colors"
                  style={{
                    background: `${item.accent}15`,
                    border: `1px solid ${item.accent}35`,
                    color: item.accent,
                  }}
                >
                  {item.icon}
                </div>

                <div>
                  <h3
                    className="font-semibold text-base mb-1.5"
                    style={{ color: "#1C0B02" }}
                  >
                    {item.label}
                  </h3>
                  {item.lines.map((line, j) => (
                    <p key={j} className="text-sm leading-relaxed" style={{ color: "#2E1104", opacity: 0.75 }}>
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* CTA buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 pt-2"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href="/contact"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold tracking-tight transition-all duration-200 hover:scale-[1.04] active:scale-95 text-white"
                style={{
                  background: "linear-gradient(135deg, #EA580C 0%, #D97706 100%)",
                  boxShadow: "0 4px 18px rgba(234,88,12,0.35)",
                }}
              >
                Contact Page
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link
                href="/about"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold tracking-tight transition-all duration-200 hover:scale-[1.04] active:scale-95 bg-white border border-[#F59E0B]/30 hover:bg-[#FEF9EE] text-[#1C0B02] shadow-sm"
              >
                About Us
                <Image src={arrowRightPath} alt="Arrow right" width={16} height={16} className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right: Map */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Map iframe wrapper */}
            <div
              className="relative rounded-2xl overflow-hidden h-[420px] lg:h-full min-h-[380px] border border-[#F59E0B]/30 shadow-lg shadow-[#EA580C]/5"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1234567890123!2d75.850381!3d26.767779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db7b7b7b7b7b7%3A0x1234567890abcdef!2sPoornima%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map showing PIET location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};