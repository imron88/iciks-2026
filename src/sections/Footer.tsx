"use client";
import Image from "next/image";
import Link from "next/link";

const logoPath = "/assets/pics/logo.webp";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Committees", href: "/committees" },
  { label: "Call for Paper", href: "/callforpaper" },
  { label: "Speakers", href: "/speakers" },
  // { label: "Sponsorship", href: "/partners" },
  { label: "Contact", href: "/contact" },
];

const websiteLinks: { label: string; href: string; external?: boolean }[] = [
  { label: "Sitemap", href: "/sitemap.xml" },
  { label: "Report", href: "/report" },
  // { label: "Developer", href: "https://github.com/relaxkartikey", external: true },
];

const socialLinks = [
  {
    label: "X (Twitter)",
    href: "https://x.com/PIET_Jaipur",
    icon: "/assets/social-x.svg",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/piet_jaipur/?hl=en",
    icon: "/assets/social-insta.svg",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/school/poornima-group-of-colleges",
    icon: "/assets/social-linkedin.svg",
  },
];

export const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden border-t border-[#F59E0B]/20" style={{ background: "linear-gradient(180deg, #1C0B02 0%, #150801 100%)" }}>
      {/* Top gradient separator matching navbar */}
      <div className="h-[2px] w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.3), rgba(234,88,12,0.6), transparent)" }} />

      {/* Subtle grid bg */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,158,11,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.4) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow blobs */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full opacity-[0.12] blur-2xl" style={{ background: "radial-gradient(circle, #EA580C, transparent 70%)" }} />
      <div aria-hidden className="pointer-events-none absolute -bottom-16 right-0 h-64 w-64 rounded-full opacity-[0.12] blur-2xl" style={{ background: "radial-gradient(circle, #F59E0B, transparent 70%)" }} />

      <div className="relative z-10 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 pt-14 pb-8">

        {/* ── Main bento grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.4fr] gap-[1px] bg-[#F59E0B]/20 border border-[#F59E0B]/25 rounded-3xl overflow-hidden shadow-xl shadow-black/40 mb-10 max-w-7xl mx-auto">

          {/* Col 1 – Brand + acknowledgment */}
          <div className="bg-[#260E03]/90 backdrop-blur-md p-6 sm:p-8 space-y-5 flex flex-col justify-between transition-all duration-300 hover:bg-[#2F1204]">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold tracking-widest text-[#FBBF24] uppercase">PRAKASH 2027</span>
              </div>
              <p className="text-[#FED7AA]/80 text-[13px] leading-relaxed" style={{ textAlign: "justify" }}>
                International Conference on Indian Knowledge Systems: Promoting Research, Advancement, and Knowledge Systems for Applied Sustainable Heritage. The Microsoft CMT service was used for managing the peer-reviewing process for this conference, provided gratis by Microsoft.
              </p>
            </div>
            <div className="pt-2">
              <span className="text-xs font-serif italic text-[#FDE68A]/70">॥ तमसो मा ज्योतिर्गमय ॥</span>
            </div>
          </div>

          {/* Col 2 – Navigation */}
          <div className="bg-[#260E03]/90 backdrop-blur-md p-6 sm:p-8 space-y-4 transition-all duration-300 hover:bg-[#2F1204]">
            <h3 className="text-xs font-bold tracking-[0.18em] uppercase text-[#F59E0B]">
              Navigation
            </h3>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="group flex items-center gap-2 text-[#FED7AA]/80 text-sm hover:text-[#FBBF24] transition-colors duration-200"
                >
                  <span className="h-px w-3 rounded-full transition-all duration-300 group-hover:w-5" style={{ background: "linear-gradient(90deg, #EA580C, #F59E0B)" }} />
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3 – Website */}
          <div className="bg-[#260E03]/90 backdrop-blur-md p-6 sm:p-8 space-y-4 transition-all duration-300 hover:bg-[#2F1204]">
            <h3 className="text-xs font-bold tracking-[0.18em] uppercase text-[#F59E0B]">
              Website
            </h3>
            <nav className="flex flex-col gap-2.5">
              {websiteLinks.map((l) => (
                l.external ? (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-[#FED7AA]/80 text-sm hover:text-[#FBBF24] transition-colors duration-200"
                  >
                    <span className="h-px w-3 rounded-full transition-all duration-300 group-hover:w-5" style={{ background: "linear-gradient(90deg, #EA580C, #F59E0B)" }} />
                    {l.label}
                  </a>
                ) : (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="group flex items-center gap-2 text-[#FED7AA]/80 text-sm hover:text-[#FBBF24] transition-colors duration-200"
                  >
                    <span className="h-px w-3 rounded-full transition-all duration-300 group-hover:w-5" style={{ background: "linear-gradient(90deg, #EA580C, #F59E0B)" }} />
                    {l.label}
                  </Link>
                )
              ))}
            </nav>
          </div>

          {/* Col 4 – Organizers */}
          <div className="bg-[#260E03]/90 backdrop-blur-md p-6 sm:p-8 space-y-4 flex flex-col justify-between transition-all duration-300 hover:bg-[#2F1204]">
            <div className="space-y-4">
              <h3 className="text-xs font-bold tracking-[0.18em] uppercase text-[#F59E0B]">
                Organized By
              </h3>
              <div className="flex flex-wrap gap-3">
                <div
                  className="rounded-2xl p-4 flex items-center justify-center transition-all duration-200 hover:scale-[1.03] border border-[#F59E0B]/30 bg-white/95 w-32 h-32 shadow-md"
                >
                  <Image
                    src="/assets/pics/piet.png"
                    alt="PIET Organizer"
                    width={100}
                    height={100}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Register CTA */}
            <Link
              href="/registration"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.04] w-full justify-center mt-4 text-white shadow-lg shadow-[#EA580C]/30"
              style={{
                background: "linear-gradient(135deg, #EA580C 0%, #D97706 100%)",
              }}
            >
              Register Now →
            </Link>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="h-px w-full mb-6" style={{ background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.2), transparent)" }} />

        {/* ── Conference Footnote ── */}
        <div className="text-center mb-6 px-4">
          <p className="text-[#FED7AA]/75 text-[12px] sm:text-[13px] tracking-wide font-medium leading-relaxed max-w-4xl mx-auto">
            PRAKASH 2027: International Conference on Indian Knowledge Systems · Organized by <strong className="text-[#FBBF24]">Department of Applied Sciences, Poornima Institute of Engineering & Technology, Jaipur</strong>.
          </p>
        </div>

        {/* ── Copyright bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#F59E0B]/15">
          <p className="text-[#FED7AA]/60 text-[11px] tracking-wide text-center sm:text-left">
            © 2027 Poornima Institute of Engineering and Technology. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-[#260E03] hover:bg-[#3B1705] transition-colors border border-[#F59E0B]/25 flex items-center justify-center"
                title={s.label}
              >
                <Image src={s.icon} alt={s.label} width={15} height={15} className="w-3.5 h-3.5 opacity-85 hover:opacity-100 transition-opacity filter invert" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
