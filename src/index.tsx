import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './index.css'

import App from './App'
import { store, persistor } from './features/state/store'
import { AuthenticationHook } from './components'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      <AuthenticationHook />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
