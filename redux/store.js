import { configureStore } from '@reduxjs/toolkit'

//slice imports
import scoreReducer from '../redux/slices/scoreSlice'
import progressWidthReducer from '../redux/slices/progressWidthSlice'

export const store = configureStore({
  reducer: {
    score: scoreReducer,
    progressWidth: progressWidthReducer
  },
})