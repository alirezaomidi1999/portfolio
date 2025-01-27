"use client";
import { useEffect } from "react";
import useProjectStore from "@/stores/ProjectsStore";

export default function ClientSideEffect() {
  const { clearStoredProjects } = useProjectStore();

  useEffect(() => {
    return () => {
      clearStoredProjects();
    };
  }, []);

  return null;
}
