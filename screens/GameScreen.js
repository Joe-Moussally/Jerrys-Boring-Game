import { View, Text } from 'react-native'
import React from 'react'

//components export
import Ballon from '../components/game_components/Ballon'

const GameScreen = () => {
  return (
    <View className="bg-gray-700 flex-1">
      <Text className="">GameScreen</Text>
      <Ballon />
    </View>
  )
}

export default GameScreen