import { create } from 'zustand';
import { persist} from "zustand/middleware";

interface AuthStore {
    login: string;
    password: string;
    email: string;
    setLogin: (login: string) => void;
    setPassword: (password: string) => void;
    setEmail: (email: string) => void;
    isAuthenticated: boolean;
    setIsAuthenticated: (isAuthenticated: boolean) => void;
}

export const useAuthStore = create<AuthStore>()(
    persist( (set) => ({
        login: '',
        password: '',
        email: '',
        isAuthenticated: false,
        setLogin: (login) => set({ login }),
        setPassword: (password) => set({ password }),
        setEmail: (email) => set({ email }),
        setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
    }),
        {name: 'auth-storage'}
    )


);