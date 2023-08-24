import { User } from '@/types'
import { InputHTMLAttributes } from 'react'
type InpProps = {
  name: keyof User['name']
} & InputHTMLAttributes<HTMLInputElement>
export default function UserNameInput(props: InpProps) {
  return (
    <input
      {...props}
      className='bg-transparent border-b-2 border-cyan-200 focus:border-b-2 focus:outline-none '
      type='text'
    />
  )
}

const CustomInp = (props: InpProps) => (
  <input
    {...props}
    className='bg-transparent border-b-2 border-cyan-200 focus:border-b-2 focus:outline-none '
    type='text'
  />
)
