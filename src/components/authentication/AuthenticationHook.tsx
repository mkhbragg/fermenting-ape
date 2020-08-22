import { FC } from 'react'
import netlifyIdentity from 'netlify-identity-widget'
import { useSelector, useDispatch } from 'react-redux'

import { getUser, setUserLogin, setUserLogout } from '../../features'

export const AuthenticationHook: FC = () => {
  const user = useSelector(getUser)
  const dispatch = useDispatch()

  const handleLogin = (netlifyUser: netlifyIdentity.User) => {
    dispatch(
      setUserLogin({
        email: netlifyUser.email,
        role: netlifyUser.role,
        token: netlifyUser.token?.access_token,
        fullName: netlifyUser.user_metadata.full_name,
      })
    )
  }
  const handleUserStateChange = (netlifyUser?: netlifyIdentity.User | null) => {
    if (netlifyUser) {
      handleLogin(netlifyUser)
    } else {
      console.log('logged out?', user)
      dispatch(setUserLogout())
    }
  }

  // handle state change when identity widget is initialized
  netlifyIdentity.on('init', handleUserStateChange)

  // update store when user logs in
  netlifyIdentity.on('login', handleLogin)

  // update store when user logs out
  netlifyIdentity.on('logout', () => dispatch(setUserLogout()))

  // initialize identity widget
  netlifyIdentity.init()

  return null
}
