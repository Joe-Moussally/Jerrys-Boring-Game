import { Image, TouchableWithoutFeedback, Dimensions, Animated, Easing } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

//expo audio import
import { Audio } from 'expo-av'
import { useDispatch, useSelector } from 'react-redux'
import { incrementScore } from '../../redux/slices/scoreSlice'
import { resetTimer } from '../../redux/slices/progressWidthSlice'
import { endGame } from '../../redux/slices/gameStatusSlice'

const Balloon = ({
  deathBalloon,
}) => {

  const dispatch = useDispatch()

  const gameEnded = useSelector(state => state.gameStatus.gameEnded)

  //pop audios paths object
  let popAudios = {
    1:require("../../assets/game_assets/pop_audio_1.mp3"),
    2:require("../../assets/game_assets/pop_audio_2.mp3"),
    3:require("../../assets/game_assets/pop_audio_3.mp3"),
  }

  const playPopSound = async () => {
    let audioNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1)

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
  const balloonSize = useRef(new Animated.Value(1)).current // balloon transform scale size

  useEffect(() => {
    Animated.timing(bottomValue,
      {
        toValue:-700,
        duration:randomNumbFromInterval(12000,17500),
        useNativeDriver: true,
        easing:Easing.linear
      }).start(() => setCanShow(false))
  },[bottomValue])


  //function that handles increasing the score by one
  const handlePop = () => {

    // if game ended no poping can be done
    if(gameEnded) {
      return
    }
    
    //if wrong balloon popped -> end the game
    if(deathBalloon) {
      dispatch(endGame())
      return
    }
    dispatch(incrementScore()) //increase score
    dispatch(resetTimer()) //reset score
    playPopSound() //play a random audio pop sound
    pop() //pop the balloon and unmount remove component
  }

  //function to animate the pop animation
  const pop = () => {
    Animated.timing(balloonSize,
      {
        toValue:0,
        duration:30,
        useNativeDriver: true,
        easing:Easing.linear
      }).start(() => {
        setCanShow(false)
      })
  }

  if(!canShow) return null

  else return (
    <Animated.View
      className='ml-10 absolute -z-10'
      style={{transform:[{translateY:bottomValue},{scale:balloonSize}],marginLeft:randomNumbFromInterval(0,Dimensions.get('window').width-Dimensions.get('window').width/3.1)}}
    >
    <TouchableWithoutFeedback
     onPress={handlePop}
    >
      <Image
        style={{resizeMode:'contain',width:Dimensions.get('window').width/3.2, height:Dimensions.get('window').width/3.2}}
        className={`m-0 p-0`}
        source={
          deathBalloon?
          require('../../assets/game_assets/death_balloon.png'):
          images[Math.floor(Math.random() * images.length)]
        }
        // source={images[Math.floor(Math.random() * images.length)]}
      />
    </TouchableWithoutFeedback>
    </Animated.View>
  )
}

export default Balloon