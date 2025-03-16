import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const INITIAL_STATE = {
  moodsMap: {}, // map of moods by date
};

export const useMoodStore = create(
  immer((set) => ({
    // state
    ...INITIAL_STATE,

    // setters
    addMood: (date, mood) =>
      set((state) => ({ moodsMap: { ...state.moodsMap, [date]: mood } })),
  }))
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
