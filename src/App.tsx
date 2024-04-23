import { useAuthStore } from './store/auth.store'
import UserAuthForm from './views/UserAuthForm'
import Order from './views/Order'
import Kitchen from './views/Kitchen'

function App() {
  const role = useAuthStore((state) => state.role)
  return (
    <div className="bg-[#293241] min-h-screen">
      <div className="container">
        {!role && <UserAuthForm className="w-[580px] mx-auto pt-48" />}
        {role === 'user' && <Order />}
        {role === 'kitchenStaff' && <Kitchen />}
      </div>
    </div>
  )
}

export default App
