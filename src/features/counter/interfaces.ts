export enum CounterActions {
  DECREMENT_COUNTER = 'DECREMENT_COUNTER',
  INCREMENT_COUNTER = 'INCREMENT_COUNTER',
}

interface IncrementCounterAction {
  type: typeof CounterActions.INCREMENT_COUNTER
}
interface DecrementCounterAction {
  type: typeof CounterActions.DECREMENT_COUNTER
}
export type CounterActionTypes = IncrementCounterAction | DecrementCounterAction

export interface CounterState {
  value: number
}
