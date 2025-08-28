import { create } from "zustand";
import { persist } from "zustand/middleware";

interface darklighttheme {
  dark: boolean;
  light: boolean;
  setDark: (dark: boolean) => void;
  setLight: (light: boolean) => void;
}
export const usetheme = create<darklighttheme>()(
  persist(
    (set) => ({
      dark: false,
      light: true,
      setDark: (dark: boolean) => set({ dark }),
      setLight: (light: boolean) => set({ light }),
    }),
    { name: "theme" }
  )
);
