"use client";
import { FaBook } from "react-icons/fa";

export const AIPStrip = () => {
  return (
    <div className="bg-white py-3 sm:py-4 border-b border-[#4849F8]/15 flex items-center justify-center group overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#4849F8]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 relative z-10">
        <span className="text-[#4849F8]/70 text-xs sm:text-sm lg:text-base font-black uppercase tracking-[0.25em] whitespace-nowrap text-center sm:text-left">
          Publication Proposal
        </span>
        <div className="h-6 w-[1.5px] bg-[#4849F8]/20 hidden sm:block"></div>
        <a
          href="https://www.springer.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 hover:scale-[1.02] transition-transform duration-300"
        >
          <div className="h-9 w-9 bg-gradient-to-br from-[#4849F8] to-[#0b0f19] rounded-lg flex items-center justify-center shadow-sm">
            <FaBook className="w-4 h-4 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-[#4849F8] font-black text-base sm:text-lg tracking-tight leading-none">
              Springer Conference Proceedings
            </span>
            <span className="text-[#4849F8]/60 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase mt-0.5">
              Lecture Notes in Networks and Systems (LNNS) / CCIS
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};
