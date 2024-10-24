import axios, { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { instance } from "./axios";
import { COOKIE_DOMAIN } from "./env";
import { LoginValues, SignupFormValues } from "@/interfaces/user";

const auth = "/api/auth";

export const postLogin = async (data: LoginValues) => {
  return await instance
    .post(
      `${auth}/login`,
      { email: data.email, password: data.password },
      {
        headers: { "Content-Type": "application/json" },
      },
    )
    .then()
    .catch(err => {
      console.error(err);
    });
};

export const postRegister = async (data: SignupFormValues) => {
  return await instance({
    method: "POST",
    url: `${auth}/register`,
    data: {
      name: data.name,
      email: data.email,
      password: data.password,
      userInfo: data.userInfo,
      classInfos: data.classInfos,
    },
    headers: { "Content-Type": "application/json" },

    // `${auth}/register`,

    // { headers: { "Content-Type": "application/json" } },
  });
  // .then()
  // .catch(err => {
  //   console.error(err);
  // });
};

export const tokenReissue = async (data: string) => {
  return await instance.put(`${auth}/reissue`, {}, {});
};
