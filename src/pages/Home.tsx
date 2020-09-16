import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

import { SubscriptionContainer, SubscriptionWizard } from '../subscription'
import { getUser } from '../features'

export const Home: React.FC = () => {
  const user = useSelector(getUser)
  return (
    <Fragment>
      {user && <SubscriptionContainer />}
      {!user && <SubscriptionWizard />}
    </Fragment>
  )
}
