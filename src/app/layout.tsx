import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "./ReactQueryProvider";
import StoreProvider from "./StoreProvider";
import { Header } from "@/components";

const sans = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "대마위키",
  description: "우리의 학교생활 이야기",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sans.className}>
        <StoreProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
