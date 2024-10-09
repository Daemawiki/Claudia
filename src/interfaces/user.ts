export interface SignupFormValues {
  name: string;
  email: string;
  password: string;
  passwordCheck: string;
  userInfo: { generation: string; major: string };
  classInfos: string[];
}
