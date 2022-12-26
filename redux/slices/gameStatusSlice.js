import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  gameEnded: false,
  timer:0
}

export const gameStatusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    endGame: (state) => {
      state.gameEnded = true
    },
    restartGame: (state) => {
      state.gameEnded = false
      state.timer = 0
    },
    startTimer: (state) => {
      state.timer = Date.now()
    },
    endTimer: (state) => {
      console.log("BEFORE",state.timer)
      state.timer = Date.now() - state.timer
      console.log("AFTER",state.timer)
    },
  },
})

export const { endGame, restartGame, startTimer, endTimer } = gameStatusSlice.actions

export default gameStatusSlice.reducer