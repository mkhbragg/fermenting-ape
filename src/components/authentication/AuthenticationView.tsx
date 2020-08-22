import React, { FC } from 'react'

import { User } from '../../features'

interface Props {
  user: User
  login: () => void
  logout: () => void
  signup: () => void
  manageSubscription: () => void
}

export const AuthenticationView: FC<Props> = ({
  user,
  login,
  logout,
  signup,
  manageSubscription,
}) => {
  return (
    <>
      <button onClick={user ? logout : login}>
        {user ? 'log out' : 'log in'}
      </button>
      {!user && <button onClick={signup}>sign up</button>}
      {user && (
        <button onClick={manageSubscription}>manage subscription</button>
      )}
    </>
  )
}
