"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaBug, FaEdit, FaLightbulb, FaQuestionCircle, FaClipboardList, FaEnvelope, FaCamera, FaClock } from "react-icons/fa";

// Assets
const cylinderImagePath = "/assets/cylinder.png";
const cogImagePath = "/assets/cog.png";

// ReportHero Component
const ReportHero = () => {
  const heroRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
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

  const floatingObjectVariants = {
    float: {
      y: [0, -15, 0],
      x: [0, 5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "mirror" as const,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section
      ref={heroRef}
      className="min-h-[60vh] flex items-center overflow-x-clip relative animate-fade-in"
      style={{ 
        background: "linear-gradient(180deg, white 0%, #F5F6F9 50%, #FDFDF6 100%)",
      }}
    >
      {/* Floating decorative elements */}
      <motion.div 
        className="absolute -left-10 top-1/3 opacity-50 hidden md:block" 
        variants={floatingObjectVariants}
        animate="float"
      >
        <Image 
          src={cylinderImagePath} 
          alt="Decorative cylinder" 
          width={120} 
          height={120}
        />
      </motion.div>

      <motion.div 
        className="absolute right-10 bottom-1/4 opacity-40 hidden md:block" 
        variants={floatingObjectVariants}
        animate="float"
        style={{ animationDelay: "-1.5s" }}
      >
        <Image 
          src={cogImagePath} 
          alt="Decorative cog" 
          width={150} 
          height={150}
        />
      </motion.div>

      <div className="container py-16 sm:py-20 md:py-24 mx-auto">
        <motion.div 
          className="flex flex-col items-center justify-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Conference Tag */}
          <motion.div 
            className="px-4 py-1.5 bg-[#4849F8] text-white text-sm rounded-full mb-4 md:mb-6"
            variants={itemVariants}
          >
            Help Us Improve
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1 
            className="text-[#090B26] text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-5xl leading-tight px-4"
            variants={itemVariants}
          >
            Report an <span className="text-[#4849F8]">Issue</span>
          </motion.h1>
          
          {/* Description */}
          <motion.div 
            className="mt-4 md:mt-6 max-w-4xl text-[#090B26]/80 text-lg sm:text-xl md:text-2xl font-medium px-4 text-center"
            variants={itemVariants}
          >
            Help us make PRAKASH 2027 better by reporting issues, providing feedback, or suggesting improvements. 
            Your input is valuable to us and helps enhance the experience for all participants.
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// ReportCategoriesSection Component
const ReportCategoriesSection = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <div className="flex justify-center">
          <div className="tag">Issue Categories</div>
        </div>
        <h2 className="section-title mt-5 text-3xl md:text-4xl font-bold text-[#090B26] text-center">What would you like to report?</h2>
        <p className="section-des mt-5 text-base text-[#090B26]/70 max-w-2xl mx-auto text-center">
          Choose the most appropriate category for your issue to help us process and address it efficiently.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {[
          {
            icon: FaBug,
            title: "Technical Issues",
            description: "Report website bugs, broken links, submission portal errors, or technical difficulties",
            examples: ["Broken links", "Page loading errors", "Mobile responsiveness issues", "Form submission problems"],
            color: "#DC2626"
          },
          {
            icon: FaEdit,
            title: "Content Issues",
            description: "Report incorrect information, typos, or content suggestions",
            examples: ["Factual errors", "Outdated information", "Spelling/grammar mistakes", "Missing information"],
            color: "#2563EB"
          },
          {
            icon: FaLightbulb,
            title: "Conference Feedback",
            description: "Share feedback about the conference organization or suggestions",
            examples: ["Venue suggestions", "Program improvements", "Speaker recommendations", "General feedback"],
            color: "#F59E0B"
          },
          {
            icon: FaQuestionCircle,
            title: "Other Issues",
            description: "Any other concerns or issues not covered above",
            examples: ["Privacy concerns", "Account issues", "Registration problems", "Payment issues"],
            color: "#7C3AED"
          }
        ].map((category, index) => {
          const IconComponent = category.icon;
          return (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-white to-[#FAFBFF] rounded-3xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] p-8 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${category.color}15` }}>
                <IconComponent className="w-8 h-8" style={{ color: category.color }} />
              </div>
              <h3 className="text-xl font-bold text-[#090B26] mb-4">{category.title}</h3>
              <p className="text-base text-[#090B26]/80 mb-6">{category.description}</p>
            <div className="space-y-3">
              <p className="text-sm font-medium text-[#4849F8]">Examples:</p>
              <ul className="space-y-2">
                {category.examples.map((example, exampleIndex) => (
                  <li key={exampleIndex} className="flex items-center text-sm text-[#090B26]/70">
                    <div className="w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0" style={{ backgroundColor: category.color }}></div>
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

// ReportFormSection Component
const ReportFormSection = () => (
  <section className="py-24 bg-gradient-to-b from-white to-[#FDFDF6]">
    <div className="container mx-auto px-4">
      <motion.div
        className="mt-16 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-white rounded-3xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] p-12 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-[#4849F8] to-[#183EC2] rounded-3xl flex items-center justify-center mx-auto mb-8">
            <FaClipboardList className="w-10 h-10 text-white" />
          </div>
          <div className="border-t border-[#F1F1F1] pt-8">
            <h4 className="text-lg font-semibold text-[#090B26] mb-6">Need to Report Something Now?</h4>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:iks2027@poornima.org"
                className="bg-gradient-to-r from-[#4849F8] to-[#183EC2] text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope className="w-5 h-5 mr-2" />
                Email Us Directly
              </motion.a>
              <motion.a
                href="/contact"
                className="bg-white text-[#4849F8] border-2 border-[#4849F8] px-8 py-4 rounded-xl font-medium hover:bg-[#F8FAFF] transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit Contact Page
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

// GuidelinesSection Component
const GuidelinesSection = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <div className="flex justify-center">
          <div className="tag">Best Practices</div>
        </div>
        <h2 className="section-title mt-5 text-3xl md:text-4xl font-bold text-[#090B26] text-center">Reporting Guidelines</h2>
        <p className="section-des mt-5 text-base text-[#090B26]/70 max-w-2xl mx-auto text-center">
          Follow these guidelines to help us understand and resolve your issue as quickly as possible.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            icon: FaClipboardList,
            title: "Be Specific",
            description: "Provide detailed descriptions including steps to reproduce issues, browser information, and specific page URLs when applicable.",
            color: "#DC2626"
          },
          {
            icon: FaCamera,
            title: "Include Evidence",
            description: "Screenshots, error messages, or videos help us understand and resolve issues more quickly and accurately.",
            color: "#2563EB"
          },
          {
            icon: FaClock,
            title: "Response Time",
            description: "We aim to acknowledge reports within 24 hours and provide updates on critical issues within 48 hours.",
            color: "#059669"
          }
        ].map((guideline, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-white to-[#FAFBFF] rounded-3xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] p-8 text-center hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: `${guideline.color}15` }}>
              <guideline.icon className="w-8 h-8" style={{ color: guideline.color }} />
            </div>
            <h3 className="text-xl font-bold text-[#090B26] mb-4">{guideline.title}</h3>
            <p className="text-base text-[#090B26]/80 leading-relaxed">{guideline.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default function ReportPage() {
  return (
    <>
      <ReportHero />
      <ReportCategoriesSection />
      <ReportFormSection />
      <GuidelinesSection />
    </>
  );
}
