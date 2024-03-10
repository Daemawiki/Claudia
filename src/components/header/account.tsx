"use client";
import { useAppSelector } from "@/hooks/reduxHooks";
import Image from "next/image";
import Link from "next/link";

const Account = () => {
  const isLogin = useAppSelector(state => state.auth.isLogin);
  if (isLogin) {
    return (
      <button>
        <div className="flex items-center gap-[10px]">
          <Image
            src={"/images/userIcon.svg"}
            alt="마이페이지"
            width={36}
            height={36}
          />
          <span className="text-xl font-bold text-[#fff]">마이페이지</span>
        </div>
      </button>
    );
  } else {
    return (
      <div className="flex items-center gap-[10px]">
        <button className="text-xl font-bold px-[10px] py-[8px]">
          <Link href={"/login"}>로그인</Link>
        </button>
        <button className="text-xl font-bold bg-white bg-opacity-20 rounded-2xl px-[10px] py-[8px]">
          <Link href={"/signup"}>회원가입</Link>
        </button>
      </div>
    );
  }
};

export default Account;
