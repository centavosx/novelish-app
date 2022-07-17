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
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
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
} from '../../images'
import { styles, windowWidth, windowHeight } from '../../styles'
import { Circle } from '../Components/LineComponent'
import { HrCommon } from '../Components/LineComponent'
import { MainButton } from '../Components/ButtonComponents'
import { useState } from 'react'
import { CardMain } from '../Components/CardComponents'
import { ViewBook, likeBook, saveBook } from '../../api/books'
import React from 'react'
const FullPreview = ({ navigation, route }) => {
  const [data, setData] = useState({ chapters: [], tags: [], comments: [] })
  const [details, setDetails] = useState({
    id: null,
    open: false,
    chapterName: '',
    chapter: '',
    coin: 0,
  })

  React.useEffect(() => {
    getBookData()
  }, [])

  const getBookData = async () => {
    const data = await ViewBook(route.params.id)
    setData(data)
  }

  return (
    <ImageBackground source={main} style={styles.bgimage}>
      <ScrollView scrollEnabled={true} pagingEnabled={true}>
        <SelectTab
          tabItems={['Description', 'Parts']}
          makeCenter={true}
          topImages={[
            <HeadImage
              title={data.bookName}
              read={data.totalReads}
              image={{ uri: data.bookCoverImg }}
              ratings={data.rating ?? 0}
              parts={data.chapters.length}
              navigation={navigation}
            />,
          ]}
        >
          <Description
            author={data.bookAuthor}
            tagArr={data.tags}
            desc={data.description}
            reviews={data.comments}
          />
          <Parts
            setDetails={(v) => setDetails(v)}
            data={data.chapters}
            navigation={navigation}
          />
        </SelectTab>
      </ScrollView>
      <Bottom id={data._id} liked={data.likedByUser} saved={data.saved} />
      {details.open ? (
        <Unlock
          image={{ uri: data.bookCoverImg }}
          chapter={details.chapter}
          chapterName={details.chapterName}
          noOfCoin={details.coin}
          title={data.bookName}
          onPressOut={() => setDetails({ ...details, open: false })}
        />
      ) : null}
    </ImageBackground>
  )
}

export const Bottom = ({ id, liked, saved }) => {
  const [like, setLike] = useState(false)
  const [save, setSave] = useState(false)
  const [waitForLike, setWaitForLike] = useState(false)
  const [waitForSave, setWaitForSave] = useState(false)
  React.useEffect(() => {
    setLike(liked ?? false)
  }, [liked])
  React.useEffect(() => {
    setSave(saved ?? false)
  }, [saved])

  const likeABook = async () => {
    setWaitForLike(true)

    if (await likeBook(id)) {
      setLike(!like)
    }
    setWaitForLike(false)
  }
  const saveABook = async () => {
    setWaitForSave(true)
    if (await saveBook(id)) {
      setSave(!save)
    }
    setWaitForSave(false)
  }
  return (
    <View
      style={{
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingHorizontal: 12,
        paddingVertical: 10,
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: '#D7D6D6',
          borderRadius: 15,
          paddingVertical: 8,
          paddingHorizontal: 14,
        }}
        onPress={async () => (!waitForSave ? await saveABook() : null)}
      >
        <FontAwesome
          name="bookmark"
          size={22}
          color={save ? 'green' : 'black'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#D7D6D6',
          marginLeft: 5,
          borderRadius: 15,
          paddingVertical: 8,
          paddingHorizontal: 10,
        }}
        onPress={async () => (!waitForLike ? await likeABook() : null)}
      >
        <FontAwesome name="heart" size={22} color={!like ? 'black' : 'red'} />
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <MainButton
          text={'Start Reading'}
          height={40}
          width={'100%'}
          radius={45}
          paddingTop={7}
          paddingBottom={10}
          marginTop={0}
          marginBottom={0}
          txtStyle={{ fontSize: 18 }}
        />
      </View>
    </View>
  )
}

export const generateStar = (i) => {
  let x = []
  for (let v = 0; v < i; v++) {
    x.push(
      <FontAwesome
        key={v}
        name="star"
        color={'#FC51A3'}
        size={11}
        style={{ marginRight: 2 }}
      />
    )
  }
  return x.map((v) => v)
}

const Description = ({ author, tagArr, desc, reviews }) => {
  return (
    <ScrollView
      nestedScrollEnabled={true}
      scrollEnabled={true}
      style={{ width: windowWidth, height: windowHeight - 60 }}
    >
      <CardMain style={{ padding: 5 }}>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Overview</Text>
        <Text style={{ fontSize: 13 }} numberOfLines={6}>
          {desc}
        </Text>
      </CardMain>
      <CardMain style={{ padding: 5 }}>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Tags</Text>
        <View style={{ marginTop: 7, flexDirection: 'row', flexWrap: 'wrap' }}>
          {tagArr?.map((d, i) => <Tags key={i} value={d.tagName} />) ?? null}
        </View>
      </CardMain>
      <CardMain>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity style={styles.authorIcon}>
            <Image source={jenny} style={styles.authorIconImage} />
          </TouchableOpacity>
          <View>
            <Text
              style={{
                color: '#FC5180',
                textDecorationLine: 'underline',
                fontWeight: 'bold',
                fontSize: 16,
              }}
            >
              {author}
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 11, marginRight: 5 }}>15 works</Text>
              <View
                style={{
                  width: 0.5,
                  backgroundColor: 'black',
                  marginRight: 5,
                }}
              ></View>
              <Text style={{ fontSize: 11 }}>Followers 9.6m</Text>
            </View>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <MainButton
              text={'View Profile'}
              height={25}
              width={90}
              radius={45}
              paddingTop={2}
              paddingBottom={10}
              txtStyle={{ fontSize: 14 }}
            />
          </View>
        </View>
        <View>
          <Text numberOfLines={4}>
            Hi, I’m Dahyun. I’m a South Korean comic artist (manhwaga), former
            model, and the creator of True Beauty, I like to draw, play video
            games and eat cake. Thanks for reading my stuff!{' '}
          </Text>
        </View>
      </CardMain>
      <CardMain>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Reviews</Text>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <TouchableOpacity>
              <Text
                style={{ color: '#FC5180', fontSize: 13, fontWeight: 'bold' }}
              >
                {'view all >'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          {reviews?.map((d, i) => (
            <UserReply
              key={i}
              image={{ uri: d.img }}
              user={d.username}
              star={d.rating}
              heart={d.likes}
              message={d.message}
            />
          ))}

          <View
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(252,252,252,0.6)',
            }}
          ></View>
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <MainButton
            text={'Write a review'}
            height={35}
            width={115}
            radius={45}
            paddingTop={7}
            paddingBottom={10}
            txtStyle={{ fontSize: 14 }}
          />
        </View>
      </CardMain>
      <BgCard style={{ backgroundColor: 'white' }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.cardTitle}>Updated Stories</Text>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%' }}>
          <TouchableOpacity>
            <Image
              source={sample2}
              style={{
                height: 143,
                borderRadius: 10,
                margin: 3,
                width:
                  windowWidth > 300
                    ? (windowWidth - 6) / 3.3
                    : (windowWidth - 6) / 2.2,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={sample2}
              style={{
                height: 143,
                borderRadius: 10,
                margin: 3,
                width:
                  windowWidth > 300
                    ? (windowWidth - 6) / 3.3
                    : (windowWidth - 6) / 2.2,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={sample2}
              style={{
                height: 143,
                borderRadius: 10,
                margin: 3,
                width:
                  windowWidth > 300
                    ? (windowWidth - 6) / 3.3
                    : (windowWidth - 6) / 2.2,
              }}
            />
          </TouchableOpacity>
        </View>
      </BgCard>
    </ScrollView>
  )
}

export const UserReply = ({ image, user, message, star, heart }) => {
  return (
    <View style={{ flexDirection: 'row', marginVertical: 5 }}>
      <TouchableOpacity style={styles.authorIcon}>
        <Image source={image} style={styles.authorIconImage} />
      </TouchableOpacity>
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
              <Text style={{ fontSize: 10 }}>{heart}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const Tags = ({ value }) => {
  return (
    <View style={{ backgroundColor: '#F1F1F1', borderRadius: 10, margin: 3 }}>
      <Text style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
        #{value}
      </Text>
    </View>
  )
}

const HeadImage = ({ image, title, read, parts, ratings, navigation }) => {
  return (
    <View style={{ height: 400, width: windowWidth }}>
      <Image
        source={image}
        style={{ position: 'absolute', height: '100%', width: '100%' }}
      />

      <Image
        source={darkTop}
        style={{
          position: 'absolute',
          height: '100%',
          opacity: 0.6,
          width: '100%',
        }}
      />
      <Image
        source={darkBottom}
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          opacity: 1,
          bottom: 0,
        }}
      />
      <View
        style={{
          height: '100%',
          width: '100%',
          paddingHorizontal: 10,
          paddingVertical: 40,
        }}
      >
        <TouchableOpacity
          onPress={() => (navigation ? navigation.goBack() : null)}
        >
          <Feather name="arrow-left-circle" size={33} color={'white'} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: 'absolute',
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          bottom: 1,
          justifyContent: 'center',
          alignSelf: 'center',
        }}
      >
        <View
          style={{
            marginLeft: 10,
            marginRight: 10,
            backgroundColor: 'transparent',
          }}
        >
          <Image
            source={image}
            style={{
              width: 140,
              height: 180,
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            {title}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Text style={{ color: 'white', marginRight: 6, fontSize: 12 }}>
              Romance
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                height: '100%',
                alignItems: 'center',
                marginRight: 6,
              }}
            >
              <Circle
                style={{
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  height: 3,
                  width: 3,
                }}
              />
            </View>
            <Text style={{ color: 'white', marginRight: 6, fontSize: 12 }}>
              Romance
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                height: '100%',
                alignItems: 'center',
                marginRight: 6,
              }}
            >
              <Circle
                style={{
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  height: 3,
                  width: 3,
                }}
              />
            </View>
            <Text style={{ color: 'white', fontSize: 12 }}>Romance</Text>
          </View>
          <View
            style={{
              width: windowWidth - 80,
              marginTop: 30,
              height: 55,
              backgroundColor: 'rgba(252,252,252,0.15)',
              borderRadius: 20,
              flexDirection: 'row',
              padding: 10,
              marginBottom: 25,
            }}
          >
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Text
                style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}
              >
                {ratings}
              </Text>
              <Text style={{ color: 'white', fontSize: 10 }}>Ratings</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Text
                style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}
              >
                {read}
              </Text>
              <Text style={{ color: 'white', fontSize: 10 }}>Reads</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Text
                style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}
              >
                {parts}
              </Text>
              <Text style={{ color: 'white', fontSize: 10 }}>Parts</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const Parts = ({ setDetails, navigation, data }) => {
  return (
    <ScrollView
      nestedScrollEnabled={true}
      scrollEnabled={true}
      style={{ width: windowWidth, height: windowHeight - 80, padding: 6 }}
    >
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1, alignItems: 'flex-start' }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#B0B0B0',
              paddingVertical: 5,
              paddingHorizontal: 14,
              borderRadius: 20,
            }}
          >
            <Text style={{ color: 'white', fontSize: 12 }}>
              Oldest to Newest
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <MainButton
            text={'Unlock All'}
            height={24}
            width={112}
            radius={45}
            paddingTop={3}
            paddingBottom={10}
            marginTop={0}
            marginBottom={0}
            txtStyle={{ fontSize: 12 }}
          />
        </View>
      </View>
      {data?.map((d, i) => (
        <Chapter
          key={i}
          chapter={'Chapter ' + d.chapterNumber}
          chapterName={d.chapterName}
          navigation={navigation}
          coin={d.coinPrice}
          locked={d.unlockedByUser ? false : d.coinPrice > 0}
          onPress={(v) => (setDetails ? setDetails(v) : null)}
        />
      ))}
    </ScrollView>
  )
}

const Chapter = ({
  chapter,
  chapterName,
  onPress,
  locked,
  coin,
  navigation,
}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        onPress
          ? locked
            ? onPress({ open: true, coin, chapter, chapterName })
            : navigation.navigate('BookRead')
          : null
      }
    >
      <CardMain>
        <View style={{ flexDirection: 'row', padding: 1 }}>
          <Text>
            {chapter}: {chapterName}
          </Text>

          {locked ? (
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <FontAwesome name="lock" color={'grey'} size={19} />
            </View>
          ) : null}
        </View>
      </CardMain>
    </TouchableOpacity>
  )
}

export const Unlock = ({
  id,
  image,
  title,
  chapter,
  chapterName,
  noOfCoin,
  onPressOut,
}) => {
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
          height: 220,
        }}
      >
        <Image
          style={{
            position: 'absolute',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            width: '100%',
            height: '100%',
          }}
          source={image}
          blurRadius={3}
        />
        <View
          style={{
            backgroundColor: 'rgba(252,252,252,0.3)',
            paddingTop: 25,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: '100%',
          }}
        >
          <View
            style={{
              paddingHorizontal: 20,
              flexDirection: 'row',
            }}
          >
            <Image
              source={image}
              style={{ width: 50, borderRadius: 10, height: 80 }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{title}</Text>
              <Text style={{ fontSize: 12 }}>{chapter}</Text>
            </View>
          </View>
          <View
            style={{
              height: 0.5,
              width: '100%',
              backgroundColor: 'grey',
              marginVertical: 10,
            }}
          />
          <View style={{ paddingHorizontal: 18 }}>
            <View
              style={{
                borderColor: '#FF5193',
                borderRadius: 20,
                borderWidth: 2,
                width: '100%',
                paddingVertical: 5,
                paddingHorizontal: 12,
                flexDirection: 'row',
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                {chapter}: {chapterName}
              </Text>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={coin} style={{ height: 19, width: 19 }} />
                  <Text
                    style={{
                      fontSize: 18,
                      color: '#B94029',
                      fontWeight: 'bold',
                      marginLeft: 5,
                    }}
                  >
                    {noOfCoin}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity style={{ marginTop: 10, flex: 1 }}>
            <LinearGradient
              colors={['#FF749A', '#FF89A9', 'pink']}
              style={{
                width: '100%',
                height: '100%',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}
              start={{ x: 0, y: 0.41 }}
              end={{ x: 1, y: 0.8 }}
            />
            <View
              style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                Unlock {chapter}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
export default FullPreview
