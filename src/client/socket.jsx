import { LogAction } from './reducers/log'

let socket
let dispatch

const connect = () => {
    const interval = setInterval(() => {
        socket = new WebSocket('ws://localhost:1984')
        socket.onopen = () => clearInterval(interval)
        socket.onmessage = msg => dispatch(JSON.parse(msg.data))
        socket.onerror = () => {
            socket = null
            dispatch({
                type: LoginAction.ERROR,
                error: 'Failed to connect',
            })
        }
    }, 1000)
}

export const init = store => {
    dispatch = store

    connect()
}

export const send = obj => {
    if(socket) {
        socket.send(JSON.stringify(obj))
    } else {
        throw 'Socket not initialized!'
    }
}
