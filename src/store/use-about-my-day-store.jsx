import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist, createJSONStorage } from "zustand/middleware";

const INITIAL_STATE = {
  aboutMyDay: {},
};

export const useAboutMyDayStore = create(
  persist(
    immer((set) => ({
      // state
      ...INITIAL_STATE,

      // setters
      updateAboutMyDay: (date, aboutMyDay) =>
        set((state) => {
          state.aboutMyDay[date] = aboutMyDay;
        }),
      reset: () => set(INITIAL_STATE),
    })),
    {
      name: "about-my-day-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
