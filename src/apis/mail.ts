import { instance } from "./axios";

interface ApiErrorLike {
  response?: {
    data?: {
      message?: string;
    };
  };
}

const getApiErrorMessage = (error: unknown): string | undefined => {
  if (typeof error !== "object" || error === null) {
    return undefined;
  }

  const apiError = error as ApiErrorLike;
  return apiError.response?.data?.message;
};

export const mailSend = async (email: string) => {
  try {
    const response = await instance.post(
      `api/mail/send?target=${email}&type=REGISTER`,
    );
    return response.data;
  } catch {
    return undefined;
  }
};

export const mailVerify = async (email: string, code: string) => {
  try {
    const response = await instance.post(
      `api/mail/verify?target=${email}&code=${code}`,
    );
    return response.data;
  } catch (error) {
    throw new Error(getApiErrorMessage(error) || "인증 실패");
  }
};
