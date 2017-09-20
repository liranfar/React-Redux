import React,{ Component } from 'react';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { isUserExists , userSignupRequest } from '../Actions/signupActions';
import PropTypes from 'prop-types';
import { addFlashMessage } from "../Actions/Creators/flashMessages";


class Signup extends Component {
    render(){
        //Redux
        const { userSignupRequest , addFlashMessage, isUserExists } = this.props;

        return(
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <SignupForm
                        userSignupRequest={userSignupRequest}
                        addFlashMessage={addFlashMessage}
                        isUserExists={isUserExists}
                    />
                </div>
            </div>
        );
    }
}

Signup.propTypes = {
    userSignupRequest : PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
    isUserExists: PropTypes.func.isRequired
};

//Redux
//Here, we connect the Signup component(the props actually) to the Store state and to the dispatcher
//null goes for the stateToProps and userSignupRequest , addFlashMessage  goes to dispatcher
export default connect(null, { userSignupRequest , addFlashMessage, isUserExists })(Signup);