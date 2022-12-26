import { View, Text, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseTimer } from '../../redux/slices/progressWidthSlice'
import { endGame, endTimer } from '../../redux/slices/gameStatusSlice'

const Timer = ({

}) => {

  const dispatch = useDispatch()

  const progressWidth = useSelector(state => state.progressWidth.value)

  useEffect(() => {
      //timer bar
      //decrease timer bar width with time
      setInterval(() => {
        dispatch(decreaseTimer())
      },380)
  },[])

  useEffect(() => {
    if(progressWidth.split('%')[0] < 9) {
      dispatch(endTimer())
      dispatch(endGame())
    }
  },[progressWidth])

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

      </View>
    </View>
  )
}

export default Timer