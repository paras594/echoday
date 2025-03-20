import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist, createJSONStorage } from "zustand/middleware";

const INITIAL_STATE = {
  notes: {},
};

export const useNotesStore = create(
  persist(
    immer((set) => ({
      // state
      ...INITIAL_STATE,

      // setters
      addNote: (date, note) =>
        set((state) => {
          state.notes[date] ??= [];
          state.notes[date].unshift(note);
        }),
      removeNote: (date, note) =>
        set((state) => {
          state.notes[date] = state.notes[date].filter((n) => n.id !== note.id);
        }),
      updateNote: (date, note) =>
        set((state) => {
          state.notes[date] = state.notes[date].map((n) =>
            n.id === note.id ? note : n
          );
        }),
    })),
    {
      name: "notes-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
