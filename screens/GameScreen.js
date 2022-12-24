import { View, Text } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

//components export
import Balloon from '../components/game_components/Balloon'
import Score from '../components/game_components/Score'
import BalloonGenerator from '../components/game_components/BalloonGenerator'

const GameScreen = () => {

  let id = 0

  const [score,setScore] = useState(0)

  const [balloonsArray,setBalloonsArray] = useState([<Balloon id={id} key={id}/>])

  useEffect(() => {
    setInterval(() => {
      id = id + 1
      setBalloonsArray(prev => [...prev,<Balloon id={id} key={id} setScore={setScore}/>])
    },2000)
  },[])

  return (
    <View className="bg-gray-700 flex-1 relative">
      <Score
          number={score}
      />
      {
        balloonsArray.map(element => element)
      }
    </View>
  )
}

export default GameScreen