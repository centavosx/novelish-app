import {
  TouchableOpacity,
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Image,
} from 'react-native'

import { background, logo, gradient, notified } from '../../images'
import { styles } from '../../styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
const AreYouAReader = ({ navigation }) => {
  const setReader = async (reader) => {
    await AsyncStorage.setItem('reader?', reader.toString())
    return navigation.navigate('Login')
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.bgimage}>
        <View style={{ marginHorizontal: '20%', marginBottom: 50 }}>
          <Text
            style={{
              fontSize: 37,
              textAlign: 'center',
              fontFamily: 'Gorditas-Regular',
              color: 'white',
            }}
          >
            Are you a Reader or a Writer?
          </Text>
        </View>
        {/* <View style={styles.imageContainer}>
          <Image source={logo} style={styles.logo} />
        </View> */}
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity
            style={styles.button}
            onPress={async () => await setReader(true)}
          >
            <ImageBackground
              source={gradient}
              style={{
                width: 180,
                height: 48.5,
                paddingHorizontal: 32,
                paddingVertical: 12,
              }}
            >
              <Text style={styles.buttonTxt}>READER</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={async () => await setReader(false)}
          >
            <ImageBackground
              source={gradient}
              style={{
                width: 180,
                height: 48.5,
                paddingHorizontal: 32,
                paddingVertical: 12,
              }}
            >
              <Text style={styles.buttonTxt}>WRITER</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

export default AreYouAReader
