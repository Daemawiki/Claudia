"use client";
import React, { useRef, useState } from "react";
import { Button, RegisterInput } from "@/components";
import { useRouter } from "next/navigation";
import { periodMenu, majorMenu } from "@/constant/dropdownItem";
import { Controller, FieldErrors, Control, useWatch } from "react-hook-form";
import { SignupFormValues } from "@/interfaces/user";

interface SignupFormProps {
  control: Control<SignupFormValues>;
  errors: FieldErrors<SignupFormValues>;
}
export const Email = ({ control, errors }: SignupFormProps) => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-6 w-full">
      <Controller
        name="email"
        control={control}
        rules={{
          required: "이메일을 입력해주세요.",
          pattern: {
            value: /^[^@]+$|^[^@]+@dsm\.hs\.kr$/,
            message: "이메일 형식이 올바르지 않습니다.",
          },
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
    </div>
  );
};

export const EmailVerification = ({ control, errors }: SignupFormProps) => {
  const [verificationCode, setVerificationCode] = useState<string[]>(
    new Array(6).fill(""),
  );
  const inputRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    const newOtp = [...verificationCode];
    newOtp[index] = value;
    setVerificationCode(newOtp);

    if (value && index < 5) {
      inputRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
      inputRef.current[index - 1]?.focus();
    } else if (e.key === "Backspace") {
      const newOtp = [...verificationCode];
      newOtp[index] = "";
      setVerificationCode(newOtp);
    }
  };

  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full flex gap-2 justify-center">
        {verificationCode.map((code, index) => (
          <div
            key={index}
            className="w-16 h-16 focus-within:bg-white bg-gray50 rounded-lg flex justify-center items-center border border-gray300"
          >
            <input
              value={code}
              onChange={e => handleChange(e, index)}
              onKeyDown={e => handleKeyDown(e, index)}
              ref={el => (inputRef.current[index] = el)}
              maxLength={1}
              className="text-center text-black text-semibold24 bg-transparent w-full"
            />
          </div>
        ))}
      </div>
      <div className="w-full flex justify-end">
        <Button style="primary2" text="재전송" />
      </div>
    </div>
  );
};

export const Password = ({ control, errors }: SignupFormProps) => {
  const password = useWatch({ control, name: "password" });
  return (
    <div className="flex flex-col gap-6 w-full">
      <Controller
        name="password"
        rules={{
          required: "비밀번호를 입력해주세요.",
          minLength: {
            value: 8,
            message: "8글자 이상이여야합니다.",
          },
          pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]$/,
            message: "영문, 숫자, 특수문자가 한글자 이상 포함되어야합니다.",
          },
        }}
        render={({ field: { onChange, value } }) => (
          <RegisterInput
            type="password"
            placeholder="비밀번호 입력"
            title="비밀번호"
            onChange={onChange}
            value={value}
            error={errors.password?.message}
          />
        )}
      />
      <Controller
        name="passwordCheck"
        control={control}
        rules={{
          required: "비밀번호를 다시 입력해주세요.",
          validate: value =>
            value === password || "비밀번호가 일치하지 않습니다.",
        }}
        render={({ field: { onChange, value } }) => (
          <RegisterInput
            type="password"
            placeholder="비밀번호 재입력"
            title="비밀번호 확인"
            onChange={onChange}
            value={value}
            error={errors.passwordCheck?.message}
          />
        )}
      />
    </div>
  );
};

export const Name = ({ control, errors }: SignupFormProps) => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <Controller
        name="name"
        control={control}
        rules={{
          required: "실명을 입력해주세요.",
          minLength: {
            value: 2,
            message: "성과 이름을 포함하여 적어주세요.",
          },
          pattern: {
            value: /^[가-힣]+$/,
            message: "한국어만 입력 가능합니다.",
          },
        }}
        render={({ field: { onChange, value } }) => (
          <RegisterInput
            onChange={onChange}
            value={value}
            placeholder="이름 입력"
            title="이름"
            error={errors.name?.message}
          />
        )}
      />
      <Controller
        name="userInfo.generation"
        control={control}
        rules={{ required: "기수를 선택해주세요." }}
        render={({ field: { onChange, value } }) => (
          <RegisterInput
            onChange={onChange}
            value={value}
            dropdownValue={periodMenu}
            type="dropdown"
            placeholder="기수 선택"
            title="기수"
            error={errors.userInfo?.generation?.message}
          />
        )}
      />
      <Controller
        name="userInfo.major"
        control={control}
        rules={{ required: "전공을 선택해주세요." }}
        render={({ field: { onChange, value } }) => (
          <RegisterInput
            dropdownValue={majorMenu}
            type="dropdown"
            placeholder="전공 선택"
            title="전공"
            onChange={onChange}
            value={value}
          />
        )}
      />
    </div>
  );
};
