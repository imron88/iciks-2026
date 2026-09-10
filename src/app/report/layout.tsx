import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conference Reports & Publications",
  description: "Access conference reports, research publications, and feedback channels for PRAKASH 2027 – International Conference on Indian Knowledge Systems.",
  keywords: [
    "Conference Reports",
    "PRAKASH 2027 Reports",
    "Research Publications",
    "Conference Proceedings",
    "Indian Knowledge Systems",
    "Academic Publications",
    "Conference Documentation"
  ],
};

export default function ReportLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
