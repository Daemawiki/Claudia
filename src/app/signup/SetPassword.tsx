import React, { useState } from "react";
import { Button } from "../login/Button";
import { LoginInput } from "../login/AccountInput";

interface PropsType {
  list: number[];
  handlerCurrent: () => void;
}

function SetPassword({ list, handlerCurrent }: PropsType) {
  const [error2, setError2] = useState<string>("");
  const [error, setError] = useState<string>("");

  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const inputIsValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const confirmPasswordIsValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  let passwordRegEx = "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d!@#$%^&*()-=_+]*$";

  const checkInput = () => {
    if (password.length < 8 || password.length > 20) {
      setError("비밀번호는 8-20자로 공백을 포함할 수 없어요.");
    } else if (password.match(passwordRegEx) === null) {
      setError("영어, 숫자, 특수문자가 포함되어있어야 해요.");
    } else if (password.length === 0 || confirmPassword.length === 0) {
      setError2("비밀번호를 입력해주세요.");
    } else if (password !== confirmPassword) {
      setError2("비밀번호가 일치하지 않습니다.");
    } else {
      handlerCurrent();
    }
  };

  return (
    <>
      <div className="flex w-full flex-col gap-12">
        <div className="flex flex-col w-full gap-4">
          <LoginInput
            value={password}
            onChange={inputIsValue}
            inputTitle="비밀번호"
            placeholder="비밀번호 입력"
            password
            error={error}
            onClick={() => setError("")}
          />
          <LoginInput
            value={confirmPassword}
            onChange={confirmPasswordIsValue}
            inputTitle="비밀번호 확인"
            placeholder="비밀번호 재입력"
            password
            error={error2}
          />
        </div>
        <div className="flex w-full justify-center items-center gap-2">
          {list.map((i, j) => (
            <div
              key={j}
              className={`${2 == j ? "w-4 bg-lime-400" : "w-2 bg-gray-300"} h-2 w-2 rounded-full`}
            />
          ))}
        </div>
      </div>
      <Button title="인증번호 전송" onClick={checkInput} />
    </>
  );
}
export default SetPassword;
