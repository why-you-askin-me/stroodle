import { LogAction, TextAction } from '../actions'

const messages = (state = {}, action) => {
    let newState = Object.assign({}, state)

    switch(action.type) {
        case TextAction.UPDATE:
            if(!action.user) return state
            if(action.text.length == 0) {
                delete newState[action.user]
                return newState
            }

            newState[action.user] = action.text

            return newState

        case TextAction.CHAT:
        case LogAction.LEAVE:
            delete newState[action.user]

            return newState
    }

    return state
}

export default messages
