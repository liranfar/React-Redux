//we inject this function to createStore in index.js
import { combineReducers } from 'redux';
import flashMessages from './reducers/flashMessages.js'

export default combineReducers({
    flashMessages
})