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
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { LinearGradient } from 'expo-linear-gradient'
import { getTransactions } from '../../api/transactions'
import { format } from './Comments'
import React, { useState } from 'react'
const Transactions = ({ navigation }) => {
  const [data, setData] = useState({ coin: 0, trans: [] })
  React.useEffect(() => {
    get()
  }, [])
  const get = async () => {
    setData(await getTransactions(0, 10))
  }

  return (
    <ImageBackground source={background} style={styles.bgimage}>
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
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.3)',
            borderRadius: 20,
            marginBottom: 40,
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
            Transaction History
          </Text>
          <View
            style={{
              flex: 1,
              borderRadius: 10,
              backgroundColor: 'white',
              paddingVertical: 12,
              paddingHorizontal: 8,
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ flex: 1, fontSize: 16, fontWeight: 'bold' }}>
                Activity
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('TransactionHistory')}
              >
                <Text style={{ fontSize: 12, fontWeight: 'bold' }}>
                  {'View All >'}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ padding: 5 }}>
              {data.trans.map((d, i) => (
                <Transact
                  what={d.paymentMethod}
                  refId={d.refId}
                  key={i}
                  icon="cash"
                  coin={d.coin}
                  result={'Success'}
                  date={d.dateCreated}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  )
}

export const Transact = ({ icon, result, coin, what, date, refId }) => {
  return (
    <View style={{ margin: 5, flexDirection: 'row' }}>
      <View
        style={{
          backgroundColor: '#EC68A7',
          padding: 3,
          borderRadius: 5,
          marginRight: 5,
          justifyContent: 'center',
        }}
      >
        {icon === 'cash' ? (
          <Ionicons name="cash-outline" color="white" size={30} />
        ) : icon === 'payment' ? (
          <Fontisto name="shopping-store" color="white" size={23} />
        ) : icon === 'checkin' ? (
          <Feather name="gift" color="white" size={28} />
        ) : icon === 'ad' ? (
          <MaterialCommunityIcons
            name="television-play"
            color="white"
            size={28}
          />
        ) : null}
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', flex: 1 }} numberOfLines={1}>
          {what.toUpperCase()}{' '}
        </Text>
        <Text
          style={{ fontSize: 11, color: 'grey', flex: 1 }}
          numberOfLines={1}
        >
          REF: {refId}
        </Text>
        <Text style={{ fontSize: 10 }}>
          {new Date(date).toDateString()} {format(new Date(date))}
        </Text>
      </View>
      <View>
        <Text style={{ fontWeight: 'bold' }}>+{coin} coins</Text>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 12,
            textAlign: 'right',
            color: '#E37301',
          }}
        >
          {result}
        </Text>
      </View>
    </View>
  )
}

export default Transactions
