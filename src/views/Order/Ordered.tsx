import { Thankyou } from '@/components/Image'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useState } from 'react'
import NoOrderScreen from './NoOrder'
import useOrdered from '@/hooks/useOrdered'

type OrderedProps = {
  setScreen: (screen: string) => void
}

const Ordered = ({ setScreen }: OrderedProps) => {
  const { order, subTotal, vatValue, total } = useOrdered()
  const [isCheckout, setIsCheckout] = useState(false)

  const handleThankyouClick = () => {
    setIsCheckout(false)
    setScreen('Menu')
  }

  const handleConfirmClick = () => {
    setIsCheckout(true)
  }

  if (order.length === 0) {
    return <NoOrderScreen setScreen={setScreen} />
  }

  return (
    <div className="flex gap-24 pt-20 text-slate-800 font-light text-xl">
      <ScrollArea className="h-[620px]">
        <div className="flex flex-col gap-10 ">
          {order.map((item, index) => {
            return (
              <div key={index} className="flex gap-10 p-4 bg-primary w-[550px]">
                <img
                  src={item.image}
                  alt="sake nigiri"
                  className="object-contain w-48 h-36"
                />
                <div className="flex flex-col gap-4">
                  <div className="text-2xl">{item.name}</div>
                  <div>Quantity :{item.quantity}</div>
                  <div className="flex gap-4 justify-between items-center min-w-[280px]">
                    <div>{item.price} Baht</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </ScrollArea>
      {/** CF Summary */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-8 p-8 bg-primary text-xl w-[400px] ">
          <div className="underline underline-offset-2 text-2xl font-normal">
            Summary
          </div>
          <div className="flex flex-col gap-4 items-start">
            <div className="flex justify-between items-center w-full">
              <div className="">subtotal</div>
              <div>{subTotal} Baht</div>
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="">vat 7 %</div>
              <div>{vatValue} Baht</div>
            </div>
            <div className="flex justify-between items-center mt-10 w-full">
              <div className="">total</div>
              <div>{total} Baht</div>
            </div>
          </div>
        </div>
        {/** CF Button */}
        {!isCheckout && (
          <Button
            variant="checkout"
            onClick={handleConfirmClick}
            className="mt-16"
          >
            Checkout
          </Button>
        )}
        {isCheckout && (
          <div className="flex flex-col items-center gap-8 p-8 bg-white text-xl w-[400px] rounded-xl mt-6">
            <div className="text-xl font-normal text-center">
              Our cashier will come to your table to assist with payment. Enjoy
              your meal!
            </div>

            <img
              src={Thankyou}
              alt="thankyou"
              className="h-28"
              onClick={handleThankyouClick}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Ordered
