import { StatusBar } from 'expo-status-bar'
import { URL } from '@env'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import GetStartedScreen from './App/Screens/GetStarted'
import GetNotifiedScreen from './App/Screens/GetNotified'
import AreYouAReaderScreen from './App/Screens/AreYouAReader'
import LoginScreen from './App/Screens/Login'
import SignUpScreen from './App/Screens/SignUp'
import FullPreview from './App/Screens/FullPreview'
import Rewards from './App/Screens/Rewards'
import { useFonts } from 'expo-font'
import Main from './App/BottomTabs/Main'
import BookRead from './App/Screens/BookRead'
import Comments from './App/Screens/Comments'
import Topup from './App/Screens/Topup'
import Transactions from './App/Screens/Transactions'
import TransactionHistory from './App/Screens/TransactionHistory'
import Verify from './App/Screens/Verify'
import BeAWriter from './App/Screens/BeAWriter'

import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
const NavigationStack = createNativeStackNavigator()
export default function App() {
  const [loaded] = useFonts({
    'Gorditas-Regular': require('./assets/fonts/Gorditas-Regular.ttf'),
    'Gorditas-Bold': require('./assets/fonts/Gorditas-Bold.ttf'),
    GenBasB: require('./assets/fonts/GenBasB.ttf'),
    GenBasI: require('./assets/fonts/GenBasI.ttf'),
    GenBasR: require('./assets/fonts/GenBasR.ttf'),
    Cambria: require('./assets/fonts/Cambria.ttf'),
    Andasia: require('./assets/fonts/Andasia-OXA3.otf'),
    Amsterdam: require('./assets/fonts/Amsterdam.ttf'),
  })
  const [loggedIn, setLoggedIn] = useState(null)

  React.useEffect(() => {
    checkLogin()
  }, [])
  const checkLogin = async () => {
    try {
      const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS')
      const REFRESH_TOKEN = await AsyncStorage.getItem('REFRESH')
      if (ACCESS_TOKEN !== null && REFRESH_TOKEN !== null) {
        const resp = await axios.get(URL + 'users/login', {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
            tkn: REFRESH_TOKEN,
          },
        })
        console.log(resp.data)
        await AsyncStorage.setItem('ACCESS', resp.data.tkn)
        await AsyncStorage.setItem('REFRESH', resp.data.rtkn)
        return setLoggedIn(true)
      }
      return setLoggedIn(false)
    } catch (e) {
      return setLoggedIn(false)
    }
  }
  if (!loaded) {
    return null
  }
  return loggedIn === null ? (
    <View>
      <Text>Loading...</Text>
    </View>
  ) : (
    <NavigationContainer>
      <NavigationStack.Navigator>
        {loggedIn === false ? (
          <>
            <NavigationStack.Screen
              name="GetStarted"
              options={{ headerShown: false }}
            >
              {(props) => <GetStartedScreen {...props} />}
            </NavigationStack.Screen>
            <NavigationStack.Screen
              name="GetNotified"
              options={{ headerShown: false }}
            >
              {(props) => <GetNotifiedScreen {...props} />}
            </NavigationStack.Screen>
            <NavigationStack.Screen
              name="AreYouAReader"
              options={{ headerShown: false }}
            >
              {(props) => <AreYouAReaderScreen {...props} />}
            </NavigationStack.Screen>
            <NavigationStack.Screen
              name="Login"
              options={{ headerShown: false }}
            >
              {(props) => (
                <LoginScreen {...props} login={(v) => setLoggedIn(v)} />
              )}
            </NavigationStack.Screen>
            <NavigationStack.Screen
              name="Verify"
              options={{ headerShown: false }}
            >
              {(props) => <Verify {...props} login={(v) => setLoggedIn(v)} />}
            </NavigationStack.Screen>
            <NavigationStack.Screen
              name="SignUp"
              options={{ headerShown: false }}
            >
              {(props) => <SignUpScreen {...props} />}
            </NavigationStack.Screen>
          </>
        ) : (
          <>
            <NavigationStack.Screen
              name="Main"
              options={{ headerShown: false }}
            >
              {(props) => <Main {...props} setLogin={(v) => setLoggedIn(v)} />}
            </NavigationStack.Screen>
            <NavigationStack.Screen
              name="FullPreview"
              options={{ headerShown: false }}
            >
              {(props) => <FullPreview {...props} />}
            </NavigationStack.Screen>
            <NavigationStack.Screen
              name="BookRead"
              options={{ headerShown: false }}
            >
              {(props) => <BookRead {...props} />}
            </NavigationStack.Screen>
            <NavigationStack.Screen
              name="Comments"
              options={{ headerShown: false }}
            >
              {(props) => <Comments {...props} />}
            </NavigationStack.Screen>
            <NavigationStack.Screen
              name="Rewards"
              options={{ headerShown: false }}
            >
              {(props) => <Rewards {...props} />}
            </NavigationStack.Screen>
            <NavigationStack.Screen
              name="Topup"
              options={{ headerShown: false }}
            >
              {(props) => <Topup {...props} />}
            </NavigationStack.Screen>
            <NavigationStack.Screen
              name="Transactions"
              options={{ headerShown: false }}
            >
              {(props) => <Transactions {...props} />}
            </NavigationStack.Screen>
            <NavigationStack.Screen
              name="TransactionHistory"
              options={{ headerShown: false }}
            >
              {(props) => <TransactionHistory {...props} />}
            </NavigationStack.Screen>
          </>
        )}
        <NavigationStack.Screen
          name="BeAWriter"
          options={{ headerShown: false }}
        >
          {(props) => <BeAWriter {...props} />}
        </NavigationStack.Screen>
      </NavigationStack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
