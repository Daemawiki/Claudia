"use client";
import React from "react";
import { Arrow } from "../assets";
import { Button, RegisterInput } from "@/components";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  return (
    <div className="w-full h-screen flex justify-center pt-24">
      <div className="w-[480px] flex flex-col gap-12 p-6 rounded-3xl">
        <div
          onClick={() => router.back()}
          className="rounded-md w-fit border border-gray200 p-2 flex bg-white hover:bg-gray50"
        >
          <Arrow size={28} className="text-gray600" />
        </div>
        <div className="w-full flex flex-col gap-6">
          <div className="w-full flex flex-col gap-3">
            <p className="text-bold36 text-black">로그인</p>
            <p className="text-gray500 text-medium18">
              대마고에서 일어나는 모든 일을 이곳에서
            </p>
          </div>
          <div className="flex flex-col gap-6 w-full">
            <RegisterInput
              type="email"
              placeholder="이메일 입력"
              title="이메일"
            />
            <RegisterInput
              placeholder="비밀번호 입력"
              title="비밀번호"
              type="password"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-6">
          <div className="flex gap-1.5">
            <p className="text-medium16 text-gray600">계정이 없으신가요?</p>
            <p
              onClick={() => router.push("signup")}
              className="text-semibold16 text-lime500 hover:text-lime600 cursor-pointer"
            >
              회원가입
            </p>
          </div>
          <Button big style="primary2" text="로그인" />
        </div>
      </div>
    </div>
  );
}
