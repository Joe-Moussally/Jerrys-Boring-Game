import { Image, TouchableWithoutFeedback, Dimensions, Animated, Easing } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

//expo audio import
import { Audio } from 'expo-av'

const Balloon = ({
  id,
  setScore
}) => {

  //pop audios paths object
  let popAudios = {
    1:require("../../assets/game_assets/pop_audio_1.mp3"),
    2:require("../../assets/game_assets/pop_audio_2.mp3")
  }

  const playPopSound = async () => {
    let audioNumber = Math.floor(Math.random() * (2 - 1 + 1) + 1)

    const {sound} = await Audio.Sound.createAsync(popAudios[audioNumber])
    sound.playAsync()
    setTimeout(() => sound.unloadAsync(),300)
  }

  //function to get random values for the balloon
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
        toValue:-700,
        duration:randomNumbFromInterval(11000,18000),
        useNativeDriver: true,
        easing:Easing.linear
      }).start(() => setCanShow(false))
  },[bottomValue])


  //function that handles increasing the score by one
  const handlePop = () => {
    // setScore(score => score+1) //increase score
    playPopSound() //play a random audio pop sound
  }

  if(!canShow) return null

  return (
    <Animated.View
      className='ml-10 absolute'
      style={{transform:[{translateY:bottomValue}],marginLeft:randomNumbFromInterval(0,Dimensions.get('window').width-Dimensions.get('window').width/3.4)}}
    >
    <TouchableWithoutFeedback
     onPress={handlePop}
    >
      <Image
        style={{resizeMode:'contain',width:Dimensions.get('window').width/3.2, height:Dimensions.get('window').width/3.2}}
        className={`m-0 p-0 border-500-blue border-2`}
        source={images[Math.floor(Math.random() * images.length)]}
      />
    </TouchableWithoutFeedback>
    </Animated.View>
  )
}

export default Balloon