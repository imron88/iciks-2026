"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaUniversity, FaCreditCard, FaGlobe, FaUsers } from "react-icons/fa";

// Assets
const cylinderImagePath = "/assets/cylinder.png";
const cogImagePath = "/assets/cog.png";
const arrowRightPath = "/assets/arrow-right.svg";

import { PageHero } from "@/components/PageHero";

// RegistrationHero Component
const RegistrationHero = () => {
  return (
    <PageHero
      badge="॥ तमसो मा ज्योतिर्गमय ॥ · PRAKASH 2027"
      title="Conference Registration"
      subtitle="Register for PRAKASH 2027 – International Conference on Indian Knowledge Systems · 26–27 February 2027"
      tagline="Join leading traditional scholars, scientists, and academicians in revitalizing and validating Indian Knowledge Systems"
      primaryCta={{ label: "View Fee Structure", href: "#fees" }}
      secondaryCta={{ label: "Payment Guidelines", href: "#payment" }}
    />
  );
};

// RegistrationContent Component
const RegistrationContent = () => {
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

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#FFFDF7]">
      <div className="container px-4 max-w-4xl mx-auto">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Registration Guidelines */}
          <motion.div 
            className="mb-12"
            variants={itemVariants}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C0B02] mb-6">
              Registration & Submission Guidelines
            </h2>
            
            <div className="bg-[#FFFDF7] rounded-2xl p-6 sm:p-8 shadow-xl shadow-[#EA580C]/5 border border-[#F59E0B]/25">
              <h3 className="text-xl font-semibold text-[#1C0B02] mb-4">Registration Process</h3>
              <div className="text-[#451A03]/85 leading-relaxed space-y-5 text-justify text-sm sm:text-base">
                <div>
                  <p className="font-semibold text-[#1C0B02] mb-1">1) Page Limit & Format</p>
                  <p className="text-xs sm:text-sm">Recommended paper length: 10–12 pages, including references. Strictly format using Springer LNCS/CCIS Word or LaTeX templates.</p>
                </div>
                
                <div>
                  <p className="font-semibold text-[#1C0B02] mb-1">2) Peer Review & Acceptance</p>
                  <p className="text-xs sm:text-sm">Every paper goes through a double-blind peer-review. Plagiarism index must be below 15% (excluding references), and AI content must be 0%.</p>
                </div>
                
                <div>
                  <p className="font-semibold text-[#1C0B02] mb-1">3) Submission Portal</p>
                  <a 
                    href="https://cmt3.research.microsoft.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-[#EA580C] font-bold hover:underline inline-flex items-center gap-1"
                  >
                    Go to Microsoft CMT Portal &rarr;
                  </a>
                </div>
                
                <div>
                  <p className="font-semibold text-[#1C0B02] mb-1">4) Final Registration Requirements (For Accepted Papers)</p>
                  <p className="text-xs sm:text-sm mb-2">Once your paper is accepted, please prepare a zip folder containing:</p>
                  <ul className="text-xs sm:text-sm space-y-1.5 ml-4 list-disc text-[#451A03]/80">
                    <li>a) Paper_ID_Camera_Ready (in docx format)</li>
                    <li>b) Paper_ID_Camera_Ready (in PDF format)</li>
                    <li>c) Paper_ID_Reviewer_Remarks (Response to reviewers)</li>
                    <li>d) Paper_ID_Payment_Proof (Receipt of bank transfer)</li>
                    <li>e) Paper_ID_Copyright (Signed Springer copyright form)</li>
                  </ul>
                  <p className="text-xs sm:text-sm mt-3 font-semibold text-[#1C0B02]">
                    Compress all these files into a single zip file named &quot;Paper_ID_PRAKASH_2027&quot; and email it to <a href="mailto:iks2027@poornima.org" className="text-[#EA580C] hover:underline">iks2027@poornima.org</a>.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formatting Guidelines */}
          <motion.div 
            className="mb-12"
            variants={itemVariants}
          >
            <div className="bg-[#FFFDF7] rounded-2xl p-6 sm:p-8 shadow-xl shadow-[#EA580C]/5 border border-[#F59E0B]/25">
              <h3 className="text-xl font-semibold text-[#1C0B02] mb-4">Author Guidelines & Formatting</h3>
              <p className="text-[#451A03]/80 text-sm sm:text-base leading-relaxed mb-6 text-justify">
                Submit papers strictly formatted as per Springer Conference Proceedings template through the Microsoft CMT portal.
              </p>
              
              <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row">
                <a
                  href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#EA580C] to-[#D97706] hover:from-[#C2410C] hover:to-[#B45309] text-white px-4 sm:px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center tracking-tight shadow-md shadow-[#EA580C]/20 transition-all text-xs sm:text-sm"
                >
                  Springer LNCS Guidelines
                  <Image src={arrowRightPath} alt="Arrow right" width={16} height={16} className="h-4 w-4 ml-2 filter invert" />
                </a>
                
                <a
                  href="https://cmt3.research.microsoft.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1C0B02] text-white px-4 sm:px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center tracking-tight hover:bg-[#2E1104] transition-colors text-xs sm:text-sm"
                >
                  CMT Submission Portal
                  <Image src={arrowRightPath} alt="Arrow right" width={16} height={16} className="h-4 w-4 ml-2 filter invert" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Important Dates */}
          <motion.div 
            className="mb-12"
            variants={itemVariants}
          >
            <div className="bg-[#FFFDF7] rounded-2xl p-6 sm:p-8 shadow-xl shadow-[#EA580C]/5 border border-[#F59E0B]/25">
              <h3 className="text-xl font-semibold text-[#1C0B02] mb-4">Registration Deadlines</h3>
              <div className="text-[#451A03]/85 leading-relaxed text-sm space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-[#F59E0B]/15">
                  <span className="font-medium">Paper Submission Opens:</span>
                  <span className="text-[#EA580C] font-semibold">01 August, 2026</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#F59E0B]/15">
                  <span className="font-medium">Paper Submission Deadline:</span>
                  <span className="text-[#EA580C] font-semibold">15 November, 2026</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#F59E0B]/15">
                  <span className="font-medium">Acceptance Notification:</span>
                  <span className="text-[#EA580C] font-semibold">15 December, 2026</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#F59E0B]/15">
                  <span className="font-medium">Camera Ready Submission:</span>
                  <span className="text-[#EA580C] font-semibold">10 January, 2027</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#F59E0B]/15">
                  <span className="font-medium">Registration Deadline:</span>
                  <span className="text-[#EA580C] font-semibold">25 January, 2027</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Conference Dates:</span>
                  <span className="text-[#EA580C] font-semibold">26–27 February, 2027</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Copy Right Form */}
          <motion.div 
            className="mb-12"
            variants={itemVariants}
          >
            <div className="bg-gradient-to-r from-[#7C2D12] via-[#C2410C] to-[#D97706] rounded-2xl p-6 sm:p-8 text-white shadow-xl shadow-[#EA580C]/20">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Copyright Form</h3>
                  <p className="text-amber-100/90 text-sm">Download the Springer Consent to Publish / Copyright Agreement form.</p>
                </div>
                <a
                  href="/coming-soon"
                  className="bg-[#FFFDF7] text-[#C2410C] font-bold px-6 py-3 rounded-lg inline-flex items-center justify-center tracking-tight hover:bg-[#FEF3C7] transition-colors text-sm shadow-md"
                >
                  Download Form
                  <Image src={arrowRightPath} alt="Arrow right" width={16} height={16} className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Author Limit Note */}
          <motion.div 
            variants={itemVariants}
          >
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm font-bold">!</span>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-800 mb-2">Important Notice</h4>
                  <p className="text-amber-700 text-sm leading-relaxed">
                    <strong>No Paper to Have More Than 5 Authors</strong> - Please ensure your manuscript strictly complies with this requirement.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// RegistrationFees Component
const RegistrationFees = () => {
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
      category: "Academician / PhD Scholar",
      earlyBird: "INR 7,500 / USD 200",
      regular: "INR 8,500 / USD 250"
    },
    {
      category: "UG / PG Student",
      earlyBird: "INR 6,500 / USD 150",
      regular: "INR 7,500 / USD 200"
    },
    {
      category: "Industry Professional",
      earlyBird: "INR 9,000 / USD 250",
      regular: "INR 10,000 / USD 300"
    },
    {
      category: "Co-Author / Listener Only",
      earlyBird: "INR 4,000 / USD 100",
      regular: "INR 4,000 / USD 100"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-[#FFFDF7] to-[#FEF9EE]">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C0B02] mb-4">
              Registration Fees
            </h2>
            <p className="text-[#451A03]/80 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              Below are the registration fees details for PRAKASH 2027. Authors and delegates can pay the corresponding fees in the official bank account listed in the next section.
            </p>
          </motion.div>

          {/* Registration Table */}
          <motion.div 
            className="bg-[#FFFDF7] rounded-2xl shadow-xl shadow-[#EA580C]/5 border border-[#F59E0B]/25 overflow-hidden"
            variants={itemVariants}
          >
            {/* Table Header */}
            <div className="bg-gradient-to-r from-[#7C2D12] via-[#C2410C] to-[#D97706] text-white p-4 sm:p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div className="font-semibold text-base sm:text-lg">CATEGORY</div>
                <div className="font-semibold text-base sm:text-lg text-center md:text-left">Early Bird (Till 15 Dec 2026)</div>
                <div className="font-semibold text-base sm:text-lg text-center md:text-left">Regular (After 15 Dec 2026)</div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-[#F59E0B]/15">
              {registrationData.map((row, index) => (
                <div 
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 sm:p-6 hover:bg-[#FEF3C7]/40 transition-colors"
                >
                  <div className="font-semibold text-[#1C0B02]">
                    {row.category}
                  </div>
                  <div className="text-[#EA580C] font-semibold text-center md:text-left">
                    {row.earlyBird}
                  </div>
                  <div className="text-[#EA580C] font-semibold text-center md:text-left">
                    {row.regular}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Registration Note */}
          <motion.div 
            className="mt-8 bg-amber-50 border border-amber-300 rounded-2xl p-6 sm:p-8"
            variants={itemVariants}
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-[#EA580C] rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-sm font-bold">i</span>
              </div>
              <div>
                <h4 className="font-semibold text-amber-900 mb-2">Registration Information</h4>
                <p className="text-amber-800 text-sm md:text-base leading-relaxed">
                  Early Bird Registration is available until <strong>15 December 2026</strong>. Regular registration fees apply after this date until <strong>25 January 2027</strong>. 
                  All registration fees are inclusive of conference proceedings kit, technical session access, IKS Expo access, certificate, lunches, and tea breaks during the conference.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// AccountDetails Component
const AccountDetails = () => {
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

  const accountDetails = [
    {
      label: "Account Name",
      value: "POORNIMA INSTITUTE PART TWO",
      icon: FaUniversity
    },
    {
      label: "Account Number",
      value: "50200067728688",
      icon: FaCreditCard
    },
    {
      label: "Bank",
      value: "HDFC BANK LTD. F-129 RIICO INDUSTRIAL AREA SITAPURA JAIPUR",
      icon: FaUniversity
    },
    {
      label: "IFSC Code",
      value: "HDFC0003873",
      icon: FaCreditCard
    },
    {
      label: "SWIFT Code",
      value: "HDFCINBBXXX",
      icon: FaGlobe
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#FFFDF7]">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C0B02] mb-4">
              Account Details
            </h2>
            <p className="text-[#451A03]/80 text-lg max-w-3xl mx-auto">
              Use the following bank account details to make your conference registration payment
            </p>
          </motion.div>

          {/* Account Details Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
            variants={itemVariants}
          >
            {accountDetails.map((detail, index) => (
              <div 
                key={index}
                className="bg-[#FFFDF7] rounded-2xl p-6 shadow-xl shadow-[#EA580C]/5 border border-[#F59E0B]/25 hover:border-[#EA580C]/50 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#EA580C]/10 rounded-xl flex items-center justify-center">
                    <detail.icon className="w-6 h-6 text-[#EA580C]" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-[#1C0B02] mb-2">{detail.label}</h4>
                    <p className="text-[#EA580C] font-mono text-sm sm:text-base break-all font-bold">
                      {detail.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Payment Instructions */}
          <motion.div 
            className="bg-gradient-to-r from-[#7C2D12] via-[#C2410C] to-[#D97706] rounded-2xl p-6 sm:p-8 text-white mb-8 shadow-xl shadow-[#EA580C]/20"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
              <FaCreditCard className="w-6 h-6" />
              Payment Instructions
            </h3>
            <div className="space-y-3 text-amber-100/90">
              <p>• Transfer the registration fee to the above mentioned bank account</p>
              <p>• Keep the transaction receipt for verification purposes</p>
              <p>• Email the payment proof along with your registration details</p>
              <p>• Registration will be confirmed only after payment verification</p>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8"
            variants={itemVariants}
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-1">
                <FaUsers className="w-3 h-3 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-emerald-800 mb-2">Need Help with Registration?</h4>
                <p className="text-emerald-700 mb-3">
                  For any queries regarding registration, payment, or technical issues, please contact our support team.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="mailto:iks2027@poornima.org"
                    className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors text-center"
                  >
                    Email Support
                  </a>
                  <a 
                    href="/contact"
                    className="bg-white text-emerald-600 border border-emerald-600 px-4 py-2 rounded-lg font-medium hover:bg-emerald-50 transition-colors text-center"
                  >
                    Contact Page
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default function RegistrationPage() {
  return (
    <div>
      <RegistrationHero />
      <RegistrationContent />
      <RegistrationFees />
      <AccountDetails />
    </div>
  );
}
