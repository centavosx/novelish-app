import axios from 'axios'
import { URL } from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert } from 'react-native'

export const addBookComment = async (bookId, rating, message) => {
  try {
    const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS')
    const REFRESH_TOKEN = await AsyncStorage.getItem('REFRESH')

    if (ACCESS_TOKEN === null || REFRESH_TOKEN === null) return false

    const resp = await axios.post(
      URL + `comments/${bookId}`,
      { rating, message },
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
    return { comms: resp.data.comments, success: true } ?? { success: false }
  } catch (e) {
    if (e.response.data.message && e.response.status !== 500)
      Alert.alert(null, e.response.data.message)
    const ACCESS_TOKEN = e.response.data.tkn
    const REFRESH_TOKEN = e.response.data.rtkn
    if (REFRESH_TOKEN) await AsyncStorage.setItem('REFRESH', REFRESH_TOKEN)
    if (ACCESS_TOKEN) await AsyncStorage.setItem('ACCESS', ACCESS_TOKEN)
    return { success: false }
  }
}

export const addCommentReply = async (bookId, commentId, message) => {
  try {
    const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS')
    const REFRESH_TOKEN = await AsyncStorage.getItem('REFRESH')

    if (ACCESS_TOKEN === null || REFRESH_TOKEN === null) return false

    const resp = await axios.post(
      URL + `comments/replies/${bookId}/${commentId}`,
      { message },
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
    return { comms: resp.data.replies, success: true } ?? { success: false }
  } catch (e) {
    if (e.response.data.message && e.response.status !== 500)
      Alert.alert(null, e.response.data.message)
    const ACCESS_TOKEN = e.response.data.tkn
    const REFRESH_TOKEN = e.response.data.rtkn

    if (REFRESH_TOKEN) await AsyncStorage.setItem('REFRESH', REFRESH_TOKEN)
    if (ACCESS_TOKEN) await AsyncStorage.setItem('ACCESS', ACCESS_TOKEN)
    return { success: false }
  }
}

export const addChapterComment = async (bookId, chapterId, rating, message) => {
  try {
    const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS')
    const REFRESH_TOKEN = await AsyncStorage.getItem('REFRESH')

    if (ACCESS_TOKEN === null || REFRESH_TOKEN === null) return false

    const resp = await axios.post(
      URL + `comments/${bookId}/chapter/${chapterId}`,
      { rating, message },
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

    return (
      { comms: resp.data.comments, success: true } ?? {
        success: false,
      }
    )
  } catch (e) {
    if (e.response.data.message && e.response.status !== 500)
      Alert.alert(null, e.response.data.message)
    const ACCESS_TOKEN = e.response.data.tkn
    const REFRESH_TOKEN = e.response.data.rtkn
    if (REFRESH_TOKEN) await AsyncStorage.setItem('REFRESH', REFRESH_TOKEN)
    if (ACCESS_TOKEN) await AsyncStorage.setItem('ACCESS', ACCESS_TOKEN)
    return { success: false }
  }
}

export const addCommentChapterReply = async (
  bookId,
  chapterId,
  commentId,
  message
) => {
  try {
    const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS')
    const REFRESH_TOKEN = await AsyncStorage.getItem('REFRESH')

    if (ACCESS_TOKEN === null || REFRESH_TOKEN === null) return false

    const resp = await axios.post(
      URL + `comments/${bookId}/chapter/${chapterId}/${commentId}`,
      { message },
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
    return { comms: resp.data.replies, success: true } ?? { success: false }
  } catch (e) {
    if (e.response.data.message && e.response.status !== 500)
      Alert.alert(null, e.response.data.message)
    console.log(e.response.data)
    const ACCESS_TOKEN = e.response.data.tkn
    const REFRESH_TOKEN = e.response.data.rtkn
    if (REFRESH_TOKEN) await AsyncStorage.setItem('REFRESH', REFRESH_TOKEN)
    if (ACCESS_TOKEN) await AsyncStorage.setItem('ACCESS', ACCESS_TOKEN)
    return { success: false }
  }
}

export const getComments = async (bookId) => {
  try {
    const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS')
    const REFRESH_TOKEN = await AsyncStorage.getItem('REFRESH')

    if (ACCESS_TOKEN === null || REFRESH_TOKEN === null) return false

    const resp = await axios.get(
      URL + `comments/${bookId}`,

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
    return resp.data
      ? { _id: resp.data._id, comments: resp.data.comments }
      : { comments: [] }
  } catch (e) {
    if (e.response.data.message && e.response.status !== 500)
      Alert.alert(null, e.response.data.message)
    const ACCESS_TOKEN = e.response.data.tkn
    const REFRESH_TOKEN = e.response.data.rtkn
    if (REFRESH_TOKEN) await AsyncStorage.setItem('REFRESH', REFRESH_TOKEN)
    if (ACCESS_TOKEN) await AsyncStorage.setItem('ACCESS', ACCESS_TOKEN)
    return { comments: [] }
  }
}

export const getCommentsReplies = async (bookId, commentId) => {
  try {
    const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS')
    const REFRESH_TOKEN = await AsyncStorage.getItem('REFRESH')

    if (ACCESS_TOKEN === null || REFRESH_TOKEN === null) return false

    const resp = await axios.get(
      URL + `comments/replies/${bookId}/${commentId}`,

      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          tkn: REFRESH_TOKEN,
        },
      }
    )

    if (resp.data.rtkn) await AsyncStorage.setItem('REFRESH', resp.data.rtkn)
    if (resp.data.tkn) await AsyncStorage.setItem('ACCESS', resp.data.tkn)
    let newData = { ...resp.data }
    delete newData.tkn
    delete newData.rtkn
    return resp.data ? newData : { replies: [] }
  } catch (e) {
    if (e.response.data.message && e.response.status !== 500)
      Alert.alert(null, e.response.data.message)
    const ACCESS_TOKEN = e.response.data.tkn
    const REFRESH_TOKEN = e.response.data.rtkn
    if (REFRESH_TOKEN) await AsyncStorage.setItem('REFRESH', REFRESH_TOKEN)
    if (ACCESS_TOKEN) await AsyncStorage.setItem('ACCESS', ACCESS_TOKEN)
    return { replies: [] }
  }
}

export const getChapterComments = async (bookId, chapterId) => {
  try {
    const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS')
    const REFRESH_TOKEN = await AsyncStorage.getItem('REFRESH')

    if (ACCESS_TOKEN === null || REFRESH_TOKEN === null) return false

    const resp = await axios.get(
      URL + `comments/${bookId}/chapter/${chapterId}`,

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
    return resp.data ? { comments: resp.data.comments } : { comments: [] }
  } catch (e) {
    if (e.response.data.message && e.response.status !== 500)
      Alert.alert(null, e.response.data.message)
    const ACCESS_TOKEN = e.response.data.tkn
    const REFRESH_TOKEN = e.response.data.rtkn
    if (REFRESH_TOKEN) await AsyncStorage.setItem('REFRESH', REFRESH_TOKEN)
    if (ACCESS_TOKEN) await AsyncStorage.setItem('ACCESS', ACCESS_TOKEN)
    return { comments: [] }
  }
}

export const getChapterCommentsReply = async (bookId, chapterId, commentId) => {
  try {
    const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS')
    const REFRESH_TOKEN = await AsyncStorage.getItem('REFRESH')

    if (ACCESS_TOKEN === null || REFRESH_TOKEN === null) return false

    const resp = await axios.get(
      URL + `comments/${bookId}/chapter/${chapterId}/${commentId}`,

      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          tkn: REFRESH_TOKEN,
        },
      }
    )

    if (resp.data.rtkn) await AsyncStorage.setItem('REFRESH', resp.data.rtkn)
    if (resp.data.tkn) await AsyncStorage.setItem('ACCESS', resp.data.tkn)
    let newData = { ...resp.data }
    delete newData.tkn
    delete newData.rtkn
    return resp.data ? newData : { replies: [] }
  } catch (e) {
    if (e.response.data.message && e.response.status !== 500)
      Alert.alert(null, e.response.data.message)
    const ACCESS_TOKEN = e.response.data.tkn
    const REFRESH_TOKEN = e.response.data.rtkn
    if (REFRESH_TOKEN) await AsyncStorage.setItem('REFRESH', REFRESH_TOKEN)
    if (ACCESS_TOKEN) await AsyncStorage.setItem('ACCESS', ACCESS_TOKEN)
    return { replies: [] }
  }
}
