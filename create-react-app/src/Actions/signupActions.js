//thanks to thunk, we  can return a function instead of an action
//it is a function that returns a function which gets the dispatch
import axios from 'axios';

export function userSignupRequest(userData) {

    let URL = 'https://randomuser.me/api/';

    return dispatch => {
        return axios.get(URL, userData);
    }
}