import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

import { SubscriptionContainer } from '../subscription'
import { getUser } from '../features'
import { About } from './About'

export const Home: React.FC = () => {
  const user = useSelector(getUser)
  return (
    <Fragment>
      {user && <SubscriptionContainer />}
      {/* TODO: reenable {!user && <SubscriptionWizard />} */}
      {!user && <About />}
    </Fragment>
  )
}
