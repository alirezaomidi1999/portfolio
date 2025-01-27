import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Resume - Alireza Omidi",
  description:
    "Explore my professional experience, skills, and achievements in my resume.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
