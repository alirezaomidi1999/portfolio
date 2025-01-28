import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import { poppins } from "@/utils/CustomFonts";
import Navbar from "@/components/navbar/Navbar";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Portfolio - Alireza Omidi",
  description:
    "Welcome to my personal website, showcasing my projects, resume, and contact information.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-smoky-black ${poppins.variable}`}>
        <main className="2xl:my-[100px] my-[60px] me-auto ms-auto flex w-[95%] max-w-[1200px] flex-col flex-wrap content-center justify-center gap-8 font-poppins md:w-[750px] lg:w-[950px] xl:flex xl:w-auto xl:flex-row">
          <Sidebar />
          <div className="relative mb-[95px] w-full rounded-[20px] border border-solid border-jet bg-eerie-black-2 sm:mb-[65px] lg:mb-0 xl:w-[75%] xl:min-w-[75%]">
            <Navbar />
            {children}
          </div>
          <ToastContainer />
        </main>
      </body>
    </html>
  );
}
