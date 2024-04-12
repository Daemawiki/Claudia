import Link from "next/link";
import { Arrow_Left } from "../assets";

import React from "react";

interface PropsType {
  children?: React.ReactNode;
  title: string;
  email?: string;
  subTitle?: string;
}

function AccountModal({ children, title, subTitle, email }: PropsType) {
  return (
    <div className="flex flex-col px-11 pt-12 pb-16 rounded-[32px] gap-9 w-[480px] bg-white border border-gray-300 h-fit">
      <Link
        href={"/"}
        className="flex p-1 rounded-md border border-gray-300 hover:bg-gray-100 w-fit cursor-pointer"
      >
        <Arrow_Left size={32} className="text-gray-600" />
      </Link>
      <div className="flex w-full flex-col gap-9">
        <div className="w-full flex flex-col gap-12">
          <div className="flex flex-col gap-3">
            <p className="font-bold text-4xl">{title}</p>
            <div className="flex font-medium text-md text-gray-500 gap-1">
              <p className="text-lime-500 font-semibold">{email}</p>
              {subTitle}
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

export default AccountModal;
