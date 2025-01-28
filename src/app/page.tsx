"use client";
import React from "react";
import Header from "@/components/header/Header";
import ServiceCard from "@/components/home/ServiceCard";
import { serviceItems } from "@/data/serviceItems";

function page() {
  return (
    <div className="animate-fadeIn p-[30px]">
      <Header title="About Me" />
      <div>
        <p className="mb-4 text-fs-6 font-fw-300 leading-[1.6] text-light-gray">
          I’m a Front-End Developer with 3 years of experience building modern,
          user-friendly web applications. I specialize in React and Next.js,
          converting designs into smooth and engaging user experiences.
        </p>
        <p className="text-fs-6 font-fw-300 leading-[1.6] text-light-gray">
          I enjoy tackling challenges, thinking creatively, and collaborating
          with teams to bring ideas to life and deliver high-quality results.
          Every project is an opportunity to grow and create something
          impactful.
        </p>
      </div>
      <div className="mt-8">
        <h2 className="my-4 text-fs-2 font-fw-600 text-white">
          What i'm doing
        </h2>
        <ul className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
          {serviceItems.map((serviceItem) => (
            <ServiceCard
              key={serviceItem.title}
              title={serviceItem.title}
              description={serviceItem.description}
              Icon={serviceItem.Icon}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default page;
