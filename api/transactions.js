import axios from 'axios'
import { URL } from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert } from 'react-native'

export const getCoins = async () => {
  try {
    const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS')
    const REFRESH_TOKEN = await AsyncStorage.getItem('REFRESH')

    if (ACCESS_TOKEN === null || REFRESH_TOKEN === null) return false

    const resp = await axios.get(URL + 'transactions/coins', {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        tkn: REFRESH_TOKEN,
      },
    })

    if (resp.data.rtkn) await AsyncStorage.setItem('REFRESH', resp.data.rtkn)
    if (resp.data.tkn) await AsyncStorage.setItem('ACCESS', resp.data.tkn)
    let newData = { ...resp.data }
    delete newData.tkn
    delete newData.rtkn
    return resp.data ? newData : { coins: [] }
  } catch (e) {
    if (e.response.data.message && e.response.status !== 500)
      Alert.alert(null, e.response.data.message)
    const ACCESS_TOKEN = e.response.data.tkn
    const REFRESH_TOKEN = e.response.data.rtkn
    if (REFRESH_TOKEN) await AsyncStorage.setItem('REFRESH', REFRESH_TOKEN)
    if (ACCESS_TOKEN) await AsyncStorage.setItem('ACCESS', ACCESS_TOKEN)
    return { coins: [] }
  }
}

export const addCoin = async (name) => {
  try {
    const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS')
    const REFRESH_TOKEN = await AsyncStorage.getItem('REFRESH')
    if (ACCESS_TOKEN === null || REFRESH_TOKEN === null) return false
    const resp = await axios.post(
      URL + 'transactions/pay',
      { name },
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          tkn: REFRESH_TOKEN,
        },
      }
    )
    if (resp.data.rtkn) await AsyncStorage.setItem('REFRESH', resp.data.rtkn)
    if (resp.data.tkn) await AsyncStorage.setItem('ACCESS', resp.data.tkn)
    return resp.data.url ?? null
  } catch (e) {
    if (e.response.data.message && e.response.status !== 500)
      Alert.alert(null, e.response.data.message)
    const ACCESS_TOKEN = e.response.data.tkn
    const REFRESH_TOKEN = e.response.data.rtkn
    if (REFRESH_TOKEN) await AsyncStorage.setItem('REFRESH', REFRESH_TOKEN)
    if (ACCESS_TOKEN) await AsyncStorage.setItem('ACCESS', ACCESS_TOKEN)
    return null
  }
}

export const getTransactions = async (start, end) => {
  try {
    const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS')
    const REFRESH_TOKEN = await AsyncStorage.getItem('REFRESH')

    if (ACCESS_TOKEN === null || REFRESH_TOKEN === null) return false

    const resp = await axios.get(URL + `transactions/${start}/${end}`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        tkn: REFRESH_TOKEN,
      },
    })

    if (resp.data.rtkn) await AsyncStorage.setItem('REFRESH', resp.data.rtkn)
    if (resp.data.tkn) await AsyncStorage.setItem('ACCESS', resp.data.tkn)
    let newData = { ...resp.data }
    delete newData.tkn
    delete newData.rtkn
    return resp.data ? newData : { trans: [] }
  } catch (e) {
    if (e.response.data.message && e.response.status !== 500)
      Alert.alert(null, e.response.data.message)
    const ACCESS_TOKEN = e.response.data.tkn
    const REFRESH_TOKEN = e.response.data.rtkn
    if (REFRESH_TOKEN) await AsyncStorage.setItem('REFRESH', REFRESH_TOKEN)
    if (ACCESS_TOKEN) await AsyncStorage.setItem('ACCESS', ACCESS_TOKEN)
    return { trans: [] }
  }
}
