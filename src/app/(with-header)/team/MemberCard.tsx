import React from "react";
import { Github } from "@/assets";

interface CardProps {
  name: string;
  img: string;
  github: string;
  major: string;
}

function MemberCard({ name, img, github, major }: CardProps) {
  return (
    <div className="group rounded-lg w-full max-w-[270px] h-[360px] relative overflow-hidden">
      <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10 flex translate-y-8 flex-col gap-1 rounded-md bg-white p-4 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 sm:translate-y-0 sm:opacity-100 md:translate-y-0 md:opacity-100 lg:translate-y-8 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
        <div className="w-full justify-between items-center flex">
          <p className="text-semibold20">{name}</p>
          <a
            href={github}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-gray200 bg-gray50 text-gray500 transition-all hover:bg-lime50 hover:text-lime600"
          >
            <Github />
          </a>
        </div>
        <p className="text-gray400 text-medium16">{major}</p>
      </div>
      <img
        src={img}
        alt={name ? `${name} 프로필 이미지` : "팀원 프로필 이미지"}
        className="absolute h-full w-full grayscale transition-all group-hover:grayscale-0 sm:grayscale-0 md:grayscale-0 lg:grayscale"
      />
    </div>
  );
}

export { MemberCard };
export default MemberCard;
