"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Button } from "@/components";
import { IndexItem, mainPageIndex } from "@/constant/indexItem";
import SideBar from "@/components/sideBar/sideBar";

type LoadStatus = "loading" | "success" | "empty" | "error";

function Main() {
  const [status, setStatus] = useState<LoadStatus>("loading");
  const [sections, setSections] = useState<IndexItem[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const loadMain = useCallback(async () => {
    setStatus("loading");
    setErrorMessage("");

    try {
      await new Promise(resolve => {
        setTimeout(resolve, 450);
      });

      const data = mainPageIndex;

      if (!data.length) {
        setSections([]);
        setStatus("empty");
        return;
      }

      setSections(data);
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage(
        "온보딩 정보를 불러오지 못했습니다. 네트워크 상태를 확인한 뒤 다시 시도해주세요.",
      );
    }
  }, []);

  useEffect(() => {
    loadMain();
  }, [loadMain]);

  const retryButtonStyle = "primary2" as const;
  const refreshButtonStyle = "white" as const;

  return (
    <section className="w-full min-h-[calc(100dvh-160px)] bg-gray50 px-4 py-8 md:py-6 sm:py-4">
      <div className="mx-auto flex w-full max-w-[1320px] gap-6 md:flex-col sm:flex-col">
        <div className="flex w-full max-w-[980px] flex-col gap-4">
          <div className="rounded-2xl border border-gray200 bg-white p-6 md:p-5 sm:p-4">
            <h1 className="text-bold32 text-black md:text-bold28 sm:text-bold24">
              대마위키 온보딩
            </h1>
            <p className="mt-2 text-medium16 text-gray600">
              처음 방문한 사용자를 위한 안내 문서를 빠르게 확인하세요.
            </p>
          </div>

          {status === "loading" && (
            <div className="flex flex-col gap-3">
              {[0, 1, 2].map(index => (
                <div
                  key={index}
                  className="rounded-2xl border border-gray200 bg-white p-6 md:p-5 sm:p-4"
                >
                  <div className="h-6 w-32 rounded bg-gray100 animate-pulse" />
                  <div className="mt-3 h-4 w-full rounded bg-gray100 animate-pulse" />
                  <div className="mt-2 h-4 w-3/4 rounded bg-gray100 animate-pulse" />
                </div>
              ))}
            </div>
          )}

          {status === "error" && (
            <div className="rounded-2xl border border-red200 bg-white p-6 md:p-5 sm:p-4 flex flex-col gap-4">
              <p className="text-semibold20 text-red500">불러오기 실패</p>
              <p className="text-medium16 text-gray700">{errorMessage}</p>
              <div className="w-fit">
                <Button
                  onClick={loadMain}
                  {...{ style: retryButtonStyle }}
                  text="다시 시도"
                />
              </div>
            </div>
          )}

          {status === "empty" && (
            <div className="rounded-2xl border border-gray200 bg-white p-6 md:p-5 sm:p-4 flex flex-col gap-4">
              <p className="text-semibold20 text-gray800">
                표시할 온보딩 문서가 없습니다.
              </p>
              <p className="text-medium16 text-gray600">
                잠시 후 다시 시도하거나 관리자에게 상태를 문의해주세요.
              </p>
              <div className="w-fit">
                <Button
                  onClick={loadMain}
                  {...{ style: refreshButtonStyle }}
                  text="새로고침"
                />
              </div>
            </div>
          )}

          {status === "success" && (
            <div className="flex flex-col gap-3">
              {sections.map(section => (
                <article
                  key={section.index}
                  className="rounded-2xl border border-gray200 bg-white p-6 md:p-5 sm:p-4"
                >
                  <div className="flex items-center gap-2">
                    <span className="inline-flex min-h-[28px] min-w-[28px] items-center justify-center rounded-full bg-lime100 px-2 text-semibold14 text-lime500">
                      {section.index}
                    </span>
                    <h2 className="text-semibold24 text-gray900 md:text-semibold20 sm:text-semibold18">
                      {section.title}
                    </h2>
                  </div>
                  <p className="mt-3 whitespace-pre-line text-medium16 text-gray700">
                    {section.detail}
                  </p>
                </article>
              ))}
            </div>
          )}
        </div>

        <div className="w-full max-w-[320px] md:max-w-none sm:max-w-none">
          <SideBar />
        </div>
      </div>
    </section>
  );
}

export default Main;
