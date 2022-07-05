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
import Feather from 'react-native-vector-icons/Feather'
import Octicons from 'react-native-vector-icons/Octicons'
import { HrCommon } from '../Components/LineComponent'
import { main, sample, topup, transaction, rewards, writer } from '../../images'
import { styles } from '../../styles'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
const ProfileTab = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header title={'My Profile'} />
      <HrCommon />
      <ImageBackground source={main} style={styles.bgimage}>
        <ScrollView style={{ paddingVertical: 10 }}>
          <View
            style={{
              width: '100%',
              backgroundColor: 'rgba(252,252,252,0.85)',
              marginVertical: 15,
              height: 130,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                height: '100%',
                width: '100%',
                alignItems: 'center',
                padding: 20,
              }}
            >
              <View style={{ marginRight: 15 }}>
                <Image
                  source={sample}
                  style={{
                    borderWidth: 1,
                    borderColor: 'white',
                    borderRadius: 100,
                    height: 75,
                    width: 75,
                  }}
                />
              </View>
              <View>
                <Text
                  style={{ fontSize: 21, fontWeight: 'bold' }}
                  numberOfLines={1}
                >
                  Vincent Llanto
                </Text>
                <Text style={{ fontSize: 13 }}>ID 123432</Text>
              </View>
            </View>
          </View>
          <View style={{ padding: 10, flexDirection: 'row', flexWrap: 'wrap' }}>
            <Card>
              <Image source={topup} style={{ width: 55, height: 55 }} />
              <Text
                style={{ fontSize: 16, fontWeight: 'bold' }}
                numberOfLines={1}
              >
                Top Up
              </Text>
            </Card>
            <Card>
              <Image source={rewards} style={{ width: 55, height: 55 }} />
              <Text
                style={{ fontSize: 16, fontWeight: 'bold' }}
                numberOfLines={1}
              >
                Rewards
              </Text>
            </Card>
            <Card>
              <Image source={transaction} style={{ width: 55, height: 55 }} />
              <Text
                style={{ fontSize: 16, fontWeight: 'bold' }}
                numberOfLines={1}
              >
                Transactions
              </Text>
            </Card>
            <Card>
              <Image source={writer} style={{ width: 55, height: 55 }} />
              <Text
                style={{ fontSize: 16, fontWeight: 'bold' }}
                numberOfLines={1}
              >
                Become a writer
              </Text>
            </Card>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  )
}

const Card = ({ children }) => {
  return (
    <TouchableOpacity
      style={{
        width: '50%',
        height: 100,
        padding: 5,
      }}
    >
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(242,242,242,0.7)',
          padding: 10,
          justifyContent: 'center',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: 'white',
          shadowRadius: 10,
          shadowColor: 'black',
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  )
}

export default ProfileTab
