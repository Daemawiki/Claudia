"use client";
import Image from "next/image";
import TableItem from "./item";
import { useModal } from "@/hooks/useModal";
import { useEffect, useState } from "react";
import TableModal from "./modal";
import EditItem from "./editItem";
import Buttons from "./Buttons";
import { Info } from "@/constant/documentType";
import { useInput } from "@/hooks/useInput";

interface TableProps {
  info: Array<Info>;
  isEdit?: boolean;
  name?: string;
  subName?: string;
}

const Table = ({ info, isEdit, name, subName: subNameData }: TableProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { state, close, setState } = useModal<string>();
  const [infoData, setInfoData] = useState(info);
  const [newInfo, setNewInfo] = useState<Array<Info>>();

  const {
    form: subName,
    onChange,
    setForm: setSubName,
  } = useInput<string>(subNameData || " ");
  const [isInput, setIsInput] = useState(false);

  useEffect(() => {
    switch (state) {
      case "add":
        setNewInfo([]);
        break;
      case "edit":
        setNewInfo([...infoData]);
        break;
      case "del":
        setNewInfo([...infoData]);
    }
  }, [state]);

  const renderContent = (infoData: Array<Info>) => {
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
      } else if (state === "del") {
        return (
          <TableItem
            name={item.title}
            value={item.content}
            key={item.title}
            del
            setValue={setNewInfo}
            index={index}
          />
        );
      }
      return (
        <TableItem
          name={item.title}
          value={item.content}
          key={item.title}
          index={index}
        />
      );
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
        <div className="flex flex-col gap-[10px] items-center">
          <span
            className="font-medium text-xl text-[#93DF3F] whitespace-nowrap border-[1px] min-w-[16px]"
            onDoubleClick={() => setIsInput(!isInput)}
          >
            {isEdit && isInput ? (
              <input
                defaultValue={subName}
                onChange={onChange}
                className="w-fit"
                maxLength={10}
              />
            ) : (
              subName
            )}
          </span>
          <span className="font-bold text-4xl">{name}</span>
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center relative max-w-[410px]">
        {renderContent(infoData)}
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
          info={infoData}
        />
      )}
    </div>
  );
};

export default Table;
