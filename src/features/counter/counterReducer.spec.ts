import { CounterReducer } from './counterReducer'
import { CounterActionTypes, CounterActions } from './interfaces'

describe('features > counter > counterReducer', () => {
  it(`increments value, if ${CounterActions.INCREMENT_COUNTER} action is provided`, () => {
    const initialState = {
      value: 0,
    }

    const expectedState = {
      value: 1,
    }

    const action: CounterActionTypes = {
      type: CounterActions.INCREMENT_COUNTER,
    }

    expect(CounterReducer(initialState, action)).toEqual(expectedState)
  })

  it(`increments value, if ${CounterActions.DECREMENT_COUNTER} action is provided`, () => {
    const initialState = {
      value: 0,
    }

    const expectedState = {
      value: -1,
    }

    const action: CounterActionTypes = {
      type: CounterActions.DECREMENT_COUNTER,
    }

    expect(CounterReducer(initialState, action)).toEqual(expectedState)
  })
})
