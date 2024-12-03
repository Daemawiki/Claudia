"use client";
import React from "react";
import { Arrow } from "@/assets";
import { Button, RegisterInput, useToast } from "@/components";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { LoginValues } from "@/interfaces/user";
import { loginHandler } from "@/apis";

export default function Login() {
  const router = useRouter();
  const { addToast } = useToast();

  const {
    control,
    handleSubmit, // 로그인핸들러
    formState: { errors },
  } = useForm<LoginValues>({
    defaultValues: { email: "", password: "" }, // 이메일, 비밀번호 기본 값
  }); // 로그인 폼 유효성 검사

  const handleLogin = handleSubmit(async data => {
    try {
      const response = await loginHandler(data);
      if (response === 200) {
        // 로그인 성공
        addToast("로그인 성공!", "success");
        router.push("/"); // 로그인 후 메인 이동
      } else if (response === 401) {
        // 인증 실패
        addToast("이메일 또는 비밀번호가 올바르지 않습니다.", "error");
      } else {
        // 기타 오류
        addToast(
          "로그인 중 문제가 발생했습니다. 다시 시도해주세요.",
          "warning",
        );
      }
    } catch (error) {
      // 네트워크 오류 등 예외 처리
      addToast("네트워크 오류가 발생했습니다.", "error");
    }
  });

  return (
    <div className="w-full h-screen flex justify-center pt-6">
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
            {/* 이메일 입력창 검사 */}
            <Controller
              name="email"
              control={control}
              rules={{
                required: "이메일을 입력해주세요.",
              }}
              render={({ field: { onChange, value } }) => (
                <RegisterInput
                  type="email"
                  placeholder="이메일 입력"
                  title="이메일"
                  onChange={onChange}
                  value={value}
                  error={errors.email?.message}
                />
              )}
            />
            {/* 비밀번호 입력창 검사 */}
            <Controller
              name="password"
              control={control}
              rules={{ required: "비밀번호를 입력해주세요." }}
              render={({ field: { onChange, value } }) => (
                <RegisterInput
                  placeholder="비밀번호 입력"
                  title="비밀번호"
                  type="password"
                  onChange={onChange}
                  value={value}
                  error={errors.password?.message}
                />
              )}
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-6">
          <div className="flex gap-1.5">
            <p className="text-medium16 text-gray600">계정이 없으신가요?</p>
            <p
              onClick={() => router.push("signup")} // 회원가입으로 이동
              className="text-semibold16 text-lime500 hover:text-lime600 cursor-pointer"
            >
              회원가입
            </p>
          </div>
          <Button onClick={handleLogin} big style="primary2" text="로그인" />{" "}
          {/* 로그인 핸들러 실행 */}
        </div>
      </div>
    </div>
  );
}
