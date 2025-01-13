"use client";
import { useState, useEffect } from "react";

export function useIsSmallScreen(breakpoint: number): boolean | null {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const handleResize = () => setIsSmallScreen(mediaQuery.matches);
    handleResize();
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, [breakpoint]);

  return isSmallScreen;
}
