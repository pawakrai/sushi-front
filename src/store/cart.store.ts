import { create } from 'zustand'
import { MenuType, CartItem } from '@/types/menu'

interface CartStore {
  cartItem: CartItem[]
  addToCart: (item: MenuType) => void
  deleteFromCart: (item: MenuType) => void
  resetCart: () => void
}

export const useCartStore = create<CartStore>((set) => ({
  cartItem: [],
  addToCart: (item: MenuType) =>
    set((state) => {
      const index = state.cartItem.findIndex(
        (cartItem) => cartItem.name === item.name
      )
      if (index === -1) {
        return {
          cartItem: [...state.cartItem, { ...item, quantity: 1 }],
        }
      }
      const newCart = [...state.cartItem]
      newCart[index].quantity += 1
      return {
        cartItem: newCart,
      }
    }),
  deleteFromCart: (item: MenuType) =>
    set((state) => {
      const filterCart = state.cartItem.filter(
        (cartItem) => cartItem.name !== item.name
      )
      const newCart = [...filterCart]

      return {
        cartItem: newCart,
      }
    }),
  resetCart: () => set({ cartItem: [] }),
}))
