import axios from 'axios'
import { useEffect, useState } from 'react'
import { OrderType } from '@/types/order'

export default function useKitchenOrder() {
  const [incommingOrder, setInCommingOrder] = useState<OrderType[]>([])
  const [preparingOrder, setPreparingOrder] = useState<OrderType[]>([])
  const [readyOrder, setReadyOrder] = useState<OrderType[]>([])

  // fetch all orders
  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/order')
        return response.data
      } catch (error) {
        console.error(error)
        return []
      }
    }

    async function fetchData() {
      console.log('fetching data')
      const orders = await getOrders()
      // filter orders by status
      const incoming = orders.filter(
        (order: OrderType) => order.status === 'incoming'
      )
      const preparing = orders.filter(
        (order: OrderType) => order.status === 'preparing'
      )
      const completed = orders.filter(
        (order: OrderType) => order.status === 'completed'
      )
      setInCommingOrder(incoming)
      setPreparingOrder(preparing)
      setReadyOrder(completed)
    }

    fetchData()
  }, [])

  const handleOnConfirmClick = async (id: string) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/v1/order/${id}`,
        { status: 'preparing' }
      )
      console.log('response', response)
    } catch (error) {
      console.error(error)
    }
  }

  const handleOnReadyClick = async (id: string) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/v1/order/${id}`,
        { status: 'completed' }
      )
      console.log('response', response)
    } catch (error) {
      console.error(error)
    }
  }

  const handleOnCancelClick = async (id: string) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/v1/order/${id}`,
        { status: 'canceled' }
      )
      console.log('response', response)
    } catch (error) {
      console.error(error)
    }
  }

  return {
    incommingOrder,
    preparingOrder,
    readyOrder,
    handleOnConfirmClick,
    handleOnReadyClick,
    handleOnCancelClick,
  }
}
