import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import SideBar from "@/components/sideBar/sideBar";
import Title from "@/components/title/title";

export default function Recent() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen justify-center flex-wrap gap-5">
        <div className="flex w-[1000px] bg-white min-h-screen flex-col gap-[20px] px-[100px] py-[60px]">
          <Title title="최근 변경" />
          <Footer />
        </div>
        <SideBar />
      </main>
    </>
  );
}
