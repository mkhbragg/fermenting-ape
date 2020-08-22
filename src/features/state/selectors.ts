import { SystemState } from '../state'

export const getCountValue = (state: SystemState) => state.count.value
export const getUser = (state: SystemState) => state.auth.user
