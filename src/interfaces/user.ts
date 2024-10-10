export interface SignupFormValues {
  name: string;
  email: string;
  password: string;
  passwordCheck: string;
  userInfo: { generation: number; major: string };
  classInfos: [
    { year: number; grade: number; classNumber: number; number: number },
  ];
}

export interface LoginValues {
  email: string;
  password: string;
}
