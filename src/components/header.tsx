import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-myHeaderColor w-full flex justify-center gap-10 items-center text-white">
      <h1 className="text-4xl font-extrabold text-[#EC7E4F]">대마위키</h1>
      <div className="flex justify-start gap-[10px]">
        <div className="flex gap-[10px] items-center p-[10px]">
          <Image
            src="/images/recently.svg"
            alt="recently"
            width={36}
            height={36}
          />
          <span className="font-bold text-2xl">최근 변경</span>
        </div>
        <div className="flex gap-[10px] items-center p-[10px]">
          <Image
            src="/images/category.svg"
            alt="category"
            width={36}
            height={36}
          />
          <span className="font-bold text-2xl">분류</span>
        </div>
        <div className="flex gap-[10px] items-center p-[10px]">
          <Image
            src="/images/popular.svg"
            alt="popular"
            width={36}
            height={36}
          />
          <span className="font-bold text-2xl">인기</span>
        </div>
      </div>
      <div className="w-[700px] rounded-[30px] flex bg-[#C7E1BA] items-center px-4 gap-[10px]">
        <div>
          <Image
            src="/images/random.svg"
            alt="shuffle"
            width={48}
            height={48}
          />
        </div>
        <input
          placeholder="검색어를 입력하세요"
          className="h-16 focus:outline-none grow bg-transparent text-xl placeholder-white placeholder:text-base"
        />
        <div>
          <Image
            src="/images/search.svg"
            alt="titleSearch"
            width={48}
            height={48}
          />
        </div>
        <div>
          <Image
            src="/images/document-search.svg"
            alt="documentSearch"
            width={48}
            height={48}
          />
        </div>
      </div>
      <div className="flex items-center gap-[10px]">
        <button className="text-xl font-bold px-[10px] py-[8px]">로그인</button>
        <button className="text-xl font-bold bg-white bg-opacity-20 rounded-2xl px-[10px] py-[8px]">
          회원가입
        </button>
      </div>
    </div>
  );
};

export default Header;
