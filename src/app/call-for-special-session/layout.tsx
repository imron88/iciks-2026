import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Call for Special Sessions",
  description: "Propose and organize special sessions for PRAKASH 2027 – International Conference on Indian Knowledge Systems. Join us in Jaipur for focused interdisciplinary discussions.",
  keywords: [
    "Special Session",
    "Call for Sessions",
    "PRAKASH 2027",
    "Indian Knowledge Systems",
    "Conference Proposal",
    "Session Organizer",
    "Jaipur Conference",
    "IKS Research"
  ],
};

export default function CallForSpecialSessionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
