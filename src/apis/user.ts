import { LoginValues, SignupFormValues } from "@/interfaces/user";
import { instance } from "./axios";
import { setCookie } from "./cookies";

// 로그인
export const loginHandler = async (data: LoginValues) => {
  try {
    const response = await instance.post("/api/auth/login", {
      email: data.email,
      password: data.password,
    });

    setCookie("access_token", response.data.access_token);
    return response.status;
  } catch {
    return undefined;
  }
};

// 회원가입
export const registerHandler = async (data: SignupFormValues) => {
  try {
    const response = await instance.post(`/api/auth/register`, {
      name: data.name,
      email: data.email,
      password: data.password,
      userInfo: data.userInfo,
      classInfos: data.classInfos,
    });

    return response.status;
  } catch {
    return undefined;
  }
};

// 토큰 재발급
export const tokenReissue = async () => {
  return instance.put(`/api/auth/reissue`, {}, {});
};
