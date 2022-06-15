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
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from '../../styles'
import { gradient } from '../../images'
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

export const MainButton = ({
  onPress,
  text,
  buttonStyle,
  imageStyle,
  txtStyle,
}) => {
  return (
    <TouchableOpacity
      style={{ margin: 5, width: 110, height: 30 }}
      onPress={() => (onPress ? onPress() : null)}
      // onPress={async () => await setReader(false)}
    >
      <LinearGradient
        colors={['#FF749A', '#FF89A9', 'pink']}
        style={{ width: 110, height: 33, borderRadius: 10 }}
        start={{ x: 0, y: 0.41 }}
        end={{ x: 1, y: 0.8 }}
      />
      <Text
        style={[
          styles.buttonTxt,
          {
            position: 'absolute',
            textAlign: 'center',
            marginTop: 6,
            width: '100%',
          },
          txtStyle,
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
}
