"use client";
import React from "react";
import { Item } from "@/types/Interfaces";

export default function ServiceCard({ title, description, Icon }: Item) {
  return (
    <li className="relative z-[1] flex h-[150px] gap-3 rounded-[14px] bg-border-gradient-onyx p-4 text-white shadow-shadow-2 before:absolute before:inset-[1px] before:z-[-1] before:rounded-[inherit] before:bg-gradient-jet before:bg-bg-gradient-jet">
      <Icon className="text-3xl text-orange-yellow-crayola" />

      <div>
        <h4>{title}</h4>
        <p className="mt-2 max-w-[300px] text-sm font-fw-300 text-light-gray leading-6">
          {description}
        </p>
      </div>
    </li>
  );
}
