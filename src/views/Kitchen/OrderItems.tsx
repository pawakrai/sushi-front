import { ScrollArea } from '@/components/ui/scroll-area'
import { SushiKitchenGif } from '@/components/Image'
import { OrderType } from '@/types/order'
import { Button } from '@/components/ui/button'
import useKitchenOrder from '@/hooks/useKitchenOrder'
type OrderItemsProps = {
  orders: OrderType[]
  type: 'incoming' | 'preparing'
}

const OrderItems = ({ orders, type }: OrderItemsProps) => {
  const { handleOnCancelClick, handleOnReadyClick, handleOnConfirmClick } =
    useKitchenOrder()

  return (
    <ScrollArea className="h-[620px] text-slate-800">
      <div className=" flex flex-col gap-6 ">
        {orders.map((item, index) => {
          return (
            <div key={index} className="relative flex gap-5 p-4 bg-primary">
              <img
                src={SushiKitchenGif}
                alt="sake nigiri"
                className="object-cover w-36 h-36 rounded-full my-auto"
              />
              <div className="absolute right-2 bottom-12 flex flex-col gap-2">
                {type === 'incoming' && (
                  <>
                    <Button
                      onClick={() => handleOnConfirmClick(item.id)}
                      className="bg-green-500 rounded-full h-10 w-10 hover:bg-green-800"
                    >
                      ✓
                    </Button>
                    <Button
                      onClick={() => handleOnCancelClick(item.id)}
                      className="bg-red-500 text-xl rounded-full h-10 w-10 hover:bg-red-800"
                    >
                      x
                    </Button>
                  </>
                )}
                {type === 'preparing' && (
                  <Button
                    onClick={() => handleOnReadyClick(item.id)}
                    className="bg-orange-400 rounded-full  hover:bg-orange-800"
                  >
                    Ready
                  </Button>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-2xl mb-2">Order Table 0{item.table}</div>
                {item.orderItem?.map((order, index) => {
                  return (
                    <div
                      key={index}
                      className="flex gap-4 justify-between w-[150px]"
                    >
                      <div className="shrink-0">{order.name}</div>
                      <div className="shrink-0">Qty : {order.quantity}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </ScrollArea>
  )
}

export default OrderItems
