import { Title } from "../document/[id]/Title";
import { Card } from "./Card";
import StudentPage from "./student/page";

export default function Division() {
  return (
    <div className="w-full flex justify-center pb-12">
      <div className="w-full pt-16 px-12 max-w-[1200px] flex flex-col gap-14">
        <Title
          noPadding
          noShow
          title="분류"
          group="대마위키"
          details="카테고리"
        />
        <div className="w-full flex-wrap gap-6 py-12 flex">
          <Card longWidth type="student" />
          <Card type="teacher" />
          <Card type="accident" />
          <Card type="club" />
        </div>
      </div>
    </div>
  );
}
