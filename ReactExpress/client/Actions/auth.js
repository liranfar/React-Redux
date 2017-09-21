//ActionCreator
import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import {setCurrentUser} from "./Creators/currentUser";
import {addFlashMessage} from "./Creators/flashMessages";
import { handleAuthorizationToken } from "../localStorage/tokenCheck";


export function userLoginRequest(credentials) {
    let URL = '/api/auth';

    return dispatch => {
        return axios.post(URL, credentials).then( res => {
            const token = res.data.token;
            handleAuthorizationToken(token,dispatch);
        });
    }
}

export function userLogoutRequest() {
    return dispatch => {
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
        dispatch(addFlashMessage({
            type: 'success',
            text: 'You have logged out successfully'
        }))
    }
}

