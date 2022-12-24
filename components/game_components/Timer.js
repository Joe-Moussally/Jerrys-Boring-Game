import { View, Text, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'

import * as Progress from 'react-native-progress'

const Timer = () => {

    const [progressWidth,setProgressWidth] = useState('83%')

    useEffect(() => {
        setInterval(() => {
            setProgressWidth(prev =>{
                let number = prev.split('%')[0] - 1
                return number+'%'
            })
        },1600)
    },[])

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
            <View
                className='h-[20px] bg-green-600 absolute top-[80%] z-0 self-left ml-7'
                style={{width:progressWidth}}
            >

            {/* <Progress.Bar color='red' width={200} progress={0.3} className='absolute top-[80%]'/> */}

            </View>
    </View>
  )
}

export default Timer