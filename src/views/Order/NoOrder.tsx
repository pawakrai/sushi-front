import { NoOrder } from '@/components/Image'
import { Button } from '@/components/ui/button'

type NoOrderScreenProps = {
  setScreen: (screen: string) => void
}

const NoOrderScreen = ({ setScreen }: NoOrderScreenProps) => {
  return (
    <div className="flex gap-24 justify-between pt-20 text-slate-800 font-light text-xl">
      <div className="bg-primary w-[500px] h-[600px] text-4xl flex items-center justify-center">
        No order
      </div>

      <div className="flex flex-col gap-16">
        <img src={NoOrder} alt="NoOrder" className="object-contain" />
        {/** CF Button */}
        <Button
          variant="default"
          className="rounded-full"
          onClick={() => {
            setScreen('Menu')
          }}
        >
          Get your sushi
        </Button>
      </div>
    </div>
  )
}

export default NoOrderScreen
