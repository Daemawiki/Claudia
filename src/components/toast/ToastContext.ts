"use client";
import { createContext, useContext } from "react";

type MessageType = "success" | "error" | "info" | "warning";

export const ToastContext = createContext<{
  addToast: (message: string, type: MessageType) => void;
} | null>(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastContext.Provider");
  }
  return context;
};
