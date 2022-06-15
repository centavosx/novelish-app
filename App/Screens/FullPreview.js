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
} from '../../images'
import { styles, windowWidth, windowHeight } from '../../styles'
import { Circle } from '../Components/LineComponent'
import { HrCommon } from '../Components/LineComponent'
import { MainButton } from '../Components/ButtonComponents'
import { useState } from 'react'
import { CardMain } from '../Components/CardComponents'
import React from 'react'
const FullPreview = ({ navigation }) => {
  return (
    <ImageBackground source={main} style={styles.bgimage}>
      <View style={{ flex: 1 }}>
        <SelectTab
          tabItems={['Description', 'Parts']}
          topImages={[<HeadImage image={sample3} name="vince" />]}
        >
          <CardMain></CardMain>
        </SelectTab>
      </View>
    </ImageBackground>
  )
}

const HeadImage = ({ image, name }) => {
  return (
    <View style={{ height: 400, width: windowWidth }}>
      <Image
        source={image}
        style={{ position: 'absolute', height: '100%', width: '100%' }}
      />
      <Image
        source={darkTop}
        style={{
          position: 'absolute',
          height: '100%',
          opacity: 0.6,
          width: '100%',
        }}
      />
      <Image
        source={darkBottom}
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          opacity: 1,
          bottom: 1,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          height: '100%',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            marginLeft: 10,
            marginRight: 10,
            backgroundColor: 'transparent',
          }}
        >
          <Image
            source={image}
            style={{
              width: 140,
              height: 180,
              borderRadius: 10,
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            RANKING
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Text style={{ color: 'white', marginRight: 6, fontSize: 12 }}>
              Romance
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                height: '100%',
                alignItems: 'center',
                marginRight: 6,
              }}
            >
              <Circle
                style={{
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  height: 3,
                  width: 3,
                }}
              />
            </View>
            <Text style={{ color: 'white', marginRight: 6, fontSize: 12 }}>
              Romance
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                height: '100%',
                alignItems: 'center',
                marginRight: 6,
              }}
            >
              <Circle
                style={{
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  height: 3,
                  width: 3,
                }}
              />
            </View>
            <Text style={{ color: 'white', fontSize: 12 }}>Romance</Text>
          </View>
          <View style={{ width: '80%' }}>
            <Text style={{ color: 'white' }}>2</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
export default FullPreview
