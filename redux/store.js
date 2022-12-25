import { configureStore } from '@reduxjs/toolkit'

//slice imports
import scoreReducer from '../redux/slices/scoreSlice'
import progressWidthReducer from '../redux/slices/progressWidthSlice'
import gameStatusReducer from '../redux/slices/gameStatusSlice'

export const store = configureStore({
  reducer: {
    score: scoreReducer,
    progressWidth: progressWidthReducer,
    gameStatus:gameStatusReducer,
  },
})