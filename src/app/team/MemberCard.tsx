import React from "react";
import { Github } from "../assets";

export const MemberCard = () => {
  return (
    <div className="group rounded-lg w-full max-w-[270px] h-[360px] relative overflow-hidden">
      <div className="absolute opacity-0 transition-all group-hover:opacity-100 z-10 self-center left-2.5 right-2.5 bottom-2.5 flex flex-col gap-1 p-4 rounded-md bg-white">
        <div className="w-full justify-between items-center flex">
          <p className="text-semibold20">김어진</p>
          <a href="" className="cursor-pointer">
            <Github />
          </a>
        </div>
        <p className="text-gray400 text-medium16">Frontend · Design</p>
      </div>
      <img
        src="https://image.dongascience.com/Photo/2019/12/fb4f7da04758d289a466f81478f5f488.jpg"
        className="absolute w-full h-full grayscale group-hover:grayscale-0 transition-all"
      />
    </div>
  );
};
