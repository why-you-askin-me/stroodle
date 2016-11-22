import { combineReducers } from 'redux'
import log from './log'
import messages from './messages'
import { AuthAction } from '../actions'

const profile = (state = null, action) => {
    if(action.type == AuthAction.SUCCESS) {
        return action.user
    }

    return state
}

const reducers = combineReducers({
    log,
    profile,
    messages,
})

export default reducers
