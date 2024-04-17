import { Info } from "@/constant/documentType";

const duplicationCheck = (infoArr: Array<Info>) => {
  let isEmpty = false;
  infoArr.map(item => {
    if (item.title === "") isEmpty = true;
  });
  const arr: string[] = [];
  infoArr.map(item => {
    arr.push(item.title);
  });
  const setArr = new Set(arr);
  if (arr.length !== setArr.size) return true;
  return isEmpty;
};

export default duplicationCheck;
