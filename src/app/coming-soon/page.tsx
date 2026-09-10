"use client";
import { motion } from "framer-motion";
import { FaSun } from "react-icons/fa";

export default function ComingSoon() {
  return (
    <div className="bg-[#FFFDF7]">
      <section className="min-h-[85vh] flex items-center justify-center bg-[#FFFDF7]">
        <div className="text-center px-4">
          {/* Sun / Mandala Icon */}
          <motion.div
            className="mb-8"
            animate={{ 
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <FaSun className="w-24 h-24 text-[#EA580C] mx-auto filter drop-shadow-[0_0_20px_rgba(245,158,11,0.5)]" />
          </motion.div>

          {/* Coming Soon Text */}
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#7C2D12] via-[#C2410C] to-[#D97706] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Coming Soon
          </motion.h1>

          <motion.p 
            className="text-[#451A03]/80 text-lg mb-8 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            We&apos;re currently preparing this section for PRAKASH 2027. Stay tuned!
          </motion.p>

          {/* Back to Home Button */}
          <motion.a
            href="/"
            className="bg-gradient-to-r from-[#EA580C] to-[#D97706] text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-[#EA580C]/25 hover:from-[#C2410C] hover:to-[#B45309] transition-all inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Home
          </motion.a>
        </div>
      </section>
    </div>
  );
}