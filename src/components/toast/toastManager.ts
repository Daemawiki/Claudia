"use client";
import React, { useState } from "react";

type MessageType = "success" | "error" | "info" | "warning";

interface ToastProps {
  id: string;
  message: string;
  type: MessageType;
}

export const useToastManager = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = (message: string, type: MessageType) => {
    const id = `${Date.now()}-${Math.random()}`;
    setToasts(prev => [...prev, { id, message, type }]);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return { toasts, addToast, removeToast };
};
