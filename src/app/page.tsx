import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Index from "@/components/index";
import SideBar from "@/components/sideBar/sideBar";
import Title from "@/components/title/title";
import { mainPageIndex } from "@/constant/indexItem";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen justify-center flex-wrap gap-5">
        <div className="flex w-[1000px] bg-white min-h-screen flex-col gap-[60px] px-[100px] py-[60px]">
          <Title title="대마위키" lastModifiedTime={20240217} />
          <div>
            <Index index={mainPageIndex} />
          </div>
          <Footer />
        </div>
        <SideBar />
      </main>
    </>
  );
}
