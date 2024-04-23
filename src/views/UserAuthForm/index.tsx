import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { Checkbox } from '@/components/ui/checkbox'
import { Icons } from '@/components/icon'
import { useAuthStore } from '@/store/auth.store'
import { useTableStore } from '@/store/table.store'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm = ({ className, ...props }: UserAuthFormProps) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [error, setError] = React.useState<string | null>(null)
  const userToRole = useAuthStore((state) => state.userToRole)
  const setRole = useAuthStore((state) => state.setRole)
  const setTable = useTableStore((state) => state.setTable)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)
    const form = event.target as HTMLFormElement
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    const password = (form.elements.namedItem('password') as HTMLInputElement)
      .value

    setTimeout(() => {
      console.log('Form submitted', email, password)
      const newRole = userToRole[email]
      if (!newRole) {
        console.error('User not found')
        setError('User not found')
        setIsLoading(false)
        return
      }

      if (newRole === 'user') {
        // set table number for user
        // cut string 'table' from email
        const table = email.slice(5)
        setTable(table)
      }
      setRole(userToRole[email])
      setIsLoading(false)
    }, 1000)
  }
  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <h1 className="text-3xl font text-primary-foreground">Log in</h1>
      <form onSubmit={onSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label
              className="text-primary-foreground font-light"
              htmlFor="email"
            >
              Email address or user name
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="string"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
            {error && (
              <div className="text-red-400 font-extralight">{error}</div>
            )}
          </div>
          <div className="grid gap-2">
            <Label
              className="text-primary-foreground font-light"
              htmlFor="password"
            >
              Password
            </Label>
            <Input
              id="password"
              type="password"
              autoCapitalize="none"
              autoComplete="none"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button
            disabled={isLoading}
            className="font-light text-lg rounded-full"
          >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Log in
          </Button>
          <div className="flex items-center gap-2">
            <Checkbox
              className="text-primary-foreground font-light"
              id="remember"
            />
            <Label className="text-primary-foreground" htmlFor="remember">
              Remember me
            </Label>
          </div>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        <Icons.google className="mr-2 h-4 w-4" />
        Google
      </Button>
    </div>
  )
}

export default UserAuthForm
