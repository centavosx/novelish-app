import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import GetStartedScreen from './App/Screens/GetStarted'
import GetNotifiedScreen from './App/Screens/GetNotified'
import AreYouAReaderScreen from './App/Screens/AreYouAReader'
import LoginScreen from './App/Screens/Login'
import SignUpScreen from './App/Screens/SignUp'
import FullPreview from './App/Screens/FullPreview'
import { useFonts } from 'expo-font'
import Main from './App/BottomTabs/Main'
import BookRead from './App/Screens/BookRead'
import Comments from './App/Screens/Comments'
const NavigationStack = createNativeStackNavigator()
export default function App() {
  const [loaded] = useFonts({
    'Gorditas-Regular': require('./assets/fonts/Gorditas-Regular.ttf'),
    'Gorditas-Bold': require('./assets/fonts/Gorditas-Bold.ttf'),
    GenBasB: require('./assets/fonts/GenBasB.ttf'),
    GenBasI: require('./assets/fonts/GenBasI.ttf'),
    GenBasR: require('./assets/fonts/GenBasR.ttf'),
    Cambria: require('./assets/fonts/Cambria.ttf'),
    Andasia: require('./assets/fonts/Andasia.ttf'),
    Amsterdam: require('./assets/fonts/Amsterdam.ttf'),
  })

  if (!loaded) {
    return null
  }
  return (
    <NavigationContainer>
      <NavigationStack.Navigator>
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
        <NavigationStack.Screen name="Login" options={{ headerShown: false }}>
          {(props) => <LoginScreen {...props} />}
        </NavigationStack.Screen>
        <NavigationStack.Screen name="SignUp" options={{ headerShown: false }}>
          {(props) => <SignUpScreen {...props} />}
        </NavigationStack.Screen>
        <NavigationStack.Screen name="Main" options={{ headerShown: false }}>
          {(props) => <Main {...props} />}
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
