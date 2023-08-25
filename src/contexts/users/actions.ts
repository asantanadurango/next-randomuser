import { type User, type APIResponse } from '@/types'
import { Dispatch } from 'react'
import { Action } from './reducer'

const API_URL = 'https://randomuser.me/api'
export enum Actions {
  DELETE_USER = 'DELETE_USER',
  EDIT_USER = 'EDIT_USER',
  RESET_USERS = 'RESET_USERS',
  GET_ALL_DATA = 'GET_ALL_DATA',
  SELECT_USER = 'SELECT_USER',
}

export type ActionTypes = (typeof Actions)[keyof typeof Actions]
const { DELETE_USER, EDIT_USER, RESET_USERS, GET_ALL_DATA } = Actions
export const deleteUser = (dispatch: Dispatch<Action>) => (payload: User) =>
  dispatch({ payload, type: DELETE_USER })

export const updateUser = (dispatch: Dispatch<Action>) => (payload: User) =>
  dispatch({ payload, type: EDIT_USER })

export const restoreData =
  (dispatch: Dispatch<Action>, payload: User[]) => () => {
    dispatch({ payload, type: RESET_USERS })
  }

export const getAllData =
  (dispatch: Dispatch<Action>) => async (): Promise<User[] | undefined> => {
    try {
      const LIMIT_RESULTS = '10'
      const req = await fetch(`${API_URL}/?results=${LIMIT_RESULTS}`)
      const { results }: APIResponse = await req.json()
      const payload: User[] = results.map((u, idx) => ({
        id: String(idx + 1),
        name: { first: u.name.first, last: u.name.last },
        picture: u.picture.thumbnail,
      }))
      dispatch({ payload, type: GET_ALL_DATA })
      return payload
    } catch (error) {
      console.error({ error })
    }
  }

export const selectUser = (dispatch: Dispatch<Action>) => (payload: User) => {
  dispatch({ payload, type: GET_ALL_DATA })
}
