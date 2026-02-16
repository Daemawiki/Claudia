"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";

import { loginHandler } from "@/apis";
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
import { LoginValues } from "@/interfaces/user";

function getErrorMessage(error: unknown): string {
  if (error instanceof Error && error.message) {
    return error.message;
  }

  return "";
}

export default function Login() {
  const router = useRouter();
  const { addToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    defaultValues: { email: "", password: "" },
  });

  const handleLogin = handleSubmit(async data => {
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      const status = await loginHandler(data);

      if (status === 200) {
        addToast("로그인 성공!", "success");
        router.push("/");
        return;
      }

      if (status === 401) {
        addToast("이메일 또는 비밀번호가 올바르지 않습니다.", "error");
        return;
      }

      addToast("로그인 중 문제가 발생했습니다. 다시 시도해주세요.", "warning");
    } catch (error) {
      addToast(
        getErrorMessage(error) || "네트워크 오류가 발생했습니다.",
        "error",
      );
    } finally {
      setIsSubmitting(false);
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
          <div className="w-full flex flex-col gap-6">
            <Controller
              name="email"
              control={control}
              rules={{ required: "이메일을 입력해주세요." }}
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
          <div className="flex items-center gap-1.5 sm:flex-col sm:items-start">
            <p className="text-medium16 text-gray600">계정이 없으신가요?</p>
            <button
              type="button"
              onClick={() => router.push("/signup")}
              className="text-semibold16 text-lime500 hover:text-lime600"
            >
              회원가입
            </button>
          </div>
          <Button
            big
            onClick={handleLogin}
            disabled={isSubmitting}
            className="!bg-lime500 !text-white hover:!bg-lime600"
            text={isSubmitting ? "로그인 중..." : "로그인"}
          />
        </div>
      </div>
    </div>
  );
}
