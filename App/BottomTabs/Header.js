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
import React, { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import { topDesign, logo, mainLogo } from '../../images'
const Header = ({ logo }) => {
  return (
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
      <Image source={mainLogo} style={{ width: 27, height: 45.62 }} />
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
          Novelish
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end', top: 10 }}>
        <Entypo name="magnifying-glass" size={25} />
      </View>
    </View>
  )
}
export const SelectTab = ({
  tabItems = [null],
  selectItem = null,
  getValue,
  makeCenter,
}) => {
  const [select, setSelect] = useState(0)
  React.useEffect(() => {
    if (selectItem) setSelect(selectItem)
  }, [selectItem])
  React.useEffect(() => {
    if (getValue) getValue(tabItems[select])
  }, [select])
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: makeCenter ? 'center' : 'flex-start',
        backgroundColor: 'white',
      }}
    >
      {tabItems.map((d, i) => (
        <TouchableOpacity
          key={d}
          style={{
            borderBottomWidth: 3,
            borderBottomColor: select === i ? '#E74974' : 'transparent',
            paddingVertical: 8,
            paddingHorizontal: 12,
          }}
          onPress={() => setSelect(i)}
        >
          <Text
            style={{
              color: select === i ? '#E74974' : '#5B5B5B',
              fontSize: 14,
              fontWeight: 'bold',
            }}
          >
            {d}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}
export default Header
