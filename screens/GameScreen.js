import { View, Text, Alert } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

//components imports
import Balloon from '../components/game_components/Balloon'
import Score from '../components/game_components/Score'
import Timer from '../components/game_components/Timer'
import { useSelector } from 'react-redux'

const GameScreen = () => {

  let id = 0

  let progressWidth = useSelector(state => state.progressWidth.value)

  const [balloonsArray,setBalloonsArray] = useState([<Balloon id={id} key={id}/>])

  const score = useSelector(state => state.score.value)

  //interval variable to be set pseudo-randomly for the set interval
  let balloonInterval = 2000

  //function to get random values for the balloon
  function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  //function to be called repeatedly for dynamic timers
  const showBalloon = () => {
    balloonInterval = randomIntFromInterval(800,1900)
    
    //set higher change for lower intervals
    if(balloonInterval>1500) {
      balloonInterval = randomIntFromInterval(1100,1900)
    }
    id = id + 1
    setBalloonsArray(prev => [...prev,<Balloon id={id} key={id}/>])
    setTimeout(showBalloon,balloonInterval)
  }

  useEffect(() => {
    setTimeout(showBalloon,balloonInterval)
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
        balloonsArray.map(balloon => balloon)
      }

    </View>
  )
}

export default GameScreen