"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { login } from "@/redux/action/isLoginAction";
import Image from "next/image";

const Account = () => {
  const isLogin = useAppSelector(state => state.auth.isLogin);
  const dispatch = useAppDispatch();
  console.log(isLogin);
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
          <span className="text-xl font-bold text-[#EC7E4F]">마이페이지</span>
        </div>
      </button>
    );
  } else {
    return (
      <div className="flex items-center gap-[10px]">
        <button className="text-xl font-bold px-[10px] py-[8px]">로그인</button>
        <button className="text-xl font-bold bg-white bg-opacity-20 rounded-2xl px-[10px] py-[8px]">
          회원가입
        </button>
      </div>
    );
  }
};

export default Account;
