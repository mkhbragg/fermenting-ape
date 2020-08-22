import React, { FC, useState, useEffect } from 'react'
import netlifyIdentity from 'netlify-identity-widget'

import { User } from './interfaces'

export const Authentication: FC = () => {
  const [subscriber, setSubscriber] = useState<User>()

  useEffect(() => {
    console.log('subscriber', subscriber)
  }, [subscriber])

  const login = () => netlifyIdentity.open('login')
  const signup = () => netlifyIdentity.open('signup')
  const handleUserStateChange = (user?: netlifyIdentity.User | null) => {
    if (user) {
      console.log('user', user)
      setSubscriber({
        email: user.email,
        role: user.role,
        token: user.token?.access_token,
        fullName: user.user_metadata.full_name,
      })
    }
  }

  const manageSubscription = () => {
    fetch('/.netlify/functions/create-manage-link', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${subscriber?.token}`,
      },
    })
      .then((res) => res.json())
      .then((link) => {
        window.location.href = link
      })
      .catch((err) => console.error(err))
  }

  netlifyIdentity.on('init', handleUserStateChange)
  netlifyIdentity.on('login', handleUserStateChange)
  netlifyIdentity.on('logout', handleUserStateChange)
  netlifyIdentity.init()

  return (
    <>
      <button onClick={login}>log in</button>
      <button onClick={signup}>sign up</button>
      <button onClick={manageSubscription}>manage subscription</button>
    </>
  )
}
