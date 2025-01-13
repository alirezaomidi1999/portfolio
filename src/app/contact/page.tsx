"use client";
import React from "react";
import Header from "@/components/header/Header";
import ContactForm from "@/components/contact/ContactForm";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("@/components/contact/Map"), { ssr: false });

export default function page() {
  return (
    <div className="animate-fadeIn p-[30px]">
      <Header title="Contact" />
      <div className="pt-5">
        <Map />
        <ContactForm />
      </div>
    </div>
  );
}
