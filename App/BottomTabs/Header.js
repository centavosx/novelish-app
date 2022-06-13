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
import Entypo from 'react-native-vector-icons/Entypo'
import { topDesign, logo, mainLogo } from '../../images'
const Header = ({ logo }) => {
  return (
    <View
      style={{
        height: 80,
        width: '100%',
        backgroundColor: 'white',
        padding: 8,
        paddingTop: 30,
        flexDirection: 'row',
        paddingBottom: 4,
      }}
    >
      <Image source={mainLogo} style={{ width: 27, height: 45.62 }} />
      <View
        style={{
          height: '100%',
          top: 9,
          marginLeft: 10,
        }}
      >
        <Text
          style={{
            textAlignVertical: 'center',

            fontWeight: 'bold',
            color: 'black',
            fontSize: 23,
          }}
        >
          Novelish
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end', top: 10 }}>
        <Entypo name="magnifying-glass" size={25} />
      </View>
    </View>
  )
}

export default Header
