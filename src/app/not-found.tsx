"use client";
import { Button } from "@/components";
import { useRouter } from "next/navigation";
import React from "react";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <p>돌아가.</p>
      <Button onClick={() => router.back()} text="뒤로 가기" style="primary2" />
    </div>
  );
}
