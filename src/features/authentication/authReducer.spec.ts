import { AuthReducer } from './authReducer'
import { AuthActionTypes, User, AuthActions } from './interfaces'

const testUser: User = {
  email: 'test@email.com',
  role: 'free',
  token: 'token',
  fullName: 'Full Name',
}

describe('features > auth > AuthReducer', () => {
  it(`logs in, if ${AuthActions.LOGIN} action is provided`, () => {
    const initialState = {
      user: undefined,
    }

    const expectedState = {
      user: testUser,
    }

    const action: AuthActionTypes = {
      type: AuthActions.LOGIN,
      payload: testUser,
    }

    expect(AuthReducer(initialState, action)).toEqual(expectedState)
  })

  it(`logs out, if ${AuthActions.LOGOUT} action is provided`, () => {
    const initialState = {
      user: testUser,
    }

    const expectedState = {
      user: undefined,
    }

    const action: AuthActionTypes = {
      type: AuthActions.LOGOUT,
      payload: undefined,
    }

    expect(AuthReducer(initialState, action)).toEqual(expectedState)
  })
})
