import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import { getUser } from '../../features'
import { SubscriptionView } from './SubscriptionView'

export const SubscriptionContainer: FC = () => {
  const user = useSelector(getUser)

  return <SubscriptionView user={user} />
}
