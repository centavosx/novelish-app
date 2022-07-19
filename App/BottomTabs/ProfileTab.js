import {
  TouchableOpacity,
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import Header from './Header'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { HrCommon } from '../Components/LineComponent'
import { main, sample, topup, transaction, rewards, writer } from '../../images'
import { styles } from '../../styles'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { CardMain } from '../Components/CardComponents'
import { getProfile } from '../../api/users'
import socket from '../../socket'
import AsyncStorage from '@react-native-async-storage/async-storage'
const ProfileTab = ({ navigation, logout }) => {
  const [data, setData] = useState({})
  useFocusEffect(
    React.useCallback(() => {
      getData()
    }, [])
  )

  const getData = async () => {
    const data = await getProfile()
    socket.connect()
    socket.emit('getNotif', data._id)
    socket.on('notification', (d) => console.log(d))

    setData(data)
  }
  return (
    <View style={{ flex: 1 }}>
      <Header
        title={'My Profile'}
        rightButton={<Entypo name="log-out" size={25} />}
        onPress={() =>
          Alert.alert(null, 'Are you sure you want to logout?', [
            {
              text: 'Cancel',
            },
            {
              text: 'OK',
              onPress: async () => {
                await AsyncStorage.removeItem('ACCESS')
                await AsyncStorage.removeItem('REFRESH')
                logout(false)
              },
            },
          ])
        }
      />
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
                {data.img ? (
                  <Image
                    source={{ uri: data.img }}
                    style={{
                      borderWidth: 1,
                      borderColor: 'white',
                      borderRadius: 100,
                      height: 75,
                      width: 75,
                    }}
                  />
                ) : (
                  <FontAwesome5
                    name="book-reader"
                    color={'#935ADC'}
                    size={42.5}
                    style={{
                      padding: 15,
                      borderWidth: 1,
                      borderColor: 'white',
                      borderRadius: 100,
                    }}
                  />
                )}
              </View>
              <View>
                <Text
                  style={{ fontSize: 21, fontWeight: 'bold' }}
                  numberOfLines={1}
                >
                  {data.name}
                </Text>
                <Text style={{ fontSize: 13 }}>ID {data._id}</Text>
              </View>
            </View>
          </View>
          <View style={{ padding: 10, flexDirection: 'row', flexWrap: 'wrap' }}>
            <Card onPress={() => navigation.navigate('Topup')}>
              <Image source={topup} style={{ width: 55, height: 55 }} />
              <Text
                style={{ fontSize: 16, fontWeight: 'bold' }}
                numberOfLines={1}
              >
                Top Up
              </Text>
            </Card>
            <Card onPress={() => navigation.navigate('Rewards')}>
              <Image source={rewards} style={{ width: 55, height: 55 }} />
              <Text
                style={{ fontSize: 16, fontWeight: 'bold' }}
                numberOfLines={1}
              >
                Rewards
              </Text>
            </Card>
            <Card onPress={() => navigation.navigate('Transactions')}>
              <Image source={transaction} style={{ width: 55, height: 55 }} />
              <Text
                style={{ fontSize: 16, fontWeight: 'bold' }}
                numberOfLines={1}
              >
                Transactions
              </Text>
            </Card>
            <Card onPress={() => navigation.navigate('BeAWriter')}>
              <Image source={writer} style={{ width: 55, height: 55 }} />
              <Text
                style={{ fontSize: 16, fontWeight: 'bold' }}
                numberOfLines={1}
              >
                Become a writer
              </Text>
            </Card>
          </View>
          <TouchableOpacity>
            <CardMain
              style={{
                marginHorizontal: 15,
                backgroundColor: 'rgba(252,252,252,0.8)',
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                <Entypo name="help-with-circle" size={25} color="#FF85CE" />
                <Text
                  numberOfLines={1}
                  style={{
                    flex: 1,
                    alignSelf: 'center',
                    marginLeft: 5,
                    fontWeight: 'bold',
                  }}
                >
                  Help
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    alignSelf: 'center',
                    fontWeight: 'bold',
                    color: '#FF85CE',
                  }}
                >
                  {'>'}
                </Text>
              </View>
            </CardMain>
          </TouchableOpacity>
          <TouchableOpacity>
            <CardMain
              style={{
                marginHorizontal: 15,
                backgroundColor: 'rgba(252,252,252,0.8)',
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                <AntDesign name="infocirlce" size={25} color="#FF85CE" />
                <Text
                  numberOfLines={1}
                  style={{
                    flex: 1,
                    alignSelf: 'center',
                    marginLeft: 5,
                    fontWeight: 'bold',
                  }}
                >
                  About us
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    alignSelf: 'center',
                    fontWeight: 'bold',
                    color: '#FF85CE',
                  }}
                >
                  {'>'}
                </Text>
              </View>
            </CardMain>
          </TouchableOpacity>
          <TouchableOpacity>
            <CardMain
              style={{
                marginHorizontal: 15,
                backgroundColor: 'rgba(252,252,252,0.8)',
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                <Ionicons name="settings" size={25} color="#FF85CE" />
                <Text
                  numberOfLines={1}
                  style={{
                    flex: 1,
                    alignSelf: 'center',
                    marginLeft: 5,
                    fontWeight: 'bold',
                  }}
                >
                  Settings
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    alignSelf: 'center',
                    fontWeight: 'bold',
                    color: '#FF85CE',
                  }}
                >
                  {'>'}
                </Text>
              </View>
            </CardMain>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </View>
  )
}

const Card = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        width: '50%',
        height: 100,
        padding: 5,
      }}
      onPress={() => (onPress ? onPress() : null)}
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
