import { useTableStore } from '@/store/table.store'
import Welcome from './Welcome'
import OrderScreen from './OrderScreen'
import { UserRound } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const Order = () => {
  const status = useTableStore((state) => state.status)
  const table = useTableStore((state) => state.table)
  const [screen, setScreen] = useState('Menu')
  const isVisible = status === 'order'

  return (
    <div className="text-primary-foreground pt-10">
      <div className="flex gap-1 items-center justify-between">
        <ul
          className={cn('flex gap-5 text-2xl font-semibold', {
            invisible: !isVisible,
          })}
        >
          <li
            className={screen === 'Menu' ? 'underline underline-offset-2' : ''}
            onClick={() => setScreen('Menu')}
          >
            Menu
          </li>
          <li
            className={
              screen === 'Drinks/Dessert' ? 'underline underline-offset-2' : ''
            }
            onClick={() => setScreen('Drinks/Dessert')}
          >
            Drinks/Dessert
          </li>
          <li
            className={screen === 'Cart' ? 'underline underline-offset-2' : ''}
            onClick={() => setScreen('Cart')}
          >
            Cart
          </li>
          <li
            className={
              screen === 'Ordered' ? 'underline underline-offset-2' : ''
            }
            onClick={() => setScreen('Ordered')}
          >
            Ordered
          </li>
        </ul>
        <div className="flex gap-1 items-center">
          <UserRound size="24" />
          <div className="text-2xl font-extralight">Welcome Table 0{table}</div>
        </div>
      </div>
      {status === 'welcome' && <Welcome />}
      {status === 'order' && (
        <OrderScreen screen={screen} setScreen={setScreen} />
      )}
    </div>
  )
}

export default Order
