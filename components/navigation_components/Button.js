import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({
    text,
    onPress
}) => {
  return (
    <TouchableOpacity
        onPress={onPress}
    >
        <View className="rounded-lg border-2 border-gray-900 justify-center items-center bg-lime-500">
            <Text
                style={{
                    fontFamily:'comic',
                    color:'white',
                    fontSize:40,
                    paddingTop:10,
                    textShadowColor:'black',
                    textShadowRadius:5
                }}
            >{text}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default Button