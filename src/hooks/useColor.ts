import { ColorContext } from '@/contexts/color'
import { useContext } from 'react'

export default function useColor() {
  const useColorContext = useContext(ColorContext)
  return useColorContext
}
