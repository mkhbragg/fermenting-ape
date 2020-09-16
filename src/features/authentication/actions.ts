import { AuthActionTypes, AuthActions } from './interfaces'
import { User } from '../../user'

export const setUserLogin = (user: User): AuthActionTypes => {
  return {
    type: AuthActions.LOGIN,
    payload: user,
  }
}

export const setUserLogout = (): AuthActionTypes => {
  return {
    type: AuthActions.LOGOUT,
    payload: undefined,
  }
}
