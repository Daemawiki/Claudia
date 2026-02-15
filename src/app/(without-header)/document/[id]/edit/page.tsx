import { Close, Document } from "@/assets";

export default function Edit() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-gray50">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-6 px-6 py-6 sm:px-4 sm:py-4">
        <div className="flex items-center justify-between rounded-xl border border-gray200 bg-white px-4 py-3">
          <button
            type="button"
            className="flex items-center gap-2 rounded-md border border-gray200 bg-white px-3 py-2 text-medium16 text-gray700 hover:bg-gray50"
          >
            <Close className="w-5 text-gray600" />
            닫기
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg bg-lime500 px-4 py-3 text-semibold16 text-white hover:bg-lime600"
          >
            <Document className="text-white" />
            저장
          </button>
        </div>

        <div className="grid grid-cols-[280px_1fr] gap-6 sm:grid-cols-1">
          <aside className="flex h-fit flex-col gap-4 rounded-xl border border-gray200 bg-white p-4">
            <div className="flex flex-col gap-1">
              <p className="text-semibold16 text-black">문서 메타</p>
              <p className="text-medium14 text-gray500">
                작성 정보를 먼저 정리하세요.
              </p>
            </div>
            <label htmlFor="category" className="flex flex-col gap-2">
              <span className="text-medium14 text-gray600">분류</span>
              <input
                id="category"
                className="rounded-lg border border-gray200 px-3 py-2 text-medium16 text-black placeholder:text-gray400"
                placeholder="예: 학생"
              />
            </label>
            <label htmlFor="tags" className="flex flex-col gap-2">
              <span className="text-medium14 text-gray600">태그</span>
              <input
                id="tags"
                className="rounded-lg border border-gray200 px-3 py-2 text-medium16 text-black placeholder:text-gray400"
                placeholder="예: 대마고, 동아리"
              />
            </label>
          </aside>

          <section className="flex min-h-[520px] flex-col gap-4 rounded-xl border border-gray200 bg-white p-4 sm:min-h-[420px]">
            <label htmlFor="title" className="flex flex-col gap-2">
              <span className="text-medium14 text-gray600">문서 제목</span>
              <input
                id="title"
                className="rounded-lg border border-gray200 px-3 py-2 text-medium18 text-black placeholder:text-gray400"
                placeholder="문서 제목을 입력하세요"
              />
            </label>
            <label htmlFor="summary" className="flex flex-col gap-2">
              <span className="text-medium14 text-gray600">요약</span>
              <input
                id="summary"
                className="rounded-lg border border-gray200 px-3 py-2 text-medium16 text-black placeholder:text-gray400"
                placeholder="이 문서를 한 줄로 설명하세요"
              />
            </label>
            <label htmlFor="content" className="flex h-full flex-col gap-2">
              <span className="text-medium14 text-gray600">본문</span>
              <textarea
                id="content"
                className="h-full min-h-[320px] rounded-lg border border-gray200 px-3 py-3 text-medium16 text-black placeholder:text-gray400"
                placeholder="문서 내용을 입력하세요"
              />
            </label>
          </section>
        </div>
      </div>
    </div>
  );
}
