export enum AuthActions {
  LOGIN = 'login',
  LOGOUT = 'logout',
}

export interface User {
  email: string
  role: string
  fullName: string
  token?: string
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
