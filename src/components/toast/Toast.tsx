"use client";

import { Check, Close, Info, Warn } from "@/assets";
import React, { useEffect, useState } from "react";

type MessageType = "success" | "error" | "info" | "warning";

interface ToastProps {
  message: string;
  type: MessageType;
  onClose: () => void;
  duration?: number;
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

function Toast({ type, message, onClose, duration }: ToastProps) {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  if (!visible) return null;

  const { bgColor, textColor, icon } = typeStyles[type];

  return (
    <div
      className={`bg-white max-w-[430px] animate-comeOut opacity-0 flex items-center justify-between ${bgColor} ${textColor} p-4 rounded-md shadow-lg`}
    >
      <div className="flex items-center">
        <span className="mr-2 text-lg">{icon}</span>
        <p>{message}</p>
      </div>
      <button
        type="button"
        onClick={() => {
          setVisible(false);
          setTimeout(onClose, 300);
        }}
        className="ml-4"
      >
        <Close />
      </button>
    </div>
  );
}

Toast.defaultProps = {
  duration: 3000,
};

export default Toast;
