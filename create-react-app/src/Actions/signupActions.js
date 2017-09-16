import axios from 'axios';

export function userSignupRequest(userData) {

    let URL = 'https://randomuser.me/api/';

    return dispatch => {
        return axios.get(URL, userData);
    }
}