import Header from "@/components/header/header";
import Title from "@/components/title/title";
import SideBar from "@/components/sideBar/sideBar";
import Input from "@/components/input/input";
import Button from "@/components/button";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <main className="flex min-h-screen justify-center flex-wrap gap-5">
        <div className="flex w-[1000px] bg-white min-h-screen flex-col gap-[20px] px-[100px] py-[60px]">
          <Title title="로그인" />
          <div className="flex flex-col gap-[10px]">
            <Input title="DSM 이메일" width={"full"} />
            <Input title="비밀번호" width={"full"} isPassword={true} />
            <div className="flex justify-end items-end gap-[10px] pt-5">
              <Link href={"/signup"}>
                <Button
                  text="회원가입"
                  color="black"
                  width={139}
                  height={48}
                  fontSize={20}
                  rounded={16}
                />
              </Link>
              <Button text="로그인" width={139} height={48} rounded={16} />
            </div>
          </div>
        </div>
        <SideBar />
      </main>
    </>
  );
}
