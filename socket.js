import { WEBSOCKET } from '@env'

import io from 'socket.io-client'
const socket = io(WEBSOCKET, {
  transports: ['websocket', 'polling'],
})

export default socket
