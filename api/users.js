import axios from 'axios'
import { URL } from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const loginUser = async (email, pass) => {
  try {
    const resp = await axios.get(URL + `users/login/${pass}`, {
      params: {
        email,
      },
    })
    if (resp.data.message) alert(resp.data.message)
    if (resp.data.rtkn) await AsyncStorage.setItem('REFRESH', resp.data.rtkn)
    await AsyncStorage.setItem('ACCESS', resp.data.tkn)
    return resp.data.loggedin
  } catch (e) {
    if (e.response.data.message && e.response.status !== 500)
      alert(e.response.data.message)
    return null
  }
}

export const registerUser = async (name, username, email, password) => {
  try {
    const resp = await axios.post(URL + 'users', {
      name,
      username,
      email,
      password,
    })
    if (resp.data.message) alert(resp.data.message)
    return resp.data.registered ? true : false
  } catch (e) {
    if (e.response.data.message && e.response.status !== 500)
      alert(e.response.data.message)
    return false
  }
}

export const getLibraries = async () => {
  try {
    const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS')
    const REFRESH_TOKEN = await AsyncStorage.getItem('REFRESH')

    if (ACCESS_TOKEN === null || REFRESH_TOKEN === null) return false

    const resp = await axios.get(URL + `users/library`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        tkn: REFRESH_TOKEN,
      },
    })
    if (resp.data.message) alert(resp.data.message)
    if (resp.data.rtkn) await AsyncStorage.setItem('REFRESH', resp.data.rtkn)
    if (resp.data.tkn) await AsyncStorage.setItem('ACCESS', resp.data.tkn)
    return resp.data?.book ?? []
  } catch (e) {
    if (e.response.data.message && e.response.status !== 500)
      alert(e.response.data.message)
    const ACCESS_TOKEN = e.response.data.tkn
    const REFRESH_TOKEN = e.response.data.rtkn

    if (REFRESH_TOKEN) await AsyncStorage.setItem('REFRESH', REFRESH_TOKEN)
    if (ACCESS_TOKEN) await AsyncStorage.setItem('ACCESS', ACCESS_TOKEN)
    return []
  }
}
export const removeBooks = async (data = []) => {
  try {
    const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS')
    const REFRESH_TOKEN = await AsyncStorage.getItem('REFRESH')

    if (ACCESS_TOKEN === null || REFRESH_TOKEN === null) return false

    const resp = await axios.patch(
      URL + `users/library`,
      { data },
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          tkn: REFRESH_TOKEN,
        },
      }
    )
    if (resp.data.message) alert(resp.data.message)
    if (resp.data.rtkn) await AsyncStorage.setItem('REFRESH', resp.data.rtkn)
    if (resp.data.tkn) await AsyncStorage.setItem('ACCESS', resp.data.tkn)
    return resp.data.removed ?? false
  } catch (e) {
    if (e.response.data.message && e.response.status !== 500)
      alert(e.response.data.message)
    const ACCESS_TOKEN = e.response.data.tkn
    const REFRESH_TOKEN = e.response.data.rtkn
    if (REFRESH_TOKEN) await AsyncStorage.setItem('REFRESH', REFRESH_TOKEN)
    if (ACCESS_TOKEN) await AsyncStorage.setItem('ACCESS', ACCESS_TOKEN)
    return []
  }
}
