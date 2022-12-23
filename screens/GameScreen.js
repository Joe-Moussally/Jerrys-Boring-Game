import { View, Text } from 'react-native'
import React from 'react'

//components export
import Balloon from '../components/game_components/Balloon'

const GameScreen = () => {
  return (
    <View className="bg-gray-700 flex-1 relative">
      <Balloon />
    </View>
  )
}

export default GameScreen