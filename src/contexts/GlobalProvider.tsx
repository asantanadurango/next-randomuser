import { ReactNode } from 'react'
import ColorProvider from './color/index'
import UsersProvider from './users/index'

export default function GlobalProvider({ children }: { children: ReactNode }) {
  return (
    <UsersProvider>
      <ColorProvider>{children}</ColorProvider>
    </UsersProvider>
  )
}
