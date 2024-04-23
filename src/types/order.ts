import { CartItem, OrderItem } from './menu'

export type Order = {
  table: string
  orderItem: CartItem[]
}

type OrderStatus = 'incoming' | 'preparing' | 'completed' | 'canceled'

export type OrderType = {
  id: string
  status: OrderStatus
  table: string
  orderItem: OrderItem[]
}
