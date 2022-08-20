import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './features/UserList/UserList.slice'

export const store = configureStore({
    reducer:UserReducer
})