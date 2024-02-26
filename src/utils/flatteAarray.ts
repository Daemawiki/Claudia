import { IndexItem } from "@/constant/indexItem";

export const flattenArray = (items: IndexItem[]): IndexItem[] => {
  return items.reduce<IndexItem[]>((acc, item) => {
    acc.push(item);
    if (item.children) {
      acc.push(...flattenArray(item.children));
    }
    return acc;
  }, []);
};
