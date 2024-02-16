const Footer = () => {
  return (
    <div className="pt-[45px] flex flex-col gap-[10px] items-end">
      <hr className="w-full bg-[#E7E7E7] h-[1px] border-none" />
      <span className="text-right text-[#707070]">
        대마위키는 백과사전이 아니며 검증되지 않았거나, 편향적이거나, 잘못된
        서술이 있을 수 있습니다.
        <br />
        대마위키는 여러분이 직접 수정할 수 있으며
        <br />
        문서 내부에 작성된 내용에 대한 저작권 및 모든 책임은 작성자에게
        있습니다.
        <br />
        문서 내용에 대한 오해 및 오류 혹은 갈등에 대하여 개발자는 일체 책임을
        지지 않습니다.
        <br />
        2024-01-25
      </span>
    </div>
  );
};

export default Footer;
