import { wikiCategoryLabel } from "@/apis/wiki";
import { WikiCategory } from "@/interfaces/wiki";

interface CategoryBadgeProps {
  category: WikiCategory;
}

function CategoryBadge({ category }: CategoryBadgeProps) {
  return (
    <span className="rounded-full bg-lime50 px-3 py-1 text-semibold14 text-lime500">
      {wikiCategoryLabel(category)}
    </span>
  );
}

export default CategoryBadge;
