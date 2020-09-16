// import { useCallback } from 'react'

import { User } from '../../user'
import { stripeAxiosInstance } from '../../axios-config'
import { SubscriptionPrice } from './interfaces'

export const cancelSubscription = (subscriptionId: string) => {
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
          getSubscription(subscriptionId)
        })
        .catch((error) => {
          console.log(error)
        })
    })
}

export const getCustomer = async (user: User) => {
  const response = await stripeAxiosInstance
    .get(`/customers/${user.stripeId}`)
    .then((response) => {
      console.log('customer response', response)
      const sub = response.data.subscriptions.data[0].id
      return sub
    })
    .catch()
  return response
}

export const getSubscription = async (subscriptionId: string) => {
  const response = await stripeAxiosInstance
    .get(`/subscriptions/${subscriptionId}`)
    .then((response) => {
      const plan: SubscriptionPrice = {
        id: response.data.plan.id,
        name: response.data.plan.nickname,
      }
      return plan
    })
    .catch()
  return response
}

export const manageSubscription = (user: User) => {
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
