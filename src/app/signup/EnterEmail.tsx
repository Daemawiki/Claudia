"use client";
import React, { useState } from "react";
import { LoginInput } from "../login/AccountInput";
import { Button } from "../login/Button";

interface PropsType {
  list: number[];
  handlerCurrent: () => void;
}

function EnterEmail({ list, handlerCurrent }: PropsType) {
  const [inputCount, setInputCount] = useState<string>("");
  const [error, setError] = useState<string>("");
  const inputIsValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCount(e.target.value);
  };

  let emailformRegEx = "^[A-Za-z0-9+_.-]+@(dsm\\.hs\\.kr)$";
  const checkDsmEmail = () => {
    if (inputCount.length == 0) {
      setError("이메일을 입력해주세요.");
    } else if (inputCount.match(emailformRegEx) === null) {
      setError("이메일 양식을 확인해주세요.");
    } else {
      handlerCurrent();
    }
  };

  return (
    <>
      <div className="flex w-full flex-col gap-12">
        <LoginInput
          emailform
          onClick={() => {
            setError("");
          }}
          value={inputCount}
          onChange={inputIsValue}
          inputTitle="이메일"
          placeholder="이메일 입력"
          error={error}
        />
        <div className="flex w-full justify-center items-center gap-2">
          {list.map((i, j) => (
            <div
              key={j}
              className={`${0 == j ? "w-4 bg-lime-400" : "w-2 bg-gray-300"} h-2 w-2 rounded-full`}
            />
          ))}
        </div>
      </div>
      <Button title="인증번호 전송" onClick={checkDsmEmail} />
    </>
  );
}
function handlerCurrent() {
  throw new Error("Function not implemented.");
}
export default EnterEmail;
