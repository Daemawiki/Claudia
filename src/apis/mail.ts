import { instance } from "./axios";

export const mailSend = async (email: string) => {
  return instance
    .post(`api/mail/send?target=${email}&type=REGISTER`)
    .then(res => res.data)
    .catch(err => {
      throw new Error(err.response?.data?.message || "인증 메일 전송 실패");
    });
};

export const mailVerify = async (email: string, code: string) => {
  return instance
    .post(`api/mail/verify?target=${email}&code=${code}`)
    .then(res => res.data)
    .catch(err => {
      throw new Error(err.response?.data?.message || "인증 실패");
    });
};
