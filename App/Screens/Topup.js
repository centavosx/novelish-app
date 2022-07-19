import {
  TouchableOpacity,
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  TextInput,
  ScrollView,
  Modal,
} from 'react-native'

import { WebView } from 'react-native-webview'

import {
  background,
  coin,
  spiral,
  r1,
  r2,
  r3,
  r4,
  five_dollars,
  ten_dollars,
  twenty_dollars,
  thirty_dollars,
  fifty_dollars,
  hundred_dollars,
  c_bg,
} from '../../images'
import { styles } from '../../styles'
import Feather from 'react-native-vector-icons/Feather'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { getCoins, addCoin } from '../../api/transactions'
const Topup = ({ navigation }) => {
  const [data, setData] = useState({ coins: [{}, {}, {}, {}, {}, {}] })
  const [openPaypal, setOpenPaypal] = useState({
    open: false,
    url: null,
  })
  React.useEffect(() => {
    get()
  }, [])
  const get = async () => {
    setData(await getCoins())
    setOpenPaypal({ open: false, url: null })
  }
  const add = async (name) => {
    const url = await addCoin(name)
    if (url) setOpenPaypal({ open: true, url })
  }

  return (
    <ImageBackground source={background} style={styles.bgimage}>
      <Modal
        visible={openPaypal.open}
        onRequestClose={() => setOpenPaypal({ open: false, url: null })}
      >
        <TouchableOpacity
          onPress={() => setOpenPaypal({ open: false, url: null })}
          style={{
            padding: 5,
            margin: 5,
            borderWidth: 0.5,
            width: 48,
            borderRadius: 8,
          }}
        >
          <Text style={{ fontSize: 16 }}>Back</Text>
        </TouchableOpacity>
        <WebView
          source={{ uri: openPaypal.url }}
          startInLoadingState={true}
          injectedJavaScript={'document.f1.submit()'}
          onNavigationStateChange={async (v) =>
            v.title === 'Successful' ? await get() : null
          }
          containerStyle={{ marginTop: 20, width: '100%', height: '100%' }}
        />
      </Modal>
      <ScrollView style={{ paddingTop: 40 }}>
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
            height: 430,
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
            Topup
          </Text>
          <View
            style={{
              flex: 1,
              borderRadius: 10,
              backgroundColor: 'white',
              paddingVertical: 10,
              paddingHorizontal: 2,
              flexDirection: 'row',
            }}
          >
            <View style={{ flex: 1 }}>
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
                    name={data.coins[0].name}
                    r_img={five_dollars}
                    color="#F974A4"
                    width={'33%'}
                    coins={data.coins[0].coin}
                    price={data.coins[0].price}
                    onPress={async () => await add(data.coins[0].name)}
                  />
                  <Card
                    name={data.coins[1].name}
                    r_img={ten_dollars}
                    color="#935ADC"
                    width={'33%'}
                    coins={data.coins[1].coin}
                    price={data.coins[1].price}
                    freeCoins={data.coins[1].bonusCoin}
                    onPress={async () => await add(data.coins[1].name)}
                  />
                  <Card
                    name={data.coins[2].name}
                    r_img={twenty_dollars}
                    color="#9473E8"
                    width={'33%'}
                    coins={data.coins[2].coin}
                    price={data.coins[2].price}
                    freeCoins={data.coins[2].bonusCoin}
                    onPress={async () => await add(data.coins[2].name)}
                  />
                </View>
                <View
                  style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}
                >
                  <Card
                    name={data.coins[3].name}
                    r_img={thirty_dollars}
                    color="#9473E8"
                    width={'33%'}
                    coins={data.coins[3].coin}
                    price={data.coins[3].price}
                    freeCoins={data.coins[3].bonusCoin}
                    onPress={async () => await add(data.coins[3].name)}
                  />
                  <Card
                    name={data.coins[4].name}
                    r_img={fifty_dollars}
                    color="#935ADC"
                    width={'33%'}
                    coins={data.coins[4].coin}
                    price={data.coins[4].price}
                    freeCoins={data.coins[4].bonusCoin}
                    onPress={async () => await add(data.coins[4].name)}
                  />
                  <Card
                    name={data.coins[5].name}
                    r_img={hundred_dollars}
                    color="#F974A4"
                    width={'33%'}
                    coins={data.coins[5].coin}
                    price={data.coins[5].price}
                    freeCoins={data.coins[5].bonusCoin}
                    onPress={async () => await add(data.coins[5].name)}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ paddingTop: 30 }}>
          <Image style={{ width: '100%' }} source={c_bg} />
          <View
            style={{
              backgroundColor: 'rgba(1,1,1,0.3)',
              paddingTop: 25,
              borderRadius: 45,
              top: -40,
            }}
          >
            <Text
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                flex: 1,
                textAlignVertical: 'center',
                marginBottom: 15,
                color: 'white',
                fontSize: 18,
                fontWeight: 'bold',
              }}
            >
              What you need to know about coins
            </Text>
            <View
              style={{
                backgroundColor: 'white',
                borderTopLeftRadius: 45,
                borderTopEndRadius: 45,
                paddingTop: 35,
                paddingBottom: 10,
                paddingHorizontal: 10,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  marginVertical: 5,
                }}
              >
                <Text style={{ fontSize: 18, marginRight: 10 }}>
                  {'\u2022'}
                </Text>
                <Text style={{ flex: 1 }}>
                  Coins are used to unlock paid stories and episodes.{' '}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  marginVertical: 5,
                }}
              >
                <Text style={{ fontSize: 18, marginRight: 10 }}>
                  {'\u2022'}
                </Text>
                <Text style={{ flex: 1 }}>
                  Purchased coins and unlocked stories and episodes are not
                  refundable.
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  marginVertical: 5,
                }}
              >
                <Text style={{ fontSize: 18, marginRight: 10 }}>
                  {'\u2022'}
                </Text>
                <Text style={{ flex: 1 }}>
                  You can check your Coins Transactions and usage history in
                  “Transaction History” in your Profile under the wallet
                  category.
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  marginVertical: 5,
                }}
              >
                <Text style={{ fontSize: 18, marginRight: 10 }}>
                  {'\u2022'}
                </Text>
                <Text style={{ flex: 1 }}>
                  Please visit Help for the instructions on how to purchase and
                  use coins.
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  marginVertical: 5,
                }}
              >
                <Text style={{ fontSize: 18, marginRight: 10 }}>
                  {'\u2022'}
                </Text>
                <Text style={{ flex: 1 }}>
                  By purchasing Coins, you agree to our Terms and Conditions.
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  marginVertical: 5,
                }}
              >
                <Text style={{ fontSize: 18, marginRight: 10 }}>
                  {'\u2022'}
                </Text>
                <Text style={{ flex: 1 }}>
                  To learn more about how we process and protect your personal
                  data, please refer to our Privacy Policy.
                </Text>
              </View>

              <Text style={{ marginTop: 5 }}>
                The copyright of the content provided on Novelish belongs to the
                respective creators. Copyright abuse can be subject to the full
                extent of the ramification as stipulated by law.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  )
}

const Card = ({ color, r_img, width, freeCoins, coins, price, onPress }) => {
  return (
    <View
      style={{
        width: width,
        height: '100%',
        padding: 2,
        shadowColor: 'black',
      }}
    >
      <View
        style={{
          backgroundColor: color,
          width: '100%',
          height: '100%',
          borderRadius: 10,
          padding: 8,
        }}
      >
        <View
          style={{
            backgroundColor: 'rgba(252,252,252,0.5)',
            flex: 1,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              justifyContent: 'center',
              marginVertical: 3,
              flex: 1,
              padding: 5,
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
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              source={coin}
              style={{ width: 15, height: 15, marginRight: 1 }}
            />
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                fontSize: 11,
                fontWeight: 'bold',
              }}
              numberOfLines={1}
            >
              {coins} coins
            </Text>
          </View>
          <Text
            style={{
              color: '#CE6300',
              textAlign: 'center',
              fontSize: 10,
            }}
          >
            {freeCoins ? 'Free coins: +' + freeCoins : null}
          </Text>
          <View style={{ height: 35, padding: 5 }}>
            <TouchableOpacity onPress={() => (onPress ? onPress() : null)}>
              <LinearGradient
                colors={['#FF749A', '#FF89A9', 'pink']}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 5,
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
                  style={{ fontSize: 12, fontWeight: 'bold', color: 'white' }}
                >
                  $ {price}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Topup
