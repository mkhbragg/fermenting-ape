import React, { FC, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { getUser } from '../../../features'
import { SubscriptionView } from './SubscriptionView'
import {
  manageSubscription,
  SubscriptionPrice,
  getSubscription,
  getCustomer,
  cancelSubscription,
} from '../../api'

export const SubscriptionContainer: FC = () => {
  const user = useSelector(getUser)
  const [plan, setPlan] = useState<SubscriptionPrice>()
  const [subscriptionId, setSubscriptionId] = useState<string>()

  const getPlan = async (id: string) => {
    const sub = await getSubscription(id)
    setPlan(sub)
  }

  useEffect(() => {
    const getSubscriptionId = async () => {
      const id = await getCustomer(user)
      setSubscriptionId(id)
      getPlan(id)
    }
    getSubscriptionId()
  }, [user])

  return (
    <>
      <SubscriptionView
        user={user}
        subscription={plan}
        manageSubscription={() => manageSubscription(user)}
        cancelSubscription={() =>
          subscriptionId && cancelSubscription(subscriptionId)
        }
      />
    </>
  )
}
