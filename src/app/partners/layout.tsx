import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conference Partners",
  description: "Discover our esteemed academic, institutional, and research partners supporting PRAKASH 2027 – International Conference on Indian Knowledge Systems.",
  keywords: [
    "Conference Partners",
    "PRAKASH 2027 Partners",
    "Indian Knowledge Systems Collaborations",
    "Academic Partners",
    "IKS Research Institutions",
    "IKS Expo Partners"
  ],
};

export default function PartnersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
