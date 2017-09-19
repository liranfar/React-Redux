import validator from 'validator';
import {isEmpty} from "lodash";
export default function validateInput(data) {

    let errors = {};

    if(validator.isEmpty(data.username)) {
        errors.username = 'This field is required';
    }
    if(validator.isEmpty(data.password)) {
        errors.password = 'This field is required';
    }
    if(validator.isEmpty(data.passwordConfirm)) {
        errors.confirmPassword = 'This field is required';
    }
    if(validator.isEmpty(data.email)) {
        errors.email = 'This field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}