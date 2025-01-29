"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/utils/Icons";

 type ProjectItem = {
  src: string;
  alt: string;
  link: string;
};

export default function ProjectBox({ src, alt, link }: ProjectItem) {
  return (
    <div className="grow animate-scaleUp">
      <figure className="group relative h-full w-full max-w-[700px] overflow-hidden rounded-lg duration-transition-1 ease-transition-1 before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-full before:bg-transparent hover:before:bg-[hsla(0,0%,0%,0.5)]">
        <Image
          width={100}
          height={100}
          className="h-full w-full duration-transition-1 ease-transition-1 group-hover:z-[1] group-hover:scale-110"
          src={src}
          alt={alt}
        ></Image>

        <div className="absolute left-[50%] top-[50%] z-[5] -translate-x-1/2 -translate-y-1/2 rounded-[12px] bg-jet p-[18px] opacity-0 duration-transition-1 ease-transition-1 group-hover:opacity-100">
          {link !== "" ? (
            <Link href={link} target="_blank">
              <Icons.Eyeoutline className="text-orange-yellow-crayola" />
            </Link>
          ) : (
            <Icons.EyeOffOutline className="text-orange-yellow-crayola" />
          )}
        </div>
      </figure>
    </div>
  );
}
