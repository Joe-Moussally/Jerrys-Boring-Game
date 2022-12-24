import { View, Text, Image } from 'react-native'
import React from 'react'

// expo font
import * as expoFont from 'expo-font'


const Score = ({
    number
}) => {

    //font
  const [fontsLoaded] = expoFont.useFonts({
    'comic':require('../../assets/fonts/comic.ttf')
  })

  if(!fontsLoaded) return null

  return (
    // absolute right-0 top-0 m-2
    <View className="w-fit flex-row items-center justify-center">
        <Text
            className="text-white text-4xl pt-1 mx-2"
            style={{
                // textShadowColor:'black',
                // textShadowRadius:7,
                fontFamily:'comic'
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