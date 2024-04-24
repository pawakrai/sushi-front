import axios from 'axios'
import { useEffect, useState } from 'react'
import { mapMenuImage } from '@/utils/mapMenuImage'
import { OrderItem } from '@/types/menu'
import { useTableStore } from '@/store/table.store'
import { DEFAULT_HOST } from '@/config'

export default function useOrdered() {
  const [order, setOrder] = useState<OrderItem[]>([])
  const table = useTableStore((state) => state.table)

  useEffect(() => {
    const getOrderbyTable = async () => {
      try {
        const response = await axios.get(
          `${DEFAULT_HOST}/api/v1/order/${table}`
        )
        console.log('response', response.data)
        return response.data.data
      } catch (error) {
        console.error(error)
      }
    }

    async function fetchData() {
      const ordered = await getOrderbyTable()
      // map images to local images
      // console.log(menus)
      const localImages = ordered.map((order: OrderItem) => {
        if (order.image) {
          return {
            ...order,
            image: order.image,
          }
        }
        return {
          ...order,
          image: mapMenuImage(order.name),
        }
      })
      setOrder(localImages)
      console.log(localImages)
    }

    // // For mock purpose, we fetch data every 1 second
    // // fetch data every 1 second
    // const interval = setInterval(() => {
    //   fetchData()
    // }, 1000)

    // return () => clearInterval(interval)

    fetchData()
  }, [table, setOrder])

  // filter order without status canceled
  const filterOrder = order.filter((item) => item.status !== 'canceled')

  const subTotal = filterOrder.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )
  const vat = subTotal * 0.07

  const total = subTotal + vat

  const vatValue = vat.toFixed(2)

  return { order, subTotal, vatValue, total }
}
