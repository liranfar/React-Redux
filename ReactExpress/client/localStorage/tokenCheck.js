import setAuthorizationToken from "../utils/setAuthorizationToken";

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