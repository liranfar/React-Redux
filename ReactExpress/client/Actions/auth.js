//ActionCreator
import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import {setCurrentUser} from "./Creators/currentUser";


export function userLoginRequest(credentials) {
    let URL = '/api/auth';

    return dispatch => {
        return axios.post(URL, credentials).then( res => {
            const token = res.data.token;
            localStorage.setItem('jwtToken',token);
            setAuthorizationToken(token);
            console.log(jwt.decode(token));
            dispatch(setCurrentUser(jwt.decode(token)));

        });
    }
}