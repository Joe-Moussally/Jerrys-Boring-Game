import { View, Text, Image, TouchableWithoutFeedback, Alert, Dimensions, Animated, Easing } from 'react-native'
import React, { useEffect, useRef } from 'react'

const Balloon = ({
    color
}) => {

  const bottomValue = useRef(new Animated.Value(Dimensions.get('window').height-200)).current  // Initial value for bottom: 0

  useEffect(() => {
    Animated.timing(bottomValue,
      {
        toValue:0,
        duration:10000,
        useNativeDriver: true,
        easing:Easing.linear
      }).start()
      
  },[bottomValue])


  //function that handles increasing the score by one
  const handlePop = () => {
    console.log(color)
  }

  return (
    <Animated.View
      className='border-2 border-red-500'
      style={{transform:[{translateY:bottomValue}]}}
    >
    <TouchableWithoutFeedback
     onPress={handlePop}
    >
      <Image
        style={{resizeMode:'contain',width:Dimensions.get('window').width/4, height:Dimensions.get('window').width/4}}
        className={`m-0 p-0 border-500-blue border-2`}
        source={color}
      />
    </TouchableWithoutFeedback>
    </Animated.View>
  )
}

export default Balloon