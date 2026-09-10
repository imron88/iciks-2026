import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Call for Papers & IKS Expo",
  description: "Submit your original research papers to PRAKASH 2027 – International Conference on Indian Knowledge Systems. Tracks include Scientific Heritage, Holistic Health, Environmental Ethics, Governance & Literature. Discover submission guidelines and IKS Expo participation.",
  keywords: [
    "Call for Papers",
    "Paper Submission",
    "Indian Knowledge Systems CFP",
    "PRAKASH 2027 Submission",
    "IKS Expo",
    "Vedic Mathematics Papers",
    "Ayurveda Clinical Research",
    "Vastu Shastra and Ecology",
    "Arthashastra and Governance"
  ],
};

export default function CallForPaperLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
