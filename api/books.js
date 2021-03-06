import axios from 'axios'
import { URL } from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert } from 'react-native'

export const getAllBooks = async () => {
  try {
    const resp = await axios.get(URL + `books`)
    return resp.data
  } catch (e) {
    if (e.response.data.message && e.response.status !== 500)
      Alert.alert(null, e.response.data.message)
    return {}
  }
}

export const getAllBooksPage = async (start, end) => {
  try {
    const resp = await axios.get(URL + `books/all/${start}/${end}`)
    return resp.data
  } catch (e) {
    if (e.response.data.message && e.response.status !== 500)
      Alert.alert(null, e.response.data.message)
    return []
  }
}

export const getPopularBooksPage = async (start, end) => {
  try {
    const resp = await axios.get(URL + `books/popular/${start}/${end}`)
    return resp.data
  } catch (e) {
    if (e.response.data.message && e.response.status !== 500)
      Alert.alert(null, e.response.data.message)
    return []
  }
}

export const getUpdatedBooksPage = async (start, end) => {
  try {
    const resp = await axios.get(URL + `books/updates/${start}/${end}`)
    return resp.data
  } catch (e) {
    if (e.response.data.message && e.response.status !== 500)
      Alert.alert(null, e.response.data.message)
    return []
  }
}

export const getChapterBooksPage = async (start, end) => {
  try {
    const resp = await axios.get(URL + `books/chapterNumber/${start}/${end}`)
    return resp.data
  } catch (e) {
    if (e.response.data.message && e.response.status !== 500)
      Alert.alert(null, e.response.data.message)
    return []
  }
}

export const ViewBook = async (id) => {
  try {
    const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS')
    const REFRESH_TOKEN = await AsyncStorage.getItem('REFRESH')

    if (ACCESS_TOKEN === null || REFRESH_TOKEN === null) return false

    const bookData = await axios.get(URL + `books/${id}`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        tkn: REFRESH_TOKEN,
      },
    })
    if (bookData.data.message) Alert.alert(null, bookData.data.message)
    if (bookData.data.rtkn)
      await AsyncStorage.setItem('REFRESH', bookData.data.rtkn)
    if (bookData.data.tkn)
      await AsyncStorage.setItem('ACCESS', bookData.data.tkn)
    return bookData.data.data ?? {}
  } catch (e) {
    if (e.response.data.message && e.response.status !== 500)
      Alert.alert(null, e.response.data.message)
    const ACCESS_TOKEN = e.response.data.tkn
    const REFRESH_TOKEN = e.response.data.rtkn
    if (REFRESH_TOKEN) await AsyncStorage.setItem('REFRESH', REFRESH_TOKEN)
    if (ACCESS_TOKEN) await AsyncStorage.setItem('ACCESS', ACCESS_TOKEN)
    console.log('hello')
    return {}
  }
}

export const likeBook = async (bookId) => {
  try {
    const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS')
    const REFRESH_TOKEN = await AsyncStorage.getItem('REFRESH')

    if (ACCESS_TOKEN === null || REFRESH_TOKEN === null) return false

    const resp = await axios.patch(
      URL + `books/like/${bookId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          tkn: REFRESH_TOKEN,
        },
      }
    )

    if (resp.data.message) Alert.alert(null, resp.data.message)
    if (resp.data.rtkn) await AsyncStorage.setItem('REFRESH', resp.data.rtkn)
    if (resp.data.tkn) await AsyncStorage.setItem('ACCESS', resp.data.tkn)
    return resp.data.updated ?? false
  } catch (e) {
    if (e.response.data.message && e.response.status !== 500)
      Alert.alert(null, e.response.data.message)

    const ACCESS_TOKEN = e.response.data.tkn
    const REFRESH_TOKEN = e.response.data.rtkn
    console.log(e.response)
    if (REFRESH_TOKEN) await AsyncStorage.setItem('REFRESH', REFRESH_TOKEN)
    if (ACCESS_TOKEN) await AsyncStorage.setItem('ACCESS', ACCESS_TOKEN)
    return false
  }
}

export const saveBook = async (bookId) => {
  try {
    const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS')
    const REFRESH_TOKEN = await AsyncStorage.getItem('REFRESH')

    if (ACCESS_TOKEN === null || REFRESH_TOKEN === null) return false

    const resp = await axios.patch(
      URL + `users/library/${bookId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          tkn: REFRESH_TOKEN,
        },
      }
    )
    if (resp.data.message) Alert.alert(null, resp.data.message)
    if (resp.data.rtkn) await AsyncStorage.setItem('REFRESH', resp.data.rtkn)
    if (resp.data.tkn) await AsyncStorage.setItem('ACCESS', resp.data.tkn)
    return resp.data.updated ?? false
  } catch (e) {
    if (e.response.data.message && e.response.status !== 500)
      Alert.alert(null, e.response.data.message)
    const ACCESS_TOKEN = e.response.data.tkn
    const REFRESH_TOKEN = e.response.data.rtkn
    console.log(e.response)
    if (REFRESH_TOKEN) await AsyncStorage.setItem('REFRESH', REFRESH_TOKEN)
    if (ACCESS_TOKEN) await AsyncStorage.setItem('ACCESS', ACCESS_TOKEN)
    return false
  }
}
export const unlockChapter = async (bookId, chapterId) => {
  try {
    const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS')
    const REFRESH_TOKEN = await AsyncStorage.getItem('REFRESH')

    if (ACCESS_TOKEN === null || REFRESH_TOKEN === null) return false
    console.log(bookId, chapterId)
    const resp = await axios.patch(
      URL + `books/${bookId}/${chapterId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          tkn: REFRESH_TOKEN,
        },
      }
    )

    if (resp.data.message) Alert.alert(null, resp.data.message)
    if (resp.data.rtkn) await AsyncStorage.setItem('REFRESH', resp.data.rtkn)
    if (resp.data.tkn) await AsyncStorage.setItem('ACCESS', resp.data.tkn)

    return resp.data.updated ?? false
  } catch (e) {
    if (e.response.data.message && e.response.status !== 500)
      Alert.alert(null, e.response.data.message)
    const ACCESS_TOKEN = e.response.data.tkn
    const REFRESH_TOKEN = e.response.data.rtkn

    if (REFRESH_TOKEN) await AsyncStorage.setItem('REFRESH', REFRESH_TOKEN)
    if (ACCESS_TOKEN) await AsyncStorage.setItem('ACCESS', ACCESS_TOKEN)
    return false
  }
}

export const getChapters = async (bookId) => {
  try {
    const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS')
    const REFRESH_TOKEN = await AsyncStorage.getItem('REFRESH')

    if (ACCESS_TOKEN === null || REFRESH_TOKEN === null) return false

    const resp = await axios.get(URL + `books/chapters/all/${bookId}`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        tkn: REFRESH_TOKEN,
      },
    })

    if (resp.data.message) Alert.alert(null, resp.data.message)
    if (resp.data.rtkn) await AsyncStorage.setItem('REFRESH', resp.data.rtkn)
    if (resp.data.tkn) await AsyncStorage.setItem('ACCESS', resp.data.tkn)
    return resp.data.data ?? []
  } catch (e) {
    if (e.response.data.message && e.response.status !== 500)
      Alert.alert(null, e.response.data.message)
    const ACCESS_TOKEN = e.response.data.tkn
    const REFRESH_TOKEN = e.response.data.rtkn

    if (REFRESH_TOKEN) await AsyncStorage.setItem('REFRESH', REFRESH_TOKEN)
    if (ACCESS_TOKEN) await AsyncStorage.setItem('ACCESS', ACCESS_TOKEN)
    return []
  }
}
export const readChapter = async (bookId, chapterId) => {
  try {
    const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS')
    const REFRESH_TOKEN = await AsyncStorage.getItem('REFRESH')

    if (ACCESS_TOKEN === null || REFRESH_TOKEN === null) return false

    const resp = await axios.get(URL + `books/${bookId}/${chapterId}`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        tkn: REFRESH_TOKEN,
      },
    })

    if (resp.data.message) Alert.alert(null, resp.data.message)
    if (resp.data.rtkn) await AsyncStorage.setItem('REFRESH', resp.data.rtkn)
    if (resp.data.tkn) await AsyncStorage.setItem('ACCESS', resp.data.tkn)
    return resp.data.chapterData ?? {}
  } catch (e) {
    if (e.response.data.message && e.response.status !== 500)
      Alert.alert(null, e.response.data.message)
    const ACCESS_TOKEN = e.response.data.tkn
    const REFRESH_TOKEN = e.response.data.rtkn

    if (REFRESH_TOKEN) await AsyncStorage.setItem('REFRESH', REFRESH_TOKEN)
    if (ACCESS_TOKEN) await AsyncStorage.setItem('ACCESS', ACCESS_TOKEN)
    return {}
  }
}
