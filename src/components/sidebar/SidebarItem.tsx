"use client";
import React from "react";
import { Item } from "@/types/Interfaces";

export default function SidebarItem({ title, description, Icon }: Item) {
  return (
    <div className="flex items-center gap-4 text-white">
      <div className="relative z-[1] flex size-[48px] items-center justify-center rounded-[12px] bg-border-gradient-onyx shadow-shadow-1 before:absolute before:inset-[1px] before:z-[-1] before:rounded-[12px] before:bg-eerie-black-1">
        <Icon className="text-orange-yellow-crayola" />
      </div>
      <div className="flex flex-col items-start gap-1">
        <div className="text-fs-8 text-light-gray-70">{title}</div>
        <div className="overflow-hidden text-ellipsis whitespace-nowrap text-fs-6 font-fw-300">
          {description}
        </div>
      </div>
    </div>
  );
}
