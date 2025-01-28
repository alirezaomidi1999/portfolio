import React from "react";
import Header from "@/components/header/Header";
import TimeLineItem from "@/components/ui/TimeLineItem";
import ResumeSection from "@/components/resume/ResumeSection";
import { Metadata } from "next";
import { workExperiences } from "@/data/workExperiences";

export const metadata: Metadata = {
  title: "Resume - Alireza Omidi",
  description:
    "Explore my professional experience, skills, and achievements in my resume.",
};

export default function page() {
  return (
    <div className="animate-fadeIn p-[30px]">
      <Header title="Resume" />
      <div className="flex flex-col gap-8">
        <ResumeSection title={"Experience"}>
          {workExperiences.map((workExperience) => (
            <TimeLineItem
              key={workExperience.title}
              title={workExperience.title}
              year={workExperience.year}
              description={workExperience.description}
              projects={workExperience.projects}
            />
          ))}
        </ResumeSection>
        <ResumeSection title={"Education"}>
          <TimeLineItem
            title="Computer Engineering"
            description="Bachelor Degree at Azad University"
          />
        </ResumeSection>
      </div>
    </div>
  );
}
