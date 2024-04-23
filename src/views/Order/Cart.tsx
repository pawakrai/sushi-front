import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useCartStore } from '@/store/cart.store'
import { Check, Trash2 } from 'lucide-react'
import { useState } from 'react'
import NoOrderScreen from './NoOrder'
import useTotalCartPrice from '@/hooks/useTotalCartPrice'
import useCreateOrder from '@/hooks/useCreateOrder'

type CartProps = {
  setScreen: (screen: string) => void
}

const Cart = ({ setScreen }: CartProps) => {
  const [isConfirm, setIsConfirm] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const cartItem = useCartStore((state) => state.cartItem)
  const resetCart = useCartStore((state) => state.resetCart)
  const deleteFromCart = useCartStore((state) => state.deleteFromCart)
  const { subTotal, vatValue, total } = useTotalCartPrice()
  const { createOrder } = useCreateOrder()

  const handleBackToMenuClick = () => {
    setIsConfirm(false)
    setScreen('Menu')
    isSuccess ? resetCart() : null
  }

  const handleConfirmClick = async () => {
    setIsConfirm(true)
    const res = await createOrder(cartItem)
    if (res === 'success') {
      console.log('Order Success')
      setIsSuccess(true)
    }
  }

  if (cartItem.length === 0) {
    return <NoOrderScreen setScreen={setScreen} />
  }

  return (
    <div className="flex gap-24 pt-20 text-slate-800 font-light text-xl">
      <ScrollArea className="h-[620px]">
        <div className="flex flex-col gap-10 ">
          {cartItem.map((item, index) => {
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
                    <Trash2
                      color="#fff"
                      className="cursor-pointer"
                      onClick={() => deleteFromCart(item)}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </ScrollArea>
      {!isConfirm && (
        <div className="flex flex-col gap-16">
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
          <Button variant="confirm" onClick={handleConfirmClick}>
            Confirm Order
          </Button>
        </div>
      )}
      {isConfirm && (
        <div className="m-auto">
          <div className="flex flex-col items-center gap-8 p-8 bg-white text-xl w-[400px] rounded-xl ">
            <div className="text-xl font-normal text-center">
              Your order has been successfully submitted
            </div>
            <div className="h-20 w-20 rounded-full bg-green-500 flex justify-center items-center">
              <Check size="42" color="#fff" />
            </div>
            <Button
              variant="confirm"
              className="bg-white border border-black hover:bg-slate-700 hover:text-primary-foreground"
              onClick={handleBackToMenuClick}
            >
              Back to the menu page
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
