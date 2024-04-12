"use client";
import AccountModal from "../login/AccountModal";
import React, { useState } from "react";
import EnterEmail from "./EnterEmail";
import EmailAuthentication from "./EmailAuthentication";
import SetPassword from "./SetPassword";
import SetName from "./SetName";

const email = "hamster@dsm.hs.kr";
const list = [1, 2, 3, 4];

export default function Signup() {
  interface PropsType {
    component?: JSX.Element;
    subtitle?: string;
    email?: string;
    buttontitle?: string;
  }

  let [current, setCurrent] = useState<number>(0);

  const handlerCurrent = () => {
    if (current < 3) {
      setCurrent(current + 1);
    }
  };

  const modal: PropsType[] = [
    {
      component: <EnterEmail list={list} handlerCurrent={handlerCurrent} />,
      subtitle: "이메일 인증을 위해 DSM 이메일을 입력해주세요",
      email: "",
    },
    {
      component: (
        <EmailAuthentication list={list} handlerCurrent={handlerCurrent} />
      ),
      subtitle: "로 인증번호를 전송했습니다.",
      email: email,
    },
    {
      component: <SetPassword list={list} handlerCurrent={handlerCurrent} />,
      subtitle: "비밀번호를 설정해주세요.",
      email: "",
    },
    {
      component: <SetName list={list} handlerCurrent={handlerCurrent} />,
      subtitle: "정보를 입력해주세요.",
      email: "",
    },
  ];

  return (
    <div className="z-[100] flex absolute top-0 left-0 h-[100vh] w-full px-5 pt-[80px] bg-black bg-opacity-20 justify-center">
      {modal.map((i, j) => (
        <div>
          {current == j && (
            <AccountModal
              title="회원가입"
              subTitle={`${i.subtitle}`}
              email={`${i.email}`}
            >
              <div className="flex flex-col w-full gap-6">{i.component}</div>
            </AccountModal>
          )}
        </div>
      ))}
    </div>
  );
}
