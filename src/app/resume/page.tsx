"use client";
import React from "react";
import Header from "@/components/header/Header";
import TimeLineItem from "@/components/ui/TimeLineItem";
import { WorkExperiences } from "@/data/WorkExpereinces";
import { Icons } from "@/utils/Icons";

export default function page() {
  return (
    <div className="animate-fadeIn p-[30px]">
      <Header title="Resume" />
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <div className="relative z-[1] flex size-[48px] items-center justify-center rounded-[12px] bg-border-gradient-onyx shadow-shadow-1 before:absolute before:inset-[1px] before:z-[-1] before:rounded-[12px] before:bg-eerie-black-1">
            <Icons.Bookoutline className="text-orange-yellow-crayola" />
          </div>
          <h3 className="text-fs-2 text-white">Experience</h3>
        </div>
        <ol className="ml-[65px] mt-1 flex flex-col gap-8">
          {WorkExperiences.map((WorkExperience) => (
            <TimeLineItem
              key={WorkExperience.title}
              title={WorkExperience.title}
              year={WorkExperience.year}
              description={WorkExperience.description}
              projects={WorkExperience.projects}
            />
          ))}
        </ol>
        <div className="flex items-center gap-4">
          <div className="relative z-[1] flex size-[48px] items-center justify-center rounded-[12px] bg-border-gradient-onyx shadow-shadow-1 before:absolute before:inset-[1px] before:z-[-1] before:rounded-[12px] before:bg-eerie-black-1">
            <Icons.Bookoutline className="text-orange-yellow-crayola" />
          </div>
          <h3 className="text-fs-2 text-white">Education</h3>
        </div>
        <ol className="ml-[65px] mt-1 flex flex-col gap-8">
          <TimeLineItem
            title="Computer Engineering"
            description="Bachelor Degree at Azad University"
          />
        </ol>
      </div>
    </div>
  );
}
