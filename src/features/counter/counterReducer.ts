import { CounterActionTypes, CounterActions } from './interfaces'

const initialState = {
  value: 0,
}

export const CounterReducer = (
  state = initialState,
  action: CounterActionTypes
) => {
  switch (action.type) {
    case CounterActions.INCREMENT_COUNTER:
      return { ...state, value: state.value + 1 }
    case CounterActions.DECREMENT_COUNTER:
      return { ...state, value: state.value - 1 }
    default:
      return state
  }
}
