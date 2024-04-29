import Header from "@/components/header/header";
import Title from "@/components/title/title";
import Footer from "@/components/footer";
import SideBar from "@/components/sideBar/sideBar";
import Standard from "@/components/reserch/standard";
import Preview from "@/components/reserch/preview";
import popularItem from "@/constant/popular";
import findById from "@/utils/function/documentById";

export default function Popular() {
  const renderPreview = () => {
    const items = popularItem;
    return items.map(item => {
      const { editor } = findById(item.id);
      return (
        <Preview
          title={item.title}
          editor={editor.updatedUser.name}
          editTime={item.updatedDate}
          review={item.view}
        />
      );
    });
  };
  return (
    <>
      <main className="flex min-h-screen justify-center flex-wrap gap-5">
        <div className="flex w-[1000px] bg-white min-h-screen flex-col gap-[20px] px-[100px] py-[60px]">
          <Title title="인기" />
          <div className="flex flex-col gap-[10px]">
            <div className="flex gap-[10px]">
              <Standard title="항목" width={"grow"} />
              <Standard title="조회수" width={150} />
              <Standard title="변경자" width={220} />
              <Standard title="변경 시간" width={150} />
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
