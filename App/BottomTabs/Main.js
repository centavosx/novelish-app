import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'
const Tab = createBottomTabNavigator()
import HomeTab from './HomeTab'
const Main = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        style: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarActiveTintColor: '#1C9F99',
      }}
    >
      <Tab.Screen
        name="HomeTab"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home-filled" color={color} size={30} />
          ),
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
        }}
      >
        {(props) => <HomeTab {...props} />}
      </Tab.Screen>
    </Tab.Navigator>
  )
}

export default Main
