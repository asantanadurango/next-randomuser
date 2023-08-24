import { useContext } from 'react'
import { UsersContext } from '@/contexts/users/index'

export default function useUsers() {
  return useContext(UsersContext)
}
