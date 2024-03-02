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
  type?: "gen" | "major" | "club";
  search?: string;
}

const Form = () => {
  const [gen, setGen] = useState<string>("");
  const [major, setMajor] = useState<string>("");
  const [club, setClub] = useState<string>("");
  const [search, setSearch] = useState<SearchType>({});
  const [items, setItems] = useState<Array<User> | undefined>();
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    setSearch({ type: "gen", search: gen });
    setIsUpdate(true);
  }, [gen]);

  useEffect(() => {
    setSearch({ type: "major", search: major });
    setIsUpdate(true);
  }, [major]);

  useEffect(() => {
    setSearch({ type: "club", search: club });
    setIsUpdate(true);
  }, [club]);

  useEffect(() => {
    if (isUpdate) {
      renderPreview();
    }
  }, [isUpdate]);

  const renderPreview = () => {
    setIsUpdate(false);
    if (search.search) {
      switch (search.type) {
        case "club":
          setItems(clubDivision);
          break;
        case "gen":
          setItems(genDivision);
          break;
        case "major":
          setItems(majorDivision);
          break;
      }
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <Category
          groups={
            search.search !== ""
              ? search.type === "club"
                ? [["동아리", club]]
                : search.type === "gen"
                  ? [["기수", gen]]
                  : search.type === "major"
                    ? [["전공", major]]
                    : [[]]
              : [[]]
          }
        />
        <div className="flex w-full justify-center gap-[10px] items-start p-[10px]">
          <Dropdown
            title="기수"
            content={periodMenu}
            width={180}
            titlePosition="row"
            setForm={setGen}
          />
          <Dropdown
            title="전공"
            content={majorMenu}
            width={180}
            titlePosition="row"
            setForm={setMajor}
          />
          <Dropdown
            title="동아리"
            content={clubMenu}
            width={180}
            titlePosition="row"
            setForm={setClub}
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
