import axios from 'axios'
import { useEffect, useState } from 'react'
import { mapMenuImage } from '@/utils/mapMenuImage'
import { OrderItem } from '@/types/menu'
import { useTableStore } from '@/store/table.store'

export default function useOrdered() {
  const [order, setOrder] = useState<OrderItem[]>([])
  const table = useTableStore((state) => state.table)

  useEffect(() => {
    const getOrderbyTable = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/order/${table}`
        )
        return response.data
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

    fetchData()
  }, [table, setOrder])

  const subTotal = order.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )
  const vat = subTotal * 0.07

  const total = subTotal + vat

  const vatValue = vat.toFixed(2)

  return { order, subTotal, vatValue, total }
}
