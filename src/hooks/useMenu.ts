import axios from 'axios'
import { useEffect, useState } from 'react'
import { mapMenuImage } from '@/utils/mapMenuImage'
import { MenuType } from '@/types/menu'
import { DEFAULT_HOST } from '@/config'
export default function useMenu() {
  const [menu, setMenu] = useState<MenuType[]>([])
  const getMenu = async () => {
    try {
      const response = await axios.get(`${DEFAULT_HOST}/api/v1/menu`)
      console.log('response', response)
      return response.data.data
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    async function fetchData() {
      const menus = await getMenu()
      // map images to local images
      // console.log(menus)
      const localImages = menus.map((menu: MenuType) => {
        if (menu.image) {
          return {
            ...menu,
            image: menu.image,
          }
        }
        return {
          ...menu,
          image: mapMenuImage(menu.name),
        }
      })
      setMenu(localImages)
      console.log(localImages)
    }

    fetchData()
  }, [])

  return { menu }
}
