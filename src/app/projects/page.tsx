import React from "react";
import Header from "@/components/header/Header";
import TimeLineItem from "@/components/ui/TimeLineItem";
import { allProjects } from "@/data/allProjects";
import { Metadata } from "next";
import ClientSideEffect from "@/app/projects/ClientSideEffect";

export const metadata: Metadata = {
  title: "Projects - Alireza Omidi",
  description: "Check out my portfolio of completed and ongoing projects.",
};

export default function page() {
  return (
    <div className="animate-fadeIn p-[30px]">
      <Header title="Projects" />
      <div className="flw-wrap mt-[50px] flex gap-4">
        <ol className="ml-[65px] mt-1 flex flex-col gap-8">
          {allProjects.map((project) => (
            <TimeLineItem
              key={project.title}
              title={project.title}
              year={project.year}
              description={project.description}
              link={project.link}
              hasLine={false}
              hasImage={project.hasImage}
            />
          ))}
        </ol>
      </div>
      <ClientSideEffect />
    </div>
  );
}
