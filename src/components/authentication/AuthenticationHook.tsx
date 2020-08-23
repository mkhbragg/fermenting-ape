import { FC } from 'react'
import * as NetlifyIdentityWidget from 'netlify-identity-widget'
import { useSelector, useDispatch } from 'react-redux'

import { getUser, setUserLogin, setUserLogout } from '../../features'
import { faunaAxiosInstance } from '../../axios-config'

export const AuthenticationHook: FC = () => {
  const user = useSelector(getUser)
  const dispatch = useDispatch()

  const getSubscription = (netlifyId: string) => {
    return faunaAxiosInstance
      .post(
        '',
        JSON.stringify({
          query: `
        query ($netlifyID: ID!) {
          getUserByNetlifyID(netlifyID: $netlifyID) {
            stripeID
          }
        }
          `,
          variables: {
            netlifyID: netlifyId,
          },
        })
      )
      .then((res) => {
        const stripeId = res.data.data.getUserByNetlifyID.stripeID
        return stripeId
      })
      .catch((err) => console.error(err))
  }

  const handleLogin = async (netlifyUser: NetlifyIdentityWidget.User) => {
    const stripeId = await getSubscription(netlifyUser.id)
    dispatch(
      setUserLogin({
        id: netlifyUser.id,
        email: netlifyUser.email,
        role: netlifyUser.role,
        token: netlifyUser.token?.access_token,
        fullName: netlifyUser.user_metadata.full_name,
        stripeId: stripeId,
      })
    )
    NetlifyIdentityWidget.close()
  }

  const handleUserStateChange = (
    netlifyUser?: NetlifyIdentityWidget.User | null
  ) => {
    if (netlifyUser) {
      handleLogin(netlifyUser)
    } else {
      console.log('logged out?', user)
      dispatch(setUserLogout())
    }
  }

  // handle state change when identity widget is initialized
  NetlifyIdentityWidget.on('init', handleUserStateChange)

  // update store when user logs in
  NetlifyIdentityWidget.on('login', handleLogin)

  // update store when user logs out
  NetlifyIdentityWidget.on('logout', () => dispatch(setUserLogout()))

  return null
}
