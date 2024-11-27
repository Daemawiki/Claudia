"use client";

import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "./ReactQueryProvider";
import StoreProvider from "./StoreProvider";
import { Toast } from "@/components";
import { useToastManager, ToastContext } from "@/components";

const sans = Noto_Sans_KR({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { toasts, addToast, removeToast } = useToastManager();

  return (
    <html lang="en">
      <body className={sans.className}>
        <StoreProvider>
          <ReactQueryProvider>
            <div>
              {/* Toast UI */}
              <div className="fixed top-4 right-4 space-y-4">
                {toasts.map(toast => (
                  <Toast
                    key={toast.id}
                    type={toast.type}
                    message={toast.message}
                    onClose={() => removeToast(toast.id)}
                  />
                ))}
              </div>

              {/* Context로 addToast 공유 */}
              <ToastContext.Provider value={{ addToast }}>
                {children}
              </ToastContext.Provider>
            </div>
          </ReactQueryProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
