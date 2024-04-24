import axios from 'axios'
import { useEffect, useState } from 'react'
import { OrderType } from '@/types/order'
import { DEFAULT_HOST } from '@/config'

export default function useKitchenOrder() {
  const [incommingOrder, setInCommingOrder] = useState<OrderType[]>([])
  const [preparingOrder, setPreparingOrder] = useState<OrderType[]>([])
  const [readyOrder, setReadyOrder] = useState<OrderType[]>([])

  // fetch all orders
  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await axios.get(`${DEFAULT_HOST}/api/v1/order`)
        return response.data.data
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

    // // For mock purpose, we fetch data every 1 second
    // // fetch data every 1 second
    // const interval = setInterval(() => {
    //   fetchData()
    // }, 500)

    // return () => clearInterval(interval)

    fetchData()
  }, [])

  return {
    incommingOrder,
    preparingOrder,
    readyOrder,
  }
}
