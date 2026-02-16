"use client";

import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";

import {
  fetchWikiDocumentDetail,
  updateWikiDocumentPhoto,
  updateWikiDocumentProfile,
} from "@/apis";
import {
  WikiDocumentDetail,
  WikiDocumentProfileUpdateInput,
} from "@/interfaces/wiki";
import { Sidebar } from "@/components";
import { Bottom } from "./Bottom";
import { Profile } from "./Profile";
import { Title } from "./Title";
import { Toggle } from "./Toggle";

const defaultDocument: WikiDocumentDetail = {
  id: "lee-taeyoung",
  title: "이태영",
  category: "student",
  views: 210,
  profileImageUrl: "",
  badgeText: "2113 이태영",
  description:
    "김승윤이 사랑한 김어진 박지민 이태영 최고의 인재 팀원 중 한 명입니다.",
  profileInfo: [
    { title: "학년", text: "3학년" },
    { title: "전공", text: "백엔드" },
    { title: "생년월일", text: "10 · 1-1" },
    { title: "MBTI", text: "INTP" },
    { title: "성별", text: "대장 갓이" },
    { title: "대마입학", text: "2007 / 11 / 03" },
  ],
  sections: [
    { num: "1", title: "개요", details: "1학년 4반의 오타쿠 이태영." },
    { num: "2", title: "특징", details: "" },
  ],
  relatedDocuments: ["관련 문서", "이태영", "대마위키", "동아리 대장님이 작성"],
  lastUpdated: "2024-08-04 07:03",
};

function Document() {
  const [openSidebar, setOpenSidebar] = useState<boolean>(true);
  const queryClient = useQueryClient();
  const params = useParams<{ id: string }>();
  const rawId = params.id;
  const documentId = Array.isArray(rawId) ? rawId[0] : rawId;
  const queryKey = ["wiki-document", documentId];

  const { data, isLoading } = useQuery<WikiDocumentDetail | null>({
    queryKey,
    queryFn: () => {
      if (!documentId) {
        return Promise.resolve(null);
      }

      return fetchWikiDocumentDetail(documentId);
    },
    enabled: Boolean(documentId),
  });

  const profileMutation = useMutation({
    mutationFn: (input: WikiDocumentProfileUpdateInput) => {
      if (!documentId) {
        return Promise.resolve(null);
      }

      return updateWikiDocumentProfile(documentId, input);
    },
    onSuccess: updated => {
      if (!updated) {
        return;
      }

      queryClient.setQueryData(queryKey, updated);
    },
  });

  const photoMutation = useMutation({
    mutationFn: (profileImageUrl: string) => {
      if (!documentId) {
        return Promise.resolve(null);
      }

      return updateWikiDocumentPhoto(documentId, profileImageUrl);
    },
    onSuccess: updated => {
      if (!updated) {
        return;
      }

      queryClient.setQueryData(queryKey, updated);
    },
  });

  const handleSaveProfile = (input: WikiDocumentProfileUpdateInput) => {
    profileMutation.mutate(input);
  };

  const handleUploadPhoto = (profileImageUrl: string) => {
    photoMutation.mutate(profileImageUrl);
  };

  const documentData = data ?? defaultDocument;
  const contentsListArr = documentData.sections.map(({ num, title }) => ({
    num,
    title,
  }));

  return (
    <div
      className={`${openSidebar ? "pl-4 lg:pl-[300px]" : "pl-4"} flex w-full min-h-screen justify-center bg-gray100 pb-16 pr-4 pt-[124px] transition-all lg:pb-20 lg:pr-6 lg:pt-20`}
    >
      <div className="flex w-full max-w-screen-xl flex-col overflow-hidden rounded-2xl border border-gray200 bg-white">
        <Title title={documentData.title} views={documentData.views} />
        <Profile
          badgeText={documentData.badgeText}
          description={documentData.description}
          infoArr={documentData.profileInfo}
          profileImageUrl={documentData.profileImageUrl}
          canEdit={Boolean(data)}
          isSaving={profileMutation.isPending || photoMutation.isPending}
          onSave={handleSaveProfile}
          onUploadPhoto={handleUploadPhoto}
        />
        <div className="w-full px-6 py-6 sm:px-4 lg:px-12">
          {isLoading && (
            <p className="text-medium16 text-gray500">
              문서를 불러오는 중입니다...
            </p>
          )}
          {!isLoading && !data && (
            <p className="text-medium16 text-gray500">
              문서를 찾을 수 없어 기본 내용을 표시합니다.
            </p>
          )}
          {documentData.sections.map(({ num, title, details }) => (
            <Toggle key={num} num={num} title={title} details={details} />
          ))}
        </div>
        <Bottom
          documentList={documentData.relatedDocuments}
          lastUpdated={documentData.lastUpdated}
        />
      </div>
      <Sidebar titleList={contentsListArr} setOpenSidebar={setOpenSidebar} />
    </div>
  );
}

export default Document;
