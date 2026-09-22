"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const arrowRightPath = "/assets/arrow-right.svg";

export const RegistrationContent = () => {
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
    <section className="py-12 sm:py-16 md:py-20 bg-white">
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
            <h2 className="text-2xl sm:text-3xl font-bold text-[#090B26] mb-6">
              Registration & Submission Guidelines
            </h2>
            
            <div className="bg-gradient-to-br from-white to-[#F8FAFF] rounded-2xl p-6 sm:p-8 shadow-[0_7px_14px_#EAEAEA] border border-[#F1F1F1]">
              <h3 className="text-xl font-semibold text-[#090B26] mb-4">Registration Process</h3>
              <div className="text-[#090B26]/80 leading-relaxed space-y-5 text-justify text-sm sm:text-base">
                <div>
                  <p className="font-semibold text-[#090B26] mb-1">1) Page Limit & Format</p>
                  <p className="text-xs sm:text-sm">Recommended paper length: 10–12 pages, including references. Strictly format using Springer LNCS/CCIS Word or LaTeX templates.</p>
                </div>
                
                <div>
                  <p className="font-semibold text-[#090B26] mb-1">2) Peer Review & Acceptance</p>
                  <p className="text-xs sm:text-sm">Every paper goes through a double-blind peer-review. Plagiarism index must be below 15% (excluding references), and AI content must be 0%.</p>
                </div>
                
                <div>
                  <p className="font-semibold text-[#090B26] mb-1">3) Submission Portal</p>
                  <a 
                    href="https://cmt3.research.microsoft.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-[#4849F8] font-bold hover:underline"
                  >
                    Go to Microsoft CMT Portal &rarr;
                  </a>
                </div>
                
                <div>
                  <p className="font-semibold text-[#090B26] mb-1">4) Final Registration Requirements (For Accepted Papers)</p>
                  <p className="text-xs sm:text-sm mb-2">Once your paper is accepted, please prepare a zip folder containing:</p>
                  <ul className="text-xs sm:text-sm space-y-1.5 ml-4 list-disc text-slate-600">
                    <li>a) Paper_ID_Camera_Ready (in docx format)</li>
                    <li>b) Paper_ID_Camera_Ready (in PDF format)</li>
                    <li>c) Paper_ID_Reviewer_Remarks (Response to reviewers)</li>
                    <li>d) Paper_ID_Payment_Proof (Receipt of bank transfer)</li>
                    <li>e) Paper_ID_Copyright (Signed Springer copyright form)</li>
                  </ul>
                  <p className="text-xs sm:text-sm mt-3 font-semibold text-slate-700">
                    Compress all these files into a single zip file named &quot;Paper_ID_PRAKASH_2027&quot; and email it to <a href="mailto:iksconf.prakash@poornima.org" className="text-[#4849F8] hover:underline">iksconf.prakash@poornima.org</a>.
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
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_7px_14px_#EAEAEA] border border-[#F1F1F1]">
              <h3 className="text-xl font-semibold text-[#090B26] mb-4">Author Guidelines & Formatting</h3>
              <p className="text-[#090B26]/80 text-sm sm:text-base leading-relaxed mb-6 text-justify">
                Submit papers strictly formatted as per Springer Conference Proceedings template through the Microsoft CMT portal.
              </p>
              
              <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row">
                <a
                  href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#4849F8] text-white px-4 sm:px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center tracking-tight hover:bg-[#4849F8]/90 transition-colors text-xs sm:text-sm"
                >
                  Springer LNCS Guidelines
                  <Image src={arrowRightPath} alt="Arrow right" width={16} height={16} className="h-4 w-4 ml-2 filter invert" />
                </a>
                
                <a
                  href="https://cmt3.research.microsoft.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-4 sm:px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center tracking-tight hover:bg-black/90 transition-colors text-xs sm:text-sm"
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
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_7px_14px_#EAEAEA] border border-[#F1F1F1]">
              <h3 className="text-xl font-semibold text-[#090B26] mb-4">Registration Deadlines</h3>
              <div className="text-[#090B26]/80 leading-relaxed text-sm space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-[#F1F1F1]/50">
                  <span className="font-medium">Paper Submission Opens:</span>
                  <span className="text-[#4849F8] font-semibold">15 July, 2026</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#F1F1F1]/50">
                  <span className="font-medium">Paper Submission Deadline:</span>
                  <span className="text-[#4849F8] font-semibold">01 September, 2026</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#F1F1F1]/50">
                  <span className="font-medium">Acceptance Notification:</span>
                  <span className="text-[#4849F8] font-semibold">30 September, 2026</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#F1F1F1]/50">
                  <span className="font-medium">Camera Ready Submission:</span>
                  <span className="text-[#4849F8] font-semibold">10 October, 2026</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#F1F1F1]/50">
                  <span className="font-medium">Registration Deadline:</span>
                  <span className="text-[#4849F8] font-semibold">15 October, 2026</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Conference Dates:</span>
                  <span className="text-[#4849F8] font-semibold">30–31 October, 2026</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Copy Right Form */}
          <motion.div 
            className="mb-12"
            variants={itemVariants}
          >
            <div className="bg-gradient-to-br from-[#4849F8] to-[#183EC2] rounded-2xl p-6 sm:p-8 text-white">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Copyright Form</h3>
                  <p className="text-white/90 text-sm">Download the Springer Consent to Publish / Copyright Agreement form.</p>
                </div>
                <a
                  href="/coming-soon"
                  className="bg-white text-[#4849F8] px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center tracking-tight hover:bg-white/90 transition-colors text-sm"
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