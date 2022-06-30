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
import { generateStar } from './FullPreview'
import { LinearGradient } from 'expo-linear-gradient'
import Slider from '@react-native-community/slider'
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
  image,
  logo,
} from '../../images'
import { styles, windowWidth, windowHeight } from '../../styles'
import { Circle } from '../Components/LineComponent'
import { MainButton } from '../Components/ButtonComponents'
import { useState } from 'react'
import { CardMain } from '../Components/CardComponents'
import Header from '../BottomTabs/Header'
import React from 'react'

const Comments = ({ navigation, route }) => {
  const [addComment, setAddComment] = useState(false)
  const [openComment, setOpenComment] = useState({ open: false })
  return (
    <ImageBackground source={main} style={{ flex: 1 }}>
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
            True Love
          </Text>
        </View>
      </View>
      <HrCommon />
      <CardMain style={{ backgroundColor: 'rgba(252,252,252,0.8)', flex: 1 }}>
        <Text style={{ color: '#FF69BB', fontWeight: 'bold' }}>
          Reviews (23203)
        </Text>
        <View style={{ flexDirection: 'row', width: '100%' }}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => setAddComment(true)}
          >
            <TextInput
              placeholder="Write a review"
              editable={false}
              multiline={true}
              style={{
                borderColor: 'lightgrey',
                borderWidth: 1,
                borderRadius: 13,
                paddingVertical: 3,
                paddingHorizontal: 10,
                backgroundColor: 'white',
                marginRight: 5,
              }}
            />
          </TouchableOpacity>
        </View>
        <ScrollView style={{ padding: 10, flex: 1 }}>
          <UserReply
            image={jenny}
            user={'suzybae'}
            star={3}
            heart={50}
            message={
              'I really like all of your works! Thumbs Up!!! Hope you’ll make stories about werewolf too'
            }
            onPress={(v) => setOpenComment({ ...v })}
          />
          <UserReply
            image={jenny}
            user={'suzybae'}
            star={3}
            heart={50}
            message={
              'I really like all of your works! Thumbs Up!!! Hope you’ll make stories about werewolf too'
            }
            onPress={(v) => setOpenComment({ ...v })}
          />
          <UserReply
            image={jenny}
            user={'suzybae'}
            star={3}
            heart={50}
            message={
              'I really like all of your works! Thumbs Up!!! Hope you’ll make stories about werewolf too'
            }
            onPress={(v) => setOpenComment({ ...v })}
          />
          <UserReply
            image={jenny}
            user={'suzybae'}
            star={3}
            heart={50}
            message={
              'I really like all of your works! Thumbs Up!!! Hope you’ll make stories about werewolf too'
            }
            onPress={(v) => setOpenComment({ ...v })}
          />
          <UserReply
            image={jenny}
            user={'suzybae'}
            star={3}
            heart={50}
            message={
              'I really like all of your works! Thumbs Up!!! Hope you’ll make stories about werewolf too'
            }
            onPress={(v) => setOpenComment({ ...v })}
          />
          <UserReply
            image={jenny}
            user={'suzybae'}
            star={3}
            heart={50}
            message={
              'I really like all of your works! Thumbs Up!!! Hope you’ll make stories about werewolf too'
            }
            onPress={(v) => setOpenComment({ ...v })}
          />
          <UserReply
            image={jenny}
            user={'suzybae'}
            star={3}
            heart={50}
            message={
              'I really like all of your works! Thumbs Up!!! Hope you’ll make stories about werewolf too'
            }
            onPress={(v) => setOpenComment({ ...v })}
          />
          <UserReply
            image={jenny}
            user={'suzybae'}
            star={3}
            heart={50}
            message={
              'I really like all of your works! Thumbs Up!!! Hope you’ll make stories about werewolf too'
            }
            onPress={(v) => setOpenComment({ ...v })}
          />
        </ScrollView>
      </CardMain>
      {addComment ? (
        <CommentAdd
          image={sample}
          chapter={'Chapter 13'}
          chapterName={'Meet'}
          title={'True'}
          onPressOut={() => setAddComment(false)}
        />
      ) : null}
      {openComment.open ? (
        <CommentDetail
          onPressOut={() => setOpenComment({ ...openComment, open: false })}
        />
      ) : null}
    </ImageBackground>
  )
}
const UserReply = ({ image, user, message, star, heart, onPress }) => {
  return (
    <View style={{ flexDirection: 'row', marginVertical: 5 }}>
      <View style={{ marginRight: 8 }}>
        <Image
          source={image}
          style={{ ...styles.authorIconImage, height: 40, width: 40 }}
        />
      </View>
      <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row' }}>
        <Text
          style={{
            color: '#FC5180',
            textDecorationLine: 'underline',
            fontWeight: 'bold',
            fontSize: 16,
          }}
        >
          {user}
        </Text>
        <View>
          <View style={{ flexDirection: 'row' }}>{generateStar(star)}</View>

          <Text style={{ fontSize: 12 }}>{message}</Text>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <TouchableOpacity
              style={{ flexDirection: 'row', marginRight: 10 }}
              onPress={() => (onPress ? onPress({ open: true }) : null)}
            >
              <MaterialCommunityIcons
                name="message-reply-text-outline"
                size={13}
                style={{ marginRight: 3 }}
              />
              <Text style={{ fontSize: 10 }}>Reply</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
              <AntDesign
                name="heart"
                color={'red'}
                size={13}
                style={{ marginRight: 3 }}
              />
              <Text style={{ fontSize: 10 }}>{heart}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const CommentAdd = ({
  image,
  title,
  chapter,
  chapterName,
  noOfCoin,
  onPressOut,
}) => {
  const [rating, setRating] = useState(0)
  return (
    <View
      style={{
        backgroundColor: 'rgba(0,0,0,0.4)',
        position: 'absolute',
        width: windowWidth,
        height: '100%',
      }}
    >
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => (onPressOut ? onPressOut() : null)}
      ></TouchableOpacity>
      <View
        style={{
          bottom: 1,
          width: '100%',
          height: 400,
        }}
      >
        {/* <Image
          style={{
            position: 'absolute',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            width: '100%',
            height: '100%',
          }}
          source={image}
          blurRadius={3}
        /> */}

        <View
          style={{
            backgroundColor: 'rgba(252,252,252,1)',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            flex: 1,
          }}
        >
          <View
            style={{
              padding: 10,
              borderBottomWidth: 0.5,
              borderBottomColor: 'black',
            }}
          >
            <Text
              style={{
                flex: 1,
                textAlign: 'center',
                position: 'absolute',
                width: '100%',
                fontWeight: 'bold',
                fontSize: 16,
                margin: 10,
              }}
            >
              Write a Review
            </Text>
            <TouchableOpacity
              onPress={() => (onPressOut ? onPressOut() : null)}
            >
              <AntDesign name="closecircleo" size={25} />
            </TouchableOpacity>
          </View>
          <View>
            <Image
              style={{ position: 'absolute', width: '100%', opacity: 0.6 }}
              blurRadius={3}
              source={image}
            />
            <View
              style={{
                flexDirection: 'row',
                padding: 10,
              }}
            >
              <Image
                source={image}
                style={{ width: 50, borderRadius: 10, height: 60 }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                  {title}
                </Text>
                <Text style={{ fontSize: 12 }}>{chapter}</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              paddingHorizontal: 18,
              paddingVertical: 8,
              flex: 1,
              position: 'relative',
              backgroundColor: 'white',
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontWeight: 'bold', flex: 1 }}>Your Rating</Text>
              <View style={{ flexDirection: 'row' }}>
                <FontAwesome
                  name={rating >= 1 ? 'star' : 'star-o'}
                  color={'#FC51A3'}
                  size={18}
                  style={{ marginRight: 2 }}
                  onPress={() => setRating(1)}
                />
                <FontAwesome
                  name={rating >= 2 ? 'star' : 'star-o'}
                  color={'#FC51A3'}
                  size={18}
                  style={{ marginRight: 2 }}
                  onPress={() => setRating(2)}
                />
                <FontAwesome
                  name={rating >= 3 ? 'star' : 'star-o'}
                  color={'#FC51A3'}
                  size={18}
                  style={{ marginRight: 2 }}
                  onPress={() => setRating(3)}
                />
                <FontAwesome
                  name={rating >= 4 ? 'star' : 'star-o'}
                  color={'#FC51A3'}
                  size={18}
                  style={{ marginRight: 2 }}
                  onPress={() => setRating(4)}
                />
                <FontAwesome
                  name={rating >= 5 ? 'star' : 'star-o'}
                  color={'#FC51A3'}
                  size={18}
                  style={{ marginRight: 2 }}
                  onPress={() => setRating(5)}
                />
              </View>
            </View>
            <TextInput
              placeholder="Write a review"
              multiline={true}
              style={{
                borderColor: 'lightgrey',
                borderWidth: 1,
                borderRadius: 13,
                paddingVertical: 3,
                paddingHorizontal: 10,
                backgroundColor: 'white',
                textAlign: 'left',
                textAlignVertical: 'top',
                marginTop: 8,
                flex: 1,
                marginRight: 5,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 5,
              paddingHorizontal: 25,
              paddingBottom: 20,
            }}
          >
            <Text style={{ flex: 1 }}>0/200</Text>
            <TouchableOpacity>
              <FontAwesome name="send" color={'#FC51A3'} size={23} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const CommentDetail = ({ onPressOut }) => {
  return (
    <View
      style={{
        backgroundColor: 'rgba(0,0,0,0.4)',
        position: 'absolute',
        width: windowWidth,
        height: '100%',
      }}
    >
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => (onPressOut ? onPressOut() : null)}
      />
      <View
        style={{
          height: 400,
          backgroundColor: 'white',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingVertical: 10,
        }}
      >
        <View
          style={{
            padding: 10,
            borderBottomWidth: 0.5,
            borderBottomColor: 'black',
          }}
        >
          <Text
            style={{
              flex: 1,
              textAlign: 'center',
              position: 'absolute',
              width: '100%',
              fontWeight: 'bold',
              fontSize: 16,
              margin: 10,
            }}
          >
            Comment Details
          </Text>
          <TouchableOpacity onPress={() => (onPressOut ? onPressOut() : null)}>
            <AntDesign name="closecircleo" size={25} />
          </TouchableOpacity>
        </View>
        <ScrollView
          style={{
            flex: 1,
            paddingHorizontal: 20,
            paddingVertical: 10,
            paddingBottom: 50,
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <View style={{ marginRight: 8 }}>
              <Image
                source={jenny}
                style={{ ...styles.authorIconImage, height: 40, width: 40 }}
              />
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text
                style={{
                  color: '#FC5180',
                  textDecorationLine: 'underline',
                  fontWeight: 'bold',
                  fontSize: 16,
                }}
              >
                dahyun_
              </Text>
              <View style={{ flexDirection: 'row' }}>{generateStar(5)}</View>
              <Text style={{ fontSize: 12 }}>
                bitin huhu kiLan ang next update poh? gaganda po ng stories nyo,
                pero pinakafavorite ko i2 hehe
              </Text>
              <View
                style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5 }}
              >
                <View style={{ flexDirection: 'row', marginRight: 10 }}>
                  <MaterialCommunityIcons
                    name="message-reply-text-outline"
                    size={13}
                    style={{ marginRight: 3 }}
                  />
                  <Text style={{ fontSize: 10 }}>Reply</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <AntDesign
                    name="heart"
                    color={'red'}
                    size={13}
                    style={{ marginRight: 3 }}
                  />
                  <Text style={{ fontSize: 10 }}>{5}</Text>
                </View>
              </View>
              <CommentReply
                user={'dahyun'}
                image={jenny}
                message={
                  'bitin huhu kiLan ang next update poh? gaganda po ng stories nyo, pero pinakafavorite ko i2 hehe'
                }
              />
              <CommentReply
                user={'dahyun'}
                image={jenny}
                message={
                  'bitin huhu kiLan ang next update poh? gaganda po ng stories nyo, pero pinakafavorite ko i2 hehe'
                }
              />
              <CommentReply
                user={'dahyun'}
                image={jenny}
                message={
                  'bitin huhu kiLan ang next update poh? gaganda po ng stories nyo, pero pinakafavorite ko i2 hehe'
                }
              />
              <CommentReply
                user={'dahyun'}
                image={jenny}
                message={
                  'bitin huhu kiLan ang next update poh? gaganda po ng stories nyo, pero pinakafavorite ko i2 hehe'
                }
              />
              <CommentReply
                user={'dahyun'}
                image={jenny}
                message={
                  'bitin huhu kiLan ang next update poh? gaganda po ng stories nyo, pero pinakafavorite ko i2 hehe'
                }
              />
            </View>
          </View>
        </ScrollView>
        <View
          style={{ flexDirection: 'row', width: '100%', paddingHorizontal: 10 }}
        >
          <TextInput
            placeholder="Write a review"
            editable={true}
            multiline={true}
            style={{
              borderColor: 'lightgrey',
              borderWidth: 1,
              borderRadius: 13,
              paddingVertical: 3,
              paddingHorizontal: 10,
              backgroundColor: 'white',
              marginRight: 5,
              maxHeight: 150,
              flex: 1,
            }}
          />
          <TouchableOpacity style={{ alignSelf: 'center' }}>
            <FontAwesome name="send" color={'#FC51A3'} size={23} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const CommentReply = ({ image, user, message }) => {
  return (
    <View style={{ flexDirection: 'row', width: '100%' }}>
      <View style={{ marginRight: 8 }}>
        <Image
          source={image}
          style={{ ...styles.authorIconImage, height: 32, width: 32 }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            color: '#FC5180',
            textDecorationLine: 'underline',
            fontWeight: 'bold',
            fontSize: 14,
          }}
        >
          {user}
        </Text>
        <Text style={{ fontSize: 12, flex: 1 }}>{message}</Text>
      </View>
    </View>
  )
}
export default Comments
