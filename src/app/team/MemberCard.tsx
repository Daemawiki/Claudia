import React from "react";
import { Github } from "../assets";

interface CardProps {
  name?: string;
  img?: string;
  github?: string;
  major?: string;
}

export const MemberCard = ({ name, img, github, major }: CardProps) => {
  return (
    <div className="group rounded-lg w-full max-w-[270px] h-[360px] relative overflow-hidden">
      <div className="absolute opacity-0 transition-all group-hover:opacity-100 z-10 self-center left-2.5 right-2.5 bottom-2.5 flex flex-col gap-1 p-4 rounded-md bg-white">
        <div className="w-full justify-between items-center flex">
          <p className="text-semibold20">{name}</p>
          <a href={github} className="cursor-pointer">
            <Github />
          </a>
        </div>
        <p className="text-gray400 text-medium16">{major}</p>
      </div>
      <img
        src={img || ""}
        className="absolute w-full h-full grayscale group-hover:grayscale-0 transition-all"
      />
    </div>
  );
};
