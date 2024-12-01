import { useMutation, useQuery } from "@tanstack/react-query";
import { instance } from "./axios";
import { LoginValues, SignupFormValues } from "@/interfaces/user";
import { setCookie } from "./cookies";

// 로그인
export const loginHandler = async (data: LoginValues) => {
  return await instance
    .post("/api/auth/login", {
      email: data.email,
      password: data.password,
    })
    .then(res => {
      setCookie("accessToken", res.data.accessToken);
      return res.status;
    })
    .catch(err => {
      console.error(err);
    });
};

// 회원가입
export const registerHandler = async (data: SignupFormValues) => {
  return await instance
    .post(`/api/auth/register`, {
      name: data.name,
      email: data.email,
      password: data.password,
      userInfo: data.userInfo,
      classInfos: data.classInfos,
    })
    .then(res => res.data)
    .catch(err => {
      console.error(err);
    });
};

// 토큰 재발급
export const tokenReissue = async (data: string) => {
  return await instance.put(`/api/auth/reissue`, {}, {});
};
