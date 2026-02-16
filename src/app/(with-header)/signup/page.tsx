"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, useWatch } from "react-hook-form";

import { registerHandler } from "@/apis";
import { mailSend, mailVerify } from "@/apis/mail";
import { Arrow } from "@/assets";
import { Button, useToast } from "@/components";
import {
  authBackButtonClass,
  authBottomBlockClass,
  authDescriptionClass,
  authFormLayoutClass,
  authFormPanelClass,
  authInfoBlockClass,
  authTitleBlockClass,
} from "@/constant/formStyle";
import { SignupFormValues } from "@/interfaces/user";
import { Email, EmailVerification, Name, Password } from "./Register";

interface SignupStep {
  id: string;
  page: React.ReactNode;
  details: string;
  buttonText: string;
}

function getErrorMessage(error: unknown): string {
  if (error instanceof Error && error.message) {
    return error.message;
  }

  return "";
}

export default function Signup() {
  const { addToast } = useToast();
  const router = useRouter();
  const [pageNum, setPageNum] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    defaultValues: {
      name: "",
      email: "",
      verificationCode: "",
      password: "",
      passwordCheck: "",
      userInfo: { generation: 0, major: "" },
      classInfos: [],
    },
  });
  const email = useWatch({ control, name: "email" });

  const page: SignupStep[] = [
    {
      id: "email",
      page: <Email control={control} errors={errors} />,
      details: "이메일 인증을 위해 DSM 이메일을 입력해주세요",
      buttonText: "인증 코드 전송",
    },
    {
      id: "verification",
      page: <EmailVerification control={control} errors={errors} />,
      details: `${email} 로 인증 코드를 전송했습니다`,
      buttonText: "확인",
    },
    {
      id: "password",
      page: <Password control={control} errors={errors} />,
      details: "비밀번호를 설정해주세요",
      buttonText: "확인",
    },
    {
      id: "name",
      page: <Name control={control} errors={errors} />,
      details: "이름을 입력하고 기수와 전공을 선택해주세요",
      buttonText: "완료",
    },
  ];

  const prevStep = () => {
    if (pageNum > 0) {
      setPageNum(prev => prev - 1);
      return;
    }

    router.back();
  };

  const nextStep = handleSubmit(async data => {
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      if (pageNum === 0) {
        await mailSend(data.email);
        addToast("인증 코드 전송 완료", "success");
        setPageNum(prev => prev + 1);
        return;
      }

      if (pageNum === 1) {
        await mailVerify(data.email, data.verificationCode);
        setPageNum(prev => prev + 1);
        return;
      }

      if (pageNum === 2) {
        setPageNum(prev => prev + 1);
        return;
      }

      const status = await registerHandler(data);

      if (status === 200) {
        addToast("회원가입 성공!", "success");
        router.push("/");
        return;
      }

      addToast(
        "회원가입 중 문제가 발생했습니다. 다시 시도해주세요.",
        "warning",
      );
    } catch (error) {
      const errorMessage = getErrorMessage(error);

      if (pageNum === 0) {
        addToast(
          errorMessage ||
            "인증 코드 전송 중 문제가 발생했습니다. 다시 시도해주세요.",
          "error",
        );
        return;
      }

      if (pageNum === 1) {
        addToast(errorMessage || "인증 코드가 올바르지 않습니다.", "warning");
        return;
      }

      addToast(errorMessage || "회원가입 중 문제가 발생했습니다.", "error");
    } finally {
      setIsSubmitting(false);
    }
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Enter") {
        return;
      }

      event.preventDefault();
      nextStep();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [nextStep]);

  return (
    <div className={authFormLayoutClass}>
      <div className={authFormPanelClass}>
        <button
          type="button"
          onClick={prevStep}
          className={authBackButtonClass}
          aria-label="이전 단계"
        >
          <Arrow size={28} className="text-gray600" />
        </button>
        <div className={authInfoBlockClass}>
          <div className={authTitleBlockClass}>
            <p className="text-bold36 text-black">회원가입</p>
            <p className={authDescriptionClass}>{page[pageNum].details}</p>
          </div>
          {page[pageNum].page}
        </div>
        <div className={authBottomBlockClass}>
          <div className="mx-auto flex w-fit items-center gap-2">
            {page.map((step, index) => (
              <div
                key={step.id}
                className={`h-2 rounded-full transition-all ${pageNum === index ? "w-5 bg-lime400" : "w-2 bg-gray300"}`}
              />
            ))}
          </div>
          <Button
            big
            onClick={nextStep}
            disabled={isSubmitting}
            className="!bg-lime500 !text-white hover:!bg-lime600"
            text={isSubmitting ? "처리 중..." : page[pageNum].buttonText}
          />
        </div>
      </div>
    </div>
  );
}
