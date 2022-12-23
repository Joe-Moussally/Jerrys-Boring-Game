import { View, Text, Image, TouchableWithoutFeedback, Alert, Dimensions } from 'react-native'
import React from 'react'

const Balloon = () => {

  return (
    <TouchableWithoutFeedback
     onPress={() => Alert.alert('ALL')}
    >
      <Image
      style={{resizeMode:'contain',width:Dimensions.get('window').width/4}}
        className={`absolute`}
        source={require('../../assets/game_assets/balloon.png')}
      />
    </TouchableWithoutFeedback>
  )
}

export default Balloon