import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Index from "@/components/index";

import Table from "@/components/table/table";
import Title from "@/components/title/title";
import Lesson from "@/components/lesson/lesson";
import { mainPageIndex } from "@/constant/indexItem";
// import { mainTableItem } from "@/constant/tableItem";

import "react-quill/dist/quill.snow.css";
import Landing from "./landing/page";

// import Header2 from "@/components/header/Header2";

// import SideBar2 from "@/components/docsPage/SideBar";
// import Page from "@/components/docsPage/Page";

export default function Main() {
  // const index = mainPageIndex;
  // const renderContent = () => {
  //   return index.map(item => {
  //     return (
  //       <Lesson title={item.title} index={item.index} content={item.content} />
  //     );
  //   });
  // };
  return (
    <div className="w-full px-0 bg-white flex justify-center pt-16">
      {/* <SideBar2 />
      <Page /> */}
      <Landing />
    </div>
  );
}
