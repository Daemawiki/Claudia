import Header from "@/components/header/header";
import Title from "@/components/title/title";
import Footer from "@/components/footer/footer";
import SideBar from "@/components/sideBar/sideBar";

export default function Popular() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen justify-center flex-wrap gap-5">
        <div className="flex w-[1000px] bg-white min-h-screen flex-col gap-[20px] px-[100px] py-[60px]">
          <Title title="인기" />
          <Footer />
        </div>
        <SideBar />
      </main>
    </>
  );
}
