import { send } from '../socket'

// Mirror an action in the API
const mirror = f => (
    (...args) => {
        const msg = f.call(null, args)
        send(msg)
        return msg
    }
)

export const AuthAction = {
    ENTER: 'AUTH_ENTER',
    SUCCESS: 'AUTH_SUCCESS',
}

export const auth = mirror(user => ({
    type: AuthAction.ENTER,
    user
}))
