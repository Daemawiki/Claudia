"use client";
import { useCallback, useState } from "react";

export function useModal<T>() {
  const [state, setState] = useState<T>("" as T);
  const close = useCallback(() => {
    setState("" as T);
  }, []);

  return { state, close, setState };
}
