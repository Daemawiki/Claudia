import Image from "next/image";

interface NavProps {
  text: string;
  src: string;
}

const NavContainer = ({ text, src }: NavProps) => {
  return (
    <div className="flex gap-[10px] items-center p-[10px]">
      <Image src={src} alt="recently" width={36} height={36} />
      <span className="font-bold text-2xl">{text}</span>
    </div>
  );
};

export default NavContainer;
