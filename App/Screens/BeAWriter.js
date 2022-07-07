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
import { people, ladywithdog, writerSupport, money, book } from '../../images'
import { styles } from '../../styles'
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { LinearGradient } from 'expo-linear-gradient'
const BeAWriter = ({ navigation }) => {
  return (
    <View>
      <ScrollView style={{ backgroundColor: '#E39BC9', marginBottom: -150 }}>
        <Image
          source={people}
          style={{ height: 600, width: '100%', position: 'absolute' }}
        />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginHorizontal: 10, marginTop: 40 }}
        >
          <Feather name="arrow-left-circle" size={33} color="white" />
        </TouchableOpacity>
        <View
          style={{
            height: 200,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 50,
          }}
        >
          <View
            style={{
              width: '100%',
              height: 120,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ fontSize: 35, color: 'white', fontWeight: 'bold' }}>
              BE A WRITER
            </Text>
            <Text
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                color: 'white',
                flex: 1,
              }}
              numberOfLines={2}
            >
              Create your own stories
            </Text>
          </View>
        </View>
        <Image style={{ width: '100%', top: -80 }} source={ladywithdog} />
        <View>
          <View style={{ top: -260, alignItems: 'center' }}>
            <Text style={{ marginBottom: 10 }}>
              You can apply through the following URL
            </Text>
            <View
              style={{
                paddingVertical: 18,
                paddingHorizontal: 40,
                borderRadius: 30,
                backgroundColor: 'rgba(252,252,252,0.5)',
              }}
            >
              <Text style={{ fontWeight: 'bold' }}>heartnovelwriting.com</Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                width: '100%',
                marginTop: 80,
              }}
            >
              <View
                style={{
                  paddingHorizontal: 6,
                  paddingVertical: 12,
                  borderRadius: 25,
                  backgroundColor: '#A9A6FF',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: 10,
                }}
              >
                <View style={{ flex: 1, alignItems: 'center' }}>
                  <Image source={money} />
                  <Text
                    style={{
                      textAlign: 'center',
                      color: 'white',
                      fontSize: 12,
                      textShadowColor: 'black',
                      textShadowRadius: 3,
                      textShadowOffset: { height: 2 },
                    }}
                  >
                    Enjoy monetization privileges
                  </Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                  <Image source={writerSupport} />
                  <Text
                    style={{
                      textAlign: 'center',
                      color: 'white',
                      fontSize: 12,
                      textShadowColor: 'black',
                      textShadowRadius: 3,
                      textShadowOffset: { height: 2 },
                    }}
                  >
                    Get writer support
                  </Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                  <Image source={book} />
                  <Text
                    style={{
                      textAlign: 'center',
                      color: 'white',
                      fontSize: 12,
                      textShadowColor: 'black',
                      textShadowRadius: 3,
                      textShadowOffset: { height: 2 },
                    }}
                  >
                    Millions of users will appreciate your works
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          width: '100%',
          height: 65,
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 0,
          padding: 10,
        }}
      >
        <TouchableOpacity style={{ width: '100%' }}>
          <LinearGradient
            colors={['#FF749A', '#FF89A9', 'pink']}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 30,
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
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>
              Start Writing
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default BeAWriter
