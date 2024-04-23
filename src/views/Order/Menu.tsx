import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { CirclePlus } from 'lucide-react'
import { MenuType } from '@/types/menu'
import { useCartStore } from '@/store/cart.store'

type MenuProps = {
  data: MenuType[]
  setScreen: (screen: string) => void
}

const Menu = ({ data, setScreen }: MenuProps) => {
  const addToCart = useCartStore((state) => state.addToCart)

  const handleViewCartClick = () => {
    console.log('View Cart')
    setScreen('Cart')
  }

  const handleAddToCartClick = (item: MenuType) => {
    console.log('Added to the Cart', item)
    addToCart(item)
  }

  return (
    <div className="grid grid-cols-4 gap-7 text-primary-foreground pt-20">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center gap-2 p-4 bg-primary text-xl font-bold max-w-[260px] "
          >
            <img
              src={item.image}
              alt="sake nigiri"
              className="object-contain h-48 w-96"
            />
            <div>{item.name}</div>
            <div className="flex gap-4 justify-between items-center">
              <div>{item.price} Baht</div>
              <Dialog>
                <DialogTrigger onClick={() => handleAddToCartClick(item)}>
                  <CirclePlus />
                </DialogTrigger>
                <DialogContent className="max-w-[350px]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl mb-6">
                      Added to the Cart
                    </DialogTitle>
                    <div className="flex flex-col gap-6 mx-auto">
                      <Button
                        onClick={handleViewCartClick}
                        className="text-slate-700 text-lg rounded-xl border border-black "
                      >
                        View Cart
                      </Button>
                      <DialogClose className="w-full text-slate-700 text-lg font-extralight rounded-xl border border-black px-4 py-1">
                        Continue Browsing
                      </DialogClose>
                    </div>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Menu
