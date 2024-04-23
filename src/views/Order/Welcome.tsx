import { Button } from '@/components/ui/button'
import { useTableStore } from '@/store/table.store'
import sushi from '@/assets/sushi-welcome.png'

const Order = () => {
  const setStatus = useTableStore((state) => state.setStatus)

  const navigatToOrderScreen = () => {
    console.log('Navigate to order screen')
    setStatus('order')
  }

  return (
    <div className="">
      <div className="flex">
        <div className="flex flex-col items-center w-[400px] gap-9 mt-[200px] ml-28">
          <h1 className="text-3xl font-light">ชูชิเฉยๆ</h1>
          <h2 className="text-xl font-light">Sushi is always a good idea.</h2>
          <Button onClick={navigatToOrderScreen}>ORDER NOW</Button>
        </div>
        <img src={sushi} alt="sushi" className="h-[488px] translate-x-11" />
      </div>
    </div>
  )
}

export default Order
