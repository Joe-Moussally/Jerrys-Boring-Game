import { View, Text, Alert } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

//components imports
import Balloon from '../components/game_components/Balloon'
import Score from '../components/game_components/Score'
import Timer from '../components/game_components/Timer'
import GameOverModal from '../components/navigation_components/GameOverModal'

//redux imports
import { useSelector } from 'react-redux'

const GameScreen = () => {

  let id = 0

  let progressWidth = useSelector(state => state.progressWidth.value)

  const [balloonsArray,setBalloonsArray] = useState([<Balloon id={id} key={id}/>])

  const score = useSelector(state => state.score.value)

  //interval variable to be set pseudo-randomly for the set interval
  let balloonInterval = 2000

  const gameEnded = useSelector(state => state.gameStatus.gameEnded)

  //function to get random values for the balloon
  function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  //function to be called repeatedly for dynamic timers
  const showBalloon = () => {
    balloonInterval = randomIntFromInterval(900,1270)
    
    //set higher change for lower intervals
    if(balloonInterval>1000) {
      balloonInterval = randomIntFromInterval(750,1100)
    }
    id = id + 1
    //10% chance for death balloon to appear
    let isDeathBalloon
    // Math.random() < 0.04
    if(true) {
      isDeathBalloon = true
    } else {
      isDeathBalloon = false      
    }

    setBalloonsArray(prev => [...prev,<Balloon id={id} key={id} deathBalloon={isDeathBalloon}/>])
    
    setTimeout(showBalloon,balloonInterval)
  }

  //function that is called to reset the game
  const restartGame = () => {

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
      
      {
        gameEnded?
        <GameOverModal />:null
      }

    </View>
  )
}

export default GameScreen