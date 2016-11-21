export const LogAction = {
    JOIN: 'LOG_JOIN',
    CHAT: 'LOG_CHAT',
    LEAVE: 'LOG_LEAVE',
    ERROR: 'LOG_ERROR',
}

const log = (state = [], action) => {
    switch(action.type) {
        case LogAction.JOIN:
            return [
                ...state,
                `${action.user} has joined.`
            ]

        case LogAction.CHAT:
            return [
                ...state,
                `${action.user}: ${action.message}`
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
