import { UserRound } from 'lucide-react'
import OrderItems from './OrderItems'
import useKitchenOrder from '@/hooks/useKitchenOrder'

const Kitchen = () => {
  const { incommingOrder, preparingOrder, readyOrder } = useKitchenOrder()

  return (
    <div className="text-primary-foreground pt-10">
      <div className="flex gap-1 justify-end">
        <div className="flex gap-1 items-center">
          <UserRound size="24" />
          <div className="text-2xl font-extralight">Kitchen Staff</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-8">
        <div className="text-2xl font-bold text-center mb-2">
          Incoming order
        </div>
        <div className="text-2xl font-bold text-center">Order is cooking</div>
        <div className="text-2xl font-bold text-center">Order is complete</div>
        <OrderItems orders={incommingOrder} type="incoming" />
        <OrderItems orders={preparingOrder} type="preparing" />
        <div>
          <div className="flex flex-col bg-primary p-8 min-h-[370px]">
            {readyOrder.map((item, index) => {
              return (
                <div
                  key={index}
                  className="text-slate-800 text-2xl font-light text-center"
                >
                  Order Table 0{item.table}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kitchen
