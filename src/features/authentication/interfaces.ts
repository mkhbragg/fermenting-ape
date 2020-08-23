export enum AuthActions {
  LOGIN = 'login',
  LOGOUT = 'logout',
}

export interface User {
  id: string
  email: string
  role: string
  fullName: string
  stripeId: string
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
