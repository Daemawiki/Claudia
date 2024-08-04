import Header from "@/components/Header";
import Title from "@/components/title/title";
// import Footer from "@/components/Footer";
import SideBar from "@/components/sideBar/sideBar";
import Preview from "@/components/reserch/preview";
import Form from "@/components/division/form";

export default function Division() {
  return (
    <>
      <main className="flex min-h-screen justify-center flex-wrap gap-5">
        <div className="flex w-[1000px] bg-white min-h-screen flex-col gap-[60px] px-[100px] py-[60px]">
          <Title title="분류" />
          <Form />
          {/* <Footer /> */}
        </div>
        <SideBar />
      </main>
    </>
  );
}
