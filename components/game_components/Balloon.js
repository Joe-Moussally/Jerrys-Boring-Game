import { View, Text, Image, TouchableWithoutFeedback, Alert, Dimensions } from 'react-native'
import React from 'react'

const Balloon = ({
    // color='red'
}) => {

    color='red'

  return (
    <TouchableWithoutFeedback
     onPress={() => Alert.alert('Popped')}
    >
      <Image
        style={{resizeMode:'contain',width:Dimensions.get('window').width/4, height:Dimensions.get('window').width/4}}
        className={`absolute m-0 p-0`}
        source={require(`../../assets/game_assets/red_balloon.png`)}
      />
    </TouchableWithoutFeedback>
  )
}

export default Balloon