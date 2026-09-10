import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About & Venue",
  description: "Learn about the International Conference on Indian Knowledge Systems (PRAKASH 2027), organized by the Department of Applied Sciences at Poornima Institute of Engineering and Technology (PIET), Jaipur, Rajasthan, India.",
  keywords: [
    "About PRAKASH 2027",
    "Indian Knowledge Systems",
    "IKS Conference Jaipur",
    "PIET Jaipur",
    "Department of Applied Sciences",
    "Vedic Mathematics",
    "Ayurveda and Life Sciences",
    "Sustainable Heritage",
    "NEP 2020 IKS"
  ],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
