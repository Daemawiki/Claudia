"use client";

import React from "react";

export default function MyPage() {
  return (
    <div className="w-full flex justify-center pb-12">
      <div className="w-full pt-16 px-12 max-w-[1200px] flex flex-col gap-8">
        <section className="flex flex-col gap-3">
          <h1 className="text-bold36 text-black">마이페이지</h1>
          <p className="text-medium18 text-gray500">
            내 활동과 계정 정보를 확인할 수 있는 페이지입니다.
          </p>
        </section>

        <div className="rounded-2xl border border-gray200 bg-white p-8 flex flex-col gap-3">
          <p className="text-semibold20 text-gray800">준비 중입니다.</p>
          <p className="text-medium16 text-gray500">
            곧 내 문서 기여 내역과 프로필 관리 기능이 제공됩니다.
          </p>
        </div>
      </div>
    </div>
  );
}
