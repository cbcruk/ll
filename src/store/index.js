import { configureStore } from '@reduxjs/toolkit'
import server from './server'

const store = configureStore({
  reducer: {
    server,
  },
})

export default store
