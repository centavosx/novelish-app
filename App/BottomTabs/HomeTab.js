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
import Header from './Header'
import Entypo from 'react-native-vector-icons/Entypo'
import { SimpleTab } from '../Components/SliderComponents'
import { HrCommon } from '../Components/LineComponent'
import React from 'react'
import Home from './HomePages/Home'
import Ranking from './HomePages/Ranking'
const HomePage = createNativeStackNavigator()

const HomeTab = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header
        logo={true}
        title="Novelish"
        rightButton={<Entypo name="magnifying-glass" size={25} />}
      />
      <HrCommon />
      <SimpleTab
        tabItems={['Home', 'Ranking']}
        navigateTab={['Home', 'Ranking']}
        navigation={navigation}
      />
      <HomePage.Navigator>
        <HomePage.Screen name="Home" options={{ headerShown: false }}>
          {(props) => <Home {...props} />}
        </HomePage.Screen>
        <HomePage.Screen name="Ranking" options={{ headerShown: false }}>
          {(props) => <Ranking {...props} />}
        </HomePage.Screen>
      </HomePage.Navigator>
    </View>
  )
}

export default HomeTab
