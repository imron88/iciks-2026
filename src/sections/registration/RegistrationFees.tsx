"use client";
import { motion } from "framer-motion";

export const RegistrationFees = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const registrationData = [
    {
      category: "Indian Academicians / Faculty",
      earlyBird: "₹2,000",
      regular: "₹2,000"
    },
    {
      category: "Research Scholars / Students",
      earlyBird: "₹1,000",
      regular: "₹1,000"
    },
    {
      category: "Foreign Delegates",
      earlyBird: "$150",
      regular: "$300"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-[#FDFDF6]">
      <div className="container px-4 max-w-6xl mx-auto">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section Header */}
          <motion.div 
            className="text-center mb-12"
            variants={itemVariants}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#090B26] mb-4">
              Registration Fees
            </h2>
            <p className="text-[#090B26]/80 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              Below are the registration fees details for PRAKASH 2027. Authors and delegates can pay the corresponding fees in the official bank account listed in the next section.
            </p>
          </motion.div>

          {/* Registration Table */}
          <motion.div 
            className="bg-white rounded-2xl shadow-[0_7px_14px_#EAEAEA] border border-[#F1F1F1] overflow-hidden"
            variants={itemVariants}
          >
            {/* Table Header */}
            <div className="bg-gradient-to-r from-[#4849F8] to-[#183EC2] text-white p-4 sm:p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div className="font-semibold text-base sm:text-lg">CATEGORY</div>
                <div className="font-semibold text-base sm:text-lg text-center md:text-left">Early Bird (Till 15 Dec 2026)</div>
                <div className="font-semibold text-base sm:text-lg text-center md:text-left">Regular (After 15 Dec 2026)</div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-[#F1F1F1]">
              {registrationData.map((row, index) => (
                <div 
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 sm:p-6 hover:bg-[#F8FAFF] transition-colors"
                >
                  <div className="font-semibold text-[#090B26]">
                    {row.category}
                  </div>
                  <div className="text-[#4849F8] font-semibold text-center md:text-left">
                    {row.earlyBird}
                  </div>
                  <div className="text-[#4849F8] font-semibold text-center md:text-left">
                    {row.regular}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Registration Note */}
          <motion.div 
            className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-6 sm:p-8"
            variants={itemVariants}
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-sm font-bold">i</span>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Registration Information</h4>
                <p className="text-blue-700 text-sm md:text-base leading-relaxed">
                  Early Bird Registration is available until <strong>15 September 2026</strong>. Regular registration fees apply after this date until <strong>15 October 2026</strong>. 
                  All registration fees are inclusive of conference materials, session attendance, lunches, and tea breaks during the conference.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};