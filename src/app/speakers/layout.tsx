import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Keynote Speakers & Dignitaries",
  description: "Meet the distinguished keynote speakers and scholars at PRAKASH 2027. Leading national and international authorities in Indian Knowledge Systems, Vedic sciences, Ayurveda, and heritage technologies.",
  keywords: [
    "Keynote Speakers",
    "PRAKASH 2027 Speakers",
    "IKS Scholars",
    "Conference Dignitaries",
    "Indian Knowledge Systems Experts",
    "Vedic Mathematics Speakers",
    "Traditional Medicine Scholars",
    "IIT Guwahati CIKS",
    "Bhishma School of IKS"
  ],
};

export default function SpeakersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
