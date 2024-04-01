import Footer from "@/components/footer";
import Header from "@/components/header/header";
import Preview from "@/components/reserch/preview";
import SideBar from "@/components/sideBar/sideBar";
import Title from "@/components/title/title";
import Standard from "@/components/reserch/standard";
import { recentlyItem } from "@/constant/recently";

export default function Recent() {
  const renderPreview = () => {
    const items = recentlyItem;
    return items.map(item => {
      return (
        <Preview
          title={item.title}
          editor={item.editor.user}
          editTime={item.createdDateTime}
        />
      );
    });
  };
  return (
    <>
      <Header />
      <main className="flex min-h-screen justify-center flex-wrap gap-5">
        <div className="flex w-[1000px] bg-white min-h-screen flex-col gap-[60px] px-[100px] py-[60px]">
          <Title title="최근 변경된 페이지" />
          <div className="flex flex-col gap-[10px]">
            <div className="flex gap-[10px]">
              <Standard width={"grow"} title="항목" />
              <Standard width={300} title="변경자" />
              <Standard width={150} title="변경 시간" />
            </div>
            {renderPreview()}
          </div>
          <Footer />
        </div>
        <SideBar />
      </main>
    </>
  );
}
