import {SET_CURRENT_USER} from "../types";

export function setCurrentUser(user){
    return {
        type: SET_CURRENT_USER,
        user
    }
}