import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conference Committees",
  description: "Meet the organizing committee, national and international advisory board members of PRAKASH 2027. Distinguished scholars and experts leading the International Conference on Indian Knowledge Systems.",
  keywords: [
    "Conference Committee",
    "PRAKASH 2027 Committee",
    "Organizing Committee",
    "National Advisory Board",
    "International Advisory Board",
    "Indian Knowledge Systems Scholars",
    "PIET Jaipur Applied Sciences"
  ],
};

export default function CommitteesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
