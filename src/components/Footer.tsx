import { Discord, Github, Instagram, Logo } from "@/assets";

function Footer() {
  const links = [
    { key: "instagram", icon: <Instagram size={28} /> },
    { key: "discord", icon: <Discord size={28} /> },
    { key: "github", icon: <Github size={28} /> },
  ];

  const list = [
    { title: "개발자", text: ["김승윤", "김어진", "박지민", "이태영"] },
    { title: "기술 스택", text: ["Next.js", "Tailwind", "Recoil"] },
    { title: "팀 DM", text: ["팀소개", "벨로그"] },
    { title: "ABOUT", text: ["문의사항", "신고"] },
  ];
  const info = [
    { title: "연락처", details: "+82 010-1234-1234" },
    { title: "이메일", details: "hamster@dsm.hs.kr" },
    { title: "주소", details: "대덕소프트웨어마이스터고등학교" },
  ];
  return (
    <div className="w-full px-6 flex bg-gray100 justify-center">
      <div className="w-full max-w-[1200px] flex flex-col gap-40 py-9 border-t border-gray200">
        <div className="w-full justify-between flex md:flex-col sm:flex-col gap-20">
          <div className="flex flex-col gap-5">
            <div className="flex gap-3 items-center">
              <Logo size={44} className="text-lime500" />
              <p className="text-semibold24 text-black whitespace-nowrap">
                대마위키
              </p>
            </div>
            <div className="flex items-center gap-2 text-gray400">
              {links.map(({ icon, key }) => (
                <div key={key} className="flex p-1.5">
                  {icon}
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-full justify-end gap-6">
            {list.map(({ title, text }) => (
              <div
                key={title}
                className="flex lg:max-w-[200px] w-full flex-col gap-2"
              >
                <p className="text-semibold16 text-gray600 whitespace-nowrap">
                  {title}
                </p>
                {text.map(txt => (
                  <p
                    key={`${title}-${txt}`}
                    className="text-medium14 text-gray400 whitespace-nowrap"
                  >
                    {txt}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className="flex w-full items-end flex-wrap gap-6 py-4 border-b border-gray200">
            {info.map(({ title, details }) => (
              <div
                key={title}
                className="flex w-full max-w-[200px] flex-col gap-2"
              >
                <p className="text-medium12 text-gray400">{title}</p>
                <p className="text-medium14 text-gray600 whitespace-nowrap">
                  {details}
                </p>
              </div>
            ))}
          </div>
          <div className="w-full justify-between flex">
            <p className="text-medium12 text-gray400">© 2024 - 대마위키</p>
            <p className="text-medium12 text-gray400">
              문서 내부에 작성된 내용에 대한 저작권 및 모든 책임은 작성자에게
              있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Footer };
export default Footer;
