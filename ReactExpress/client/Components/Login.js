import React,{ Component } from 'react';
import LoginForm  from './LoginForm';
import { connect } from "react-redux";
import {addFlashMessage} from "../Actions/Creators/flashMessages";
import {userLoginRequest} from "../Actions/Creators/auth";
import PropTypes from 'prop-types';

class Login extends Component {
    render(){
        const { userLoginRequest , addFlashMessage } =  this.props;
        return(
            <div className="col-md-4 col-md-offset-4">
                <LoginForm
                    userLoginRequest={userLoginRequest}
                    addFlashMessage={addFlashMessage}
                />

            </div>
        );
    }
}

Login.propTypes = {
    userLoginRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired

};

/*function mapStateToProps(state) {
    return {
        messages: state.auth
    }
}*/

export default connect(/*mapStateToProps*/ null, { userLoginRequest , addFlashMessage })(Login);