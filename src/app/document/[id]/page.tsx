import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Index from "@/components/index";
import Lesson from "@/components/lesson/lesson";
import SideBar from "@/components/sideBar/sideBar";
import Table from "@/components/table/table";
import Title from "@/components/title/title";
import { document } from "@/constant/document";

export default function Document() {
  const data = document;
  const title = data.title;
  const editTime = data.dateTime.updated;
  const index = data.contents;
  const renderContent = () => {
    return index.map(item => {
      return (
        <Lesson title={item.title} index={item.index} content={item.detail} />
      );
    });
  };
  return (
    <>
      <main className="flex min-h-screen justify-center flex-wrap gap-5">
        <div className="flex w-[1000px] bg-white min-h-screen flex-col gap-[60px] px-[100px] py-[60px]">
          <Title title={title} lastModifiedTime={editTime} />
          <Table
            info={data.info}
            isEdit
            name={data.editor.createdUser.name}
            subName="이 시대에 존재해서는 안되는 악"
          />
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
