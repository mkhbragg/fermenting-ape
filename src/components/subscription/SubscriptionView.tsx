import React, { FC } from 'react'

import { User } from '../../features'

interface Props {
  user: User
}

export const SubscriptionView: FC<Props> = ({ user }) => {
  return (
    <>
      <h2>Welcome, {user.fullName}</h2>
      <div>Your subscriptions:</div>
    </>
  )
}
