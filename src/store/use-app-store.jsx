import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const INITIAL_STATE = {
  activeDialog: null,
};

export const useAppStore = create(
  immer((set) => ({
    // state
    ...INITIAL_STATE,

    // setters
    setActiveDialog: (dialog) => set({ activeDialog: dialog }),
    reset: () => set(INITIAL_STATE),
  }))
);
