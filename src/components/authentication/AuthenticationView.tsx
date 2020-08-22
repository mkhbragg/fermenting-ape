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
    <div>
      {user ? (
        <>
          <button onClick={logout}>logout</button>
          <button onClick={manageSubscription}>manage subscription</button>
        </>
      ) : (
        <>
          <button onClick={login}>login</button>
          <button onClick={signup}>sign up</button>
        </>
      )}
    </div>
  )
}
