import { Title } from "../document/[id]/Title";
import Card from "./Card";

export default function Division() {
  return (
    <div className="w-full flex justify-center pb-12">
      <div className="flex w-full max-w-screen-xl flex-col gap-14 px-6 pt-16 sm:px-4 lg:px-12">
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
