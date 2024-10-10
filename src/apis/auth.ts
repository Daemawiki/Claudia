import axios, { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { instance } from "./axios";
import { COOKIE_DOMAIN } from "./env";
import { LoginValues, SignupFormValues } from "@/interfaces/user";

const auth = "/api/auth";

export const loginHandler = async (data: LoginValues) => {
  return await instance.post(
    `${auth}/login`,
    { email: data.email, password: data.password },
    {
      headers: { "Content-Type": "application/json" },
    },
  );
};

export const signupHandler = async (data: SignupFormValues) => {
  return await instance.post(
    `${auth}/register`,
    {
      name: data.name,
      email: data.email,
      password: data.password,
      userInfo: data.userInfo,
      classInfos: data.classInfos,
    },
    { headers: { "Content-Type": "application/json" } },
  );
};
