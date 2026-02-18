import { Close, Document } from "@/assets";
import { Button } from "@/components";

function Edit() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between">
        <Close className="text-gray600 w-6" />
        <Button text="저장">
          <Document />
        </Button>
      </div>
      <div className="flex">
        <div className="flex">사이드바</div>
        <textarea />
      </div>
    </div>
  );
}

export default Edit;
