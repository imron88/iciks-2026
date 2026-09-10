import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registration & Fees",
  description: "Register for PRAKASH 2027 – International Conference on Indian Knowledge Systems. View registration categories, fees, account payment details, and author submission guidelines.",
  keywords: [
    "PRAKASH 2027 Registration",
    "IKS Conference Registration",
    "Conference Registration Fees",
    "Paper Registration",
    "Conference Payment Account",
    "Academic Conference Registration",
    "Research Scholar Registration"
  ],
};

export default function RegistrationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
