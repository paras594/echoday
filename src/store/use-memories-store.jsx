import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist, createJSONStorage } from "zustand/middleware";

const INITIAL_STATE = {
  memories: {},
};

export const useMemoriesStore = create(
  persist(
    immer((set) => ({
      // state
      ...INITIAL_STATE,

      // setters
      addMemory: (date, memory) =>
        set((state) => {
          state.memories[date] ??= [];
          state.memories[date].unshift(memory);
        }),
      removeMemory: (date, memory) =>
        set((state) => {
          state.memories[date] = state.memories[date].filter(
            (m) => m.id !== memory.id
          );
        }),
    })),
    {
      name: "memories-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
