import { createSlice } from '@reduxjs/toolkit'

const serverSlice = createSlice({
  name: 'server',
  initialState: null,
  reducers: {
    setState(state, action) {
      return {
        ...state,
        ...action.payload,
      }
    },
  },
})

export const actions = serverSlice.actions

export default serverSlice.reducer
