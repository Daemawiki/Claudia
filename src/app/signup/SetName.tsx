import React, { useState } from "react";
import { Button } from "../login/Button";
import { LoginDropdown, LoginInput } from "../login/AccountInput";
import { major, year } from "@/constant/tagGroup";

interface PropsType {
  list: number[];
  handlerCurrent: () => void;
}

function SetName({ list, handlerCurrent }: PropsType) {
  const [yearCurrent, setYearCurrent] = useState<string>("기수 선택");
  const [majorCurrent, setMajorCurrent] = useState<string>("전공 선택");
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [error2, setError2] = useState<string>("");
  const [error3, setError3] = useState<string>("");

  const inputIsValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleYearSelect = (year: string) => {
    setYearCurrent(year);
  };

  const handleMajorSelect = (major: string) => {
    setMajorCurrent(major);
  };

  const checkInput = () => {
    console.log(yearCurrent);
    console.log(majorCurrent);
    if (value === "") {
      setError("이름을 입력해주세요.");
    } else if (yearCurrent === "기수 선택") {
      setError2("기수를 선택해주세요.");
    } else if (majorCurrent === "전공 선택") {
      setError3("전공을 선택해주세요.");
    } else {
      handlerCurrent();
    }

    if (yearCurrent !== "기수 선택") {
      setError2("");
    }
    if (majorCurrent !== "전공 선택") {
      setError3("");
    }
  };

  return (
    <>
      <div className="flex w-full flex-col gap-12">
        <div className="flex flex-col w-full gap-2">
          <LoginInput
            value={value}
            maxLength={5}
            inputTitle="이름"
            placeholder="이름 입력"
            error={error}
            onChange={inputIsValue}
            onClick={() => setError("")}
          />
          <LoginDropdown
            inputTitle="기수"
            defaultSelect={yearCurrent}
            array={year.reverse()}
            onSelectItem={handleYearSelect}
            error={error2}
          />
          <LoginDropdown
            inputTitle="전공"
            defaultSelect={majorCurrent}
            array={major}
            onSelectItem={handleMajorSelect}
            error={error3}
          />
        </div>
        <div className="flex w-full justify-center items-center gap-2">
          {list.map((i, j) => (
            <div
              key={j}
              className={`${3 == j ? "w-4 bg-lime-400" : "w-2 bg-gray-300"} h-2 w-2 rounded-full`}
            />
          ))}
        </div>
      </div>
      <Button title="인증번호 전송" onClick={checkInput} />
    </>
  );
}

export default SetName;
