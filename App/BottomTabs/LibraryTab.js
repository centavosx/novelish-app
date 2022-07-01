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
import Header from './Header'
import Feather from 'react-native-vector-icons/Feather'
import Octicons from 'react-native-vector-icons/Octicons'
import { HrCommon } from '../Components/LineComponent'
import { main, sample } from '../../images'
import { styles } from '../../styles'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
const LibraryTab = () => {
  const [edit, setEdit] = useState(false)
  const [selected, setSelected] = useState([])
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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((d, i) => (
              <Book
                image={sample}
                key={d}
                bookName="True Love"
                edit={edit}
                selected={selected.includes(i)}
                onPress={() =>
                  selected.includes(i)
                    ? setSelected(selected.filter((d) => d !== i))
                    : setSelected([...selected, i])
                }
              />
            ))}
          </View>
        </ScrollView>
        {edit ? (
          selected.length > 0 ? (
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

const Book = ({ image, bookName, onPress, edit, selected }) => {
  return (
    <View style={{ width: '30%', margin: 5 }}>
      <View style={{ flex: 1 }}>
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
      </View>
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
