import Validator from 'validator';
import {isEmpty} from 'lodash';

export default function validateInput(data) {

    let errors = {};

    /*errors.username = 'This field is required';*/

    if(Validator.isEmpty(data.username)) {
        errors.username = 'This field is required';
    }
    if(Validator.isEmpty(data.email)) {
        errors.email = 'This field is required';
    }
    if(!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }
    if(Validator.isEmpty(data.password)) {
        errors.password = 'This field is required';
    }
    if(Validator.isEmpty(data.passwordConfirm)) {
        errors.passwordConfirm = 'This field is required';
    }
    if(!Validator.equals(data.password,data.passwordConfirm)){
        errors.passwordConfirm = 'Passwords must match';
    }
    if(Validator.isEmpty(data.timezone)) {
        errors.timezone = 'This field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}
