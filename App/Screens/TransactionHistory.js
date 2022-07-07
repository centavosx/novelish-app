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
import { SelectTab } from '../Components/SliderComponents'
import { Transact } from './Transactions'
import { LinearGradient } from 'expo-linear-gradient'
import { windowWidth } from '../../styles'
const TransactionHistory = ({ navigation }) => {
  return (
    <ImageBackground source={background} style={styles.bgimage}>
      <ScrollView>
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
        <SelectTab
          tabItems={['All', 'Earned', 'Used']}
          makeCenter={true}
          color="#BEA5F8"
        >
          <View
            style={{ padding: 5, backgroundColor: 'white', width: windowWidth }}
          >
            {Array(30)
              .fill(null)
              .map((_, i) => (
                <Transact
                  what="Cash In"
                  key={i}
                  icon="cash"
                  coin={3000}
                  result={'Success'}
                />
              ))}
          </View>
          <View
            style={{ padding: 5, backgroundColor: 'white', width: windowWidth }}
          >
            {Array(30)
              .fill(null)
              .map((_, i) => (
                <Transact
                  what="Cash In"
                  key={i}
                  icon="cash"
                  coin={3000}
                  result={'Success'}
                />
              ))}
          </View>
          <View
            style={{ padding: 5, backgroundColor: 'white', width: windowWidth }}
          >
            {Array(30)
              .fill(null)
              .map((_, i) => (
                <Transact
                  what="Cash In"
                  key={i}
                  icon="cash"
                  coin={3000}
                  result={'Success'}
                />
              ))}
          </View>
        </SelectTab>
      </ScrollView>
    </ImageBackground>
  )
}

export default TransactionHistory
