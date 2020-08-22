import { AuthActionTypes, AuthActions, AuthState } from './interfaces'

const initialState: AuthState = {
  user: undefined,
}

export const AuthReducer = (state = initialState, action: AuthActionTypes) => {
  switch (action.type) {
    case AuthActions.LOGIN:
      return { ...state, user: action.payload }
    case AuthActions.LOGOUT:
      return { ...state, user: undefined }
    default:
      return state
  }
}
