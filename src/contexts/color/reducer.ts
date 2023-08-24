import { Action, actionTypes } from './actions'
const { CHANGE_COLOR } = actionTypes
export interface State {
  color: boolean
}

export const initialState: State = {
  color: false,
}

export const colorReducer = (state: State, action: Action): State => {
  const { payload, type } = action
  switch (type) {
    case CHANGE_COLOR: {
      return { ...state, color: payload }
    }

    default:
      return state
  }
}
