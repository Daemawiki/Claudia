export interface SignupFormValues {
  name: string;
  email: string;
  verificationCode: string;
  password: string;
  passwordCheck: string;
  userInfo: { generation: string; major: string };
  classInfos: ISignupClassInfos[];
}

export interface ISignupClassInfos {
  year: number;
  grade: number;
  classNumber: number;
  number: number;
}

export interface LoginValues {
  email: string;
  password: string;
>>>>>>> Stashed changes
}
