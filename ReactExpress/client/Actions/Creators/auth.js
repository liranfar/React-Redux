//ActionCreator
import axios from 'axios';

export function userLoginRequest(credentials) {
    let URL = '/api/auth';

    return dispatch => {
        return axios.post(URL, credentials);
    }
}