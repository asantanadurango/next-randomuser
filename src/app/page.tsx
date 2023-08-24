'use client'
import { useState } from 'react'
import useUsers from '@/hooks/useUsers'
import UsersList from '@/components/UsersList'
import Modal from '@/components/Modal'
import useColor from '@/hooks/useColor'

export default function HomePage() {
  const { users, restoreData, deleteUser } = useUsers()
  const { color, changeColor } = useColor()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className='w-full max-w-5xl p-3'>
      <header>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '2rem' }}>
          <li>
            <button
              className='border-2 rounded-lg border-cyan-500'
              onClick={() => restoreData()}>
              <span className='active:bg-cyan-800 wfull h-full  p-2 block'>
                Restore Data
              </span>
            </button>
          </li>
          <li>
            <button
              className='border-2 rounded-lg border-cyan-500'
              onClick={() => changeColor(!color)}>
              <span className='active:bg-cyan-800 wfull h-full  p-2 block'>
                {(color ? 'Clear' : 'To') + ' Color'}
              </span>
            </button>
          </li>
        </ul>
      </header>
      <UsersList
        users={users}
        deleteUser={deleteUser}
        color={color}
        setIsOpen={setIsOpen}
      />
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </section>
  )
}
