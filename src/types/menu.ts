export type MenuType = {
  name: string
  price: number
  image?: string
  category: string
}

export interface CartItem extends MenuType {
  quantity: number
}

export interface OrderItem extends MenuType {
  quantity: number
}
