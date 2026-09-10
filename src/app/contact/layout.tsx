import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with PRAKASH 2027 organizers at Poornima Institute of Engineering & Technology (PIET), Jaipur. Contact details for paper submissions, IKS Expo, registration, and general inquiries.",
  keywords: [
    "Contact PRAKASH 2027",
    "IKS Conference Contact",
    "PIET Jaipur Applied Sciences",
    "Conference Inquiry",
    "Registration Support",
    "IKS Expo Inquiries",
    "Paper Submission Support",
    "Jaipur Conference"
  ],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
