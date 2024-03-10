import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Index from "@/components/index";
import SideBar from "@/components/sideBar/sideBar";
import Table from "@/components/table/table";
import Title from "@/components/title/title";
import Lesson from "@/components/lesson/lesson";
import { mainPageIndex } from "@/constant/indexItem";
import { mainTableItem } from "@/constant/tableItem";
import "react-quill/dist/quill.snow.css";

export default function Main() {
  const index = mainPageIndex;
  const renderContent = () => {
    return index.map(item => {
      return (
        <Lesson title={item.title} index={item.index} content={item.content} />
      );
    });
  };
  return (
    <>
      <Header />
      <main className="flex min-h-screen justify-center flex-wrap gap-5">
        <div className="flex w-[1000px] bg-white min-h-screen flex-col gap-[60px] px-[100px] py-[60px]">
          <Title title="대마위키" lastModifiedTime={20240217} />
          <Table info={mainTableItem} />
          <div className="flex flex-col gap-[10px]">
            <Index index={index} />
            {renderContent()}
          </div>
          <Footer />
        </div>
        <SideBar />
      </main>
    </>
  );
}
