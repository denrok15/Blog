import {create} from 'zustand'
import {persist} from 'zustand/middleware'

interface UserStore {
    bio: string,
    name: string,
    location: string,
    birthday: string,
    phone: string,
    gender: string,
    setBio: (bio: string) => void,
    setName: (name: string) => void,
    setLocation: (email: string) => void,
    setBirthday: (birthday: string) => void,
    setPhone: (phone: string) => void,
    setGender: (gender: string) => void,

}
export const useUserStore = create<UserStore>()(
    persist((set) => ({
    bio: '',
    name: '',
    location: '',
    birthday: '',
    phone: '',
    gender: '',
    setBio: (bio) => set({bio}),
    setName: (name) => set({name}),
    setLocation: (location) => set({location}),
    setBirthday: (birthday) => set({birthday}),
    setPhone: (phone) => set({phone}),
    setGender: (gender) => set({gender}),
}),
        {name: 'user-store'})
)