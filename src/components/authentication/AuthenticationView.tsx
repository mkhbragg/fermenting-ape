import React, { FC } from 'react'
import styled from '@emotion/styled'

import { User } from '../../user'
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
          <ButtonView inverse onClick={logout}>
            logout
          </ButtonView>
          {/* <button onClick={manageSubscription}>manage subscription</button> */}
        </>
      ) : (
        <Spaced>
          <ButtonView inverse onClick={login}>
            login
          </ButtonView>
          <ButtonView inverse onClick={signup}>
            sign up
          </ButtonView>
        </Spaced>
      )}
    </>
  )
}

const ButtonView = styled(Button)`
  align-self: center;
`

const Spaced = styled.div`
  align-self: center;
  & button:not(:last-child) {
    margin-right: 0.5rem;
  }
`
