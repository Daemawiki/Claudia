"use client";

import { useState } from "react";
import Input from "./input";

const PasswordForm = () => {
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [emptyPassword, setEmptyPassword] = useState(true);
  const handlePasswordChange = (value: string) => {
    setPassword(value);
    if (value !== "") setEmptyPassword(false);
    else setEmptyPassword(true);
    setPasswordMatch(value === checkPassword);
  };
  const handleCheckPasswordChange = (value: string) => {
    setCheckPassword(value);
    if (value !== "") setEmptyPassword(false);
    else setEmptyPassword(true);
    setPasswordMatch(value === password);
  };

  return (
    <>
      <Input
        title="비밀번호"
        isPassword
        width={"full"}
        onInputChange={handlePasswordChange}
      />
      <Input
        title="비밀번호 확인"
        isPassword
        width={"full"}
        onInputChange={handleCheckPasswordChange}
      />
      <span className="text-myDocumentNameColor">
        {emptyPassword
          ? ""
          : passwordMatch
            ? "비밀번호가 일치합니다"
            : "비밀번호가 일치하지 않습니다"}
      </span>
    </>
  );
};

export default PasswordForm;
