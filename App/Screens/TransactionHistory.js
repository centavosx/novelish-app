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
import { styles, windowHeight } from '../../styles'
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { SelectTab } from '../Components/SliderComponents'
import { Transact } from './Transactions'
import { LinearGradient } from 'expo-linear-gradient'
import { windowWidth } from '../../styles'
import { getTransactions } from '../../api/transactions'
import React, { useState } from 'react'
const TransactionHistory = ({ navigation }) => {
  const [data, setData] = useState({ coin: 0, trans: [] })
  React.useEffect(() => {
    get()
  }, [])
  const get = async () => {
    setData(await getTransactions(0, 'all'))
  }
  return (
    <ImageBackground source={background} style={styles.bgimage}>
      <View>
        <LinearGradient
          colors={['#AB8CFA', '#A487EF', '#939DFF']}
          style={{
            width: '100%',
            height: '100%',

            position: 'absolute',
          }}
          start={{ x: 0, y: 0.41 }}
          end={{ x: 1, y: 0.8 }}
        />

        <View
          style={{
            paddingTop: 40,
            paddingBottom: 10,
          }}
        >
          <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
            <Text
              style={{
                alignSelf: 'center',
                width: '100%',
                textAlign: 'center',
                position: 'absolute',
                color: 'white',
                fontWeight: 'bold',
                fontSize: 18,
              }}
            >
              Transaction History
            </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather name="arrow-left-circle" size={33} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView
        style={{
          padding: 5,
          flex: 1,
          paddingBottom: 30,
          backgroundColor: 'white',
          width: windowWidth,
        }}
      >
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
      </ScrollView>
    </ImageBackground>
  )
}

export default TransactionHistory
