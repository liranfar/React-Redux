//we inject this function to createStore in index.js
import { combineReducers } from 'redux';
import flashMessages from './reducers/flashMessages.js'
import auth from './reducers/auth.js'

export default combineReducers({
    flashMessages,
    auth
})