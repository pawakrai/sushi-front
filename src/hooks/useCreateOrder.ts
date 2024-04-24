import { DEFAULT_HOST } from '@/config'
import { useTableStore } from '@/store/table.store'
import { CartItem } from '@/types/menu'
import axios from 'axios'

type Order = {
  table: string
  orderItem: CartItem[]
}

export default function useCreateOrder() {
  const table = useTableStore((state) => state.table)

  const createOrder = async (cartItem: CartItem[]) => {
    const order: Order = {
      table: table,
      orderItem: cartItem,
    }

    try {
      const response = await axios.post(`${DEFAULT_HOST}/api/v1/order`, order)
      console.log('response', response)
      return response.data.data
    } catch (error) {
      console.error(error)
    }
  }

  return { createOrder }
}
