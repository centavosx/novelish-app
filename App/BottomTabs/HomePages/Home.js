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
import Swiper from 'react-native-swiper'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Header from '../Header'
import {
  main,
  sample,
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
import React, { useState } from 'react'
import { getAllBooks } from '../../../api/books'
const Home = ({ navigation }) => {
  const [data, setData] = useState({
    trending: [],
    featured: [],
    completed: [],
    updated: [],
    topAuthors: [],
    editorsPick: [],
  })
  React.useEffect(() => {
    setBooks()
  }, [])
  const setBooks = async () => {
    setData(await getAllBooks())
  }
  return (
    <ImageBackground source={main} style={styles.bgimage}>
      <ScrollView>
        <Swiper height={'100%'}>
          {data.trending.map((d, i) => (
            <Image
              key={i}
              source={{ uri: d.bookCoverImg }}
              style={{ height: 180, width: '100%' }}
            />
          ))}
        </Swiper>
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
              {data.trending.map((d, i) => (
                <TouchableOpacity key={i}>
                  <Image
                    key={i}
                    source={{ uri: d.bookCoverImg }}
                    style={{
                      height: windowWidth > 300 ? 126.09 : 226.09,
                      width: windowWidth > 300 ? 100 : 200,
                      borderRadius: 10,
                      margin: 3,
                    }}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </BgCard>
        </View>
        <BgCard noRadiusLeft={true} noRadiusRight={true}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.cardTitle}>Weekly Featured</Text>
          </View>
          <Swiper height={'100%'}>
            {data.featured.map((d, i) => (
              <View style={{ width: '100%' }} key={i}>
                <Image
                  style={{
                    width: windowWidth - 30,
                    height: 182,
                    borderRadius: 10,
                    marginVertical: 8,
                  }}
                  resizeMode="cover"
                  source={{ uri: d.bookCoverImg }}
                />
                <View style={{ flexDirection: 'row' }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 23,
                      marginBottom: 3,
                    }}
                  >
                    {d.bookName + ' '}
                    <AntDesign name="heart" color={'red'} size={13} />{' '}
                    <Text
                      style={{
                        fontSize: 13,
                        fontWeight: 'normal',
                      }}
                      numberOfLines={1}
                    >
                      {d.likes}
                    </Text>
                  </Text>
                </View>

                <Text numberOfLines={3}>{d.description}</Text>
              </View>
            ))}
          </Swiper>
        </BgCard>
        <View style={{ paddingLeft: 10 }}>
          <BgCard noRadiusRight={true} noPaddingRight={true}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.cardTitle}>Completed Stories</Text>
            </View>
            <ScrollView horizontal={true} style={{ flexDirection: 'row' }}>
              {data.completed.map((d, i) => (
                <TouchableOpacity key={i}>
                  <Image
                    source={{ uri: d.bookCoverImg }}
                    style={{
                      height: 143,
                      width: 111,
                      borderRadius: 10,
                      margin: 3,
                    }}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </BgCard>
          <BgCard noRadiusRight={true} noPaddingRight={true}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.cardTitle}>Updated Stories</Text>
            </View>
            <ScrollView horizontal={true} style={{ flexDirection: 'row' }}>
              {data.updated.map((d, i) => (
                <TouchableOpacity key={i}>
                  <Image
                    source={{ uri: d.bookCoverImg }}
                    style={{
                      height: 143,
                      width: 111,
                      borderRadius: 10,
                      margin: 3,
                    }}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </BgCard>
        </View>
        {data.featured.map((d, i) =>
          i === 0 ? (
            <View
              style={{ height: 400, width: '100%', marginVertical: 10 }}
              key={i}
            >
              <Image
                source={sample2}
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
                  width: '100%',
                }}
              >
                <View style={{ height: '100%', padding: 15 }}>
                  <Image
                    source={{ uri: d.bookCoverImg }}
                    style={{
                      width: 120,
                      height: 200,
                      borderRadius: 10,
                      marginBottom: 10,
                    }}
                  />

                  <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                    {d.bookName}
                  </Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ marginRight: 10 }}>{d.mainGenre}</Text>
                    <View
                      style={{
                        borderRadius: 10,
                        width: 5,
                        height: 5,
                        backgroundColor: 'grey',
                        top: 8,
                        marginRight: 10,
                      }}
                    ></View>
                    <Text style={{ marginRight: 10 }}>{d.secondaryGenre}</Text>
                    <View
                      style={{
                        borderRadius: 10,
                        width: 5,
                        height: 5,
                        backgroundColor: 'grey',
                        top: 8,
                        marginRight: 10,
                      }}
                    ></View>
                    <Text style={{ marginRight: 10 }}>
                      {new Date(d.publishDate).getFullYear()}
                    </Text>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                      <View style={{ flexDirection: 'row' }}>
                        <AntDesign
                          name="heart"
                          color={'red'}
                          style={{ margin: 3 }}
                        />
                        <Text>{d.likes}</Text>
                      </View>
                    </View>
                  </View>
                  <Text style={{ fontSize: 12 }} numberOfLines={3}>
                    {d.description}
                  </Text>
                </View>
              </View>
            </View>
          ) : null
        )}
        <View style={{ paddingHorizontal: 10 }}>
          <BgCard>
            <View style={{ flexDirection: 'row' }}>
              <Image source={fire} style={{ width: 18, height: 29.36 }} />
              <Text style={styles.cardTitle}>Popular Authors</Text>
            </View>
            <View
              style={{
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'center',
                paddingVertical: 10,
              }}
            >
              {data.topAuthors.map((d, i) => (
                <TouchableOpacity style={styles.authorIcon} key={i}>
                  <Image
                    source={{ uri: d.img }}
                    style={styles.authorIconImage}
                  />
                  <Text style={styles.authorIconText}>{d.penName}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </BgCard>
        </View>
        <HrCommon style={{ marginVertical: 10, backgroundColor: 'white' }} />
        <View style={{ padding: 10 }}>
          <Text style={styles.cardTitle}>Editor's Pick</Text>
          <ScrollView style={{ flexDirection: 'row' }} horizontal={true}>
            {data.editorsPick.map((d, i) => (
              <View
                style={[
                  styles.cardGenres,
                  { borderRadius: 20, width: windowWidth - 30 },
                ]}
                key={i}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    paddingVertical: 10,
                    width: '100%',
                  }}
                >
                  <Image
                    source={{ uri: d.bookCoverImg }}
                    style={{
                      height: 137,
                      width: 81,
                      borderRadius: 20,
                      marginRight: 10,
                    }}
                  />
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        width: '100%',
                      }}
                      numberOfLines={1}
                    >
                      {d.bookName}
                    </Text>
                    <Text
                      style={[
                        styles.textGenres,
                        { color: 'black', textAlign: 'left' },
                      ]}
                    >
                      {d.mainGenre}
                    </Text>
                    <Text
                      style={{ width: 200, fontSize: 11 }}
                      numberOfLines={4}
                    >
                      {d.description}
                    </Text>
                    <View style={{ position: 'absolute', bottom: 1 }}>
                      <MainButton
                        text={'Start Reading'}
                        buttonStyle={{
                          width: 115,
                          height: 40,
                          borderRadius: 20,
                          marginTop: 5,
                        }}
                        imageStyle={{
                          width: '100%',
                          height: '100%',

                          paddingVertical: 3,
                          paddingTop: 6,
                        }}
                        txtStyle={{ fontSize: 14 }}
                      />
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </ImageBackground>
  )
}

export const BgCard = ({
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

export default Home
