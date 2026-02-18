import { Info } from "@/constant/documentType";

const duplicationCheck = (infoArr: Array<Info>) => {
  const isEmpty = infoArr.some(item => item.title === "");
  const arr = infoArr.map(item => item.title);
  const setArr = new Set(arr);
  if (arr.length !== setArr.size) return true;
  return isEmpty;
};

export default duplicationCheck;
