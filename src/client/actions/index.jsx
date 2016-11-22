import { send } from '../socket'

// Mirror an action in the API
const mirror = f => (
    (...args) => {
        const msg = f.apply(null, args)
        send(msg)
        return msg
    }
)

export const AuthAction = {
    SUBMIT: 'AUTH_SUBMIT',
    ERROR: 'AUTH_ERROR',
    SUCCESS: 'AUTH_SUCCESS',
}

export const auth = mirror(user => ({
    type: AuthAction.SUBMIT,
    user
}))

export const TextAction = {
    UPDATE: 'TEXT_UPDATE',
    SUBMIT: 'TEXT_SUBMIT',
    CHAT: 'TEXT_CHAT',
}

export const textUpdate = mirror(text => ({
    type: TextAction.UPDATE,
    text
}))

export const textSubmit = mirror(() => ({
    type: TextAction.SUBMIT,
}))
