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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { main, sample, jenny } from '../../images'
import { styles, windowWidth, windowHeight } from '../../styles'
import { Circle } from '../Components/LineComponent'
import { MainButton } from '../Components/ButtonComponents'
import { useState } from 'react'
import { CardMain } from '../Components/CardComponents'
import Header from '../BottomTabs/Header'
import React from 'react'

import {
  getComments,
  getChapterComments,
  getChapterCommentsReply,
  getCommentsReplies,
  addChapterComment,
  addBookComment,
  addCommentChapterReply,
  addCommentReply,
} from '../../api/comments'
export const format = (date) => {
  var hours = date.getHours()
  var minutes = date.getMinutes()
  var ampm = hours >= 12 ? 'pm' : 'am'
  hours = hours % 12
  hours = hours ? hours : 12 // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes
  var strTime = hours + ':' + minutes + ' ' + ampm
  return strTime
}
const Comments = ({ navigation, route }) => {
  const [addComment, setAddComment] = useState(false)
  const [openComment, setOpenComment] = useState({ id: null, open: false })
  const [data, setData] = useState([])
  React.useEffect(() => {
    getCommentData()
  }, [])
  const getCommentData = async () => {
    let data = []
    if (route.params.type === 'chapters') {
      const resp = await getChapterComments(
        route.params.bookId,
        route.params.id
      )
      data = resp.comments
    } else if (route.params.type === 'books') {
      const resp = await getComments(route.params.bookId)
      data = resp.comments
    }
    setData(data)
  }

  const addAComment = async (rating, message) => {
    let added = {}
    if (route.params.type === 'chapters') {
      added = await addChapterComment(
        route.params.bookId,
        route.params.id,
        rating,
        message
      )
    } else if (route.params.type === 'books') {
      added = await addBookComment(route.params.bookId, rating, message)
    }
    if (added.success) {
      setData(added.comms)
    }
  }

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
          Reviews ({data.length})
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
          {data.map((d, i) => (
            <UserReply
              key={d._id}
              image={{ uri: d.img }}
              user={d.user}
              star={d.rating}
              heart={d.totalLikes}
              likedByYou={d.liked}
              totalReplies={d.totalReplies}
              message={d.message}
              dateCreated={d.dateCreated}
              onPress={(v) => setOpenComment({ ...v, id: d._id })}
            />
          ))}
        </ScrollView>
      </CardMain>
      {addComment ? (
        <CommentAdd
          image={sample}
          chapter={'Chapter 13'}
          chapterName={'Meet'}
          title={'True'}
          addFunction={addAComment}
          onPressOut={() => setAddComment(false)}
        />
      ) : null}
      {openComment.open ? (
        <CommentDetail
          id={openComment.id}
          params={route.params}
          onPressOut={() => setOpenComment({ ...openComment, open: false })}
        />
      ) : null}
    </ImageBackground>
  )
}
const UserReply = ({
  image,
  user,
  message,
  star,
  heart,
  onPress,
  likedByYou,
  totalReplies,
  dateCreated,
}) => {
  return (
    <View style={{ flexDirection: 'row', marginVertical: 5 }}>
      <View style={{ marginRight: 8 }}>
        {image.uri ? (
          <Image
            source={image}
            style={{ ...styles.authorIconImage, height: 40, width: 40 }}
          />
        ) : (
          <FontAwesome5
            name="book-reader"
            color={'#935ADC'}
            size={27}
            style={{
              paddingLeft: 7,
              paddingRight: 3,
              paddingTop: 5,
              paddingBottom: 5,
              borderRadius: 100,
              borderColor: '#FC5180',
              borderWidth: 2,
            }}
          />
        )}
      </View>
      <View style={{ flex: 1, flexWrap: 'wrap' }}>
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
          <Text style={{ fontSize: 10, color: 'grey' }}>
            {dateCreated ? new Date(dateCreated).toDateString() : null}{' '}
            {dateCreated ? format(new Date(dateCreated)) : null}
          </Text>
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
              <Text style={{ fontSize: 10 }}>Reply ({totalReplies})</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity>
                <AntDesign
                  name="heart"
                  color={likedByYou ? 'red' : 'black'}
                  size={13}
                  style={{ marginRight: 3 }}
                />
              </TouchableOpacity>
              <Text style={{ fontSize: 10 }}>{heart}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const CommentAdd = ({ image, title, chapter, onPressOut, addFunction }) => {
  const [rating, setRating] = useState(0)
  const [message, setMessage] = useState('')
  const [addWait, setAddWait] = useState(false)
  const add = async () => {
    setAddWait(true)
    await addFunction(rating, message)
    if (onPressOut) onPressOut()
    setMessage('')
    setAddWait(false)
  }
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
              value={message}
              onChangeText={(v) => setMessage(v)}
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
            <Text style={{ flex: 1 }}>{message.length}/200</Text>
            <TouchableOpacity
              onPress={async () =>
                !addWait
                  ? rating > 0 && rating < 6
                    ? message.length > 0
                      ? message.length <= 200
                        ? await add()
                        : alert('Too much characters')
                      : alert('Please add a message')
                    : alert('Please rate!')
                  : null
              }
            >
              <FontAwesome name="send" color={'#FC51A3'} size={23} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const CommentDetail = ({ onPressOut, params, id }) => {
  const [data, setData] = useState({ replies: [] })
  const [loading, setLoading] = useState(false)
  const [sending, setSending] = useState(false)
  const [message, setMessage] = useState('')
  React.useEffect(() => {
    getCommentData()
  }, [])
  const getCommentData = async () => {
    setLoading(true)
    let data = { replies: [] }
    if (params.type === 'chapters') {
      const resp = await getChapterCommentsReply(params.bookId, params.id, id)
      data = resp
    } else if (params.type === 'books') {
      const resp = await getCommentsReplies(params.bookId, id)
      data = resp
    }
    setData(data)
    setLoading(false)
  }

  const addReply = async () => {
    setSending(true)
    let added = {}
    if (params.type === 'chapters') {
      added = await addCommentChapterReply(
        params.bookId,
        params.id,
        id,
        message
      )
    } else if (params.type === 'books') {
      added = await addCommentReply(params.bookId, id, message)
    }

    if (added.success) {
      setData({ ...data, replies: added.comms })
      setMessage('')
    }
    setSending(false)
  }

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
          {loading ? (
            <View>
              <Text>Loading replies...</Text>
            </View>
          ) : (
            <View style={{ flexDirection: 'row' }}>
              <View style={{ marginRight: 8 }}>
                {data.img ? (
                  <Image
                    source={{ uri: data.img }}
                    style={{ ...styles.authorIconImage, height: 40, width: 40 }}
                  />
                ) : (
                  <FontAwesome5
                    name="book-reader"
                    color={'#935ADC'}
                    size={27}
                    style={{
                      paddingLeft: 7,
                      paddingRight: 3,
                      paddingTop: 5,
                      paddingBottom: 5,
                      borderRadius: 100,
                      borderColor: '#FC5180',
                      borderWidth: 2,
                    }}
                  />
                )}
              </View>
              <View style={{ marginBottom: 20, flex: 1 }}>
                <Text
                  style={{
                    color: '#FC5180',
                    textDecorationLine: 'underline',
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}
                >
                  {data.user}
                </Text>

                <View style={{ flexDirection: 'row' }}>
                  {generateStar(data.rating)}
                </View>
                <Text style={{ color: 'grey', fontSize: 10 }}>
                  {data?.dateCreated
                    ? new Date(data.dateCreated).toLocaleDateString()
                    : null}{' '}
                  {data.dateCreated ? format(new Date(data.dateCreated)) : null}
                </Text>
                <Text style={{ fontSize: 12, flex: 1 }}>{data.message}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 5,
                    marginBottom: 5,
                    width: '100%',
                  }}
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
                      color={data.liked ? 'red' : 'black'}
                      size={13}
                      style={{ marginRight: 3 }}
                    />
                    <Text style={{ fontSize: 10 }}>{data.totalLikes}</Text>
                  </View>
                </View>
                {data.replies.map((d) => (
                  <CommentReply
                    key={d._id}
                    user={d.user}
                    image={{ uri: d.img }}
                    message={d.message}
                    dateCreated={d.dateCreated}
                  />
                ))}
              </View>
            </View>
          )}
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
            value={message}
            onChangeText={(v) => setMessage(v)}
          />
          <TouchableOpacity
            style={{ alignSelf: 'center' }}
            onPress={async () => (!sending ? await addReply() : null)}
          >
            <FontAwesome name="send" color={'#FC51A3'} size={23} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const CommentReply = ({ image, user, message, dateCreated }) => {
  return (
    <View style={{ flexDirection: 'row', width: '100%' }}>
      <View style={{ marginRight: 8 }}>
        {image.uri ? (
          <Image
            source={image}
            style={{ ...styles.authorIconImage, height: 32, width: 32 }}
          />
        ) : (
          <FontAwesome5
            name="book-reader"
            color={'#935ADC'}
            size={15}
            style={{
              paddingLeft: 7,
              paddingRight: 3,
              paddingTop: 6,
              paddingBottom: 4,
              borderRadius: 100,
              borderColor: '#FC5180',
              borderWidth: 2,
            }}
          />
        )}
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
        <Text style={{ fontSize: 10, color: 'grey' }}>
          {dateCreated ? new Date(dateCreated).toLocaleDateString() : null}{' '}
          {dateCreated ? format(new Date(dateCreated)) : null}
        </Text>
        <Text style={{ fontSize: 12, flex: 1 }}>{message}</Text>
      </View>
    </View>
  )
}
export default Comments
