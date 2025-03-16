import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { formatDate } from "../utils/date-formatters";

const INITIAL_STATE = {
  activeDate: formatDate(new Date()),
};

export const useCalendarStore = create(
  immer((set) => ({
    // state
    ...INITIAL_STATE,

    // setters
    setActiveDate: (date) => set({ activeDate: date }),
  }))
);
