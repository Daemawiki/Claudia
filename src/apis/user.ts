import { LoginValues, SignupFormValues } from "@/interfaces/user";
import { instance } from "./axios";
import { setCookie } from "./cookies";

// 로그인
export const loginHandler = async (data: LoginValues) => {
  return instance
    .post("/api/auth/login", {
      email: data.email,
      password: data.password,
    })
    .then(res => {
      setCookie("access_token", res.data.access_token);
      return res.status;
    })
    .catch(() => undefined);
};

// 회원가입
export const registerHandler = async (data: SignupFormValues) => {
  return instance
    .post(`/api/auth/register`, {
      name: data.name,
      email: data.email,
      password: data.password,
      userInfo: data.userInfo,
      classInfos: data.classInfos,
    })
    .then(res => res.status)
    .catch(() => undefined);
};

// 토큰 재발급
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const tokenReissue = async (data: string) => {
  return instance.put(`/api/auth/reissue`, {}, {});
};
