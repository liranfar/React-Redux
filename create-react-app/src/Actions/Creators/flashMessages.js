
import {ADD_FLASH_MESSAGE} from "../types";

//ActionCreator
export function addFlashMessage(message) {
    return {
        type: ADD_FLASH_MESSAGE,
        message
    }
}