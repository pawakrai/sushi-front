import { useCartStore } from '@/store/cart.store'

export default function useTotalCartPrice() {
  const cartItems = useCartStore((state) => state.cartItem)

  const subTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )
  const vat = subTotal * 0.07

  const total = subTotal + vat

  const vatValue = vat.toFixed(2)

  return { subTotal, vatValue, total }
}
