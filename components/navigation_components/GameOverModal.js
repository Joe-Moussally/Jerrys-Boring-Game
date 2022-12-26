import { View, Text, Image, Animated, Easing } from 'react-native'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { restartGame } from '../../redux/slices/gameStatusSlice'
import { reset } from '../../redux/slices/scoreSlice'
import { resetTimer } from '../../redux/slices/progressWidthSlice'

const GameOverModal = ({
  time // in ms
}) => {

  const [seconds,setSeconds] = useState(0)
  const [minutes,setMinutes] = useState(0)
  const [hours,setHours] = useState(0)

  const dispatch = useDispatch()

  //function to restart the game
  const restart = () => {

    //reset score
    dispatch(reset())

    //reset game status
    dispatch(restartGame())

    //reset timer
    dispatch(resetTimer())
  }

  //final score
  const score = useSelector(state => state.score.value)

  const scaleSize = useRef(new Animated.Value(0)).current // balloon transform scale size


  //calculate the time before displaying the modal
  useLayoutEffect(() => {
    //calcute seconds, minutes, hours
    setSeconds(Math.floor(time/1000))
    setMinutes(Math.floor(seconds/60))
    setHours(Math.floor(minutes/60))
  },[])

  useEffect(() => {

    //pop in animation
    Animated.timing(scaleSize,
      {
        toValue:1,
        duration:500,
        useNativeDriver: true,
        easing:Easing.elastic(1)
      }).start(() => {})

      
  },[scaleSize])

  return (
    <Animated.View
      className="absolute self-center rounded-sm border-4 border-gray-800 top-[15%] w-fit"
      style={{
        transform:[{scale:scaleSize}]
      }}
    >
      <Text
        style={{
          color:'black',
          fontFamily:'comic',
          fontSize:50,
          textAlign:'center',
          paddingTop:10,
          backgroundColor:'#f175ff',
          textShadowColor:'white',
          textShadowRadius:5,
        }}
      >GAME OVER</Text>

        {/* Game over description */}
      <View
        style={{
          backgroundColor:'#3476e0',
          padding:10
        }}
      >

        {/* Balloons popped */}
        <View className="flex-column items-center">
          <Text
            style={{
              fontFamily:'comic',
              fontSize:30,
              marginTop:10,
              color:'white',
              textShadowColor:'#2E00000',
              textShadowRadius:10,
            }}
          >BALLOONS POPPED</Text>

          {/* score container*/}
          <View className="flex-row items-center -translate-y-7">
              <Image
                source={require('../../assets/game_assets/balloon_score_icon.png')}
                style={{
                  resizeMode:'contain',
                  width:40,
                  marginHorizontal:10
                }}
              />
              <Text
                style={{
                  fontFamily:'comic',
                  fontSize:35,
                  textShadowColor:'#fff',
                  textShadowRadius:3,
                  color:'black',
                  paddingTop:6
                }}
              >{score}</Text>
          </View>
        </View>

        {/* Time */}
        <View className="flex-column items-center -mt-10">
          <Text
            style={{
              fontFamily:'comic',
              fontSize:30,
              marginTop:10,
              color:'white',
              textShadowColor:'#2E00000',
              textShadowRadius:10,
            }}
          >TIME</Text>

          {/* score container*/}
          <View className="flex-row items-center -translate-y-7">
            <Image
              source={require('../../assets/game_assets/clock.png')}
              style={{
                resizeMode:'contain',
                width:40,
                marginHorizontal:10
              }}
            />
            <Text
              style={{
                fontFamily:'comic',
                fontSize:35,
                textShadowColor:'#fff',
                textShadowRadius:3,
                color:'black',
                paddingTop:6
              }}
            >{hours}:{minutes}:{seconds}</Text>
          </View>

        </View>

        {/* RETRY BUTTON */}
        <Button
          text="RETRY"
          onPress={restart}
        />

      </View>
    </Animated.View>
  )
}

export default GameOverModal