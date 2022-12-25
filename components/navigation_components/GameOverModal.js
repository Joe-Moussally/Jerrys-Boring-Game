import { View, Text, Image, Animated, Easing } from 'react-native'
import React, { useEffect, useRef } from 'react'
import Button from './Button'
import { useDispatch } from 'react-redux'
import { restartGame } from '../../redux/slices/gameStatusSlice'
import { reset } from '../../redux/slices/scoreSlice'

const GameOverModal = () => {

  const dispatch = useDispatch()

  //function to restart the game
  const restartGame = () => {

    //reset score
    dispatch(reset())

    //reset game status
    dispatch(restartGame())
  }

  const scaleSize = useRef(new Animated.Value(0)).current // balloon transform scale size


  useEffect(() => {
    //pop in animation
    Animated.timing(scaleSize,
      {
        toValue:1,
        duration:200,
        useNativeDriver: true,
        easing:Easing.linear
      }).start(() => console.log("GAME OVER ANIMATION"))
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
              >500</Text>
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
            >0:13:22</Text>
          </View>

        </View>

        {/* RETRY BUTTON */}
        <Button
          text="RETRY"
          onPress={restartGame}
        />

      </View>
    </Animated.View>
  )
}

export default GameOverModal