"use client";

import { Arrow_Short as ArrowShort, Document, Quotes } from "@/assets";
import { useRouter } from "next/navigation";
import { useState } from "react";

const featuredDocs = [
  {
    id: "doc-1",
    title: "새벽에 기숙사 탈출",
    description:
      "어두운 새벽, 조용한 기숙사에서 벗어나는 그 순간의 긴장감은 이 미스터리 사건 같았습니다. 조심스럽게 발걸음을 내딛던 사람들의 흔적이 남아 있었더라고요.",
    category: "사건/사고",
    editor: "이서영",
    views: 210,
    hot: true,
  },
  {
    id: "doc-2",
    title: "합발림 미수 사건",
    description:
      "평범해 보이는 사건은 사회에 큰 충격을 주는 범죄 사건 중 하나입니다. 범인은 피해자에게 혐을 휘두르려 했지만, 운 좋게도 피해자는 사망하지 않았습니다. 이 사건으로 인해 사회는 범죄 예방에 대한 논의를 촉발하고, 보다 강력한 법 집행과 사회 안전을 강화하는 노력이 필요하다는 인식이 높아졌습니다.",
    category: "사건/사고",
    editor: "유지우",
    views: 198,
  },
  {
    id: "doc-3",
    title: "김승원 공략법 v0.3",
    description:
      "김승원을 본인이 말하길 자신을 수도권이라고 하지만, 사실상 브라만 급으로 높은 완성도의 얼굴을 가지고 있다. 그렇기에 김승원은 필연적으로 인기가 많을 수밖에 없고, 이 글에서는 그 김승원을 공략하기 위한 방안을 모색해보고자 한다. 1. 가장 확실한 방법은, 일본과 관련된 문화를 핑계로 접근하는 것이다.",
    category: "정보/유용한 정보/인물",
    editor: "이태영",
    views: 173,
  },
];

const people = [
  {
    name: "이태영",
    description:
      "저는 프로그래밍된 세계에서 벗어난 사람을 담당하는 작은 햄스터입니다. 디테일하면서도 느긋한 편입니다.",
    highlight: false,
  },
  {
    name: "고은총",
    description: "2학년 3반의 보안쟁이.",
    highlight: false,
  },
  {
    name: "김대운",
    description: "아이아이를 하고 있고 뭔가 이상한 이미지시고미가 이동돈 돈왕",
    highlight: false,
  },
  {
    name: "장지성",
    description: "재밌는 공학부!",
    highlight: false,
  },
  {
    name: "은비차",
    description:
      "간격감이 신선하고 있는 보안쟁이. 경력으로도 입이맛깔잡이입니다.",
    highlight: false,
  },
  {
    name: "조승우",
    description: "포토 그래퍼",
    highlight: true,
  },
  {
    name: "조태근",
    description:
      "한기코딩과 프론트엔드 쪽의 인재. 긴자치이지만 자부 이상한 데를 지원하시는",
    highlight: false,
  },
  {
    name: "유지우",
    description: "찐트 롤테이터",
    highlight: false,
  },
  {
    name: "이지호",
    description:
      "비트코인 디자이너 이재혁입니다. 베트발 및 체리링기롤 연구하고 있습니다.",
    highlight: false,
  },
  {
    name: "이재영",
    description: "080808080808080808",
    highlight: false,
  },
];

const guides = [
  {
    title: "문서를 생성하세요.",
    description:
      "분류에 들어가 문서 추가 버튼을 눌러 문서를 생성하세요. 워드프로세서를 통해 문서를 작성하고 서식을 적용해 코드 또는 마크다운 형식으로 문서를 작성할 수 있습니다.",
  },
  {
    title: "문서를 수정하세요.",
    description:
      "기존 문서에서 수정 버튼을 눌러 내용을 편집할 수 있습니다. 변경 내역은 문서 기록에 자동으로 남습니다.",
  },
  {
    title: "에피고를 활용하세요.",
    description:
      "자주 쓰는 템플릿과 링크를 저장해 빠르게 문서를 작성하세요. 팀 내 문서 품질을 일정하게 유지할 수 있습니다.",
  },
];

const guideTabLabels = ["문서 생성", "문서 수정", "어쩌고"];

function Main() {
  const router = useRouter();
  const [guideIndex, setGuideIndex] = useState(0);

  return (
    <div className="flex w-full justify-center bg-gray100 pb-28">
      <div className="flex w-full max-w-6xl flex-col items-center px-4 md:px-4 sm:px-4">
        <section className="flex w-full flex-col items-center gap-8 pb-28 pt-20 text-center">
          <button
            type="button"
            onClick={() => router.push("/document/new")}
            className="flex items-center gap-1 rounded-full bg-gray100 px-4 py-2 text-semibold14 text-gray600 transition-all hover:bg-gray200"
          >
            내 문서 만들기
            <ArrowShort size={16} className="text-gray500" direction="right" />
          </button>

          <div className="flex flex-col items-center gap-5">
            <h1 className="text-bold48 text-gray900 sm:text-bold36">
              우리의 학교생활 이야기
              <br />
              <span className="text-lime500">대마위키에서</span>
            </h1>
            <p className="text-medium16 text-gray500">
              학생들의 정보와 학교에서 일어난 사건을 기록하는 곳.
              <br />
              대마위키에서 함께 정보를 공유하고 학교 생활을 기록해보세요.
              <br />
              나만 몰랐던 우리 학교 이야기.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => router.push("/division")}
              className="rounded-md bg-lime500 px-4 py-2 text-semibold16 text-white transition-all hover:bg-lime600"
            >
              시작하기
            </button>
            <button
              type="button"
              onClick={() => router.push("/popular")}
              className="flex items-center gap-1 rounded-md border border-gray200 bg-white px-4 py-2 text-semibold16 text-gray600 transition-all hover:bg-gray50"
            >
              <Document size={15} className="text-gray500" />
              랜덤 문서
            </button>
          </div>
        </section>

        <section className="flex w-full flex-col items-center gap-8 py-24">
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="text-bold48 text-gray900 sm:text-bold36">
              인기있는 문서들
            </h2>
            <p className="text-medium16 text-gray500">
              다양한 주제와 깊이 있는 정보로 학생들의 호기심을 자극하는 인기있는
              문서들이 모여있습니다.
            </p>
          </div>

          <div className="flex w-full justify-center gap-4 md:flex-col md:items-center sm:flex-col sm:items-center">
            {featuredDocs.map((doc, index) => (
              <article
                key={doc.id}
                className="flex min-h-96 w-96 flex-col rounded-2xl border border-gray200 bg-white p-5 shadow-sm md:w-full sm:w-full"
              >
                <div className="flex items-center justify-between pb-5">
                  <div className="rounded-lg bg-gray100 p-2 text-gray300">
                    <Quotes size={18} />
                  </div>
                  {index === 0 && doc.hot && (
                    <span className="rounded-full bg-lime100 px-2 py-1 text-medium12 text-lime700">
                      HOT
                    </span>
                  )}
                </div>

                <p className="text-semibold20 text-gray900">{doc.title}</p>
                <p className="pt-3 text-medium14 text-gray500">
                  {doc.description}
                </p>

                <div className="mt-auto flex items-center justify-between pt-6 text-medium12 text-gray500">
                  <div className="flex items-center gap-2">
                    <span>{doc.category}</span>
                    <span className="text-lime600">/</span>
                    <span className="text-lime600">{doc.editor}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray400">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.99 12.482C6.47 13.957 9.06 16 12 16C14.94 16 17.53 13.957 19.01 12.482C19.4 12.094 19.6 11.898 19.72 11.517C19.81 11.244 19.81 10.756 19.72 10.483C19.6 10.102 19.4 9.906 19.01 9.518C17.53 8.043 14.94 6 12 6C9.06 6 6.47 8.043 4.99 9.518C4.6 9.907 4.4 10.101 4.28 10.483C4.19 10.756 4.19 11.244 4.28 11.517C4.4 11.899 4.6 12.093 4.99 12.482Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.33 11C10.33 11.92 11.08 12.667 12 12.667C12.92 12.667 13.67 11.92 13.67 11C13.67 10.08 12.92 9.333 12 9.333C11.08 9.333 10.33 10.08 10.33 11Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {doc.views}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={() => router.push("/popular")}
            className="flex items-center gap-1 rounded-full border border-gray200 bg-white px-4 py-2 text-semibold14 text-gray600 transition-all hover:bg-gray50"
          >
            더보기
            <ArrowShort size={16} className="text-gray500" direction="right" />
          </button>
        </section>

        <section className="flex w-full flex-col items-center gap-8 py-24">
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="text-bold40 text-gray900 sm:text-bold32">
              인기있는 사람들
            </h2>
            <p className="text-medium16 text-gray500">
              대마고에서는 주로 이상한 애들이 인기가 많습니다.
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="rounded-md border border-gray200 bg-white px-3 py-1 text-semibold14 text-gray600"
              >
                분야별 인간 보기
              </button>
              <button
                type="button"
                className="rounded-md bg-gray200 px-3 py-1 text-semibold14 text-gray600"
              >
                선생님
              </button>
            </div>
          </div>

          <div className="grid w-full grid-cols-4 gap-2 md:grid-cols-2 sm:grid-cols-1">
            {people.map(person => (
              <article
                key={person.name}
                className={`min-h-32 rounded-xl border p-4 ${
                  person.highlight
                    ? "border-lime300 bg-lime50"
                    : "border-gray200 bg-white"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray200 text-medium12 text-gray600">
                      {person.name.slice(0, 1)}
                    </div>
                    <p className="text-semibold16 text-gray900">
                      {person.name}
                    </p>
                  </div>
                  <span className="text-medium12 text-lime600">작성</span>
                </div>
                <p className="pt-3 text-medium14 text-gray500">
                  {person.description}
                </p>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={() => router.push("/division/student")}
            className="flex items-center gap-1 rounded-full border border-gray200 bg-white px-4 py-2 text-semibold14 text-gray600 transition-all hover:bg-gray50"
          >
            더보기
            <ArrowShort size={16} className="text-gray500" direction="right" />
          </button>
        </section>

        <section className="flex w-full flex-col gap-8 py-24">
          <div className="text-left">
            <p className="text-semibold16 text-lime500">첫 사용자들을 위한</p>
            <h2 className="pt-2 text-bold36 text-gray900 sm:text-bold32">
              대마위키 사용법
            </h2>
            <p className="pt-3 text-medium16 text-gray500">
              스트레스를 해소하고 친구를 유명하게 만들어주고 싶나요?
              <br />
              키보드를 잡으세요.
            </p>
          </div>

          <div className="flex border-b border-gray200">
            {guides.map((guide, index) => (
              <button
                key={guide.title}
                type="button"
                onClick={() => setGuideIndex(index)}
                className={`pb-3 pr-6 text-semibold16 transition-all ${
                  guideIndex === index
                    ? "border-b-2 border-lime500 text-gray900"
                    : "text-gray500"
                }`}
              >
                {guideTabLabels[index]}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-1">
            <div className="flex flex-col gap-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-lime100 text-semibold20 text-lime600">
                1
              </div>
              <h3 className="text-bold32 text-gray900">
                {guides[guideIndex].title}
              </h3>
              <p className="text-medium16 text-gray500">
                {guides[guideIndex].description}
              </p>
              <button
                type="button"
                onClick={() => router.push("/document/new")}
                className="flex w-fit items-center gap-1 rounded-full border border-gray200 bg-white px-4 py-2 text-semibold14 text-gray600 transition-all hover:bg-gray50"
              >
                직접 해보기
                <ArrowShort
                  size={16}
                  className="text-gray500"
                  direction="right"
                />
              </button>
            </div>
            <div className="min-h-56 rounded-2xl bg-gray200" />
          </div>
        </section>

        <section className="flex flex-col items-center gap-5 py-20 text-center sm:py-16">
          <h2 className="text-bold40 text-gray900 sm:text-bold32">
            대마위키 문서
            <br />
            구경가기
          </h2>
          <button
            type="button"
            onClick={() => router.push("/division")}
            className="rounded-md bg-lime500 px-4 py-2 text-semibold16 text-white transition-all hover:bg-lime600"
          >
            시작하기
          </button>
        </section>
      </div>
    </div>
  );
}

export default Main;
