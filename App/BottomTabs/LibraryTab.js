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
import { useFocusEffect } from '@react-navigation/native'
import Header from './Header'
import Feather from 'react-native-vector-icons/Feather'
import Octicons from 'react-native-vector-icons/Octicons'
import { HrCommon } from '../Components/LineComponent'
import { main, sample } from '../../images'
import { styles } from '../../styles'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { getLibraries, removeBooks } from '../../api/users'
const LibraryTab = ({ navigation }) => {
  const [edit, setEdit] = useState(false)
  const [selected, setSelected] = useState([])
  const [data, setData] = useState([])
  const [waitToRemove, setWaitToRemove] = useState(false)
  useFocusEffect(
    React.useCallback(() => {
      setEdit(false)
      setSelected([])
      getLibrary()
    }, [])
  )
  const getLibrary = async () => {
    const data = await getLibraries()
    setData(data)
  }
  const remove = async () => {
    setWaitToRemove(true)
    if (await removeBooks(selected)) {
      setData(data.filter((d) => !selected.includes(d._id)))
    }
    setEdit(false)
    setSelected([])
    setWaitToRemove(false)
  }
  return (
    <View style={{ flex: 1 }}>
      <Header
        title={
          !edit
            ? 'My Library'
            : selected.length > 0
            ? selected.length + ' selected'
            : 'Select items to remove'
        }
        rightButton={
          !edit ? (
            <Feather name="edit" size={25} />
          ) : (
            <Text style={{ fontSize: 18 }}>Cancel</Text>
          )
        }
        onPress={() => setEdit(!edit)}
      />
      <HrCommon />
      <ImageBackground source={main} style={styles.bgimage}>
        <ScrollView>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1 }}>
            {data.map((d, i) => (
              <Book
                image={{ uri: d.bookCoverImg }}
                key={d._id}
                bookName={d.bookName}
                id={d._id}
                mainGenre={d.mainGenre}
                secondaryGenre={d.secondaryGenre}
                publishDate={d.publishDate}
                edit={edit}
                selected={selected.includes(d._id)}
                navigation={navigation}
                onPress={() => {
                  selected.includes(d._id)
                    ? setSelected(selected.filter((d2) => d2 !== d._id))
                    : setSelected([...selected, d._id])
                }}
              />
            ))}
          </View>
        </ScrollView>
        {edit ? (
          selected.length > 0 ? (
            <TouchableOpacity
              style={{ height: 50, width: '100%' }}
              onPress={async () => (!waitToRemove ? await remove() : null)}
            >
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

const Book = ({
  id,
  image,
  bookName,
  onPress,
  edit,
  selected,
  navigation,
  mainGenre,
  secondaryGenre,
  publishDate,
}) => {
  return (
    <View style={{ width: '30%', margin: 5 }}>
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() =>
          !edit
            ? navigation
              ? navigation.navigate('FullPreview', {
                  id,
                  title: bookName,
                  image,
                  genre: mainGenre,
                  genre2: secondaryGenre,
                  date: publishDate,
                })
              : null
            : null
        }
      >
        <Image
          source={image}
          style={{
            width: '100%',
            height: 200,
            borderRadius: 10,
          }}
        />
        {edit ? (
          <TouchableOpacity
            style={{
              position: 'absolute',
              backgroundColor: 'rgba(1,1,1,0.3)',
              width: '100%',
              height: '100%',
              borderRadius: 10,
              justifyContent: 'flex-end',
            }}
            onPress={() => (onPress ? onPress() : null)}
          >
            {!selected ? (
              <View
                style={{
                  borderRadius: 100,
                  padding: 10,
                  borderWidth: 2,
                  height: 25,
                  width: 25,
                  alignSelf: 'flex-end',
                  borderColor: 'white',
                  marginVertical: 10,
                  marginHorizontal: 5,
                }}
              ></View>
            ) : (
              <Octicons
                name="check-circle-fill"
                style={{
                  alignSelf: 'flex-end',
                  marginVertical: 10,
                  marginHorizontal: 5,
                }}
                size={25}
                color="#FC5180"
              />
            )}
          </TouchableOpacity>
        ) : null}
      </TouchableOpacity>
      <View style={{ flexGrow: 1000 }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            textAlignVertical: 'top',
          }}
        >
          {bookName}
        </Text>
      </View>
    </View>
  )
}

export default LibraryTab
