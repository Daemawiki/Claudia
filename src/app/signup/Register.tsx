"use client";
import React, { useRef, useState } from "react";
import { Button, RegisterInput } from "@/components";
import { useRouter } from "next/navigation";
import { periodMenu, majorMenu } from "@/constant/dropdownItem";

export const Email = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-6 w-full">
      <RegisterInput type="email" placeholder="이메일 입력" title="이메일" />
    </div>
  );
};

export const EmailVerification = () => {
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

export const Password = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <RegisterInput
        type="password"
        placeholder="비밀번호 입력"
        title="비밀번호"
      />
      <RegisterInput
        type="password"
        placeholder="비밀번호 재입력"
        title="비밀번호 확인"
      />
    </div>
  );
};

export const Name = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <RegisterInput placeholder="이름 입력" title="이름" />
      <RegisterInput
        dropdownValue={periodMenu}
        type="dropdown"
        placeholder="기수 선택"
        title="기수"
      />
      <RegisterInput
        dropdownValue={majorMenu}
        type="dropdown"
        placeholder="전공 선택"
        title="전공"
      />
    </div>
  );
};
