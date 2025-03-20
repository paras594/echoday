import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist, createJSONStorage } from "zustand/middleware";

const INITIAL_STATE = {
  reminders: {},
};

export const useRemindersStore = create(
  persist(
    immer((set) => ({
      // state
      ...INITIAL_STATE,

      // setters
      addReminder: (date, reminder) =>
        set((state) => {
          state.reminders[date] ??= [];
          state.reminders[date].push(reminder);
        }),
      removeReminder: (date, reminder) =>
        set((state) => {
          state.reminders[date] = state.reminders[date].filter(
            (r) => r.id !== reminder.id
          );
        }),
      updateReminder: (date, reminder) =>
        set((state) => {
          state.reminders[date] = state.reminders[date].map((r) =>
            r.id === reminder.id ? reminder : r
          );
        }),
      reset: () => set(INITIAL_STATE),
    })),
    {
      name: "reminders-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
