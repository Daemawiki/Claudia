import Image from "next/image";
import Link from "next/link";

interface NavProps {
  text: string;
  imgSrc: string;
  src: string;
}

const NavContainer = ({ text, imgSrc, src }: NavProps) => {
  return (
    <Link href={src}>
      <div className="flex gap-[10px] items-center p-[10px]">
        <Image src={imgSrc} alt="recently" width={36} height={36} />
        <span className="font-bold text-2xl">{text}</span>
      </div>
    </Link>
  );
};

export default NavContainer;
