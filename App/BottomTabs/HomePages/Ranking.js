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
import { SelectTab } from '../../Components/SliderComponents'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Header from '../Header'
import {
  main,
  darkTop,
  darkBottom,
  sample,
  leftLeaf,
  rightLeaf,
  sample1,
  sample2,
  sample3,
  sample4,
  sample5,
  fire,
  jenny,
  whiteShadow,
} from '../../../images'
import { styles, windowWidth, windowHeight } from '../../../styles'
import { HrCommon } from '../../Components/LineComponent'
import { MainButton } from '../../Components/ButtonComponents'
import { CardMain } from '../../Components/CardComponents'
import { useState } from 'react'

const Ranking = ({ navigation }) => {
  const [indexPage, setIndexPage] = useState(0)
  return (
    <ImageBackground source={main} style={[styles.bgimage]}>
      <ScrollView>
        <SelectTab
          tabItems={['All', 'Weekly', 'Latest', 'Completed']}
          makeCenter={true}
          topImages={[
            <HeadImage image={sample} name="Hottest" />,
            <HeadImage image={sample2} name="Weekly" />,
            <HeadImage image={sample3} name="Latest" />,
            <HeadImage image={sample1} name="Completed" />,
          ]}
        >
          <Pages navigation={navigation} />
          <Pages navigation={navigation} />
          <Pages navigation={navigation} />
          <Pages navigation={navigation} />
        </SelectTab>
        {/* <Swiper
          index={!swipe ? indexPage : null}
          loop={false}
          onIndexChanged={(v) => {
            setSwipe(true)
            setIndexPage(v)
          }}
        >
          
        </Swiper> */}
      </ScrollView>
    </ImageBackground>
  )
}

const Pages = ({ index, navigation }) => {
  return (
    <View>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((d) => (
        <CardMain
          touchable={true}
          style={{ paddingBottom: 1, width: windowWidth - 12 }}
          onPress={() =>
            navigation ? navigation.navigate('FullPreview') : null
          }
        >
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                height: '100%',
                marginRight: 10,
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontWeight: 'bold',
                }}
              >
                1
              </Text>
            </View>

            <Image
              source={sample}
              style={{ height: 143.4, width: 72, borderRadius: 5 }}
            />
            <View style={{ padding: 8, flex: 1 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                True Beauty
              </Text>
              <Text style={{ color: 'grey', fontSize: 12 }}>
                By: dahyuniee_
              </Text>
              <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                <View style={{ flexDirection: 'row', marginRight: 6 }}>
                  <AntDesign name="eye" size={15} />
                  <View style={{ marginLeft: 1 }}>
                    <Text style={{ fontSize: 11, fontWeight: 'bold' }}>
                      Read
                    </Text>
                    <Text style={{ fontWeight: 'bold' }}>123</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginRight: 6,
                  }}
                >
                  <AntDesign name="eye" size={15} />
                  <View style={{ marginLeft: 1 }}>
                    <Text style={{ fontSize: 11, fontWeight: 'bold' }}>
                      Read
                    </Text>
                    <Text style={{ fontWeight: 'bold' }}>123</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', marginRight: 6 }}>
                  <AntDesign name="eye" size={15} />
                  <View style={{ marginLeft: 1 }}>
                    <Text style={{ fontSize: 11, fontWeight: 'bold' }}>
                      Read
                    </Text>
                    <Text style={{ fontWeight: 'bold' }}>123</Text>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ width: '100%', fontSize: 10, flexWrap: 'wrap' }}>
                  Patrick “Pack” Walsh may not know exactly where he’s going in
                  life, but he’s happy where he is. He’s got a girlfriend who
                  gets him. His single dad is his . . .
                </Text>
              </View>
            </View>
          </View>
        </CardMain>
      ))}
    </View>
  )
}

const HeadImage = ({ image, name }) => {
  return (
    <View style={{ height: 300, width: windowWidth }}>
      <Image
        source={image}
        style={{ position: 'absolute', height: '100%', width: '100%' }}
      />
      <Image
        source={darkTop}
        style={{
          position: 'absolute',
          height: '100%',
          opacity: 0.85,
          width: '100%',
        }}
      />
      <Image
        source={darkBottom}
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          opacity: 0.85,
          bottom: 1,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          height: '100%',
          alignItems: 'center',
        }}
      >
        <Image source={leftLeaf} style={{ height: 72, width: 42 }} />
        <View
          style={{
            marginLeft: 10,
            marginRight: 10,
            backgroundColor: 'transparent',
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            RANKING
          </Text>
          <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>
            {name}
          </Text>
        </View>
        <Image source={rightLeaf} style={{ height: 72, width: 42 }} />
      </View>
    </View>
  )
}
export default Ranking
