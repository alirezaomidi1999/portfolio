"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navbarList } from "@/data/navbarList";
export default function Navbar() {
  const pathName = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 z-10 w-full rounded-bl-none rounded-br-none rounded-tl-[20px] rounded-tr-[20px] border border-solid border-jet bg-[hsla(240,1%,17%,0.75)] text-white backdrop-blur-[10px] lg:absolute lg:bottom-auto lg:left-auto lg:right-0 lg:top-0 lg:w-max lg:rounded-bl-[20px] lg:rounded-br-none lg:rounded-tl-none lg:rounded-tr-[20px] lg:px-5 lg:backdrop-blur-0">
      <ul className="flex flex-wrap justify-center text-white">
        {navbarList.map((item) => (
          <li key={item.title}>
            <Link
              className={`block p-6 lg:p-4 ${
                item.href === pathName ? "text-orange-yellow-crayola" : ""
              }`}
              href={item.href}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
