import {
  TouchableOpacity,
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  TextInput,
  ScrollView,
  Platform,
} from 'react-native'
import {
  background,
  coin,
  spiral,
  v_circle,
  w_circle,
  r1,
  r2,
  r3,
  r4,
  r5,
  p_spiral,
  video,
} from '../../images'
import { styles } from '../../styles'
import Feather from 'react-native-vector-icons/Feather'
import { LinearGradient } from 'expo-linear-gradient'
import { AdComponent } from '../Components/ButtonComponents'
import { getRewards, watchReward, postRewards } from '../../api/rewards'
import React, { useState } from 'react'

const Rewards = ({ navigation }) => {
  const [data, setData] = useState({ datesAttended: [], attempt: 3 })
  const [loading, setLoading] = useState(false)
  const [watched, setWatched] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [clicked2, setClicked2] = useState(false)
  const get = async () => {
    setLoading(true)
    const data = await getRewards()
    setData(data)
    setLoading(false)
  }

  React.useEffect(() => {
    get()
  }, [])

  const watch = async () => {
    setClicked(true)
    const d = await watchReward()
    const newData = { ...data }
    newData.coin = d.coin
    newData.attempt = d.attempt
    setData(newData)
    setClicked(false)
  }

  const post = async () => {
    setClicked2(true)
    const d = await postRewards()
    const newData = { ...d }
    console.log(newData)
    newData.coin = data.coin
    setData(newData)
    setClicked2(false)
  }

  return (
    <ImageBackground source={background} style={styles.bgimage}>
      <ScrollView style={{ paddingVertical: 40 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginHorizontal: 10 }}
        >
          <Feather name="arrow-left-circle" size={33} color="white" />
        </TouchableOpacity>
        <View
          style={{
            height: 200,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 50,
          }}
        >
          <View
            style={{
              backgroundColor: 'rgba(127,48,154, 0.5)',
              width: '100%',
              height: 120,
              borderWidth: 1,
              borderColor: 'white',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ fontSize: 22, color: 'white' }}>
              Current Balance
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={coin}
                style={{ height: 25, width: 25, alignSelf: 'center' }}
              />
              <Text
                style={{
                  marginLeft: 5,
                  fontSize: 28,
                  fontWeight: 'bold',
                  color: 'white',
                }}
                numberOfLines={1}
              >
                {data.coin}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            height: 400,
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.3)',
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              width: '100%',
              padding: 10,
              fontSize: 18,
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            Rewards
          </Text>
          <View
            style={{
              flex: 1,
              borderRadius: 10,
              backgroundColor: '#9473E8',
              paddingVertical: 10,
              flexDirection: 'row',
            }}
          >
            <View style={{ paddingVertical: 2, paddingHorizontal: 5 }}>
              {Array(16)
                .fill(null)
                .map((_, i) => (
                  <Circle img={i % 2 === 0 ? v_circle : w_circle} />
                ))}
            </View>
            <View style={{ flex: 1 }}>
              <Image
                style={{ width: '100%', height: '100%', borderRadius: 10 }}
                source={spiral}
              />
              <View
                style={{
                  position: 'absolute',
                  padding: 5,
                  width: '100%',
                  height: '100%',
                }}
              >
                <View
                  style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}
                >
                  <Card
                    r_img={r1}
                    color={data.datesAttended.includes(0) ? 'grey' : '#F974A4'}
                    width={'33%'}
                    num={1}
                  />
                  <Card
                    r_img={r2}
                    color={data.datesAttended.includes(1) ? 'grey' : '#935ADC'}
                    width={'33%'}
                    num={2}
                  />
                  <Card
                    r_img={r3}
                    color={data.datesAttended.includes(2) ? 'grey' : '#9473E8'}
                    width={'33%'}
                    num={3}
                  />
                </View>
                <View
                  style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}
                >
                  <Card
                    r_img={r4}
                    color={data.datesAttended.includes(3) ? 'grey' : '#9473E8'}
                    width={'33%'}
                    num={4}
                  />
                  <Card
                    r_img={r3}
                    color={data.datesAttended.includes(4) ? 'grey' : '#935ADC'}
                    width={'33%'}
                    num={5}
                  />
                  <Card
                    r_img={r2}
                    color={data.datesAttended.includes(5) ? 'grey' : '#F974A4'}
                    width={'33%'}
                    num={6}
                  />
                </View>
                <View style={{ flex: 1, padding: 5 }}>
                  <BigCard
                    r_img={r5}
                    color={data.datesAttended.includes(6) ? 'grey' : '#FFD700'}
                    width={'100%'}
                    num={7}
                  />
                </View>
              </View>
            </View>
            <View style={{ paddingVertical: 2, paddingHorizontal: 5 }}>
              {Array(16)
                .fill(null)
                .map((_, i) => (
                  <Circle img={i % 2 === 0 ? v_circle : w_circle} />
                ))}
            </View>
          </View>
        </View>
        <View
          style={{
            height: 80,
            paddingHorizontal: 50,
            paddingVertical: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {!loading ? (
            <TouchableOpacity
              style={{ width: 180 }}
              onPress={async () =>
                !clicked2 ? (!data.loggedIn ? await post() : null) : null
              }
            >
              <LinearGradient
                colors={
                  data.loggedIn
                    ? ['grey', 'grey']
                    : ['#FF749A', '#FF89A9', 'pink']
                }
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 10,
                }}
                start={{ x: 0, y: 0.41 }}
                end={{ x: 1, y: 0.8 }}
              />
              <View
                style={{
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}
              >
                <Text
                  style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}
                >
                  {data.loggedIn ? 'Checked In' : 'Check In'}
                </Text>
              </View>
            </TouchableOpacity>
          ) : (
            <Text style={{ textAlign: 'center' }}>Loading rewards...</Text>
          )}
        </View>
        <View
          style={{
            height: 180,
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.3)',
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              width: '100%',
              padding: 10,
              fontSize: 18,
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            Earn More Rewards
          </Text>
          <View
            style={{
              flex: 1,
              borderRadius: 10,
              backgroundColor: '#FFB9C4',
              paddingVertical: 10,
              flexDirection: 'row',
            }}
          >
            <View style={{ paddingVertical: 2, paddingHorizontal: 5 }}>
              {Array(16)
                .fill(null)
                .map((_, i) => (
                  <Circle img={i % 2 === 0 ? v_circle : w_circle} />
                ))}
            </View>
            <View style={{ flex: 1 }}>
              <Image
                style={{ width: '100%', height: '100%', borderRadius: 10 }}
                source={p_spiral}
              />
              <View
                style={{
                  position: 'absolute',
                  padding: 5,
                  width: '100%',
                  height: '100%',
                }}
              >
                <AdComponent
                  sendData={async (v) => {
                    if (v) {
                      setWatched(true)
                      return -1
                    }
                    if (clicked) return -1
                    await watch()
                    setWatched(false)

                    return -1
                  }}
                  num={data.attempt}
                  claim={watched}
                />
              </View>
            </View>
            <View style={{ paddingVertical: 2, paddingHorizontal: 5 }}>
              {Array(16)
                .fill(null)
                .map((_, i) => (
                  <Circle img={i % 2 === 0 ? v_circle : w_circle} />
                ))}
            </View>
          </View>
        </View>
        <View
          style={{
            marginBottom: 80,
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 10,
            margin: 15,
          }}
        >
          <Text style={{ fontWeight: 'bold', marginVertical: 5 }}>
            Reward Rules
          </Text>
          <Text style={{ fontSize: 12, marginVertical: 5 }}>
            1. If you check-in continuously for 7 days, you will earn more
            rewards.
          </Text>
          <Text style={{ fontSize: 12, marginVertical: 5 }}>
            2. Tasks and corresponding rewards renew daily at 00:00 UTC +8.
            Don’t forget to claim your rewards in time.
          </Text>
          <View
            style={{
              marginVertical: 5,
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          >
            <Text style={{ fontSize: 12 }}>
              3. Any other problem? Please click{' '}
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: 'blue',
                  textDecorationLine: 'underline',
                  fontSize: 12,
                }}
              >
                Help Center
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  )
}
const Circle = ({ img }) => {
  return (
    <Image source={img} style={{ height: 11, width: 11, marginVertical: 5 }} />
  )
}
const Card = ({ color, r_img, width, num }) => {
  return (
    <View
      style={{
        width: width,
        height: '100%',
        padding: 5,
      }}
    >
      <View
        style={{
          backgroundColor: color,
          width: '100%',
          height: '100%',
          borderRadius: 10,
          alignItems: 'center',
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}
      >
        <Text
          style={{
            textShadowColor: 'black',
            textShadowRadius: 1,
            textShadowOffset: {
              height: 2,
              width: 1,
            },
            fontWeight: 'bold',
            color: 'white',
          }}
        >
          Day {num}
        </Text>
        <View
          style={{
            height: 40,
            width: '100%',
            justifyContent: 'center',
            marginVertical: 3,
          }}
        >
          <View
            style={{
              height: 30,
              width: '100%',
              backgroundColor: 'rgba(252,252,252,0.5)',
              borderRadius: 10,
            }}
          ></View>
          <Image
            source={r_img}
            style={{
              position: 'absolute',
              alignSelf: 'center',
              height: '100%',
              width: '100%',
            }}
          />
        </View>
        <Text
          style={{
            textShadowColor: 'black',
            textShadowRadius: 1,
            textShadowOffset: {
              height: 1,
              width: 1,
            },
            color: 'white',
          }}
        >
          3 coins
        </Text>
      </View>
    </View>
  )
}
const BigCard = ({ color, r_img, width, num }) => {
  return (
    <View
      style={{
        width: width,
        height: '100%',
        padding: 5,
      }}
    >
      <View
        style={{
          backgroundColor: color,
          width: '100%',
          height: '100%',
          borderRadius: 10,
          alignItems: 'center',
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}
      >
        <View
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            bottom: 0,
          }}
        >
          <Image
            source={r_img}
            style={{
              position: 'absolute',
              alignSelf: 'center',
              height: '100%',
              width: '100%',
            }}
          />
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text
            style={{
              textShadowColor: 'black',
              textShadowRadius: 2,
              textShadowOffset: {
                height: 2,
                width: 1,
              },
              flex: 1,
              color: 'white',
              fontWeight: 'bold',
              alignSelf: 'flex-start',
            }}
          >
            Day {num}
          </Text>
          <Text
            style={{
              textShadowColor: 'black',
              textShadowRadius: 1,
              textShadowOffset: {
                height: 1,
                width: 1,
              },
              color: 'white',
              flex: 1,
              alignSelf: 'flex-end',
              textAlign: 'right',
            }}
          >
            3 coins
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Rewards
