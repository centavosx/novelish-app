import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  TouchableOpacity,
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  TextInput,
  ScrollView,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Slider from '@react-native-community/slider'
// import Swiper from 'react-native-swiper'
import { BgCard } from '../BottomTabs/HomePages/Home'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { HrCommon } from '../Components/LineComponent'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import { SelectTab } from '../Components/SliderComponents'
import {
  main,
  sample,
  sample1,
  sample2,
  sample3,
  sample4,
  darkBottom,
  sample5,
  darkTop,
  fire,
  jenny,
  whiteShadow,
  coin,
  logo,
} from '../../images'
import { styles, windowWidth, windowHeight } from '../../styles'
import { Circle } from '../Components/LineComponent'
import { MainButton } from '../Components/ButtonComponents'
import { useState } from 'react'
import { CardMain } from '../Components/CardComponents'
import Header from '../BottomTabs/Header'
import React from 'react'

const Comments = ({ navigation, route }) => {
  return (
    <ImageBackground source={main} style={{ flex: 1 }}>
      <View
        style={{
          height: 80,
          width: '100%',
          backgroundColor: 'white',
          padding: 8,
          paddingTop: 30,
          flexDirection: 'row',
          paddingBottom: 4,
        }}
      >
        <Feather name="arrow-left-circle" size={33} style={{ top: 10 }} />
        <View
          style={{
            height: '100%',
            top: 9,
            marginLeft: 10,
          }}
        >
          <Text
            style={{
              textAlignVertical: 'center',
              fontWeight: 'bold',
              color: 'black',
              fontSize: 23,
            }}
          >
            True Love
          </Text>
        </View>
      </View>
      <HrCommon />
      <CardMain style={{ backgroundColor: 'rgba(252,252,252,0.5)' }}>
        <Text style={{ color: '#FF69BB', fontWeight: 'bold' }}>
          Reviews (23203)
        </Text>
      </CardMain>
    </ImageBackground>
  )
}

export default Comments
