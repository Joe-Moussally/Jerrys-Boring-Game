import { createSlice } from '@reduxjs/toolkit'
import { Alert } from 'react-native'

const initialState = {
  value: '82%',
}

export const progressWidthSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    resetTimer: (state) => {
      state.value = '82%'
    },
    decreaseTimer: (state) => {
      state.value = state.value.split('%')[0] - .86 +'%'
    },
  },
})

export const { decreaseTimer, resetTimer } = progressWidthSlice.actions

export default progressWidthSlice.reducer