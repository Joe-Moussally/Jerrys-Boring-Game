import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    incrementScore: (state) => {
      state.value += 1
    },
    reset: (state) => {
      state.value = 0
    },
  },
})

export const { incrementScore, reset } = scoreSlice.actions

export default scoreSlice.reducer