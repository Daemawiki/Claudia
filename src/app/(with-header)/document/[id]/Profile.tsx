"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

import {
  WikiDocumentInfoItem,
  WikiDocumentProfileUpdateInput,
} from "@/interfaces/wiki";
import InfoCardComponent from "./InfoCard";

interface ProfileProps {
  badgeText?: string;
  description?: string;
  infoArr?: WikiDocumentInfoItem[];
  profileImageUrl?: string;
  canEdit?: boolean;
  isSaving?: boolean;
  onSave?: (input: WikiDocumentProfileUpdateInput) => void;
  onUploadPhoto?: (profileImageUrl: string) => void;
}

function Profile({
  badgeText,
  description,
  infoArr,
  profileImageUrl,
  canEdit,
  isSaving,
  onSave,
  onUploadPhoto,
}: ProfileProps) {
  const items = useMemo(() => infoArr ?? [], [infoArr]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [draftBadgeText, setDraftBadgeText] = useState<string>(badgeText ?? "");
  const [draftDescription, setDraftDescription] = useState<string>(
    description ?? "",
  );
  const [draftInfoArr, setDraftInfoArr] =
    useState<WikiDocumentInfoItem[]>(items);

  useEffect(() => {
    if (isEditing) {
      return;
    }

    setDraftBadgeText(badgeText ?? "");
    setDraftDescription(description ?? "");
    setDraftInfoArr(items);
  }, [badgeText, description, isEditing, items]);

  const handleInfoChange = (index: number, text: string) => {
    setDraftInfoArr(prev =>
      prev.map((item, itemIndex) =>
        itemIndex === index ? { ...item, text } : item,
      ),
    );
  };

  const handleSave = () => {
    onSave?.({
      badgeText: draftBadgeText,
      description: draftDescription,
      profileInfo: draftInfoArr,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setDraftBadgeText(badgeText ?? "");
    setDraftDescription(description ?? "");
    setDraftInfoArr(items);
    setIsEditing(false);
  };

  const handlePhotoClick = () => {
    fileInputRef.current?.click();
  };

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const { result } = reader;

      if (typeof result === "string") {
        onUploadPhoto?.(result);
      }

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="w-full flex flex-col gap-8 border-b border-gray200 px-6 py-8 sm:px-4 lg:px-12">
      <div className="w-full flex items-start gap-6 sm:flex-col">
        <div className="w-40 h-40 rounded-full border border-gray200 bg-gray100 overflow-hidden flex-shrink-0">
          {profileImageUrl ? (
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${profileImageUrl})` }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray400 text-medium16">
              Profile
            </div>
          )}
        </div>
        <div className="flex flex-col gap-4 flex-1">
          {isEditing ? (
            <input
              value={draftBadgeText}
              onChange={event => setDraftBadgeText(event.target.value)}
              className="w-full max-w-[320px] rounded-lg border border-lime300 bg-lime50 px-4 py-2 text-semibold14 text-lime500"
              placeholder="뱃지 텍스트"
            />
          ) : (
            <div className="px-4 py-2 bg-lime50 rounded-lg w-fit">
              <p className="text-lime500 text-semibold14">{badgeText}</p>
            </div>
          )}

          {isEditing ? (
            <textarea
              value={draftDescription}
              onChange={event => setDraftDescription(event.target.value)}
              className="w-full rounded-lg border border-gray200 px-3 py-2 text-medium16 text-gray700"
              rows={3}
              placeholder="문서 소개 설명"
            />
          ) : (
            <p className="text-gray600 text-medium18">{description}</p>
          )}

          {canEdit && (
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={handlePhotoClick}
                disabled={isSaving}
                className="rounded-lg border border-gray200 bg-white px-4 py-2 text-medium14 text-gray700 hover:bg-gray50 disabled:opacity-60"
              >
                사진 추가
              </button>

              {!isEditing ? (
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  className="rounded-lg border border-lime300 bg-lime50 px-4 py-2 text-medium14 text-lime600 hover:bg-lime100"
                >
                  소개 수정
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="rounded-lg border border-gray200 bg-white px-4 py-2 text-medium14 text-gray700 hover:bg-gray50"
                  >
                    취소
                  </button>
                  <button
                    type="button"
                    onClick={handleSave}
                    disabled={isSaving}
                    className="rounded-lg bg-lime500 px-4 py-2 text-medium14 text-white hover:bg-lime600 disabled:opacity-60"
                  >
                    저장
                  </button>
                </>
              )}

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="hidden"
              />
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-6 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {isEditing
          ? draftInfoArr.map(({ title, text }, index) => (
              <div
                key={title}
                className="flex flex-col gap-2 rounded-lg bg-gray50 p-4"
              >
                <span className="text-semibold14 text-lime500">{title}</span>
                <input
                  value={text}
                  onChange={event =>
                    handleInfoChange(index, event.target.value)
                  }
                  className="rounded-md border border-gray200 px-3 py-2 text-medium16 text-black"
                />
              </div>
            ))
          : items.map(({ title, text }) => (
              <InfoCardComponent title={title} text={text} key={title} />
            ))}
      </div>
    </div>
  );
}

export { Profile };

export default Profile;

Profile.defaultProps = {
  badgeText: "2113 이태영",
  description:
    "김승윤이 사랑한 김어진 박지민 이태영 최고의 인재 팀원 중 한 명입니다.",
  profileImageUrl: "",
  canEdit: false,
  isSaving: false,
  infoArr: [
    { title: "학년", text: "3학년" },
    { title: "전공", text: "백엔드" },
    { title: "생년월일", text: "10 · 1-1" },
    { title: "MBTI", text: "INTP" },
    { title: "성별", text: "대장 갓이" },
    { title: "대마입학", text: "2007 / 11 / 03" },
  ],
  onSave: undefined,
  onUploadPhoto: undefined,
};
