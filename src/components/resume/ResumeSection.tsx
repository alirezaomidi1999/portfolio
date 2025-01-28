"use client";
import React from "react";
import { Icons } from "@/utils/Icons";

type ResumeSection = {
  children: React.ReactNode;
  title: string;
};

export default function ResumeSection({ children, title }: ResumeSection) {
  return (
    <>
      <div className="flex items-center gap-4">
        <div className="relative z-[1] flex size-[48px] items-center justify-center rounded-[12px] bg-border-gradient-onyx shadow-shadow-1 before:absolute before:inset-[1px] before:z-[-1] before:rounded-[12px] before:bg-eerie-black-1">
          <Icons.Bookoutline className="text-orange-yellow-crayola" />
        </div>
        <h3 className="text-fs-2 text-white">{title}</h3>
      </div>
      <ol className="ml-[65px] mt-1 flex flex-col gap-8">{children}</ol>
    </>
  );
}
