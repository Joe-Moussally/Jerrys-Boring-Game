import { createSlice } from '@reduxjs/toolkit'
import { Alert } from 'react-native'

const initialState = {
  value: '80%',
}

export const progressWidthSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    resetTimer: (state) => {
      state.value = '82%'
    },
    decreaseTimer: (state) => {
      state.value = state.value.split('%')[0] - 1.05 +'%'
    },
  },
})

export const { decreaseTimer, resetTimer } = progressWidthSlice.actions

export default progressWidthSlice.reducer