"use client";
import React, { useState } from "react";
import { Arrow } from "../assets";
import { Button, RegisterInput } from "@/components";
import { useRouter } from "next/navigation";
import { Email, EmailVerification, Name, Password } from "./Register";
import { Controller, useForm, useWatch } from "react-hook-form";
import { SignupFormValues } from "@/interfaces/user";
import { mailSend, mailVerify } from "@/apis/mail";

export default function Signup() {
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
      userInfo: { generation: "", major: "" },
      classInfos: [],
    },
  });

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
      details: "hamster@dsm.hs.kr 로 인증번호를 전송했습니다",
      buttonText: "확인",
    },
    {
      page: <Password control={control} errors={errors} />,
      details: "비밀번호를 설정해주세요",
      buttonText: "확인",
    },
    {
      page: <Name control={control} errors={errors} />,
      details: "이름을 입력해주세요",
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
  const verificationCode = useWatch({ control, name: "verificationCode" });

  const nextStep = handleSubmit(async data => {
    if (pageNum === 0) {
      try {
        const response = await mailSend(data.email);
        console.log("인증 코드 전송 완료:", response);
        setPageNum(pageNum + 1);
      } catch (error) {
        console.error("인증 코드 전송 실패:", error);
        alert("인증 코드 전송 중 문제가 발생했습니다. 다시 시도해주세요.");
      }
    }
    if (pageNum === 1) {
      try {
        const verification = verificationCode;
        const response = await mailVerify({
          email: data.email,
          code: verification,
        });
        console.log("인증 성공:", response);
        setPageNum(pageNum + 1);
      } catch (error) {
        console.error("인증 실패:", error);
        alert("인증 코드가 올바르지 않습니다.");
      }
    }
    if (1 < pageNum && pageNum < 3) {
      setPageNum(pageNum + 1);
    }
  });

  return (
    <div className="w-full h-screen flex justify-center pt-24">
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
