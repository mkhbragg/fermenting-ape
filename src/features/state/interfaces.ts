import { User } from '../authentication'

export interface SystemState {
  count: {
    value: number
  }
  auth: {
    user: User
  }
}
