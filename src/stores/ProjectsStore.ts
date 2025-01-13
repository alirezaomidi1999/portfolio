import { create } from "zustand";

interface ProjectStore {
  storedProjects: string[];
  setStoreProjects: (projects: string[]) => void;
  clearStoredProjects: () => void;
}

const useProjectStore = create<ProjectStore>((set) => ({
  storedProjects: [],

  setStoreProjects: (storedProjects) => set({ storedProjects }),

  clearStoredProjects: () => set({ storedProjects: [] }),
}));

export default useProjectStore;
