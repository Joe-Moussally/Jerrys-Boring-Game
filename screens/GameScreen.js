import { View, Text } from 'react-native'
import React, { useState } from 'react'

//components export
import Balloon from '../components/game_components/Balloon'
import Score from '../components/game_components/Score'

const GameScreen = () => {

    const [score,setScore] = useState(0)

    const images = {
      red: require('../assets/game_assets/red_balloon.png'),
      green: require('../assets/game_assets/green_balloon.png'),
      blue: require('../assets/game_assets/blue_balloon.png'),
      green: require('../assets/game_assets/green_balloon.png'),
      yellow: require('../assets/game_assets/yellow_balloon.png'),
      pink: require('../assets/game_assets/pink_balloon.png'),
    }

  return (
    <View className="bg-gray-700 flex-1 relative">
      <Score
          number={309}
      />
      <Balloon
        color={images.blue}
      />
    </View>
  )
}

export default GameScreen