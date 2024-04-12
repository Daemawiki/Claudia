import React, { useState, useEffect, useRef } from "react";
import { Button } from "../login/Button";

interface PropsType {
  list: number[];
  handlerCurrent: () => void;
}

function EmailAuthentication({ list, handlerCurrent }: PropsType) {
  const [inputValues, setInputValues] = useState<string[]>(Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | undefined)[]>(
    new Array(6).fill(null),
  );
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (inputRefs.current && inputRefs.current[0]) {
      inputRefs.current[0]?.focus();
    }
  }, []);

  const handleChange = (index: number, value: string) => {
    setInputValues(prevValues => {
      const newInputValues = [...prevValues];
      newInputValues[index] = value;
      return newInputValues;
    });

    if (value.length === 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const checkNumber = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = e.target;
    const onlyNumber = value.replace(/[^0-9]/g, "");
    handleChange(index, onlyNumber);
  };

  const checkInput = () => {
    if (!inputValues.every(i => i != "")) {
      setError("인증번호를 입력해주세요.");
    } else {
      handlerCurrent();
    }
  };

  return (
    <>
      <div className="flex w-full flex-col gap-12">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-3">
            <div className="flex justify-center items-center gap-2">
              {inputValues.map((i, j) => (
                <div
                  key={j}
                  className=" focus-within:border-lime-400 focus-within: rounded-lg w-[58px] h-[58px] flex justify-center items-center border border-gray-200 bg-gray-100"
                >
                  <input
                    ref={(ref: HTMLInputElement | any) =>
                      (inputRefs.current[j] = ref)
                    }
                    maxLength={1}
                    value={inputValues[j]}
                    onChange={e => checkNumber(j, e)}
                    className={`text-2xl font-semibold flex w-full text-center`}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between w-full">
              <div className="flex font-medium text-sm text-red-500">
                {error}
              </div>
              <div className="cursor-pointer flex px-3 py-1.5 bg-lime-500 hover:bg-lime-600 text-sm font-medium text-white rounded-md">
                재전송
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center items-center gap-2">
          {list.map((_, j) => (
            <div
              key={j}
              className={`${1 == j ? "w-4 bg-lime-400" : "w-2 bg-gray-300"} h-2 w-2 rounded-full`}
            />
          ))}
        </div>
      </div>
      <Button title="인증번호 전송" onClick={checkInput} />
    </>
  );
}

export default EmailAuthentication;
