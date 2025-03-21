import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const INITIAL_STATE = {
  activeDialog: null,
  meta: {},
};

export const useAppStore = create(
  immer((set) => ({
    // state
    ...INITIAL_STATE,

    // setters
    setActiveDialog: (dialog, meta = {}) => set({ activeDialog: dialog, meta }),
    reset: () => set(INITIAL_STATE),
  }))
);
