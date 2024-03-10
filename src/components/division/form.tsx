"use client";

import { useEffect, useState } from "react";

import Category from "@/components/category";
import Dropdown from "@/components/input/dropdown";
import { clubMenu, majorMenu, periodMenu } from "@/constant/dropdownItem";
import Standard from "@/components/reserch/standard";
import Preview from "../reserch/preview";
import { User } from "@/constant/documentType";
import findById from "@/utils/function/documentById";
import { clubDivision, genDivision, majorDivision } from "@/constant/division";

interface SearchType {
  gen?: string;
  major?: string;
  club?: string;
}

const Form = () => {
  const [gen, setGen] = useState<string>("");
  const [major, setMajor] = useState<string>("");
  const [club, setClub] = useState<string>("");
  const [search, setSearch] = useState<SearchType>({});
  const [items, setItems] = useState<Array<User> | undefined>();
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    setSearch(prev => {
      prev.gen = gen;
      return prev;
    });
    setIsUpdate(true);
  }, [gen]);

  useEffect(() => {
    setSearch(prev => {
      prev.major = major;
      return prev;
    });
    setIsUpdate(true);
  }, [major]);

  useEffect(() => {
    setSearch(prev => {
      prev.club = club;
      return prev;
    });
    setIsUpdate(true);
  }, [club]);

  useEffect(() => {
    if (isUpdate) {
      renderPreview();
    }
  }, [isUpdate]);

  const renderPreview = () => {
    setIsUpdate(false);
    if (search.club)
      setItems(items ? [...items, ...clubDivision] : [...clubDivision]);
    if (search.gen)
      setItems(items ? [...items, ...genDivision] : [...genDivision]);
    if (search.major)
      setItems(items ? [...items, ...majorDivision] : [...majorDivision]);
  };

  return (
    <>
      <div className="flex flex-col">
        <Category
          groups={[
            ["동아리", club],
            ["전공", major],
            ["기수", gen],
          ]}
        />
        <div className="flex w-full justify-center gap-[10px] items-start p-[10px]">
          <Dropdown
            title="기수"
            content={periodMenu}
            width={180}
            titlePosition="row"
            setForm={setGen}
            zIndex={3}
          />
          <Dropdown
            title="전공"
            content={majorMenu}
            width={180}
            titlePosition="row"
            setForm={setMajor}
            zIndex={2}
          />
          <Dropdown
            title="동아리"
            content={clubMenu}
            width={180}
            titlePosition="row"
            setForm={setClub}
            zIndex={1}
          />
        </div>
      </div>
      <div className="flex flex-col gap-[10px]">
        <div className="flex gap-[10px]">
          <Standard width={"grow"} title="항목" />
          <Standard width={300} title="변경자" />
          <Standard width={150} title="변경 시간" />
        </div>
        {items &&
          items.map(item => {
            return (
              <Preview
                key={item.documentId}
                title={findById(item.documentId)?.title || ""}
                editor={
                  findById(item.documentId)?.editor.updatedUser.name || ""
                }
                editTime={findById(item.documentId)?.dateTime.updated || ""}
              />
            );
          })}
      </div>
    </>
  );
};

export default Form;
