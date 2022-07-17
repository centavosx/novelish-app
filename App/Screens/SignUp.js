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
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { Checkbox } from '../Components/ButtonComponents'
import { Hr } from '../Components/LineComponent'
import { registerUser } from '../../api/users'
import React, { useState } from 'react'
import sha256 from 'crypto-js/sha256'
const SignUp = ({ navigation }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [check, setCheck] = useState(false)
  const [passwordIsOkay, setPasswordIsOkay] = useState(false)
  const [completed, setCompleted] = useState(false)
  const register = async () => {
    setCompleted(
      await registerUser(name, username, email, sha256(password).toString())
    )
  }

  React.useEffect(() => {
    setPasswordIsOkay(checkPass(password))
  }, [password])

  const checkPass = (value) => {
    const strongRegex = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
    )

    if (strongRegex.test(value)) return true
    return false
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
            Sign Up
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              marginLeft: 10,
              color: '#721717',
              fontSize: 15,
            }}
          >
            Please fill the details and create an account.
          </Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.card}>
            <View style={styles.txtInput}>
              <Zocial
                name="persona"
                size={22}
                style={{ marginRight: 15 }}
                color={'grey'}
              />
              <TextInput
                placeholder="Name"
                placeholderTextColor={'grey'}
                style={{
                  color: 'black',
                  width: '100%',
                  fontSize: 18,
                  paddingEnd: 18,
                  top: -2,
                }}
                editable={true}
                onChangeText={(v) => setName(v)}
              />
            </View>
            <View style={styles.txtInput}>
              <Zocial
                name="persona"
                size={22}
                style={{ marginRight: 15 }}
                color={'grey'}
              />
              <TextInput
                placeholder="Username"
                placeholderTextColor={'grey'}
                style={{
                  color: 'black',
                  width: '100%',
                  fontSize: 18,
                  paddingEnd: 18,
                  top: -2,
                }}
                editable={true}
                onChangeText={(v) => setUsername(v)}
              />
            </View>
            <View style={styles.txtInput}>
              <Zocial
                name="email"
                size={22}
                style={{ marginRight: 15 }}
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
                onChangeText={(v) => setEmail(v)}
              />
            </View>
            <View style={styles.txtInput}>
              <Fontisto
                name="unlocked"
                size={22}
                style={{ marginRight: 15 }}
                color={'grey'}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor={'grey'}
                secureTextEntry={true}
                style={[
                  {
                    width: '100%',
                    fontSize: 18,
                    paddingEnd: 18,
                    top: -2,
                  },
                ]}
                editable={true}
                onChangeText={(v) => setPassword(v)}
              />
            </View>
            {!passwordIsOkay ? (
              <Text style={{ fontSize: 12, color: 'red' }}>
                Password is not strong
              </Text>
            ) : null}
            <View
              style={{
                padding: 10,
                flexDirection: 'row',
                paddingTop: 20,
              }}
            >
              <Checkbox onPress={(v) => setCheck(v)} />

              <View>
                <Text style={{ marginLeft: 8, color: '#ABAFBA' }}>
                  {'By signing up you accept our '}
                  <Text style={{ color: 'blue' }}>
                    {' Terms & Conditions '}
                  </Text>
                  {'and the '}
                  <Text style={{ color: 'blue' }}>{'Policy'}</Text>
                </Text>
              </View>
            </View>
            {completed ? (
              <Text style={{ color: 'green' }}>Successfully registered</Text>
            ) : null}
            <TouchableOpacity
              style={[
                styles.loginButton,
                !check || !passwordIsOkay ? { backgroundColor: 'grey' } : {},
              ]}
              onPress={async () =>
                check && passwordIsOkay ? await register() : null
              }
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
                Sign Up
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
                  {
                    flex: 1,
                    marginHorizontal: 5,
                    backgroundColor: '#004871',
                  },
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
                  {
                    flex: 1,
                    marginHorizontal: 5,
                    backgroundColor: '#31B3FD',
                  },
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
                  {
                    flex: 1,
                    marginHorizontal: 5,
                    backgroundColor: '#D22F25',
                  },
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

export default SignUp
