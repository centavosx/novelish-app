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
  Animated,
  Dimensions,
} from 'react-native'
import Header from './Header'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { HrCommon } from '../Components/LineComponent'
import { main, sample, jenny, sample1, sample2, sample3 } from '../../images'
import { styles } from '../../styles'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { CardMain } from '../Components/CardComponents'
import { SwipeListView } from 'react-native-swipe-list-view'
const screenWidth = Dimensions.get('window').width
const NotificationsTab = () => {
  const [edit, setEdit] = useState(false)
  const [isAnimation, setIsAnimation] = useState(false)
  const [data, setData] = useState([
    {
      key: '1',
      image: jenny,
      username: ['dahyun__'],
      book: 'baka sakaling',
      chapter: 'chapter 13',
      what: 'comment',
      bookImg: sample1,
    },
    {
      key: '2',
      image: sample,
      username: ['dahyun__', 'dahyun__', 'dahyun__', 'dahyun__'],
      book: 'baka sakaling',
      chapter: 'chapter 13',
      what: 'updated',
      bookImg: sample2,
    },
    {
      key: '3',
      image: sample,
      username: ['dahyun__', 'dahyun__', 'dahyun__'],
      book: 'baka sakaling',
      chapter: 'chapter 13',
      what: 'comment',
      bookImg: sample2,
    },
    {
      key: '4',
      image: sample,
      username: ['dahyun__'],
      book: 'baka sakaling',
      chapter: 'chapter 13',
      what: 'published',
      bookImg: sample3,
    },
    {
      key: '5',
      image: sample,
      username: ['dahyun__'],
      book: 'baka sakaling',
      chapter: 'chapter 13',
      what: 'published',
      bookImg: sample3,
    },
    {
      key: '6',
      image: sample,
      username: ['dahyun__'],
      book: 'baka sakaling',
      chapter: 'chapter 13',
      what: 'published',
      bookImg: sample3,
    },
    {
      key: '7',
      image: sample,
      username: ['dahyun__'],
      book: 'baka sakaling',
      chapter: 'chapter 13',
      what: 'published',
      bookImg: sample3,
    },
    {
      key: '8',
      image: sample,
      username: ['dahyun__'],
      book: 'baka sakaling',
      chapter: 'chapter 13',
      what: 'published',
      bookImg: sample3,
    },
    {
      key: '9',
      image: sample,
      username: ['dahyun__'],
      book: 'baka sakaling',
      chapter: 'chapter 13',
      what: 'published',
      bookImg: sample3,
    },
    {
      key: '10',
      image: sample,
      username: ['dahyun__'],
      book: 'baka sakaling',
      chapter: 'chapter 13',
      what: 'published',
      bookImg: sample3,
    },
    {
      key: '11',
      image: sample,
      username: ['dahyun__'],
      book: 'baka sakaling',
      chapter: 'chapter 13',
      what: 'published',
      bookImg: sample3,
    },
    {
      key: '12s',
      image: sample,
      username: ['dahyun__'],
      book: 'baka sakaling',
      chapter: 'chapter 13',
      what: 'published',
      bookImg: sample3,
    },
  ])

  const [itemsToDelete, setItemsToDelete] = useState([])

  const onSwipeDelete = (swipeData) => {
    const { key, value } = swipeData
    if (value < -screenWidth && !isAnimation) {
      setIsAnimation(true)
      Animated.timing(new Animated.Value(1), {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start(() => {
        setData(data.filter((d) => d.key !== key))
        setIsAnimation(false)
      })
    }
  }
  return (
    <View style={{ flex: 1 }}>
      <Header
        title={
          !edit
            ? 'Notifications'
            : itemsToDelete.length > 0
            ? itemsToDelete.length + ' selected'
            : 'Select items to remove'
        }
        rightButton={
          !edit ? (
            <FontAwesome name="trash" size={25} />
          ) : (
            <Text style={{ fontSize: 18 }}>Cancel</Text>
          )
        }
        onPress={() => {
          setEdit(!edit)
        }}
      />
      <HrCommon />
      <ImageBackground source={main} style={styles.bgimage}>
        <SwipeListView
          disableRightSwipe={true}
          disableLeftSwipe={edit}
          onSwipeValueChange={onSwipeDelete}
          rightOpenValue={-screenWidth}
          data={data}
          renderItem={(data) => (
            <NotifData
              item={data.item}
              edit={edit}
              onPress={() =>
                !itemsToDelete.includes(data.item.key)
                  ? setItemsToDelete([...itemsToDelete, data.item.key])
                  : setItemsToDelete(
                      itemsToDelete.filter((d) => d !== data.item.key)
                    )
              }
              selected={itemsToDelete.includes(data.item.key)}
            />
          )}
          renderHiddenItem={() =>
            !edit ? (
              <CardMain style={{ backgroundColor: '#FC5180', flex: 1 }}>
                <TouchableOpacity
                  style={{
                    height: '100%',
                    justifyContent: 'center',
                    width: '100%',
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      width: '100%',
                    }}
                  >
                    <Text
                      style={{
                        color: 'white',
                        textAlignVertical: 'center',
                        fontSize: 16,
                        fontWeight: 'bold',
                        textAlign: 'right',
                      }}
                    >
                      Delete
                    </Text>
                  </View>
                </TouchableOpacity>
              </CardMain>
            ) : null
          }
        />
        {edit ? (
          itemsToDelete.length > 0 ? (
            <TouchableOpacity style={{ height: 50, width: '100%' }}>
              <LinearGradient
                colors={['#FF749A', '#FF89A9', 'pink']}
                style={{
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                }}
                start={{ x: 0.5, y: 0.41 }}
                end={{ x: 1, y: 0.9 }}
              />
              <Text
                style={{
                  flex: 1,
                  textAlign: 'center',
                  textAlignVertical: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 18,
                }}
              >
                Remove
              </Text>
            </TouchableOpacity>
          ) : null
        ) : null}
      </ImageBackground>
    </View>
  )
}

const NotifData = ({ item, edit, onPress, selected }) => {
  return (
    <TouchableOpacity
      disabled={!edit}
      onPress={() => (onPress ? onPress() : null)}
    >
      <CardMain>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={item.image}
            style={{ borderRadius: 100, height: 38, width: 38 }}
          />
          <View style={{ flex: 1, marginHorizontal: 5 }}>
            <Text numberOfLines={3} style={{ fontSize: 13 }}>
              <Text style={{ fontWeight: 'bold' }}>
                {item.username.length > 3
                  ? item.username.length + ' people'
                  : item.username.length > 2
                  ? item.username[0] + ', ' + item.username[1] + ', and 1 other'
                  : item.username.length > 1
                  ? item.username[0] + ', and ' + item.username[1]
                  : item.username.length > 0
                  ? item.username[0]
                  : null}
              </Text>{' '}
              {item.what === 'comment'
                ? 'replied to your comment in'
                : item.what === 'updated'
                ? 'updated'
                : item.what === 'published'
                ? 'published a new book'
                : item.what === 'storyComment'
                ? 'commented in the story'
                : null}{' '}
              <Text style={{ fontWeight: 'bold' }}>
                {item.book} {item.chapter ? ' | ' + item.chapter : null}
              </Text>
            </Text>
          </View>
          <View style={{ height: 45, width: 30 }}>
            <Image
              source={item.bookImg}
              style={{ borderRadius: 5, height: '100%', width: '100%' }}
            />
            {edit ? (
              <View
                style={{
                  position: 'absolute',
                  borderRadius: 5,
                  height: '100%',
                  width: '100%',
                  backgroundColor: 'rgba(252,252,252,0.5)',
                  justifyContent: 'center',
                }}
              >
                <View
                  style={{
                    borderRadius: 100,
                    height: 20,
                    width: 20,
                    padding: 2,
                    borderWidth: 1,
                    borderColor: 'black',
                    alignSelf: 'center',
                  }}
                >
                  {selected ? (
                    <View
                      style={{
                        backgroundColor: '#FC5180',
                        height: '100%',
                        width: '100%',
                        borderRadius: 100,
                      }}
                    ></View>
                  ) : null}
                </View>
              </View>
            ) : null}
          </View>
        </View>
      </CardMain>
    </TouchableOpacity>
  )
}

export default NotificationsTab
