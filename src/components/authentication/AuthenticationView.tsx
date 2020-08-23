import React, { FC } from 'react'
import styled from '@emotion/styled'

import { User } from '../../features'
import { Button } from '../global/Button'

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
      {user ? (
        <>
          <Button onClick={logout}>logout</Button>
          {/* <button onClick={manageSubscription}>manage subscription</button> */}
        </>
      ) : (
        <Spaced>
          <Button onClick={login}>login</Button>
          <Button onClick={signup}>sign up</Button>
        </Spaced>
      )}
    </>
  )
}

const Spaced = styled.div`
  & button:not(:last-child) {
    margin-right: 0.5rem;
  }
`
