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

export const Hr = ({ style }) => {
  return <View style={{ ...style, borderRadius: 10 }}></View>
}

export const HrCommon = ({ style }) => {
  return (
    <View
      style={{ width: '100%', height: 0.4, backgroundColor: 'grey', ...style }}
    />
  )
}
export const Circle = ({ style }) => {
  return (
    <View
      style={{
        borderRadius: 100,
        width: 5,
        height: 5,
        backgroundColor: 'black',
        ...style,
      }}
    ></View>
  )
}
