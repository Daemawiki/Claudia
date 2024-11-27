import { instance } from "./axios";

export const mailSend = async (email: string) => {
  return await instance
    .post(`api/mail/send?target=${email}&type=REGISTER`)
    .then(res => {
      console.log(email);
      return res.data;
    })
    .catch(err => {
      console.error(err.response?.data?.message);
    });
};

export const mailVerify = async (email: string, code: string) => {
  return await instance
    .post(`api/mail/verify?target=${email}&code=${code}`)
    .then(res => res.data)
    .catch(err => {
      throw new Error(err.response?.data?.message || "인증 실패");
    });
};
