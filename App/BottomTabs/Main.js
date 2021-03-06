import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import NotificationsTab from './NotificationsTab'
import ProfileTab from './ProfileTab'
import { main } from '../../images'
const Tab = createBottomTabNavigator()
import HomeTab from './HomeTab'
import LibraryTab from './LibraryTab'
const Main = ({ setLogin }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        style: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarActiveTintColor: 'black',
        tabBarOptions: {
          showLabel: false,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" color={color} size={30} />
          ),
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 0,
          },
        }}
      >
        {(props) => <HomeTab {...props} />}
      </Tab.Screen>
      <Tab.Screen
        name="LibraryTab"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookshelf" color={color} size={30} />
          ),
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 0,
          },
        }}
      >
        {(props) => <LibraryTab {...props} />}
      </Tab.Screen>
      <Tab.Screen
        name="NotificationsTab"
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="bell" color={color} size={30} />
          ),
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 0,
          },
        }}
      >
        {(props) => <NotificationsTab {...props} />}
      </Tab.Screen>
      <Tab.Screen
        name="ProfileTab"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-circle-o" color={color} size={30} />
          ),
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 0,
          },
        }}
      >
        {(props) => <ProfileTab {...props} logout={(v) => setLogin(v)} />}
      </Tab.Screen>
    </Tab.Navigator>
  )
}

export default Main
