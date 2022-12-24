import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'

const Timer = () => {
  return (
    <View className="p-0 items-start w-[50%] relative">
            <Image
                source={require('../../assets/game_assets/bar.png')}
                style={{
                    width:'100%',
                    resizeMode:'contain',
                    zIndex:1
                }}
            />
            <View className='h-[20px] w-[90%] bg-green-600 absolute top-[80%] z-0 self-center'>

            </View>
    </View>
  )
}

export default Timer