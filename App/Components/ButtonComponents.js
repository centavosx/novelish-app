import React, { useState } from 'react'
import {
  TouchableOpacity,
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  TextInput,
} from 'react-native'
export const Checkbox = ({ onPress, style }) => {
  const [check, setCheck] = useState(false)
  return (
    <TouchableOpacity
      style={{
        borderWidth: 2,
        borderColor: '#ABAFBA',
        padding: 3,
        height: 20,
        width: 20,
        ...style,
      }}
      onPress={() => {
        setCheck(!check)
        if (onPress) onPress(!check)
      }}
    >
      <View
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: check ? 'grey' : 'transparent',
        }}
      ></View>
    </TouchableOpacity>
  )
}
