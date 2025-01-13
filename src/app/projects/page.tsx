"use client";
import React, { useEffect } from "react";
import Header from "@/components/header/Header";
import TimeLineItem from "@/components/ui/TimeLineItem";
import { allProjects } from "@/data/allProjects";
import useProjectStore from "@/stores/ProjectsStore";

export default function page() {
  const { clearStoredProjects } = useProjectStore();
  useEffect(() => {
    return () => {
      clearStoredProjects();
    };
  }, []);
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
    </div>
  );
}
