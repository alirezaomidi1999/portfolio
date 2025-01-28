"use client";
import React, { useState } from "react";
import Image from "next/image";
import SidebarItem from "./SidebarItem";
import { useIsSmallScreen } from "@/hooks/UseIsSmallScreen";
import { Icons } from "@/utils/Icons";
import { sidebarInfo } from "@/data/sidebarInfo";

export default function Sidebar() {
  const [showContacts, setShowContacts] = useState<boolean>(false);
  const isSmallScreen = useIsSmallScreen(760);
  const basePath = process.env.basePath ?? "";

  return (
    <aside className="relative me-auto ms-auto h-full w-full rounded-[20px] border border-solid border-jet bg-eerie-black-2 p-[30px] duration-500 ease-in-out xl:sticky xl:top-[60px] xl:w-auto">
      <div
        className={`flex h-full max-w-[1200px] flex-col flex-wrap text-center lg:max-h-max xl:items-center xl:justify-center xl:gap-8`}
      >
        <div className="flex flex-row flex-wrap items-center gap-4 xl:flex xl:flex-col xl:justify-center">
          <figure className="rounded-[30px] bg-bg-gradient-onyx">
            <Image
              width={150}
              height={150}
              src={`
               ${basePath}/images/my-avatar.png`}
              alt="avatar"
              priority
            />
          </figure>
          <div className="flex flex-col gap-4">
            {isSmallScreen !== null && (
              <button
                onClick={() => setShowContacts((prev) => !prev)}
                className="absolute right-[0] top-[0] z-[1] block rounded-bl-[15px] rounded-tr-[15px] bg-border-gradient-onyx p-4 text-orange-yellow-crayola shadow-shadow-2 before:absolute before:inset-[1px] before:z-[-1] before:rounded-[inherit] before:bg-gradient-jet before:bg-bg-gradient-jet xl:hidden"
              >
                {showContacts ? (
                  isSmallScreen ? (
                    <Icons.ChevronUpOutline className="text-orange-yellow-crayola" />
                  ) : (
                    "Hide Contacts"
                  )
                ) : isSmallScreen ? (
                  <Icons.ChevronDownOutline className="text-orange-yellow-crayola" />
                ) : (
                  "Show Contacts"
                )}
              </button>
            )}
            <h1 className="text-fs-3 font-fw-500 text-white">Alireza Omidi</h1>
            <p className="rounded-lg bg-onyx px-[18px] py-[5px] text-xs text-white">
              Front-End Developer
            </p>
          </div>
        </div>

        <div
          className={`overflow-hidden duration-transition-2 ease-transition-2 ${
            showContacts
              ? "h-[350px] pt-8 opacity-100 sm:h-[180px]"
              : "h-0 opacity-0"
          } xl:h-auto xl:max-h-full xl:opacity-100`}
        >
          <div className="h-[1px] w-full bg-jet"></div>
          <div className="grid grid-cols-1 gap-7 pt-7 sm:grid sm:grid-cols-2 xl:flex xl:flex-col">
            {sidebarInfo.map((item) => (
              <SidebarItem
                key={item.title}
                title={item.title}
                description={item.description}
                Icon={item.Icon}
              />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
