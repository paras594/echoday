import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist, createJSONStorage } from "zustand/middleware";

const INITIAL_STATE = {
  userName: "",
  userPassword: "",
  isLoggedIn: false,
};

export const useUserStore = create(
  persist(
    immer((set) => ({
      // state
      ...INITIAL_STATE,

      // setters
      setUserName: (name) => set({ userName: name }),
      setUserPassword: (password) => set({ userPassword: password }),
      setIsLoggedIn: (status) => set({ isLoggedIn: status }),
      reset: () => set(INITIAL_STATE),
    })),
    {
      name: "about-my-day-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
