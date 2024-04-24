import axios from 'axios'
import { Order } from '@/types/order'
import { DEFAULT_HOST } from '@/config'

export const createOrder = async (order: Order) => {
  try {
    const response = await axios.post(`${DEFAULT_HOST}/api/v1/order`, order)
    console.log('response', response)
    return response.data.data
  } catch (error) {
    console.error(error)
  }
}

export const changeOrderStatus = async (
  id: string,
  status: 'preparing' | 'completed' | 'canceled'
) => {
  try {
    const response = await axios.put(`${DEFAULT_HOST}/api/v1/order/${id}`, {
      status: status,
    })
    console.log('response', response)
  } catch (error) {
    console.error(error)
  }
}

export const closeAllOrder = async (table: string) => {
  try {
    const response = await axios.post(
      `${DEFAULT_HOST}/api/v1/order/closeOrder/${table}`
    )
    console.log('response', response)
  } catch (error) {
    console.error(error)
  }
}
