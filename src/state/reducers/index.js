import {combineReducers} from 'redux'
import character from './characterReducer'

const rootReducer = combineReducers({
    character
})

export default rootReducer