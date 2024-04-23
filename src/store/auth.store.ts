import { create } from 'zustand'

type UserToRole = Record<string, string>

const userToRole: UserToRole = {
  table1: 'user',
  table2: 'user',
  kitchen1: 'kitchenStaff',
}

interface AuthStore {
  token: string | null
  role: string | null
  userToRole: UserToRole

  setToken: (token: string | null) => void
  setRole: (role: string | null) => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  token: null,
  role: '',
  userToRole,

  setToken: (token: string | null) => set({ token }),
  setRole: (role: string | null) => set({ role }),
}))
