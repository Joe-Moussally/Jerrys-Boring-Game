import { View, Text, Image } from 'react-native'
import React from 'react'

const GameOverModal = () => {
  return (
    <View className="absolute self-center rounded-sm border-4 border-gray-800 top-[15%] w-fit">
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
              fontSize:40,
              marginTop:10,
              color:'white',
              textShadowColor:'#2E00000',
              textShadowRadius:10,
            }}
          >BALLOONS POPPED</Text>

          {/* score container*/}
          <View className="flex-row items-center -translate-y-4">
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
        <View>

        </View>

      </View>
    </View>
  )
}

export default GameOverModal