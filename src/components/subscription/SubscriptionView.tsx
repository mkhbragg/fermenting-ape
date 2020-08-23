import React, { FC } from 'react'

import { User } from '../../features'
import { SubscriptionPrice } from './SubscriptionContainer'

interface Props {
  user: User
  subscription?: SubscriptionPrice
  cancelSubscription: () => void
  manageSubscription: () => void
}

export const SubscriptionView: FC<Props> = ({
  user,
  subscription,
  manageSubscription,
  cancelSubscription,
}) => {
  if (!subscription) {
    return <span>loading</span>
  }

  return (
    <>
      <h2>Hi there, {user.fullName}</h2>
      <div>Your subscription:</div>
      {subscription ? (
        <>
          {subscription.name}
          <button onClick={manageSubscription}>manage subscription</button>
          <button onClick={cancelSubscription}>cancel subscription</button>
        </>
      ) : (
        <span>loading</span>
      )}
    </>
  )
}
