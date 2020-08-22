import { User, AuthActionTypes, AuthActions } from './interfaces'

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
