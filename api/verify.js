import axios from 'axios'
import { URL } from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert } from 'react-native'

export const verifyUser = async (OTP) => {
  try {
    const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS')
    if (ACCESS_TOKEN === null) return false
    const resp = await axios.patch(
      URL + `users/verify/${OTP}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    )
    if (resp.data.message) Alert.alert(null, resp.data.message)
    if (resp.data.rtkn && resp.data.loggedin)
      await AsyncStorage.setItem('REFRESH', resp.data.rtkn)
    if (resp.data.tkn && resp.data.loggedin)
      await AsyncStorage.setItem('ACCESS', resp.data.tkn)
    return resp.data.loggedin ? true : false
  } catch (e) {
    if (e.response.data.message && e.response.status !== 500)
      Alert.alert(null, e.response.data.message)
    return null
  }
}

export const resendCode = async () => {
  try {
    const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS')
    if (ACCESS_TOKEN === null) return false
    const resp = await axios.patch(
      URL + `users/requestOtp`,
      {},
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    )
    if (resp.data.message) Alert.alert(null, resp.data.message)
    return resp.data.sent
  } catch (e) {
    if (e.response.data.message && e.response.status !== 500)
      Alert.alert(null, e.response.data.message)
    return null
  }
}
