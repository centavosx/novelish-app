import ReactNative, {
  AppRegistry,
  findNodeHandle,
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
import React, { useRef, useState, useCallback } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import { topDesign, logo, mainLogo } from '../../images'

// const Slider = () =>{
//     return (

//     )
// }
const useComponentSize = () => {
  const [size, setSize] = useState(null)
  const onLayout = useCallback((event) => {
    const { width } = event.nativeEvent.layout
    setSize(width)
  }, [])

  return [size, onLayout]
}

export const SelectTab = ({
  tabItems = [],
  selectItem = null,
  getValue,
  getIndex,
  makeCenter,
  children,
  topImages,
  color,
  scroll,
}) => {
  const [select, setSelect] = useState(0)
  const ref = useRef()
  const ref2 = useRef()
  const [compWidth, onLayout] = useComponentSize()
  React.useEffect(() => {
    if (selectItem) setSelect(selectItem)
  }, [selectItem])
  React.useEffect(() => {
    if (getValue) getValue(tabItems[select])
    if (getIndex) getIndex(select)
  }, [select])

  return (
    <View>
      {topImages ? (
        <ScrollView
          horizontal={true}
          ref={ref2}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          scrollEnabled={false}
        >
          {topImages.map((d) => d)}
        </ScrollView>
      ) : null}
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
              flex: 1,
              borderBottomWidth: 3,
              borderBottomColor:
                select === i ? (color ? color : '#E74974') : 'transparent',
              paddingVertical: 8,
            }}
            onPress={() => {
              setSelect(i)
              if (children) {
                ref.current.scrollTo({ x: compWidth * i, y: 0 })
                {
                  topImages
                    ? ref2.current.scrollTo({ x: compWidth * i, y: 0 })
                    : null
                }
              }
            }}
          >
            <Text
              style={{
                color: select === i ? (color ? color : '#E74974') : '#5B5B5B',
                fontSize: 14,
                fontWeight: 'bold',
                textAlign: 'center',
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
          scrollEnabled={scroll === true || scroll === false ? scroll : true}
          onLayout={onLayout}
          onMomentumScrollEnd={(event) => {
            if (event.nativeEvent.contentOffset.x < compWidth) {
              setSelect(0)
              {
                topImages
                  ? ref2.current.scrollTo({ x: compWidth * 0, y: 0 })
                  : null
              }
            } else {
              for (let i = 1; i < tabItems.length; i++) {
                if (event.nativeEvent.contentOffset.x <= compWidth * i) {
                  setSelect(i)
                  {
                    topImages
                      ? ref2.current.scrollTo({ x: compWidth * i, y: 0 })
                      : null
                  }
                  break
                }
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

export const SimpleTab = ({
  tabItems = [],
  selectItem = null,
  getValue,
  getIndex,
  makeCenter,
  navigateTab = [],
  navigation,
  stretch,
}) => {
  const [select, setSelect] = useState(0)
  React.useEffect(() => {
    if (selectItem) setSelect(selectItem)
  }, [selectItem])
  React.useEffect(() => {
    if (getValue) getValue(tabItems[select])
    if (getIndex) getIndex(select)
  }, [select])
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: makeCenter ? 'center' : 'flex-start',
        backgroundColor: 'white',
        flex: stretch ? 1 : 0,
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
            flex: stretch ? 1 : 0,
          }}
          onPress={() => {
            navigateTab.length > 0 ? navigation.navigate(navigateTab[i]) : null
            setSelect(i)
          }}
        >
          <Text
            style={{
              color: select === i ? '#E74974' : '#5B5B5B',
              fontSize: 14,
              fontWeight: 'bold',
              textAlign: stretch ? 'center' : null,
            }}
          >
            {d}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}
