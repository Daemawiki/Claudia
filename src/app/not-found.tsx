"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <p>돌아가.</p>
      <button onClick={() => router.back()}>뒤로 가기</button>
    </div>
  );
}
