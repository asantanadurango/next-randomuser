import Image from 'next/image'
import { type User } from '../types'
import useUsers from '@/hooks/useUsers'
interface Props {
  users: User[]
  deleteUser: Function
  color: boolean
  setIsOpen: (isOpen: boolean) => void
}

export default function UsersList({
  users,
  deleteUser,
  color,
  setIsOpen,
}: Props) {
  const thTags = ['ID', 'Photo', 'FirsName', 'LastName', 'Actions']
  const { selectUser } = useUsers()
  return (
    <>
      <table className='w-full m-0'>
        <caption className='text-2xl text-right mb-2'>
          Users : {users?.length}
        </caption>
        <thead>
          <tr>
            {thTags.map(tag => (
              <th
                key={tag}
                className='py-1 px-3 border-4 border-slate-500 text-left'>
                {tag}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users?.map(u => (
            <tr key={u.id} className={color ? 'even:bg-cyan-900' : ''}>
              <td className='border-2 border-slate-500 pl-2'>{u.id}</td>
              <td className='border-2 border-slate-500 px-2 w-[90px]'>
                <Image
                  src={u.picture}
                  alt='user avatar'
                  width={70}
                  height={70}
                  className='rounded-full'
                  priority={true}
                />
              </td>
              <td className='border-2 border-slate-500 pl-2'>{u.name.first}</td>
              <td className='border-2 border-slate-500 pl-2'>{u.name.last}</td>
              <td className='border-[1px] border-slate-500 pl-2 flex justify-center items-center gap-3 min-h-[75px]'>
                <button
                  className='border-2 border-red-400 hover:border-red-600 hover:bg-slate-900 hover:text-red-600 py-1 px-3 rounded-lg'
                  onClick={() => deleteUser(u)}>
                  Delete
                </button>
                <button
                  className='border-2 border-cyan-400 hover:border-cyan-600 hover:bg-slate-900 hover:text-cyan-600 py-1 px-3 rounded-lg '
                  onClick={() => {
                    selectUser(u)
                    setIsOpen(true)
                  }}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
