"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button, RegisterInput } from "@/components";
import { useRouter } from "next/navigation";
import { periodMenu, majorMenu } from "@/constant/dropdownItem";
import { Controller, FieldErrors, Control, useWatch } from "react-hook-form";
import { SignupFormValues } from "@/interfaces/user";
import { mailSend } from "@/apis/mail";

interface SignupFormProps {
  control: Control<SignupFormValues>;
  errors: FieldErrors<SignupFormValues>;
}

export const Email = ({ control, errors }: SignupFormProps) => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <Controller
        name="email"
        control={control}
        rules={{
          required: "이메일을 입력해주세요.",
          pattern: {
            value: /^[A-Za-z0-9+_.-]+@dsm\.hs\.kr$/,
            message: "이메일 형식이 올바르지 않습니다.",
          },
        }}
        render={({ field: { onChange, value } }) => (
          <RegisterInput
            autoFocus
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
  const email = useWatch({ control, name: "email" });

  const [verificationCode, setVerificationCode] = useState<string[]>(
    new Array(6).fill(""),
  );
  const inputRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    onChange: (value: string) => void,
  ) => {
    const value = e.target.value;
    const newOtp = [...verificationCode];
    newOtp[index] = value;
    setVerificationCode(newOtp);

    onChange(newOtp.join(""));

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

  const inputRefEvent = (e: HTMLInputElement | null, index: number) => {
    inputRef.current[index] = e;
  };

  const reSendMail = () => {
    mailSend(email!);
  };

  return (
    <Controller
      name="verificationCode"
      control={control}
      rules={{
        required: "인증 코드를 입력해주세요.",
        minLength: {
          value: 6,
          message: "인증 코드는 6자리여야 합니다.",
        },
      }}
      render={({ field: { value, onChange } }) => (
        <div className="w-full flex flex-col gap-3">
          <div className="w-full flex gap-2 justify-center">
            {verificationCode.map((code, index) => (
              <div
                key={index}
                className="w-16 h-16 focus-within:bg-white bg-gray50 rounded-lg flex justify-center items-center border border-gray300"
              >
                <input
                  value={code}
                  onChange={e => handleChange(e, index, onChange)}
                  onKeyDown={e => handleKeyDown(e, index)}
                  ref={e => inputRefEvent(e, index)}
                  maxLength={1}
                  className="text-center text-black text-semibold24 bg-transparent w-full"
                />
              </div>
            ))}
          </div>
          <div className="w-full flex justify-between">
            <p className="text-medium14 text-red500 ml-2">
              {errors.verificationCode?.message}
            </p>
            <Button onClick={reSendMail} style="primary2" text="재전송" />
          </div>
        </div>
      )}
    />
  );
};

export const Password = ({ control, errors }: SignupFormProps) => {
  const password = useWatch({ control, name: "password" });
  return (
    <div className="flex flex-col gap-6 w-full">
      <Controller
        name="password"
        control={control}
        rules={{
          required: "비밀번호를 입력해주세요.",
          minLength: {
            value: 8,
            message: "8글자 이상이여야합니다.",
          },
          pattern: {
            value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,}$/,
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
  if (!control) return null;

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
            dropdownValue={[...periodMenu].reverse().map(i => i + "기")}
            type="dropdown"
            placeholder="기수 선택"
            title="기수"
            value={value}
            onChange={selectedValue =>
              onChange(parseInt(selectedValue.slice(0, -1)))
            }
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
            value={value}
            onChange={onChange}
          />
        )}
      />
    </div>
  );
};
