import Menu from '@/views/Order/Menu'
import Cart from './Cart'
import Ordered from './Ordered'
import useMenu from '@/hooks/useMenu'

export type MenuType = {
  name: string
  price: number
  image: string
  category: string
}

type OrderScreenProps = {
  screen: string
  setScreen: (screen: string) => void
}

const OrderScreen = ({ screen, setScreen }: OrderScreenProps) => {
  const { menu } = useMenu()

  console.log('OrderScreen', screen)
  const filteredData = menu.filter((item) => {
    switch (screen) {
      case 'Menu':
        return item.category === 'sushi'
      case 'Drinks/Dessert':
        return item.category === 'drinks' || item.category === 'dessert'
      case 'Cart':
        return item.category === 'cart'
      default:
        return item.category === 'sushi'
    }
  })

  return (
    <>
      <div className="px-24">
        {(screen === 'Menu' || screen === 'Drinks/Dessert') && (
          <Menu data={filteredData} setScreen={setScreen} />
        )}
        {screen === 'Cart' && <Cart setScreen={setScreen} />}
        {screen === 'Ordered' && <Ordered setScreen={setScreen} />}
      </div>
    </>
  )
}

export default OrderScreen
