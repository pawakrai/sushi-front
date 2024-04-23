import { create } from 'zustand'

interface TableStore {
  table: string
  status: 'welcome' | 'order' | 'checkout'
  setTable: (table: string) => void
  setStatus: (status: 'welcome' | 'order' | 'checkout') => void
}

export const useTableStore = create<TableStore>((set) => ({
  table: '1',
  status: 'welcome',
  setTable: (table: string) => set({ table }),
  setStatus: (status: 'welcome' | 'order' | 'checkout') => set({ status }),
}))
