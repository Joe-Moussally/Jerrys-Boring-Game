import { Image, TouchableWithoutFeedback, Dimensions, Animated, Easing } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

const Balloon = ({
    color,
}) => {

  function randomNumbFromInterval(min, max) { 
    return Math.random() * (max - min + 1) + min
  }

  const images = [
    require('../../assets/game_assets/red_balloon.png'),
    require('../../assets/game_assets/green_balloon.png'),
    require('../../assets/game_assets/blue_balloon.png'),
    require('../../assets/game_assets/green_balloon.png'),
    require('../../assets/game_assets/yellow_balloon.png'),
    require('../../assets/game_assets/pink_balloon.png'),
  ]

  const [canShow,setCanShow] = useState(true)

  const bottomValue = useRef(new Animated.Value(Dimensions.get('window').height)).current  // Initial value for bottom: 0

  useEffect(() => {
    Animated.timing(bottomValue,
      {
        toValue:-200,
        duration:randomNumbFromInterval(5500,8500),
        useNativeDriver: true,
        easing:Easing.linear
      }).start(() => setCanShow(false))
  },[bottomValue])


  //function that handles increasing the score by one
  const handlePop = () => {
    console.log(color)
  }

  if(!canShow) return null

  return (
    <Animated.View
      className='border-2 border-red-500 ml-10'
      style={{transform:[{translateY:bottomValue}],marginLeft:randomNumbFromInterval(0,Dimensions.get('window').width-Dimensions.get('window').width/4)}}
    >
    <TouchableWithoutFeedback
     onPress={handlePop}
    >
      <Image
        style={{resizeMode:'contain',width:Dimensions.get('window').width/4, height:Dimensions.get('window').width/4}}
        className={`m-0 p-0 border-500-blue border-2`}
        source={images[Math.floor(Math.random() * images.length)]}
      />
    </TouchableWithoutFeedback>
    </Animated.View>
  )
}

export default Balloon