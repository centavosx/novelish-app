import {
  TouchableOpacity,
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Image,
} from 'react-native'
import { useFonts } from 'expo-font'
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
  novelish,
  gradient,
} from '../../images'
import { styles } from '../../styles'
const GetStarted = ({ navigation }) => {
  const [loaded] = useFonts({
    Andasia: require('../../assets/fonts/Andasia-OXA3.otf'),
    Amsterdam: require('../../assets/fonts/Amsterdam.ttf'),
  })

  if (!loaded) {
    return null
  }
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'stretch',
      }}
    >
      <ImageBackground source={background} style={styles.bgimage}>
        <View style={styles.imageContainer}>
          <Image source={logo} style={styles.logo} />
        </View>
        <View style={{ ...styles.titleAndDetails }}>
          <View style={{ ...styles.novelistContainer }}>
            <View style={{ textAlign: 'center', width: '100%' }}>
              <Text
                style={{
                  fontFamily: 'Andasia',
                  fontSize: 40,

                  color: '#FC5180',
                  textAlign: 'center',
                }}
              >
                Welcome
              </Text>
              <Text
                style={{
                  fontFamily: 'Andasia',
                  fontSize: 20,

                  textAlign: 'center',
                }}
              >
                To
              </Text>

              <Text
                style={{
                  fontFamily: 'Andasia',
                  fontSize: 40,
                  color: '#FC5163',
                  width: '100%',
                  textAlign: 'center',
                }}
              >
                N
                <Text
                  style={{
                    color: '#0075A7',
                  }}
                >
                  ovelish
                </Text>
              </Text>
            </View>
            {/* <Image source={novelish} style={{ width: 216, height: 40 }} /> */}
            {/* <Image source={O} style={styles.imgCharacterNovel} />
            <Image source={V} style={styles.imgCharacterNovel} />
            <Image source={E} style={styles.imgCharacterNovel} />
            <Image source={L} style={styles.imgCharacterNovel} />
            <Image source={I} style={styles.imgCharacterNovel} />
            <Image source={S} style={styles.imgCharacterNovel} />
            <Image source={T} style={styles.imgCharacterNovel} /> */}
          </View>
          <View
            style={{
              alignSelf: 'center',
              marginTop: 30,
            }}
          >
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                marginBottom: 5,
                fontSize: 12,
              }}
            >
              Read, create and discover stories around the world.
            </Text>
            <TouchableOpacity
              style={{ ...styles.button, alignSelf: 'center' }}
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
        </View>
      </ImageBackground>
    </View>
  )
}

export default GetStarted
