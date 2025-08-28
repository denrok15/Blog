import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthStore {
  login: string;
  isAuthenticated: boolean;
  setAuth: (data: { login: string }) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      login: "",
      isAuthenticated: false,
      setAuth: (data) =>
        set({
          login: data.login,
          isAuthenticated: true,
        }),
      clearAuth: () =>
        set({
          login: "",
          isAuthenticated: false,
        }),
    }),
    {
      name: "auth-storage",
    }
  )
);
