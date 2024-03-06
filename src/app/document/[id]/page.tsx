import Header from "@/components/header/header";
import Index from "@/components/index";
import Lesson from "@/components/lesson/lesson";
import Table from "@/components/table/table";
import Title from "@/components/title/title";

export default function Document() {
  const index = [{ index: "1", title: "소개말", content: "ㅎㅇ" }];
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
          <Title title={"문서"} lastModifiedTime={20240306} />
          <Table info={[{ title: "안녕", content: "지민" }]} isEdit />
          <div className="flex flex-col gap-[10px]">
            <Index index={index} />
            {renderContent()}
          </div>
        </div>
      </main>
    </>
  );
}
