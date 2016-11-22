import { AuthAction, TextAction } from '../actions'

export const LogType = {
    ME: 'LOG_ME',
    HISTORY: 'LOG_HISTORY',
    FUTURE: 'LOG_FUTURE',
    INFO: 'LOG_INFO',
}

export const LogAction = {
    JOIN: 'LOG_JOIN',
    CHAT: 'LOG_CHAT',
    LEAVE: 'LOG_LEAVE',
    ERROR: 'LOG_ERROR',
}

const make = (type, attr) => Object.assign({type}, attr)

const log = (state = [], action) => {
    switch(action.type) {
        case AuthAction.SUCCESS:
            return [
                ...state,
                make(LogType.INFO, {
                    text: `Logged in as ${action.user}`,
                })
            ]

        case LogAction.JOIN:
            return [
                ...state,
                make(LogType.INFO, {
                    text: `${action.user} joined`,
                })
            ]

        case LogAction.LEAVE:
            return [
                ...state,
                make(LogType.INFO, {
                    text: `${action.user} left`,
                })
            ]

        case LogAction.ERROR:
            return [
                ...state,
                make(LogType.INFO, {
                    text: `Error: ${action.error}`
                })
            ]

        case TextAction.CHAT:
            return [
                ...state,
                make(LogType.HISTORY, {
                    text: action.text,
                    user: action.user,
                })
            ]
    }

    return state
}

export default log
