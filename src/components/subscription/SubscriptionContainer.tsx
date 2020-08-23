import React, { FC, useState, useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'

import { getUser } from '../../features'
import { SubscriptionView } from './SubscriptionView'
import { stripeAxiosInstance } from '../../axios-config'

export interface SubscriptionPrice {
  id: string
  name: string
}

export const SubscriptionContainer: FC = () => {
  const user = useSelector(getUser)
  const [price, setPrice] = useState<SubscriptionPrice>()
  const [subscriptionId, setSubscriptionId] = useState<string>()

  const getSubscription = useCallback(() => {
    stripeAxiosInstance
      .get(`/customers/${user.stripeId}`)
      .then((response) => {
        console.log('customer response', response)
        const sub = response.data.subscriptions.data[0].id
        setSubscriptionId(sub)

        stripeAxiosInstance.get(`/subscriptions/${sub}`).then((response) => {
          const plan: SubscriptionPrice = {
            id: response.data.plan.id,
            name: response.data.plan.nickname,
          }
          console.log('plan', plan)
          setPrice(plan)
        })
      })
      .catch()
  }, [user.stripeId])

  useEffect(() => getSubscription(), [user, getSubscription])

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

  const cancelSubscription = () => {
    stripeAxiosInstance
      .get(`/subscriptions/${subscriptionId}`)
      .then((response) => {
        const params = new URLSearchParams()
        params.append('cancel_at_period_end', 'false')
        params.append('proration_behavior', 'create_prorations')
        params.append('items[0][id]', response.data.items.data[0].id)
        params.append('items[0][price]', 'price_1HJ79aFztjJn44MBVi0gwThY')

        stripeAxiosInstance
          .post(`/subscriptions/${subscriptionId}`, params)
          .then((response) => {
            getSubscription()
          })
          .catch((error) => {
            console.log(error)
          })
      })
  }

  return (
    <>
      <SubscriptionView
        user={user}
        subscription={price}
        manageSubscription={manageSubscription}
        cancelSubscription={() => cancelSubscription()}
      />
    </>
  )
}
