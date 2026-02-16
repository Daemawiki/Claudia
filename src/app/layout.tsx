"use client";

import { useMemo } from "react";
import { Noto_Sans_KR } from "next/font/google";
import { Toast, ToastContext, useToastManager } from "@/components";

import ReactQueryProvider from "./ReactQueryProvider";
import StoreProvider from "./StoreProvider";
import "./globals.css";

const sans = Noto_Sans_KR({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { toasts, addToast, removeToast } = useToastManager();
  const toastContextValue = useMemo(() => ({ addToast }), [addToast]);

  return (
    <html lang="en">
      <body className={sans.className}>
        <StoreProvider>
          <ReactQueryProvider>
            {/* Context로 addToast 공유 */}
            <ToastContext.Provider value={toastContextValue}>
              <div>
                {/* Toast 리스트 */}
                <div className="fixed z-50 top-20 right-4 space-y-4">
                  {toasts.map(toast => (
                    <Toast
                      key={toast.id}
                      type={toast.type}
                      message={toast.message}
                      onClose={() => removeToast(toast.id)}
                    />
                  ))}
                </div>
                {children}
              </div>
            </ToastContext.Provider>
          </ReactQueryProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
