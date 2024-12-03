"use client";
import React, { useEffect, useState } from "react";
import { Arrow } from "@/assets";
import { Button, RegisterInput } from "@/components";
import { useRouter } from "next/navigation";
import { Email, EmailVerification, Name, Password } from "./Register";
import { useForm, useWatch } from "react-hook-form";
import { SignupFormValues } from "@/interfaces/user";
import { mailSend, mailVerify } from "@/apis/mail";
import { useToast } from "@/components";
import { registerHandler } from "@/apis";

export default function Signup() {
  const { addToast } = useToast();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
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

  const router = useRouter();
  const [pageNum, setPageNum] = useState<number>(0);
  const page = [
    {
      page: <Email control={control} errors={errors} />,
      details: "이메일 인증을 위해 DSM 이메일을 입력해주세요",
      buttonText: "인증 코드 전송",
    },
    {
      page: <EmailVerification control={control} errors={errors} />,
      details: `${email} 로 인증 코드를 전송했습니다`,
      buttonText: "확인",
    },
    {
      page: <Password control={control} errors={errors} />,
      details: "비밀번호를 설정해주세요",
      buttonText: "확인",
    },
    {
      page: <Name control={control} errors={errors} />,
      details: "이름을 입력하고 기수와 전공을 선택해주세요",
      buttonText: "완료",
    },
  ];

  const prevStep = () => {
    if (pageNum > 0) {
      setPageNum(pageNum - 1);
    } else {
      router.back();
    }
  };

  const nextStep = handleSubmit(async data => {
    console.log(data);
    if (pageNum === 0) {
      try {
        const response = await mailSend(data.email);
        addToast("인증 코드 전송 완료", "success");
        setPageNum(pageNum + 1);
      } catch (error) {
        addToast(
          "인증 코드 전송 중 문제가 발생했습니다. 다시 시도해주세요.",
          "error",
        );
      }
    }
    if (pageNum === 1) {
      try {
        const response = await mailVerify(data.email, data.verificationCode);
        setPageNum(pageNum + 1);
      } catch (error) {
        addToast("인증 코드가 올바르지 않습니다.", "warning");
      }
    }
    if (1 < pageNum && pageNum < 3) {
      setPageNum(pageNum + 1);
    }
    if (pageNum === 3) {
      try {
        const response = await registerHandler(data);
        switch (response.status) {
          case 200: {
            // 회원가입 성공
            addToast("회원가입 성공!", "success");
            router.push("/");
            break;
          }
          default: {
            // 그 외
            addToast(
              "회원가입 중 문제가 발생했습니다. 다시 시도해주세요.",
              "warning",
            );
            break;
          }
        }
      } catch (error) {
        addToast("네트워크 오류가 발생했습니다.", "error");
      }
    }
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        nextStep();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [nextStep]);

  return (
    <div className="w-full h-screen flex justify-center pt-6">
      <div className="w-[480px] flex flex-col gap-12 p-6 rounded-3xl">
        <div
          onClick={() => prevStep()}
          className="rounded-md w-fit border border-gray200 p-2 flex bg-white hover:bg-gray50"
        >
          <Arrow size={28} className="text-gray600" />
        </div>
        <div className="w-full flex flex-col gap-6">
          <div className="w-full flex flex-col gap-3">
            <p className="text-bold36 text-black">회원가입</p>
            <p className="text-gray500 text-medium18">
              {page[pageNum].details}
            </p>
          </div>
          {page[pageNum].page}
        </div>
        <div className="w-full flex flex-col gap-6">
          <div className="w-full gap-2 flex justify-center items-center">
            {page.map((_, index) => (
              <div
                key={index}
                className={`h-2 transition-all rounded-full ${pageNum === index ? "w-4 bg-lime400" : "w-2 bg-gray300"}`}
              />
            ))}
          </div>
          <Button
            big
            onClick={nextStep}
            style="primary2"
            text={page[pageNum].buttonText}
          />
        </div>
      </div>
    </div>
  );
}
