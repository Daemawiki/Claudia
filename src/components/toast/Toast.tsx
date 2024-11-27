"use client";
import { Check, Close, Info, Warn } from "@/assets";
import React, { useEffect, useState } from "react";

type MessageType = "success" | "error" | "info" | "warning";

interface ToastProps {
  message: string;
  type: MessageType;
  onClose: () => void; // 닫기 핸들러
  duration?: number; // 자동 닫힘 시간 (ms)
}

const typeStyles = {
  success: {
    bgColor: "bg-green-100",
    textColor: "text-green-800",
    icon: <Check />,
  },
  error: {
    bgColor: "bg-red-100",
    textColor: "text-red-800",
    icon: <Close />,
  },
  info: {
    bgColor: "bg-blue-100",
    textColor: "text-blue-800",
    icon: <Info />,
  },
  warning: {
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-800",
    icon: <Warn />,
  },
};

export const Toast = ({
  type,
  message,
  onClose,
  duration = 3000,
}: ToastProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false); // 사라지는 애니메이션 시작
      setTimeout(onClose, 300); // 애니메이션 끝난 후 컴포넌트 제거
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  if (!visible) return null;

  const { bgColor, textColor, icon } = typeStyles[type];

  return (
    <div
      className={`animate-comeOut bg-white opacity-0 flex items-center justify-between ${bgColor} ${textColor} p-4 rounded-md shadow-lg`}
    >
      <div className="flex items-center">
        <span className="mr-2 text-lg">{icon}</span>
        <p>{message}</p>
      </div>
      <button
        onClick={() => {
          setVisible(false);
          setTimeout(onClose, 300); // 애니메이션 후 제거
        }}
        className="ml-4"
      >
        <Close />
      </button>
    </div>
  );
};
