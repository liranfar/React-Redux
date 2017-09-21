import setAuthorizationToken from "../utils/setAuthorizationToken";
import {isEmpty} from "lodash";
import {setCurrentUser} from "../Actions/Creators/currentUser";
import jwt from 'jsonwebtoken';
import { store } from '../index'
export default function checkAuthrizationToken() {

    let jwtToken = localStorage.jwtToken;
    if (jwtToken) {
        setAuthorizationToken(jwtToken);
        //TODO Liran: what if the user edited the token? ( null value... )
        store.dispatch(setCurrentUser(jwt.decode(jwtToken)))
    }
}

export function handleAuthorizationToken(token,dispatch = {}) {
    localStorage.setItem('jwtToken',token);
    setAuthorizationToken(token);
    console.log(jwt.decode(token));

    if(isEmpty(dispatch)) {
        store.dispatch(setCurrentUser(jwt.decode(token)));
    }
    else {
        dispatch(setCurrentUser(jwt.decode(token)));
    }
}