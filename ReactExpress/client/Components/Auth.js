import React,{ Component } from 'react';
import Link from "react-router-dom/es/Link";
import PropTypes from 'prop-types';

class Auth extends Component {

    logout(e){
        e.preventDefault();
        this.props.logout();
    }

    render(){

        const  { isAuthenticated , user }  = this.props.auth;

        const userLinks = (
            <ul className="nav navbar-nav navbar-right">
                <li><Link to='/' onClick={this.logout.bind(this)}><span className="glyphicon glyphicon-log-out"></span> Logout</Link></li>
                <li><Link to='/'><span className="glyphicon glyphicon-user"></span> Hi {user.username}</Link></li>
            </ul>
        );

        const guestLinks = (
            <ul className="nav navbar-nav navbar-right">
                <li><Link to='/Login'><span className="glyphicon glyphicon-user"></span> Login</Link></li>
                <li><Link to='/Signup'><span className="glyphicon glyphicon-log-in"></span>   Sign-Up</Link></li>
            </ul>
        );

        return(
            <div>
            { isAuthenticated ? userLinks : guestLinks }
            </div>
        );
    }
}

Auth.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
};
export default Auth;