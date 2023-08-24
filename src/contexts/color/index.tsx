'use client'
import { createContext, ReactNode, useReducer } from 'react'
import { changeColor, Action } from './actions'
import { colorReducer, initialState } from './reducer'

interface Context {
  color: boolean
  changeColor: (payload: Action['payload']) => void
}
export const ColorContext = createContext<Context>({} as Context)

export default function ColorProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(colorReducer, initialState)
  return (
    <ColorContext.Provider
      value={{ color: state.color, changeColor: changeColor(dispatch) }}>
      {children}
    </ColorContext.Provider>
  )
}
