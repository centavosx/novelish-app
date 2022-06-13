import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './App/Screens/Login'
import GetNotifiedScreen from './App/Screens/GetNotified'
import AreYouAReaderScreen from './App/Screens/AreYouAReader'
import { useFonts } from 'expo-font'

const NavigationStack = createNativeStackNavigator()
export default function App() {
  const [loaded] = useFonts({
    'Gorditas-Regular': require('./assets/fonts/Gorditas-Regular.ttf'),
    'Gorditas-Bold': require('./assets/fonts/Gorditas-Bold.ttf'),
  })

  if (!loaded) {
    return null
  }
  return (
    <NavigationContainer>
      <NavigationStack.Navigator>
        <NavigationStack.Screen name="Login" options={{ headerShown: false }}>
          {(props) => <LoginScreen {...props} />}
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
