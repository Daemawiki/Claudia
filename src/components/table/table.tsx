"use client";
import Image from "next/image";
import TableItem from "./item";
import { useModal } from "@/hooks/useModal";
import { useEffect, useState } from "react";
import TableModal from "./modal";
import EditItem from "./editItem";
import Buttons from "./Buttons";
import { Info } from "@/constant/documentType";

interface TableProps {
  info: Array<Info>;
  isEdit?: boolean;
}

const Table = ({ info, isEdit }: TableProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { state, close, setState } = useModal<string>();
  const [infoData, setInfoData] = useState(info);
  const [newInfo, setNewInfo] = useState<Array<Info>>();

  useEffect(() => {
    switch (state) {
      case "add":
        setNewInfo([]);
        break;
      case "edit":
        setNewInfo(infoData);
        break;
    }
  }, [state]);

  const renderContent = () => {
    const renderItem = infoData.map((item, index) => {
      if (state === "edit") {
        return (
          <EditItem
            title={item.title}
            defaultValue={item.content}
            setValue={setNewInfo}
            index={index}
            key={index}
          />
        );
      }
      return <TableItem name={item.title} value={item.content} key={index} />;
    });
    if (state === "add") {
      if (renderItem)
        renderItem.push(
          <EditItem
            title=""
            defaultValue=""
            key={renderItem.length}
            setValue={setNewInfo}
          />,
        );
      else {
        return (
          <EditItem title="" defaultValue="" key={0} setValue={setNewInfo} />
        );
      }
    }
    return renderItem;
  };
  const HandleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-[600px] flex px-[50px] py-[70px] gap-[50px] border border-[#CECECE] rounded-[32px] items-center relative">
      <div className="flex flex-col py-[24px] justify-between items-center h-full">
        <Image
          src={"/images/logo.svg"}
          alt=""
          width={0}
          height={0}
          style={{ width: "300px", height: "300px" }}
        />
        <div className="flex flex-col gap-[10px] items-center ">
          <span className="font-medium text-xl text-[#93DF3F] whitespace-nowrap">
            대덕소프트웨어마이스터고등학교의 위키
          </span>
          <span className="font-bold text-4xl">대마위키</span>
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center relative">
        {renderContent()}
      </div>
      {isEdit && (
        <div className="flex flex-col absolute top-9 right-10 items-end gap-1">
          <Image
            src={"/images/more.svg"}
            alt=""
            width={24}
            height={24}
            onClick={HandleClick}
          />
          {isOpen && (
            <TableModal state={state} setState={setState} close={HandleClick} />
          )}
        </div>
      )}
      {state !== "" && (
        <Buttons
          state={state}
          setState={setState}
          setInfo={setInfoData}
          newInfo={newInfo}
        />
      )}
    </div>
  );
};

export default Table;
