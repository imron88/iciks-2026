"use client";
import { useState, useEffect } from "react";

interface NewsItem {
  id: number;
  text: string;
  isImportant?: boolean;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    text: "🔥 Call for Papers Open: PRAKASH 2027 – International Conference on Indian Knowledge Systems!",
    isImportant: true
  },
  {
    id: 2,
    text: "📅 Paper Submission Deadline: 15 November, 2026 - Submit Your Original Research"
  },
  {
    id: 3,
    text: "🌟 IKS Expo Zone: Startups & Innovators Invited in Herbal Tech, Green Architecture & Digital Heritage"
  },
  {
    id: 4,
    text: "🏛️ PRAKASH 2027: 26–27 February 2027 | Hybrid Mode (09:00 AM – 03:00 PM IST)"
  },
  {
    id: 5,
    text: "📍 Venue: Department of Applied Sciences, Poornima Institute of Engineering & Technology, Jaipur, Rajasthan"
  }
];

export const BreakingNews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 4000); // Change news every 4 seconds

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const currentNews = newsItems[currentIndex];

  return (
    <>
      <div className="bg-gradient-to-r from-[#7C2D12] via-[#C2410C] to-[#EA580C] relative overflow-hidden border-b border-[#FBBF24]/30 shadow-md">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[#FBBF24] animate-pulse"></div>
        </div>

        <div className="relative">
          <div className="container mx-auto px-4">
            <div className="flex items-center py-2 sm:py-2.5">
              {/* Breaking News Label */}
              <div className="flex-shrink-0 mr-3 sm:mr-4">
                <div className="bg-gradient-to-r from-[#FDE68A] to-[#FBBF24] text-[#1C0B02] px-2.5 sm:px-3.5 py-1 rounded-full text-xs sm:text-sm font-extrabold flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 bg-[#EA580C] rounded-full animate-ping"></span>
                  <span className="hidden sm:inline">IKS UPDATE</span>
                  <span className="sm:hidden">UPDATE</span>
                </div>
              </div>

              {/* News Content - Animated Container */}
              <div className="flex-1 overflow-hidden mr-2 sm:mr-3">
                <div className="relative h-6 sm:h-7">
                  <div
                    key={currentNews.id}
                    className="absolute inset-0 flex items-center animate-fade-in"
                  >
                    <div className="w-full">
                      <p className={`text-[#FFFDF7] text-xs sm:text-sm font-medium leading-tight ${currentNews.isImportant ? 'font-bold text-[#FEF08A]' : ''
                        }`}>
                        <span className="inline-block animate-slide-in">
                          {currentNews.text}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* News Indicators */}
              <div className="flex-shrink-0 flex space-x-1.5 items-center mr-2">
                {newsItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex
                      ? "w-4 bg-[#FBBF24]"
                      : "w-1.5 bg-white/40 hover:bg-white/70"
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsVisible(false)}
                className="flex-shrink-0 ml-auto w-6 h-6 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center transition-colors text-white text-xs"
                aria-label="Close breaking news"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .animate-slide-in {
          animation: slide-in 0.8s ease-out;
        }
      `}</style>
    </>
  );
};