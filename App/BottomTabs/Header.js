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
import { styles, windowWidth, windowHeight } from '../../styles'
import React, { useRef, useState } from 'react'

import { topDesign, logo, mainLogo } from '../../images'
import { Children } from 'react/cjs/react.production.min'

const Header = ({ logo, title, onPress, rightButton }) => {
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
      {logo ? (
        <Image source={mainLogo} style={{ width: 27, height: 45.62 }} />
      ) : null}
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
          {title}
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end', top: 10 }}>
        <TouchableOpacity onPress={() => (onPress ? onPress() : null)}>
          {rightButton}
        </TouchableOpacity>
      </View>
    </View>
  )
}
export const SelectTab = ({
  tabItems = [],
  selectItem = null,
  getValue,
  getIndex,
  makeCenter,
  children,
}) => {
  const [select, setSelect] = useState(0)
  const [compWidth, setCompWidth] = useState(0)
  const ref = useRef()
  React.useEffect(() => {
    if (selectItem) setSelect(selectItem)
  }, [selectItem])
  React.useEffect(() => {
    if (getValue) getValue(tabItems[select])
    if (getIndex) getIndex(select)
  }, [select])

  return (
    <View>
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
            onPress={() => {
              setSelect(i)
              if (children) ref.current.scrollTo({ x: compWidth * i, y: 0 })
            }}
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
      {children ? (
        <ScrollView
          horizontal={true}
          ref={ref}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          onLayout={(e) => setCompWidth(e.nativeEvent.layout.width)}
          onMomentumScrollEnd={(event) => {
            for (let i = 0; i < tabItems.length; i++) {
              if (event.nativeEvent.contentOffset.x >= compWidth * i) {
                setSelect(i)
              }
            }
          }}
        >
          {children}
        </ScrollView>
      ) : null}
    </View>
  )
}
export default Header
