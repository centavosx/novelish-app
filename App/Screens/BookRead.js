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
import { Unlock } from './FullPreview'
import Slider from '@react-native-community/slider'
// import Swiper from 'react-native-swiper'
import { BgCard } from '../BottomTabs/HomePages/Home'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { HrCommon } from '../Components/LineComponent'
import Feather from 'react-native-vector-icons/Feather'

import { sample, logo } from '../../images'

import { useState } from 'react'

import { getChapters, readChapter, unlockChapter } from '../../api/books'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'

const BookRead = ({ navigation, route }) => {
  const [openSettings, setOpenSettings] = useState(false)
  const [select, setSelect] = useState(1)
  const [darkMode, setDarkMode] = useState(false)
  const [size, setSize] = useState(1)
  const [showLeftNav, setShowLeftNav] = useState(false)
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  React.useEffect(() => {
    read(route.params.id)
  }, [])
  const read = async (chapterId) => {
    try {
      setLoading(true)
      setData({})
      const data = await readChapter(route.params.bookId, chapterId)
      await AsyncStorage.setItem(route.params.bookId, chapterId)
      setData(data)
      setLoading(false)
    } catch {
      setLoading(false)
    }
    setShowLeftNav(false)
  }
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
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left-circle" size={33} style={{ top: 10 }} />
        </TouchableOpacity>
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
            {data.bookName}
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end', top: 10 }}>
          <TouchableOpacity onPress={() => setOpenSettings(!openSettings)}>
            <MaterialCommunityIcons name="format-letter-case-upper" size={33} />
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
            <View style={{ width: '100%', marginTop: 13 }}>
              <CustomSlider
                onChange={(v) => setSize(1 * v)}
                value={size}
                icon={
                  <MaterialCommunityIcons
                    name="format-letter-case-upper"
                    size={25}
                  />
                }
              />
            </View>
          </View>
        ) : null}
        <ScrollView style={{ paddingVertical: 20, paddingHorizontal: 10 }}>
          <Text
            style={{
              fontSize: 25 * size,
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
            CHAPTER {data.chapterNumber}: {data.chapterName}
          </Text>
          <Text
            style={{
              marginBottom: 50,
              color: darkMode ? 'white' : 'black',
              fontFamily: 'Cambria',
              fontSize: 18 * size,
              letterSpacing: 1 * size,
              lineHeight: 24 * size,
            }}
          >
            {data.chapterStory}
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
          <TouchableOpacity onPress={() => setShowLeftNav(true)}>
            <Feather name="list" size={25} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Comments', {
                bookId: route.params.bookId,
                id: route.params.id,
                type: 'chapters',
              })
            }
          >
            <AntDesign name="message1" size={25} />
          </TouchableOpacity>
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

      <LeftNavigation
        onPressOut={() => setShowLeftNav(false)}
        name={data.bookName}
        img={{ uri: data.bookCoverImg }}
        id={route.params.bookId}
        author={data.bookAuthor}
        display={showLeftNav}
        goTo={async (v) => {
          await read(v)
        }}
      />
      {loading ? (
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.7)',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white' }}>Chapter is loading...</Text>
        </View>
      ) : null}
    </View>
  )
}

const LeftNavigation = ({
  display,
  onPressOut,
  id,
  img,
  name,
  author,
  goTo,
}) => {
  const [details, setDetails] = useState({
    id: null,
    open: false,
    chapterName: '',
    chapter: '',
    coin: 0,
  })
  const [chapters, setChapters] = useState([])
  React.useEffect(() => {
    if (id) getData(id)
  }, [id])

  const getData = async (id) => {
    const data = await getChapters(id)
    setChapters(data)
  }
  React.useEffect(() => {
    setDetails({
      id: null,
      open: false,
      chapterName: '',
      chapter: '',
      coin: 0,
    })
  }, [display])

  return display === true ? (
    <View
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.7)',
        flexDirection: 'row',
      }}
    >
      <View
        style={{
          width: 280,
          height: '100%',
          backgroundColor: 'white',
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
        }}
      >
        <View style={{ flexDirection: 'row', padding: 15, paddingTop: 35 }}>
          <Image
            source={img}
            style={{ height: 85, width: 60, marginRight: 8, borderRadius: 5 }}
          />
          <View style={{ alignSelf: 'center', flex: 1 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{name}</Text>
            <Text style={{ fontSize: 12, color: 'grey' }}>By: {author}</Text>
          </View>
        </View>
        <View style={{ borderTopWidth: 0.3, borderColor: 'black' }}>
          {chapters.map((d, i) => (
            <Chapter
              id={d._id}
              key={i}
              lock={d.unlockedByUser === true ? false : d.coinPrice > 0}
              chapter={d.chapterNumber}
              coin={d.coinPrice}
              chapterName={d.chapterName}
              onPress={(v) =>
                v.open ? goTo(d._id) : setDetails({ ...v.data })
              }
            />
          ))}
        </View>
      </View>
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => (onPressOut ? onPressOut() : null)}
      />
      {details.open ? (
        <Unlock
          id={details.id}
          bookId={id}
          image={img}
          chapter={details.chapter}
          chapterName={details.chapterName}
          noOfCoin={details.coin}
          title={name}
          setData={(v) => {
            let d = [...chapters]
            d = d.map((obj) => {
              if (obj._id === v) {
                return { ...obj, unlockedByUser: true }
              }
              return obj
            })

            setDetails({
              id: null,
              open: false,
              chapterName: '',
              chapter: '',
              coin: 0,
            })
            setChapters(d)
          }}
          onPressOut={() =>
            setDetails({
              id: null,
              open: false,
              chapterName: '',
              chapter: '',
              coin: 0,
            })
          }
        />
      ) : null}
    </View>
  ) : (
    <View></View>
  )
}

const Chapter = ({ id, chapter, lock, onPress, chapterName, coin }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        onPress
          ? lock
            ? onPress({
                open: !lock,
                data: {
                  id,
                  chapter: `Chapter ${chapter}`,
                  chapterName,
                  coin: coin,
                  open: true,
                },
              })
            : onPress({ open: true })
          : null
      }
      style={{
        borderBottomWidth: 0.3,
        borderCOlor: 'grey',
        padding: 15,
        flexDirection: 'row',
      }}
    >
      <Text style={{ flex: 1 }} numberOfLines={1}>
        Chapter {chapter}: {chapterName}
      </Text>
      {lock ? (
        <View>
          <FontAwesome name="lock" color={'grey'} size={19} />
        </View>
      ) : null}
    </TouchableOpacity>
  )
}

const CustomSlider = ({ onChange, icon, value }) => {
  const val = 100
  const [width, setWidth] = useState((value - 0.5) * val)
  return (
    <View
      style={{
        height: 30,
        width: '100%',
        backgroundColor: 'grey',
        borderRadius: 10,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: '100%',
          borderRadius: 10,
        }}
      >
        <View
          style={{
            width: 32,
            height: '100%',
            backgroundColor: '#FF92CD',
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            paddingHorizontal: 5,
          }}
        >
          {icon}
        </View>
        <View style={{ flex: 1 }}>
          <View
            style={{
              height: '100%',
              width: width + '%',
              backgroundColor: '#FF92CD',
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
            }}
          ></View>
        </View>
      </View>

      <Slider
        minimumValue={0.5}
        maximumValue={1.5}
        onValueChange={(v) => {
          setWidth((value - 0.5) * val)
          if (onChange) onChange(v)
        }}
        value={width / val + 0.5}
        thumbTintColor={'transparent'}
        maximumTrackTintColor="transparent"
        minimumTrackTintColor="transparent"
        style={{ height: '100%', position: 'absolute', width: '100%' }}
      />
    </View>
  )
}

export default BookRead
