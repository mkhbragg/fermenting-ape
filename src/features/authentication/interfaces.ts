import { User } from '../../user'

export enum AuthActions {
  LOGIN = 'login',
  LOGOUT = 'logout',
}

interface LogInAction {
  type: AuthActions.LOGIN
  payload: User
}

interface LogOutAction {
  type: AuthActions.LOGOUT
  payload: undefined
}

export type AuthActionTypes = LogInAction | LogOutAction

export interface AuthState {
  user?: User
}
