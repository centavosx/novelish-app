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

const GetNotified = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.bgimage}>
        <Image source={notified} style={styles.logo} />
        {/* <View style={styles.imageContainer}>
          <Image source={logo} style={styles.logo} />
        </View> */}
        <View style={styles.notifiedContainer}>
          <Image
            source={gradient}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 30,
              position: 'absolute',
            }}
          />
          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              paddingBottom: 20,
            }}
          >
            <Text style={styles.notifiedText}>Get Notified!</Text>
            <Text
              style={{
                color: 'white',
                marginBottom: 40,
              }}
            >
              Allow Novelish to send you push notifications when you have new
              message and offers!
            </Text>
            <View
              style={{
                width: '100%',
                justifyContent: 'center',
                flexDirection: 'row',
                paddingHorizontal: '20%',
                paddingVertical: 20,
              }}
            >
              <TouchableOpacity
                style={styles.notifiedButton}
                onPress={() => navigation.navigate('AreYouAReader')}
              >
                <Text
                  style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}
                >
                  Let's do it!
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '100%',
                justifyContent: 'center',
                flexDirection: 'row',
                paddingHorizontal: '20%',
              }}
            >
              <TouchableOpacity>
                <Text style={{ color: 'white', fontSize: 12 }}>
                  No thanks, another time!
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default GetNotified
