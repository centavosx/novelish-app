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
import { AdMobRewarded } from 'expo-ads-admob'
import { video } from '../../images'
import { watchReward } from '../../api/rewards'
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
  radius,
  height,
  width,
  txtStyle,
  paddingTop,
  paddingBottom,
  paddingLeft,
  marginTop,
  marginBottom,
  paddingRight,
  fontSize,
}) => {
  return (
    <TouchableOpacity
      style={{
        margin: 5,
        width: width ? width : 110,
        height: height ? height : 30,

        marginTop: marginTop ?? 0,
        marginBottom: marginBottom ?? 0,
      }}
      onPress={() => (onPress ? onPress() : null)}
      // onPress={async () => await setReader(false)}
    >
      <LinearGradient
        colors={['#FF749A', '#FF89A9', 'pink']}
        style={{
          width: width ? width : 110,
          height: height ? height : 33,
          borderRadius: radius ? radius : 10,
        }}
        start={{ x: 0, y: 0.41 }}
        end={{ x: 1, y: 0.8 }}
      />
      <Text
        style={[
          styles.buttonTxt,
          {
            position: 'absolute',
            textAlign: 'center',
            marginTop: paddingTop ?? 6,
            marginBottom: paddingBottom ?? 0,
            marginLeft: paddingLeft ?? 0,
            marginRight: paddingRight ?? 0,
            fontSize: fontSize ?? null,
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

export const AdComponent = ({ sendData, num, claim }) => {
  const [data, setData] = useState({ ...AdMobRewarded })
  const adUnit = Platform.select({
    ios: 'ca-app-pub-3940256099942544/1712485313',
    // https://developers.google.com/admob/android/test-ads
    android: 'ca-app-pub-3940256099942544/5224354917',
  })
  const loadAd = async () => {
    await data.setAdUnitID(adUnit)
    await data.requestAdAsync()
  }
  React.useEffect(() => {
    data.addEventListener('rewardedVideoUserDidEarnReward', async (reward) => {
      sendData(true)
    })
    data.addEventListener('rewardedVideoDidFailToLoad', async () => {
      loadAd()
    })
    data.addEventListener('rewardedVideoDidDismiss', async () => {
      loadAd()
    })
    loadAd()
    return () => {
      data.removeEventListener('rewardedVideoUserDidEarnReward')
      data.removeEventListener('rewardedVideoDidFailToLoad')
      data.removeEventListener('rewardedVideoDidDismiss')
    }
  }, [])
  return (
    <CardEarn
      watched={claim}
      attempt={num}
      num={3}
      onPress={async () => {
        if (3 - num === 0) return -1
        if (!claim) {
          await data.showAdAsync()
          return -1
        }

        sendData(false)
        return -1
      }}
    />
  )
}

const CardEarn = ({ num, onPress, watched, attempt }) => {
  return (
    <View
      style={{
        flex: 1,

        margin: 5,
        borderRadius: 10,
      }}
    >
      <LinearGradient
        colors={['#AB8CFA', '#A487EF', '#939DFF']}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 10,
          position: 'absolute',
        }}
        start={{ x: 0, y: 0.41 }}
        end={{ x: 1, y: 0.8 }}
      />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: 5,
        }}
      >
        <Image source={video} style={{ width: 80, height: 49 }} />
        <View style={{ flex: 1, marginRight: 4 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
            Daily Ad x{3 - attempt}
          </Text>
          <Text numberOfLines={2} style={{ fontSize: 12 }}>
            Watch up to {num} ads daily to get rewards
          </Text>
        </View>
        <TouchableOpacity
          style={{ width: 80, height: 40 }}
          onPress={() => (onPress ? onPress() : null)}
        >
          <LinearGradient
            colors={
              3 - attempt === 0
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
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              {watched ? 'Claim' : 'Watch'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
