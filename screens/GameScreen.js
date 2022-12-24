import { View, Text } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

//components imports
import Balloon from '../components/game_components/Balloon'
import Score from '../components/game_components/Score'
import Timer from '../components/game_components/Timer'

const GameScreen = () => {

  let id = 0

  const [score,setScore] = useState(0)

  const [balloonsArray,setBalloonsArray] = useState([<Balloon id={id} key={id} setScore={setScore}/>])

  useEffect(() => {
    setInterval(() => {
      id = id + 1
      setBalloonsArray(prev => [...prev,<Balloon id={id} key={id} setScore={setScore}/>])
    },2000)
  },[])

  return (
    <View className="bg-gray-700 flex-1 relative">

      {/* top game screen container */}
      <View className="flex-row justify-between p-1 items-center h-[60px]">
        <Timer />
        <Score
            number={score}
        />
      </View>

      {
        balloonsArray.map(element => element)
      }

    </View>
  )
}

export default GameScreen