import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist, createJSONStorage } from "zustand/middleware";

const INITIAL_STATE = {
  moodsMap: {}, // map of moods by date
};

export const useMoodStore = create(
  persist(
    immer((set) => ({
      // state
      ...INITIAL_STATE,

      // setters
      addMood: (date, mood) =>
        set((state) => ({ moodsMap: { ...state.moodsMap, [date]: mood } })),
      reset: () => set(INITIAL_STATE),
    })),
    {
      name: "about-my-day-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

// generate a map of emojis with their mood label
export const EMOJIS_MAP = [
  { id: "happy", emoji: "😎", label: "Happy" },
  { id: "sad", emoji: "😢", label: "Sad" },
  { id: "celebrate", emoji: "🎉", label: "Celebrate" },
  { id: "tired", emoji: "😴", label: "Tired" },
  { id: "angry", emoji: "😡", label: "Angry" },
  { id: "sick", emoji: "🤧", label: "Sick" },
  { id: "win", emoji: "🥇", label: "Win" },
];
