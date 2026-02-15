"use client";

import { Footer, Header } from "@/components";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideFooter =
    pathname.startsWith("/login") || pathname.startsWith("/signup");

  return (
    <>
      <Header />
      {children}
      {!hideFooter && <Footer />}
    </>
  );
}
