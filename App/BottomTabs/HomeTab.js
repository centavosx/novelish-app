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
// import Swiper from 'react-native-swiper'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Header, { SelectTab } from './Header'
import {
  main,
  sample,
  sample1,
  sample2,
  sample3,
  sample4,
  sample5,
  fire,
  jenny,
  whiteShadow,
} from '../../images'
import { styles, windowWidth, windowHeight } from '../../styles'
import { HrCommon } from '../Components/LineComponent'
import { MainButton } from '../Components/ButtonComponents'
import { useState } from 'react'
import React from 'react'
import Home from './HomePages/Home'
import Ranking from './HomePages/Ranking'
const HomePage = createNativeStackNavigator()
const HomeTab = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <HrCommon />
      <SelectTab
        tabItems={['Home', 'Ranking']}
        getValue={(v) =>
          v === 'Ranking'
            ? navigation.navigate('Ranking')
            : navigation.navigate('Home')
        }
      />
      <HomePage.Navigator>
        {/* <HomePage.Screen name="Home" options={{ headerShown: false }}>
          {(props) => <Home {...props} />}
        </HomePage.Screen> */}
        <HomePage.Screen name="Ranking" options={{ headerShown: false }}>
          {(props) => <Ranking {...props} />}
        </HomePage.Screen>
      </HomePage.Navigator>
    </View>
  )
}

export default HomeTab
