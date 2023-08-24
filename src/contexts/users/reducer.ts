import { type User } from '@/types'
import { Actions, ActionTypes } from '@/contexts/users/actions'

export type Action = {
  payload?: User | User[]
  type: ActionTypes
}
const { DELETE_USER, EDIT_USER, RESET_USERS, GET_ALL_DATA, SELECT_USER } =
  Actions
export type State = { users: User[]; selectedUser: User }
export const initialState: State = {
  users: [],
  selectedUser: {
    id: '',
    name: {
      first: '',
      last: '',
    },
    picture: '',
  },
}

const isAnUser = (payload: any): payload is User =>
  (payload as User).id !== undefined && !Array.isArray(payload)
const isAListUser = (payload: any): payload is User[] => Array.isArray(payload)

export const usersReducer = (state: State, action: Action): State => {
  let { payload, type } = action
  switch (type) {
    case DELETE_USER: {
      if (isAnUser(payload)) {
        const id = payload.id
        return structuredClone({
          ...state,
          users: state.users.filter(user => user.id !== id),
        })
      }
    }

    case EDIT_USER: {
      if (isAnUser(payload)) {
        const newUser = { ...payload }
        return {
          ...state,
          users: state.users.map(user => {
            if (user.id === newUser.id) {
              return structuredClone({
                ...user,
                name: { first: newUser.name.first, last: newUser.name.last },
              })
            }
            return user
          }),
        }
      }
    }

    case RESET_USERS: {
      if (isAListUser(payload)) {
        return structuredClone({
          ...state,
          users: structuredClone(payload),
        })
      }
    }

    case GET_ALL_DATA: {
      if (isAListUser(payload)) {
        return structuredClone({ ...state, users: payload })
      }
    }

    case SELECT_USER: {
      if (isAnUser(payload)) {
        return structuredClone({ ...state, selectedUser: payload })
      }
    }

    default:
      return state
  }
}
