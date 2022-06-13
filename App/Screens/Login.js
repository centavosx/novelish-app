import {
  TouchableOpacity,
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  TextInput,
} from 'react-native'
import { topDesign, logo } from '../../images'
import { styles } from '../../styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Zocial from 'react-native-vector-icons/Zocial'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { Checkbox } from '../Components/ButtonComponents'
import { Hr } from '../Components/LineComponent'
const Login = () => {
  return (
    <View style={{ ...styles.container, backgroundColor: '#D6DBE8', flex: 1 }}>
      <Image
        source={topDesign}
        style={{
          height: '50%',
          width: '100%',
          position: 'absolute',
          borderBottomLeftRadius: 18,
          borderBottomRightRadius: 18,
        }}
      />

      <View
        style={{
          flex: 1,
          justifyContent: 'center',

          paddingHorizontal: 10,
        }}
      >
        <View style={styles.imageContainer}>
          <Image
            source={logo}
            style={{ ...styles.logo, height: 150, width: 150 }}
          />
        </View>
        <View style={{ marginBottom: 40 }}>
          <Text
            style={{
              fontWeight: 'bold',
              marginLeft: 10,
              color: '#507CC0',
              fontSize: 25,
            }}
          >
            Sign In
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              marginLeft: 10,
              color: '#721717',
              fontSize: 15,
            }}
          >
            Hello there, sign in to continue
          </Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.card}>
            <View style={styles.txtInput}>
              <Zocial
                name="email"
                size={22}
                style={{ marginRight: 5 }}
                color={'grey'}
              />
              <TextInput
                placeholder="Email"
                placeholderTextColor={'grey'}
                style={{
                  color: 'black',
                  width: '100%',
                  fontSize: 18,
                  paddingEnd: 18,
                  top: -2,
                }}
                editable={true}
                onChangeText={(v) => console.log(v)}
              />
            </View>
            <View style={styles.txtInput}>
              <Fontisto
                name="unlocked"
                size={22}
                style={{ marginRight: 5 }}
                color={'grey'}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor={'grey'}
                style={{
                  color: 'black',
                  width: '100%',
                  fontSize: 18,
                  paddingEnd: 18,
                  top: -2,
                }}
                editable={true}
                onChangeText={(v) => console.log(v)}
              />
            </View>
            <View
              style={{
                padding: 10,
                flexDirection: 'row',
                paddingVertical: 20,
                flex: 1,
              }}
            >
              <Checkbox onPress={(v) => console.log(v)} />
              <Text style={{ marginLeft: 8, color: '#ABAFBA', flex: 1 }}>
                Remember me
              </Text>
              <TouchableOpacity
                style={{
                  flex: 1,
                }}
              >
                <Text style={{ textAlign: 'right' }}>Forgot Password</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.loginButton}>
              <Text
                style={{
                  width: '100%',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: 'white',
                  fontSize: 16,
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              flex: 1,
              marginTop: 20,
              marginHorizontal: 5,
              height: 18,
              marginVertical: 18,
            }}
          >
            <Hr style={{ flex: 1, height: 8, backgroundColor: '#FF8DAD' }} />
            <View style={{ flex: 1, height: 18, top: -7 }}>
              <Text style={{ textAlign: 'center' }}>Or connect using</Text>
            </View>
            <Hr style={{ flex: 1, height: 8, backgroundColor: '#FF8DAD' }} />
          </View>
          <View style={styles.card}>
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              <TouchableOpacity
                style={[
                  styles.loginButton,
                  { flex: 1, marginHorizontal: 5, backgroundColor: '#004871' },
                ]}
              >
                <Text
                  style={{
                    width: '100%',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'white',
                    fontSize: 16,
                  }}
                >
                  Facebook
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.loginButton,
                  { flex: 1, marginHorizontal: 5, backgroundColor: '#31B3FD' },
                ]}
              >
                <Text
                  style={{
                    width: '100%',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'white',
                    fontSize: 16,
                  }}
                >
                  Twitter
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.loginButton,
                  { flex: 1, marginHorizontal: 5, backgroundColor: '#D22F25' },
                ]}
              >
                <Text
                  style={{
                    width: '100%',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'white',
                    fontSize: 16,
                  }}
                >
                  Google
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Login
