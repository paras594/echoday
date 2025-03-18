import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist, createJSONStorage } from "zustand/middleware";
import { formatDate } from "../utils/date-formatters";

const INITIAL_STATE = {
  activeDate: formatDate(new Date()),
};

export const useCalendarStore = create(
  persist(
    immer((set) => ({
      // state
      ...INITIAL_STATE,

      // setters
      setActiveDate: (date) => set({ activeDate: date }),
      reset: () => set(INITIAL_STATE),
    })),
    {
      name: "calendar-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
