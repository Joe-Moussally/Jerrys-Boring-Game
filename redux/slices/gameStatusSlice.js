import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  gameEnded: false,
}

export const gameStatusSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    endGame: (state) => {
      state.gameEnded = true
    },
    restartGame: (state) => {
      state.gameEnded = false
    },
  },
})

export const { endGame, restartGame } = gameStatusSlice.actions

export default gameStatusSlice.reducer