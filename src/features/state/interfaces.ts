import { User } from '../../user'

export interface SystemState {
  count: {
    value: number
  }
  auth: {
    user: User
  }
}
