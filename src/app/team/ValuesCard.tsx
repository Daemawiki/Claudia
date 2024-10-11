interface PropsType {
  index: number;
  title: string;
  details: string;
}

export const ValuesCard = ({ index, title, details }: PropsType) => {
  return (
    <div className="border-gray200 w-full border rounded-2xl flex flex-col gap-4 p-6">
      <div className="flex w-11 h-11 justify-center items-center rounded-md bg-lime50">
        <p className="text-lime500 text-semibold20">{index}</p>
      </div>
      <p className="text-semibold24">{title}</p>
      <p className="text-medium16 text-gray500">{details}</p>
    </div>
  );
};
