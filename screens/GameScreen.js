import { View, Text } from 'react-native'
import React, { useState } from 'react'

//components export
import Balloon from '../components/game_components/Balloon'
import Score from '../components/game_components/Score'

const GameScreen = () => {

  const [score,setScore] = useState(0)

  return (
    <View className="bg-gray-700 flex-1 relative">
      <Score
          number={309}
      />
<Balloon />
<Balloon />
<Balloon />
<Balloon />
<Balloon />

    </View>
  )
}

export default GameScreen