import axios from 'axios'

export const faunaAxiosInstance = axios.create({
  baseURL: 'https://graphql.fauna.com/graphql',
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_FAUNA_SERVER_KEY}`,
  },
})

export const stripeAxiosInstance = axios.create({
  baseURL: 'https://api.stripe.com/v1',
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_STRIPE_SECRET_KEY}`,
  },
})
