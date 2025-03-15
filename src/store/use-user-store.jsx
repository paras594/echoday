import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const INITIAL_STATE = {
  userName: "John Doe",
  userPassword: "",
  isLoggedIn: false,
};

export const useUserStore = create(
  immer((set) => ({
    // state
    ...INITIAL_STATE,

    // setters
    setUserName: (name) => set({ userName: name }),
    setUserPassword: (password) => set({ userPassword: password }),
    setIsLoggedIn: (status) => set({ isLoggedIn: status }),
  }))
);
