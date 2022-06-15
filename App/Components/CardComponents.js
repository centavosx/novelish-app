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
export const CardMain = ({ children, style, touchable, onPress }) => (
  <TouchableOpacity
    style={[styles.cardGenres, style]}
    disabled={!touchable}
    onPress={() => (onPress ? onPress() : null)}
  >
    {children}
  </TouchableOpacity>
)
