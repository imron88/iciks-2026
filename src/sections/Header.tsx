"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaSun, FaBars, FaTimes } from "react-icons/fa";

const arrowRightPath = "/assets/arrow-right.svg";
const logoPath = "/assets/pics/logo.webp";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Committees", href: "/committees" },
  { label: "Call for Paper", href: "/callforpaper" },
  { label: "Speakers", href: "/speakers" },
  { label: "Contact", href: "/contact" },
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActivePage = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const NavLink = ({
    href,
    children,
    onClick,
    mobile = false,
  }: {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
    mobile?: boolean;
  }) => {
    const active = isActivePage(href);
    if (mobile) {
      return (
        <Link
          href={href}
          onClick={onClick}
          className={`group flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 ${
            active
              ? "bg-[#EA580C]/25 text-[#FEF08A] border border-[#F59E0B]/30"
              : "text-[#FED7AA]/80 hover:bg-[#F59E0B]/15 hover:text-[#FEF08A]"
          }`}
        >
          {active && (
            <span className="h-2 w-2 rounded-full bg-[#F59E0B] inline-block flex-shrink-0 animate-pulse" />
          )}
          {children}
        </Link>
      );
    }
    return (
      <Link
        href={href}
        className={`relative text-xs xl:text-sm font-bold tracking-wide transition-colors duration-200 group py-1 ${
          active ? "text-[#FEF08A]" : "text-[#FED7AA]/85 hover:text-[#FBBF24]"
        }`}
      >
        {children}
        <span
          className={`absolute -bottom-1.5 left-0 h-[2px] rounded-full bg-gradient-to-r from-[#EA580C] to-[#F59E0B] transition-all duration-300 ${
            active ? "w-full" : "w-0 group-hover:w-full"
          }`}
        />
      </Link>
    );
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#140601]/95 shadow-2xl shadow-black/60 border-b border-[#F59E0B]/30 backdrop-blur-xl"
            : "bg-[#180802]/90 border-b border-[#F59E0B]/25 backdrop-blur-md"
        }`}
      >
        {/* Top subtle golden glow line */}
        <div
          className="h-[1.5px] w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(245,158,11,0.4) 30%, rgba(234,88,12,0.8) 50%, rgba(245,158,11,0.4) 70%, transparent 100%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-[70px]">

            {/* Logo on the Left - Framed cleanly in a light pill so PIET insignia is crystal clear */}
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="group flex items-center bg-[#FFFDF7] px-3.5 py-1.5 rounded-xl border border-[#F59E0B]/40 shadow-md shadow-black/20 hover:scale-[1.02] transition-transform duration-200"
              >
                <Image
                  src={logoPath}
                  alt="Poornima Institute of Engineering & Technology"
                  height={38}
                  width={210}
                  style={{ objectFit: "contain" }}
                  priority
                  className="h-8 sm:h-9 w-auto"
                />
              </Link>
              <div className="hidden min-[1150px]:flex flex-col border-l border-[#F59E0B]/25 pl-3">
                <span className="text-[11px] font-black tracking-widest text-[#FBBF24] uppercase leading-none">
                  PRAKASH 2027
                </span>
                <span className="text-[9px] text-[#FED7AA]/70 font-medium leading-tight mt-0.5">
                  Vedic Wisdom & Modern Research
                </span>
              </div>
            </div>

            {/* Navigation Links in Center */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Right Action: Date chip + Register Button */}
            <div className="hidden sm:flex items-center gap-3">
              <div className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 border border-[#F59E0B]/30 text-[11px] font-semibold text-[#FDE68A]">
                <FaSun className="text-[#FBBF24] text-[10px]" />
                Feb 26–27, 2027
              </div>

              <Link
                href="/registration"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-tight text-white transition-all duration-200 hover:scale-[1.04] active:scale-95 shadow-lg shadow-[#EA580C]/35"
                style={{
                  background: "linear-gradient(135deg, #EA580C 0%, #D97706 60%, #F59E0B 100%)",
                }}
              >
                <span>Register</span>
                <Image
                  src={arrowRightPath}
                  alt=""
                  width={12}
                  height={12}
                  className="h-3 w-3 invert brightness-0"
                />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href="/registration"
                className="sm:hidden inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-[#EA580C] to-[#F59E0B]"
              >
                Register
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-[#FED7AA] hover:text-[#FBBF24] hover:bg-[#F59E0B]/15 rounded-xl border border-[#F59E0B]/25 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-[440px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-4 border-t border-[#F59E0B]/20 bg-[#1A0802]/98 backdrop-blur-xl flex flex-col gap-1.5 shadow-2xl">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                mobile
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}

            <div className="mt-3 pt-3 border-t border-[#F59E0B]/20 flex items-center justify-between">
              <span className="text-xs text-[#FED7AA]/70">
                26–27 February 2027 · Hybrid
              </span>
              <Link
                href="/registration"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#EA580C] to-[#D97706]"
              >
                <span>Register Now</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
