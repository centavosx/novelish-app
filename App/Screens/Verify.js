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
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Zocial from 'react-native-vector-icons/Zocial'
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { Checkbox } from '../Components/ButtonComponents'
import { Hr } from '../Components/LineComponent'
import { verifyUser, resendCode } from '../../api/verify'
const Verify = ({ navigation, login }) => {
  const [otp, setOtp] = useState('')
  const userVerify = async () => {
    const check = await verifyUser(otp)
    if (check === null) return
    if (check) return login(true)
    return
  }
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
          <TouchableOpacity
            style={{ position: 'absolute', left: 1 }}
            onPress={() => navigation.goBack()}
          >
            <Feather name="arrow-left-circle" size={33} style={{ top: 10 }} />
          </TouchableOpacity>
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
            Please verify
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              marginLeft: 10,
              color: '#721717',
              fontSize: 15,
            }}
          >
            Your account needs to be verified, please enter the code
          </Text>
        </View>
        <View style={{ alignItems: 'center', flex: 0.5 }}>
          <View style={styles.card}>
            <View style={styles.txtInput}>
              <Zocial
                name="email"
                size={22}
                style={{ marginRight: 5 }}
                color={'grey'}
              />
              <TextInput
                placeholder="Code"
                placeholderTextColor={'grey'}
                style={{
                  color: 'black',
                  width: '100%',
                  fontSize: 18,
                  paddingEnd: 18,
                  top: -2,
                }}
                editable={true}
                onChangeText={(v) => setOtp(v)}
              />
            </View>
            <View
              style={{
                padding: 10,
                flexDirection: 'row',
                paddingTop: 20,
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                }}
                onPress={async () =>
                  (await resendCode()) === true
                    ? alert('Code has been sent')
                    : alert('Failed')
                }
              >
                <Text style={{ color: 'blue' }}>Resend Code</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={async () => await userVerify()}
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
                Submit
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              marginTop: 20,
              width: '100%',
              padding: 10,
              borderRadius: 15,
            }}
          >
            <Text>Session expired... Please relogin</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Verify
