import React, { FC } from 'react'
import * as NetlifyIdentityWidget from 'netlify-identity-widget'
import { useSelector } from 'react-redux'

import { getUser } from '../../features'
import { AuthenticationView } from './AuthenticationView'

export const AuthenticationContainer: FC = () => {
  const user = useSelector(getUser)

  const login = () => NetlifyIdentityWidget.open('login')
  const logout = () => NetlifyIdentityWidget.logout()
  const signup = () => NetlifyIdentityWidget.open('signup')

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
