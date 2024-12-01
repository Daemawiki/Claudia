"use client";
import { Metadata } from "next";
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
            {/* Context로 addToast 공유 */}
            <ToastContext.Provider value={{ addToast }}>
              <div>
                {/* Toast 리스트 */}
                <div className="fixed top-20 right-4 space-y-4">
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
