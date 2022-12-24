import { View, Text } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

//components imports
import Balloon from '../components/game_components/Balloon'
import Score from '../components/game_components/Score'
import Timer from '../components/game_components/Timer'
import { useSelector } from 'react-redux'

const GameScreen = () => {

  let id = 0

  const [balloonsArray,setBalloonsArray] = useState([<Balloon id={id} key={id}/>])

  const [progressWidth,setProgressWidth] = useState('81%')

  const score = useSelector(state => state.score.value)

  useEffect(() => {

    //balloons generator timer
    setInterval(() => {
      id = id + 1
      setBalloonsArray(prev => [...prev,<Balloon id={id} key={id}/>])
    },2000)

    //timer bar
    //decrease timer bar width with time
    setInterval(() => {
        setProgressWidth(prev => prev.split('%')[0] - .75 +'%')
    },1600)
  },[])

  return (
    <View className="bg-gray-700 flex-1 relative">

      {/* top game screen container */}
      <View className="flex-row justify-between p-1 items-center h-[60px]">
        <Timer
          progressWidth={progressWidth}
        />
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