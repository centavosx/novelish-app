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
import { LinearGradient } from 'expo-linear-gradient'
// import Swiper from 'react-native-swiper'
import { BgCard } from '../BottomTabs/HomePages/Home'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { HrCommon } from '../Components/LineComponent'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import { SelectTab } from '../Components/SliderComponents'
import {
  main,
  sample,
  sample1,
  sample2,
  sample3,
  sample4,
  darkBottom,
  sample5,
  darkTop,
  fire,
  jenny,
  whiteShadow,
  coin,
  logo,
} from '../../images'
import { styles, windowWidth, windowHeight } from '../../styles'
import { Circle } from '../Components/LineComponent'
import { MainButton } from '../Components/ButtonComponents'
import { useState } from 'react'
import { CardMain } from '../Components/CardComponents'
import Header from '../BottomTabs/Header'
import React from 'react'

const BookRead = ({ navigation, route }) => {
  const [openSettings, setOpenSettings] = useState(false)
  const [select, setSelect] = useState(1)
  const [darkMode, setDarkMode] = useState(false)
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: !darkMode
          ? select === 1
            ? '#EEEEFE'
            : select === 0
            ? '#EAEAEA'
            : '#FDF6E4'
          : 'black',
      }}
    >
      <View
        style={{
          height: 80,
          width: '100%',
          backgroundColor: 'white',
          padding: 8,
          paddingTop: 30,
          flexDirection: 'row',
          paddingBottom: 4,
        }}
      >
        <Feather name="arrow-left-circle" size={33} style={{ top: 10 }} />
        <View
          style={{
            height: '100%',
            top: 9,
            marginLeft: 10,
          }}
        >
          <Text
            style={{
              textAlignVertical: 'center',
              fontWeight: 'bold',
              color: 'black',
              fontSize: 23,
            }}
          >
            True Love
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end', top: 10 }}>
          <TouchableOpacity onPress={() => setOpenSettings(!openSettings)}>
            <MaterialCommunityIcons name="alphabetical-variant" size={33} />
          </TouchableOpacity>
        </View>
      </View>
      <HrCommon />
      <View style={{ flex: 1 }}>
        {openSettings ? (
          <View
            style={{
              position: 'relative',
              padding: 15,
              backgroundColor: 'white',
              width: '100%',
            }}
          >
            <View style={{ flexDirection: 'row', height: 30 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#EAEAEA',
                  borderTopLeftRadius: 10,
                  borderWidth: select === 0 ? 1.5 : 0,
                  borderColor: '#FF92CD',
                  borderBottomLeftRadius: 10,
                  flex: 1,
                }}
                onPress={() => setSelect(0)}
              />
              <TouchableOpacity
                style={{
                  backgroundColor: '#EEEEFE',
                  borderWidth: select === 1 ? 1.5 : 0,
                  borderColor: '#FF92CD',
                  flex: 1,
                }}
                onPress={() => setSelect(1)}
              />
              <TouchableOpacity
                style={{
                  backgroundColor: '#FDF6E4',
                  borderWidth: select === 2 ? 1.5 : 0,
                  borderColor: '#FF92CD',
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                  flex: 1,
                }}
                onPress={() => setSelect(2)}
              />
            </View>
          </View>
        ) : null}
        <ScrollView style={{ paddingVertical: 20, paddingHorizontal: 10 }}>
          <Text
            style={{
              fontSize: 23,
              fontWeight: 'bold',
              textShadowColor: 'rgba(0,0,0,0.3)',

              textShadowOffset: {
                width: 1,
                height: 3,
              },
              textShadowRadius: 2,
              marginBottom: 10,
              color: darkMode ? 'white' : 'black',
            }}
          >
            CHAPTER 1: ME
          </Text>
          <Text
            style={{ marginBottom: 50, color: darkMode ? 'white' : 'black' }}
          >
            “Jung Hyung!!!” I hear my mom’s voice call from downstairs. I groan
            to myself and roll out of my tiny, yet comfortable bed. While neatly
            tucking the corners of my bed sheet into the ehadboard, It take my
            time because this is the last morning that I will be competing the
            task for months. “Jung Hyung!!!” She calls again. “I’m up!” I yell
            back. The cabinets open and close downstairs, the sounds of her
            frantically preparing breakfast. The knot in my stomach grows with
            each step to the bathroom, by the time I start the shower, it’s
            nearly unbearable. I spent the last few years nervously anticipating
            college. My weekends were spent studying and preparing for this day
            while my peers were out getting drunk, wasting their time and
            jeopardizing their futures. The day my acceptance to Seoul
            University came I was thrilled, I expected it but that didn’t take
            any of the excitement away. My mother cried for what felt like
            hours, and I have to admit I was pretty proud of myself. All my
            hardwork finalkly paid off. I had once considered leaving Seoul for
            college but eventually decided against it. I like familiarity and
            routines just like my mother. The hot water loosens my strained
            muscles , how long have I been in here? I hurry and wash my hair and
            bosy, lazily running a rzaor over my legs and remoive the small
            stubble that has appeared over the weekend. As I wrap the towel
            around my wet body, my motehr calls my name again. I ignore her, I
            know she is nervous for my arrival day at college but I have had
            this day planned down to the hour, for months. “Jung Hyung!!!!” “I
            am coming down now, please don’t call my name again!” I yell as I
            walk down the stairs. My bestfriend, Soo Hon is sitting at the table
            across from my mother, dressed in blue polo shirt and khakis, hos
            normal attire. His blonde hair is combed and lightly gelled to
            perfection. “Hel college girl,” He smiles a bright, perfectly lined
            smile while standing to pull my into a tight hug “Hey,” I give him
            an equally bright smile and pull my dirty blonde hair into a bun
            once he realeases me from his grip “Honey, we can wait a couple
            minutes while you fix your hair” My mom says quietly, running
            disapproving eyes over me I make my way to the mirros in the hallway
            and nod, she is right. My hair needs to be presentable for today,
            and ofcourse she did not hesistate to remind me. She never does. “I
            will put your bags in the car” Soo Hon offers and picks up the key
            from my table.{' '}
          </Text>
        </ScrollView>
      </View>
      <View
        style={{
          height: 45,
          width: '100%',
          backgroundColor: 'white',
          flexDirection: 'row',
          paddingVertical: 10,
          paddingHorizontal: 15,
        }}
      >
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Feather name="list" size={25} />
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <AntDesign name="message1" size={25} />
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <TouchableOpacity onPress={() => setDarkMode(!darkMode)}>
            <Ionicons name={darkMode ? 'moon' : 'moon-outline'} size={25} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Feather name="upload" size={25} />
        </View>
      </View>
    </View>
  )
}

export default BookRead
