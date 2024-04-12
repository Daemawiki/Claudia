import React from "react";
import { Arrow_Left, Arrow_Long_Right, Document } from "../assets";
import PapularDocs from "./PapularDocs";

const list = [
  {
    title: "새벽에 기숙사 탈출",
    details:
      "어두운 새벽, 조용한 기숙사에서 벗어나는 그 순간의 긴장감은 이 마치 모험의 시작과 같습니다. 조심스럽게 발걸음을 내디뎌서, 침묵을 깨지 않으려 노력합니다. 길을 비추는 달빛 아래로 몰래 빠져나오는 기쁨은 마치 금지된 과일을 맛보는 듯한 설렘이 업습니다.",
    type: ["사건/사고", "이나경"],
    views: 210,
  },
  {
    title: "칼부림 미수 사건",
    details:
      "칼부림 미수 사건은 사회에 큰 충격을 주는 범죄 사건 중 하나입니다. 범인은 피해자에게 칼을 휘두르려 했지만, 운 좋게도 피해자는 사망하지 않았습니다. 이 사건으로 인해 사회는 범죄 예방에 대한 논의를 촉발하고, 보다 강력한 법 집행과 사회 안전을 강화하는 노력이 필요하다는 인식이 높아졌습니다.",
    type: ["사건/사고", "유지우"],
    views: 98,
  },
  {
    title: "웹프 시간에 잔 사람",
    details:
      "웹프로그래밍 시간에 자는 행동은 학습 환경과 동료들에게 불쾌함을 주는 일입니다. 이는 적극적인 학습 태도를 보이지 않는 것으로 인식될 수 있으며, 그룹 프로젝트나 토론 시간에 협력을 저해할 수 있습니다.",
    type: ["사건/사고", "이태영"],
    views: 146,
  },
];

function Main() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col w-full max-w-[1200px]">
        <div className="flex flex-col w-full gap-[100px] px-12 pt-[160px] pb-24">
          <div className="flex flex-col gap-[68px] items-center">
            <div className="flex group cursor-pointer rounded-full items-center px-6 py-1.5 gap-3 bg-gray-100">
              <p className="font-semibold text-[16px] text-gray-500">
                내 문서 만들기
              </p>
              <Arrow_Long_Right
                size={18}
                className="text-gray-500 group-hover:translate-x-2 transition-all duration-300"
              />
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center">
                <p className="text-gray-800 font-bold text-[68px] leading-tight">
                  우리의 학교생활 이야기
                </p>
                <p className="text-lime-500 font-bold text-[68px] leading-tight">
                  대마위키에서
                </p>
              </div>

              <p className="font-medium text-[20px] text-gray-500 text-center leading-snug">
                학생들의 정보와 학교에서 일어난 사건을 기록하는 곳,
                <br />
                대마위키에서 함께 정보를 공유하고 학교 생활을 기록해보세요.
                <br />
                나만 몰랐던 우리 학교 이야기.
              </p>
            </div>
          </div>
          <div className="flex gap-4 justify-center">
            <div className="cursor-pointer flex rounded-lg px-5 py-2 border border-lime-500 bg-lime-400 hover:bg-lime-500">
              <p className="text-white font-bold text-[18px]">시작하기</p>
            </div>
            <div className="flex cursor-pointer gap-[6px] px-5 py-2 bg-gray-100 border border-gray-200 rounded-lg items-center hover:bg-gray-200">
              <Document size={20} className="text-gray-500" />
              <p className="font-semibold text-[18px] text-gray-600">
                랜덤 문서
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-12 py-24 gap-[60px] flex flex-col items-center">
          <div className="flex flex-col gap-6 items-center">
            <p className="font-bold text-[32px]">인기있는 문서들</p>
            <p className="font-medium text-xl text-gray-500">
              다양한 주제와 깊이 있는 정보로 학생들의 호기심을 자극하는 인기있는
              문서들이 모여있습니다.
            </p>
          </div>
          <div className="flex w-full gap-6">
            {list.map(i => (
              <PapularDocs
                title={i.title}
                details={i.details}
                type={i.type}
                views={i.views}
              />
            ))}
          </div>
          <div className="rounded-lg gap-3 bg-white border border-gray-200 px-4 py-2">
            <p className=""></p>
            <Arrow_Left />
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default Main;
