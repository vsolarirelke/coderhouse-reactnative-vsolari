import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { shopApi } from '../services/shop'
import { authApi } from '../services/auth'
import cartReducer from '../features/cart/cartSlice'
import authReducer from '../features/auth/authSlice'
import counterReducer from "../features/counter/counterSlice";
import { ordersApi } from '../services/orders'
import { usersApi } from '../services/users'

export const store = configureStore({
  reducer: {
    cart:cartReducer,
    auth:authReducer,
    counter: counterReducer,
    [authApi.reducerPath]: authApi.reducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    [usersApi.reducerPath]:usersApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware,authApi.middleware,ordersApi.middleware,usersApi.middleware),
})

setupListeners(store.dispatch)
