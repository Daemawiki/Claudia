"use client";
import AccountModal from "./AccountModal";
import { LoginInput } from "./AccountInput";
import { Button } from "./Button";
import { useState } from "react";

export default function Login() {
  const [inputValue, setInputValue] = useState<string>("");
  const [pwdValue, setPwdValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwdValue(e.target.value);
  };
  return (
    <div className="flex h-[100vh] w-full px-5 pt-[14vh] bg-black bg-opacity-20 justify-center">
      <AccountModal
        title="로그인"
        subTitle="대마고에서 일어나는 모든 일을 이곳에서"
      >
        <div className="flex w-full flex-col gap-12">
          <div className="flex flex-col w-full gap-6">
            <LoginInput
              value={inputValue}
              onChange={handleInputChange}
              inputTitle="이메일"
              placeholder="이메일 입력"
              emailform
            />
            <LoginInput
              password
              value={pwdValue}
              onChange={handlePasswordChange}
              inputTitle="비밀번호"
              placeholder="비밀번호 입력"
            />
          </div>
          <Button
            isValue={inputValue && pwdValue ? true : false}
            title="로그인"
          />
        </div>
      </AccountModal>
    </div>
  );
}
