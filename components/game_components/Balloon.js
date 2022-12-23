import { View, Text, Image, TouchableWithoutFeedback, Alert, Dimensions } from 'react-native'
import React from 'react'

const Balloon = ({
    color
}) => {


  //function that handles increasing the score by one
  const handlePop = () => {
    console.log(color)
  }

  return (
    <TouchableWithoutFeedback
     onPress={handlePop}
    >
      <Image
        style={{resizeMode:'contain',width:Dimensions.get('window').width/4, height:Dimensions.get('window').width/4}}
        className={`absolute m-0 p-0`}
        source={color}
      />
    </TouchableWithoutFeedback>
  )
}

export default Balloon