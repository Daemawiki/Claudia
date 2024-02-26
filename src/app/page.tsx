import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import SideBar from "@/components/sideBar/sideBar";
import Table from "@/components/table/table";
import Title from "@/components/title/title";

export default function Main() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen justify-center flex-wrap gap-5">
        <div className="flex w-[1000px] bg-white min-h-screen flex-col gap-[60px] px-[100px] py-[60px]">
          <Title title="대마위키" lastModifiedTime={20240217} />
          <Table />
          <Footer />
        </div>
        <SideBar />
      </main>
    </>
  );
}
