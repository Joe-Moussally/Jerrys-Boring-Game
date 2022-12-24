import { configureStore } from '@reduxjs/toolkit'

//slice imports
import scoreReducer from '../redux/slices/scoreSlice'

export const store = configureStore({
  reducer: {
    score: scoreReducer
  },
})