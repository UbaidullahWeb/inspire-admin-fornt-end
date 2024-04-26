import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { inspireApis } from './InspireApis'


export const store = configureStore({
  reducer: {
    [inspireApis.reducerPath]: inspireApis.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(inspireApis.middleware),
})
setupListeners(store.dispatch)