import React from "react";

export default function Header({ title }: { title: string }) {
  return (
    <header>
      <h2 className="relative mb-[20px] pb-[20px] text-fs-1 font-fw-600 text-white after:absolute after:bottom-0 after:left-0 after:h-[5px] after:w-10 after:rounded-[3px] after:bg-text-gradient-yellow">
        {title}
      </h2>
    </header>
  );
}
