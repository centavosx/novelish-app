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
// import Swiper from 'react-native-swiper'
import Header from './Header'
import {
  topDesign,
  shadow,
  main,
  sample,
  fire,
  I,
  whiteShadow,
} from '../../images'
import { styles, windowWidth, windowHeight } from '../../styles'
import { useState } from 'react'
import React from 'react'

const HomePage = createNativeStackNavigator()
const HomeTab = ({ navigation }) => {
  React.useEffect(() => {
    navigation.navigate('Home')
    console.log(windowWidth, windowHeight)
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
            <View style={{ flexDirection: 'row' }}>
              <Image source={fire} style={{ width: 18, height: 29.36 }} />
              <Text style={styles.cardTitle}>Trending Now</Text>
            </View>
            <View
              style={{
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <TouchableOpacity>
                <Image
                  source={sample}
                  style={{
                    height: windowWidth > 300 ? 126.09 : 226.09,
                    width: windowWidth > 300 ? 100 : 200,
                    borderRadius: 10,
                    margin: 3,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={sample}
                  style={{
                    height: windowWidth > 300 ? 126.09 : 226.09,
                    width: windowWidth > 300 ? 100 : 200,
                    borderRadius: 10,
                    margin: 3,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={sample}
                  style={{
                    height: windowWidth > 300 ? 126.09 : 226.09,
                    width: windowWidth > 300 ? 100 : 200,
                    borderRadius: 10,
                    margin: 3,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={sample}
                  style={{
                    height: windowWidth > 300 ? 126.09 : 226.09,
                    width: windowWidth > 300 ? 100 : 200,
                    borderRadius: 10,
                    margin: 3,
                  }}
                />
              </TouchableOpacity>
            </View>
          </BgCard>
        </View>
        <BgCard noRadiusLeft={true} noRadiusRight={true}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.cardTitle}>Weekly Featured</Text>
          </View>
          {/* <Swiper
            height={'100%'}
            autoplay
            activeDotColor="red"
            dotColor="#2aece3"
          >
            <View style={{ width: '100%' }}>
              <Image
                style={{
                  width: windowWidth - 30,
                  height: 182,
                  borderRadius: 10,
                  marginVertical: 8,
                }}
                resizeMode="cover"
                source={sample}
              />
              <Text
                style={{ fontWeight: 'bold', fontSize: 23, marginBottom: 3 }}
              >
                Tower Of God
              </Text>
              <Text>
                As a successful social media journalist with half a million
                followers, seventeen-year-old Cal is used to sharing his life
                online. But . . .
              </Text>
            </View>
          </Swiper> */}
        </BgCard>
        <View style={{ paddingLeft: 10 }}>
          <BgCard noRadiusRight={true} noPaddingRight={true}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.cardTitle}>Completed Stories</Text>
            </View>
            <ScrollView horizontal={true} style={{ flexDirection: 'row' }}>
              <TouchableOpacity>
                <Image
                  source={sample}
                  style={{
                    height: 143,
                    width: 111,
                    borderRadius: 10,
                    margin: 3,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={sample}
                  style={{
                    height: 143,
                    width: 111,
                    borderRadius: 10,
                    margin: 3,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={sample}
                  style={{
                    height: 143,
                    width: 111,
                    borderRadius: 10,
                    margin: 3,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={sample}
                  style={{
                    height: 143,
                    width: 111,
                    borderRadius: 10,
                    margin: 3,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={sample}
                  style={{
                    height: 143,
                    width: 111,
                    borderRadius: 10,
                    margin: 3,
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  source={sample}
                  style={{
                    height: 143,
                    width: 111,
                    borderRadius: 10,
                    margin: 3,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={sample}
                  style={{
                    height: 143,
                    width: 111,
                    borderRadius: 10,
                    margin: 3,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={sample}
                  style={{
                    height: 143,
                    width: 111,
                    borderRadius: 10,
                    margin: 3,
                  }}
                />
              </TouchableOpacity>
            </ScrollView>
          </BgCard>
          <BgCard noRadiusRight={true} noPaddingRight={true}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.cardTitle}>Updated Stories</Text>
            </View>
            <ScrollView horizontal={true} style={{ flexDirection: 'row' }}>
              <TouchableOpacity>
                <Image
                  source={sample}
                  style={{
                    height: 143,
                    width: 111,
                    borderRadius: 10,
                    margin: 3,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={sample}
                  style={{
                    height: 143,
                    width: 111,
                    borderRadius: 10,
                    margin: 3,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={sample}
                  style={{
                    height: 143,
                    width: 111,
                    borderRadius: 10,
                    margin: 3,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={sample}
                  style={{
                    height: 143,
                    width: 111,
                    borderRadius: 10,
                    margin: 3,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={sample}
                  style={{
                    height: 143,
                    width: 111,
                    borderRadius: 10,
                    margin: 3,
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  source={sample}
                  style={{
                    height: 143,
                    width: 111,
                    borderRadius: 10,
                    margin: 3,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={sample}
                  style={{
                    height: 143,
                    width: 111,
                    borderRadius: 10,
                    margin: 3,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={sample}
                  style={{
                    height: 143,
                    width: 111,
                    borderRadius: 10,
                    margin: 3,
                  }}
                />
              </TouchableOpacity>
            </ScrollView>
          </BgCard>
        </View>
        <View style={{ height: 400, width: '100%', marginVertical: 10 }}>
          <Image
            source={sample}
            style={{ height: '100%', width: '100%', position: 'absolute' }}
          />
          <Image
            source={whiteShadow}
            style={{ height: '100%', width: '100%', position: 'absolute' }}
          />
          <View
            style={{
              bottom: 1,
              position: 'absolute',

              // backgroundColor: 'white',
              width: '100%',
            }}
          >
            <View style={{ height: '100%', padding: 15 }}>
              <Image
                source={sample}
                style={{
                  width: 120,
                  height: 200,
                  borderRadius: 10,
                  marginBottom: 10,
                }}
              />

              <Text style={{ fontSize: 20 }}>True Beauty</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ marginRight: 10 }}>Romance</Text>
                <View
                  style={{
                    borderRadius: '100%',
                    width: 5,
                    height: 5,
                    backgroundColor: 'grey',
                    top: 8,
                    marginRight: 10,
                  }}
                ></View>
                <Text style={{ marginRight: 10 }}>Love</Text>
                <View
                  style={{
                    borderRadius: '100%',
                    width: 5,
                    height: 5,
                    backgroundColor: 'grey',
                    top: 8,
                    marginRight: 10,
                  }}
                ></View>
                <Text style={{ marginRight: 10 }}>2020</Text>
                <Text style={{ flex: 1, textAlign: 'right' }}>8.4</Text>
              </View>
              <Text>True Beauty</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  )
}

const BgCard = ({
  children,
  withOpacity,
  noRadiusLeft,
  noRadiusRight,
  noPaddingRight,
  noPaddingLeft,
  style,
}) => {
  return (
    <View
      style={[
        {
          backgroundColor: 'rgba(252,252,252,0.5)',
          borderTopRightRadius: noRadiusRight ? 0 : 10,
          borderBottomRightRadius: noRadiusRight ? 0 : 10,
          borderTopLeftRadius: noRadiusLeft ? 0 : 10,
          borderBottomLeftRadius: noRadiusLeft ? 0 : 10,
          paddingLeft: noPaddingLeft ? 0 : 10,
          paddingRight: noPaddingRight ? 0 : 10,
          paddingVertical: 10,
          marginTop: 12,
        },
        style ? style : {},
      ]}
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
