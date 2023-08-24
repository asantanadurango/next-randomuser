import { Dispatch } from 'react'

export enum actionTypes {
  CHANGE_COLOR = 'CHANGE_COLOR',
}
export type ActionTypes = (typeof actionTypes)[keyof typeof actionTypes]
const { CHANGE_COLOR } = actionTypes

export interface Action {
  payload: boolean
  type: ActionTypes
}

export const changeColor =
  (dispatch: Dispatch<Action>) => (payload: Action['payload']) =>
    dispatch({ payload, type: CHANGE_COLOR })
