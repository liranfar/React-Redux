import React,{ Component } from 'react';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { userSignupRequest } from '../Actions/signupActions';
import PropTypes from 'prop-types';


class Signup extends Component {
    render(){
        //Redux
        const { userSignupRequest } = this.props;

        return(
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <SignupForm userSignupRequest={userSignupRequest} />
                </div>
            </div>
        );
    }
}

Signup.propTypes = {
    userSignupRequest : PropTypes.func.isRequired
};

//Redux
//Here, we connect the Signup component(the props actually) to the Store state and to the dispatcher
export default connect(null, { userSignupRequest })(Signup);