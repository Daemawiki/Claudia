"use client";
import React from "react";
import { Arrow } from "@/assets";
import { Button, RegisterInput, useToast } from "@/components";
import {
  authBackButtonClass,
  authBottomBlockClass,
  authDescriptionClass,
  authFormLayoutClass,
  authFormPanelClass,
  authInfoBlockClass,
  authTitleBlockClass,
} from "@/constant/formStyle";
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
    <div className={authFormLayoutClass}>
      <div className={authFormPanelClass}>
        <button
          type="button"
          onClick={() => router.back()}
          className={authBackButtonClass}
          aria-label="뒤로 가기"
        >
          <Arrow size={28} className="text-gray600" />
        </button>
        <div className={authInfoBlockClass}>
          <div className={authTitleBlockClass}>
            <p className="text-bold36 text-black">로그인</p>
            <p className={authDescriptionClass}>
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
        <div className={authBottomBlockClass}>
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
