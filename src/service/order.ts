import axios from 'axios'
import { Order } from '@/types/order'

export const createOrder = async (order: Order) => {
  try {
    const response = await axios.post(
      'http://localhost:3000/api/v1/order',
      order
    )
    console.log('response', response)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
