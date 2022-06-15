import { styles } from '../../styles'
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
export const CardMain = ({ children }) => (
  <View style={styles.cardGenres}>{children}</View>
)
