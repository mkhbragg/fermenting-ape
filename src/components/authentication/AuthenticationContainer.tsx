import React, { FC } from 'react'
import netlifyIdentity from 'netlify-identity-widget'
import { useSelector } from 'react-redux'

import { getUser } from '../../features'
import { AuthenticationView } from './AuthenticationView'

export const AuthenticationContainer: FC = () => {
  const user = useSelector(getUser)

  const login = () => netlifyIdentity.open('login')
  const logout = () => netlifyIdentity.logout()
  const signup = () => netlifyIdentity.open('signup')

  const manageSubscription = () => {
    fetch('/.netlify/functions/create-manage-link', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    })
      .then((res) => res.json())
      .then((link) => {
        window.location.href = link
      })
      .catch((err) => console.error(err))
  }

  return (
    <AuthenticationView
      user={user}
      login={login}
      logout={logout}
      signup={signup}
      manageSubscription={manageSubscription}
    />
  )
}
