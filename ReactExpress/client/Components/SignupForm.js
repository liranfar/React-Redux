import React, {Component} from 'react';
import map from 'lodash/map';
import timezone from './Data/timezone';
import PropTypes from 'prop-types';
import validateInput from '../../shared/validation';
import TextFieldGroup from "./common/TextFieldGroup";
import Redirect from "react-router-dom/es/Redirect";
import classnames from 'classnames';
class SignupForm extends Component {


    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email:'',
            password:'',
            passwordConfirm:'',
            timezone:'',
            errors: {},
            isLoading: false,
            fireRedirect: false,
            invalid: false
            
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.checkUserExists = this.checkUserExists.bind(this);
    }

    isValid() {

       const {errors , isValid } = validateInput(this.state);

       if(!isValid) {
           this.setState({errors})
       }

       return isValid;

    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    checkUserExists(e) {
        const field = e.target.name;
        const val = e.target.value;
        if(val !== '') {
            let errors = this.state.errors;
            let invalid;
            this.props.isUserExists(val).then(res => {
                if(res.data.user){
                    errors[field] = 'There is user with such ' + field;
                    invalid = true;
                }
                else {
                    errors[field] = '';
                    invalid = false;
                }
                this.setState({
                    errors,
                    invalid
                })
            });
        }
    }

    onSubmit(e) {

            e.preventDefault();

            if(this.isValid()) {

                this.setState({
                    errors : {},
                    isLoading: true
                });
                this.props.userSignupRequest(this.state)
                    .then(
                        (response) => {
                            console.log(response);
                            this.props.addFlashMessage ({
                                type: 'success',
                                text: 'You signed up successfully'
                            });

                            this.setState({
                                fireRedirect: true,
                                isLoading : false
                            });

                        }
                    )
                    .catch(
                        (error) => {
                            console.log(error.response.data);
                         this.setState({
                                errors : error.response.data,
                                isLoading : false

                            });
                        }
                    );

            }

    }



    render(){
        const options = map(timezone,(val,key) => <option key={val} value={val}> {key}</option>);
        console.log(this.props.location);
        //grab errors from state
        const { errors , username , fireRedirect } = this.state;

        const { from } = this.props.location || '/';

        return(
            <form onSubmit={this.onSubmit}>
                 <h1>Join us</h1>
                <TextFieldGroup
                    field="username"
                    value={this.state.username}
                    label="Username"
                    type="text"
                    onChange={this.onChange}
                    error={errors.username}
                    checkUserExists={this.checkUserExists}
                />

                <TextFieldGroup
                    field="password"
                    value={this.state.password}
                    label="Password"
                    type="password"
                    onChange={this.onChange}
                    error={errors.password}
                />

                <TextFieldGroup
                    field="passwordConfirm"
                    value={this.state.passwordConfirm}
                    label="Re-password"
                    type="password"
                    onChange={this.onChange}
                    error={errors.passwordConfirm}/>

                <TextFieldGroup
                    field="email"
                    value={this.state.email}
                    label="Email"
                    type="text"
                    onChange={this.onChange}
                    error={errors.email}
                    checkUserExists={this.checkUserExists}
                />

                <div className={classnames('form-group', {'has-error': errors.timezone})}>
                    <label className="control-label">Timezone</label>
                    <select
                        name="timezone"
                        className="form-control" value={this.state.timezone} onChange={this.onChange}>

                        <option value="" disabled>Choose Your Timezone</option>
                        {options}
                    </select>

                </div>
                <div className="form-group">
                     <button disabled={this.state.isLoading || this.state.invalid} className="btn btn-primary btn-lg">
                         Sign up
                     </button>
                </div>
                {fireRedirect && (<Redirect to={from || '/'}/>)}
            </form>


        )
    }

}

SignupForm.propTypes = {
    userSignupRequest : PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
    isUserExists: PropTypes.func.isRequired
};

export default SignupForm;