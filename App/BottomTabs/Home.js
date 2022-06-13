import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  TouchableOpacity,
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  TextInput,
  ScrollView,
} from 'react-native'
import Header from './Header'
import { topDesign, logo, main, sample } from '../../images'
import { styles } from '../../styles'
import { useState } from 'react'
import React from 'react'
const HomePage = createNativeStackNavigator()
const HomeTab = ({ navigation }) => {
  React.useEffect(() => {
    navigation.navigate('Home')
  }, [])
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <SelectTab tabItems={['Home', 'Ranking']} />
      <HomePage.Navigator>
        <HomePage.Screen name="Home" options={{ headerShown: false }}>
          {(props) => <Home {...props} />}
        </HomePage.Screen>
      </HomePage.Navigator>
    </View>
  )
}

const Home = ({ navigation }) => {
  return (
    <ImageBackground source={main} style={styles.bgimage}>
      <ScrollView>
        <Image source={sample} style={{ height: 180, width: '100%' }} />
        <View style={{ paddingHorizontal: 10 }}>
          <BgCard>
            <View
              style={{
                justifyContent: 'center',
                flexWrap: 'wrap',
                flexDirection: 'row',
              }}
            >
              <View style={styles.cardGenres}>
                <Text style={styles.textGenres}>Romance</Text>
              </View>
              <View style={styles.cardGenres}>
                <Text style={styles.textGenres}>Werewolf</Text>
              </View>
              <View style={styles.cardGenres}>
                <Text style={styles.textGenres}>Series</Text>
              </View>
              <View style={styles.cardGenres}>
                <Text style={styles.textGenres}>Sci-fi</Text>
              </View>
              <View style={styles.cardGenres}>
                <Text style={styles.textGenres}>Fantasy</Text>
              </View>
              <View style={styles.cardGenres}>
                <Text style={styles.textGenres}>TeensRomance</Text>
              </View>
              <View style={styles.cardGenres}>
                <Text style={styles.textGenres}>Poems</Text>
              </View>
            </View>
          </BgCard>
          <BgCard>
            <Text>daw</Text>
          </BgCard>
        </View>
      </ScrollView>
    </ImageBackground>
  )
}

const BgCard = ({ children, withOpacity }) => {
  console.log(children)
  return (
    <View
      style={{
        backgroundColor: 'rgba(252,252,252,0.5)',
        borderRadius: 10,
        padding: 10,
        marginTop: 12,
      }}
    >
      {children}
    </View>
  )
}

const SelectTab = ({ tabItems, selectItem = null }) => {
  const [select, setSelect] = useState(0)
  React.useEffect(() => {
    if (selectItem) setSelect(selectItem)
  }, [selectItem])
  return (
    <View
      style={{
        flexDirection: 'row',
        borderTopWidth: 0.2,
        borderTopColor: 'black',
        backgroundColor: 'white',
      }}
    >
      {tabItems.map((d, i) => (
        <TouchableOpacity
          key={d}
          style={{
            borderBottomWidth: 3,
            borderBottomColor: select === i ? '#E74974' : 'transparent',
            paddingVertical: 8,
            paddingHorizontal: 12,
          }}
          onPress={() => setSelect(i)}
        >
          <Text
            style={{
              color: select === i ? '#E74974' : 'black',
              fontWeight: 'bold',
            }}
          >
            {d}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default HomeTab
