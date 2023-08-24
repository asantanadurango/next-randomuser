'use client'
import { createContext, useReducer, ReactNode, useEffect, useRef } from 'react'
import { type State, usersReducer, initialState } from './reducer'
import {
  deleteUser,
  updateUser,
  restoreData,
  getAllData,
  selectUser,
} from './actions'
import { User } from '@/types'

interface Contex {
  users: State['users']
  deleteUser: (payload: User) => void
  updateUser: (payload: User) => void
  restoreData: () => void
  getAllData: () => Promise<User[] | undefined>
  selectedUser: State['selectedUser']
  selectUser: (payload: User) => void
}

export const UsersContext = createContext<Contex>({} as Contex)

export default function UsersProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(usersReducer, initialState)

  const initialUsers = useRef<User[]>([])
  useEffect(() => {
    getAllData(dispatch)().then(res =>
      res ? (initialUsers.current = res) : null
    )
  }, [])

  return (
    <UsersContext.Provider
      value={{
        users: state.users,
        deleteUser: deleteUser(dispatch),
        updateUser: updateUser(dispatch),
        restoreData: restoreData(dispatch, initialUsers.current),
        getAllData: getAllData(dispatch),
        selectedUser: state.selectedUser,
        selectUser: selectUser(dispatch),
      }}>
      {children}
    </UsersContext.Provider>
  )
}
