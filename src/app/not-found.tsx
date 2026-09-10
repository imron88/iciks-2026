"use client";
import { motion } from "framer-motion";
import { FaHome, FaFileAlt, FaUsers, FaEnvelope } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="bg-[#FFFDF7] min-h-[80vh] flex items-center justify-center">
      <section className="py-20 bg-[#FFFDF7] w-full">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Header */}
            <div className="mb-8">
              <h1 className="text-7xl font-extrabold bg-gradient-to-r from-[#EA580C] to-[#F59E0B] bg-clip-text text-transparent mb-4">404</h1>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1C0B02] mb-4">Page Not Found</h2>
              <p className="text-[#451A03]/75 text-base sm:text-lg">
                The page you&apos;re looking for doesn&apos;t exist. Let us help you navigate the PRAKASH 2027 conference website.
              </p>
            </div>

            {/* Quick Navigation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <motion.a
                href="/"
                className="bg-gradient-to-br from-[#EA580C] to-[#C2410C] text-white p-6 rounded-2xl hover:shadow-xl shadow-md transition-all group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaHome className="w-8 h-8 mx-auto mb-3" />
                <div className="font-semibold">Home</div>
              </motion.a>

              <motion.a
                href="/callforpaper"
                className="bg-gradient-to-br from-[#C2410C] to-[#D97706] text-white p-6 rounded-2xl hover:shadow-xl shadow-md transition-all group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFileAlt className="w-8 h-8 mx-auto mb-3" />
                <div className="font-semibold">Tracks</div>
              </motion.a>

              <motion.a
                href="/committees"
                className="bg-gradient-to-br from-[#D97706] to-[#F59E0B] text-white p-6 rounded-2xl hover:shadow-xl shadow-md transition-all group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaUsers className="w-8 h-8 mx-auto mb-3" />
                <div className="font-semibold">Committee</div>
              </motion.a>

              <motion.a
                href="/contact"
                className="bg-gradient-to-br from-[#B45309] to-[#7C2D12] text-white p-6 rounded-2xl hover:shadow-xl shadow-md transition-all group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope className="w-8 h-8 mx-auto mb-3" />
                <div className="font-semibold">Contact</div>
              </motion.a>
            </div>

            {/* Back Button */}
            <motion.button
              onClick={() => window.history.back()}
              className="bg-[#FFFDF7] text-[#EA580C] border-2 border-[#EA580C] px-8 py-3 rounded-full font-semibold hover:bg-[#FEF3C7]/40 transition-all shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ← Go Back
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}