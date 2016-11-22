import { AuthAction, TextAction } from '../actions'

export const LogAction = {
    JOIN: 'LOG_JOIN',
    CHAT: 'LOG_CHAT',
    LEAVE: 'LOG_LEAVE',
    ERROR: 'LOG_ERROR',
}

const log = (state = [], action) => {
    switch(action.type) {
        case AuthAction.SUCCESS:
            return [
                ...state,
                `Logged in as ${action.user}`
            ]

        case LogAction.JOIN:
            return [
                ...state,
                `${action.user} has joined.`
            ]

        case TextAction.CHAT:
            return [
                ...state,
                `${action.user}: ${action.text}`
            ]

        case LogAction.LEAVE:
            return [
                ...state,
                `${action.user} has left`
            ]

        case LogAction.ERROR:
            return [
                ...state,
                'Error: ' + action.error
            ]

    }

    return state
}

export default log
