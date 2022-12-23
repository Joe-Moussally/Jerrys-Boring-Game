import { View, Text, Image } from 'react-native'
import React from 'react'

const Score = ({
    number
}) => {
  return (
    <View className="w-fit absolute right-0 flex-row items-center justify-center">
        <Text
            className="text-white text-4xl font-bold pt-1 mx-2"
            style={{
                textShadowColor:'black',
                textShadowRadius:7,
            }}
        >{number}</Text>
        <Image
            className="w-[40px] h-[40px]"
            source={require('../../assets/game_assets/balloon_score_icon.png')}
        />
    </View>
  )
}

export default Score