import { useMutation, useQuery } from "@tanstack/react-query";
import { instance } from "./axios";
import { LoginValues, SignupFormValues } from "@/interfaces/user";

// 로그인
export const loginHandler = async (data: LoginValues) => {
  return await instance
    .post("/api/auth/login", {
      email: data.email,
      password: data.password,
    })
    .then(res => res.data)
    .catch(err => {});
};

// 회원가입
export const registerHandler = async (data: SignupFormValues) => {
  return await instance({
    method: "POST",
    url: `/api/auth/register`,
    data: {
      name: data.name,
      email: data.email,
      password: data.password,
      userInfo: data.userInfo,
      classInfos: data.classInfos,
    },
    headers: { "Content-Type": "application/json" },
  })
    .then(res => res.data)
    .catch(err => {
      console.error(err);
    });
};

export const tokenReissue = async (data: string) => {
  return await instance.put(`/api/auth/reissue`, {}, {});
};
