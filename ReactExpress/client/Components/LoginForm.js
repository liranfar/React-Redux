import React,{ Component } from 'react';
import TextFieldGroup from './common/TextFieldGroup';
import validateInput from '../../shared/validation/login';
import {Redirect} from "react-router-dom";
import PropTypes from 'prop-types';

class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            identifier:'',
            password: '',
            errors:{},
            isLoading: false,
            fireRedirect: false
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    isValid() {
        const {errors , isValid } = validateInput(this.state);

        if(!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }

    onSubmit(e) {
        e.preventDefault();
        {
            if(this.isValid()) {

                this.setState({
                    errors: {},
                    isLoading: true
                });
                this.props.userLoginRequest(this.state)
                    .then(
                        (response) => {
                            console.log(response);
                            this.props.addFlashMessage({
                                type: 'success',
                                text: 'You logged in successfully'
                            });

                            this.setState({
                                fireRedirect: true,
                                isLoading: false
                            });

                        }
                    )
                    .catch(
                        (error) => {
                            console.log(error.response.data);
                            this.setState({
                                errors: error.response.data,
                                isLoading: false

                            });
                        }
                    );
            }

        }

    }

    onChange(e) {
            this.setState({[e.target.name]: e.target.value});
        }


    render(){
        const { from } = this.props.location || '/';
        const { errors, identifier, password, isLoading, fireRedirect } = this.state;
        return(
            <form onSubmit={this.onSubmit}>
                <h1>Login</h1>
                <TextFieldGroup
                    field="identifier"
                    value={identifier}
                    label="Username / Email"
                    error={errors.identifier}
                    onChange={this.onChange}
                />
                <TextFieldGroup
                    field="password"
                    value={password}
                    label="Password"
                    error={errors.password}
                    onChange={this.onChange}
                    type="password"
                />
                <div className="form-group">
                    <button className="btn btn-primary btn-lg" disabled={isLoading}>Login</button>
                </div>
                {fireRedirect && (<Redirect to={from || '/'}/>)}
            </form>

        );
    }
}

LoginForm.propTypes = {
    userLoginRequest : PropTypes.func.isRequired,
    addFlashMessage : PropTypes.func.isRequired
};

export default LoginForm;