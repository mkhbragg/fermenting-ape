import { combineReducers, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { devToolsEnhancer } from 'redux-devtools-extension'
import storage from 'redux-persist/lib/storage'

import { CounterReducer } from '../counter'
import { AuthReducer } from '../authentication'

const authPersistConfig = {
  key: 'auth',
  storage: storage,
}

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  count: CounterReducer,
  auth: persistReducer(authPersistConfig, AuthReducer),
})

export const store = createStore(
  rootReducer,
  /* preloadedState, */ devToolsEnhancer({})
)

export const persistor = persistStore(store)
