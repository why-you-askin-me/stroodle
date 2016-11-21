import { combineReducers } from 'redux'
import log from './log'
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
})

export default reducers
