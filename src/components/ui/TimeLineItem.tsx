"use client";
import React from "react";
import Link from "next/link";
import ProjectBox from "@/components/projects/ProjectBox";
import { TimeLineDetails } from "@/types/types";
import useProjectStore from "@/stores/ProjectsStore";

export default function TimeLineItem({
  title,
  description,
  year,
  hasLine = true,
  hasImage = false,
  link = "",
  projects,
}: TimeLineDetails) {
  const { setStoreProjects } = useProjectStore();
  const { storedProjects } = useProjectStore();
  const checkProjects = storedProjects?.includes(title);
  const basePath = process.env.basePath ?? "";
  return (
    <li
      className={`relative flex flex-col gap-2 text-fs-6 ${hasLine && `before:absolute before:left-[-40px] before:top-[-35px] before:h-[calc(100%+80px)] before:w-[1px] before:bg-jet`} after:absolute after:left-[-43px] after:top-[7px] after:size-[8px] after:rounded-full ${checkProjects ? "after:animate-blinkingCircle after:bg-text-gradient-yellow" : "after:bg-text-gradient-yellow"} after:shadow-shadow-6 last:before:hidden`}
    >
      <h4 className="text-white">{title}</h4>
      {hasImage && (
        <ProjectBox
          src={`${basePath}/images/gym-website.jpg`}
          alt={"gym-website"}
          link={link}
        />
      )}
      <span className="font-fw-400 text-vegas-gold">{year}</span>
      <p className="max-w-[700px] font-fw-300 leading-6 text-light-gray">
        {description}
      </p>
      {projects && projects.length > 0 && (
        <p className="max-w-[700px] font-fw-300 leading-6 text-light-gray">
          <Link href={"/projects"} onClick={() => setStoreProjects(projects)}>
            <span className="text-blue-400 hover:text-blue-500">
              {"(projects...)"}
            </span>
          </Link>
        </p>
      )}
    </li>
  );
}
