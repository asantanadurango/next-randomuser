import { ChangeEvent, FormEvent, useState } from 'react'
import { RiCloseLine } from 'react-icons/ri'
import './modal.css'
import Image from 'next/image'
import useUsers from '@/hooks/useUsers'
import UserNameInput from '@/components/UserNameInput'
export type ModalProps = {
  setIsOpen: Function
}

export default function Modal({ setIsOpen }: ModalProps) {
  const preventDefault = async (e: FormEvent<HTMLFormElement>) =>
    e.preventDefault()
  const { selectedUser, updateUser } = useUsers()
  const [newUser, setNewUser] = useState(structuredClone(selectedUser))
  const editUser = (e: ChangeEvent<HTMLInputElement>) => {
    setNewUser({
      ...newUser,
      name: { ...newUser.name, [e.target.name]: e.target.value },
    })
  }
  return (
    <>
      <div
        className={
          'fixed left-0 top-0  w-full h-full border-2 bg-black bg-opacity-70 custom-grow'
        }>
        <div className='fixed left-[50%] top-[50%]  w-[400px] translate-x-[-50%] translate-y-[-50%] border-4 border-cyan-800 rounded-md transition-transform flex flex-col justify-between p-4'>
          <button className='self-end ' onClick={() => setIsOpen(false)}>
            <RiCloseLine className='-mb-3 scale-[2] text-red-500 border-2 border-cyan-200' />
          </button>
          <div>
            <h5 className='text-4xl font-bold text-teal-300'>Edit</h5>
          </div>
          <picture className='self-center mb-4'>
            <Image
              alt='selected user'
              src={newUser.picture}
              width={90}
              height={90}
              className='rounded-full'
              priority={true}
            />
          </picture>
          <form
            className='flex flex-col justify-around gap-5 '
            onSubmit={preventDefault}>
            <label>
              <span className='mr-3'>First Name</span>
              <UserNameInput
                defaultValue={selectedUser.name.first}
                name='first'
                onChange={editUser}
                autoFocus
              />
            </label>
            <label>
              <span className='mr-3'>Last Name</span>
              <UserNameInput
                defaultValue={selectedUser.name.last}
                name='last'
                onChange={editUser}
              />
            </label>
            <button
              className=' self-center mt-4'
              onClick={() => {
                updateUser(newUser)
                setIsOpen(false)
              }}>
              <span className='py-1 px-3 border-[3px] border-cyan-300 rounded-xl hover:bg-slate-600 font-normal text-xl'>
                Update
              </span>
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
