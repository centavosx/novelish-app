import {
  TouchableOpacity,
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Image,
} from 'react-native'
import { topDesign } from '../../images'
import { styles } from '../../styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Login = () => {
  return (
    <View style={{ ...styles.container, backgroundColor: '#D6DBE8' }}>
      <Image
        source={topDesign}
        style={{ height: '50%', width: '100%', position: 'absolute' }}
      />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Sign In s</Text>
      </View>
    </View>
  )
}

export default Login
