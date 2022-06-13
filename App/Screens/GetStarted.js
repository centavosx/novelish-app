import {
  TouchableOpacity,
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Image,
} from 'react-native'

import {
  background,
  logo,
  N,
  O,
  V,
  E,
  L,
  I,
  S,
  T,
  gradient,
} from '../../images'
import { styles } from '../../styles'
const GetStarted = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.bgimage}>
        <View style={styles.imageContainer}>
          <Image source={logo} style={styles.logo} />
        </View>
        <View style={styles.titleAndDetails}>
          <View style={styles.novelistContainer}>
            <Image source={N} style={styles.imgCharacterNovel} />
            <Image source={O} style={styles.imgCharacterNovel} />
            <Image source={V} style={styles.imgCharacterNovel} />
            <Image source={E} style={styles.imgCharacterNovel} />
            <Image source={L} style={styles.imgCharacterNovel} />
            <Image source={I} style={styles.imgCharacterNovel} />
            <Image source={S} style={styles.imgCharacterNovel} />
            <Image source={T} style={styles.imgCharacterNovel} />
          </View>
          <Text style={{ color: 'white' }}>
            Read, create and discover stories around the
          </Text>
          <Text style={{ color: 'white' }}>world.</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('GetNotified')}
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
              <Text style={styles.buttonTxt}>GET STARTED</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

export default GetStarted
