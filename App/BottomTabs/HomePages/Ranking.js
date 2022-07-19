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
import Feather from 'react-native-vector-icons/Feather'
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
import React, { useState } from 'react'
import {
  getAllBooksPage,
  getPopularBooksPage,
  getUpdatedBooksPage,
  getChapterBooksPage,
} from '../../../api/books'
const Ranking = ({ navigation }) => {
  const [hottest, setHottestImage] = useState('')
  const [popular, setPopularImage] = useState('')
  const [updated, setUpdatedImage] = useState('')
  const [chapters, setChaptersImage] = useState('')

  return (
    <ImageBackground source={main} style={[styles.bgimage]}>
      <View style={{ flex: 1 }}>
        <SelectTab
          tabItems={['All', 'Popular', 'Latest', 'Chapters']}
          makeCenter={true}
          topImages={[
            <HeadImage key={1} image={{ uri: hottest }} name="Hottest" />,
            <HeadImage key={2} image={{ uri: popular }} name="Popular" />,
            <HeadImage key={4} image={{ uri: updated }} name="Latest" />,
            <HeadImage key={3} image={{ uri: chapters }} name="Chapters" />,
          ]}
        >
          <Pages
            navigation={navigation}
            api={getAllBooksPage}
            image={(v) => setHottestImage(v)}
          />
          <Pages
            navigation={navigation}
            api={getPopularBooksPage}
            image={(v) => setPopularImage(v)}
          />
          <Pages
            navigation={navigation}
            api={getUpdatedBooksPage}
            image={(v) => setUpdatedImage(v)}
          />
          <Pages
            navigation={navigation}
            api={getChapterBooksPage}
            image={(v) => setChaptersImage(v)}
          />
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
      </View>
    </ImageBackground>
  )
}

const Books = ({
  id,
  number,
  image,
  title,
  author,
  noOfRead,
  noOfHeart,
  noOfParts,
  description,
  navigation,
  genre,
  genre2,
  date,
  api,
}) => {
  return (
    <CardMain
      touchable={true}
      style={{ paddingBottom: 1, width: windowWidth - 10 }}
      onPress={() =>
        navigation
          ? navigation.navigate('FullPreview', {
              id,
              title,
              image,
              genre,
              genre2,
              date,
            })
          : null
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
            {number}
          </Text>
        </View>

        <Image
          source={image}
          style={{ height: 140, marginBottom: 8, width: 72, borderRadius: 5 }}
        />
        <View style={{ padding: 8, flex: 1 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{title}</Text>
          <Text style={{ color: 'grey', fontSize: 12 }}>By: {author}</Text>
          <View style={{ flexDirection: 'row', marginVertical: 10 }}>
            <View style={{ flexDirection: 'row', marginRight: 6 }}>
              <AntDesign name="eye" size={15} />
              <View style={{ marginLeft: 1 }}>
                <Text style={{ fontSize: 11, fontWeight: 'bold' }}>Views</Text>
                <Text style={{ fontWeight: 'bold' }}>{noOfRead}</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginRight: 6,
              }}
            >
              <AntDesign name="heart" size={15} />
              <View style={{ marginLeft: 1 }}>
                <Text style={{ fontSize: 11, fontWeight: 'bold' }}>Heart</Text>
                <Text style={{ fontWeight: 'bold' }}>{noOfHeart}</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginRight: 6 }}>
              <Feather name="list" size={15} />
              <View style={{ marginLeft: 1 }}>
                <Text style={{ fontSize: 11, fontWeight: 'bold' }}>Parts</Text>
                <Text style={{ fontWeight: 'bold' }}>{noOfParts}</Text>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'column' }}>
            <Text
              style={{ width: '100%', fontSize: 10, flexWrap: 'wrap' }}
              numberOfLines={4}
            >
              {description}
            </Text>
          </View>
        </View>
      </View>
    </CardMain>
  )
}

const Pages = ({ image, navigation, api }) => {
  const [data, setData] = useState([])
  React.useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    const data = await api(0, 20)
    image(data.length > 0 ? data[0].bookCoverImg : null)
    setData(data)
  }
  return (
    <ScrollView style={{ flex: 1, marginBottom: 190 }}>
      {data.length > 0 ? (
        data.map((d, i) => (
          <Books
            id={d._id}
            key={i}
            image={{ uri: d.bookCoverImg }}
            navigation={navigation}
            title={d.bookName}
            number={i + 1}
            noOfHeart={d.likes}
            noOfRead={d.views}
            noOfParts={d.chapterNumber}
            author={d.bookAuthor}
            description={d.description}
            genre={d.mainGenre}
            genre2={d.secondaryGenre}
            date={d.publishDate}
          />
        ))
      ) : (
        <CardMain
          touchable={true}
          style={{
            paddingBottom: 1,
            width: windowWidth - 10,
            backgroundColor: 'transparent',
          }}
        />
      )}
    </ScrollView>
  )
}

const HeadImage = ({ image, name }) => {
  return (
    <View style={{ height: 150, width: windowWidth }}>
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
          bottom: 0,
        }}
      />
      <View
        style={{
          height: 120,
          width: '100%',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            flex: 1,
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
    </View>
  )
}
export default Ranking
