import React,{ Component } from 'react';
import Link from "react-router-dom/es/Link";

class Auth extends Component {
    render(){
        return(
            <ul className="nav navbar-nav navbar-right">
                <li><Link to='/Login'><span className="glyphicon glyphicon-user"></span> Login</Link></li>
                <li><Link to='/'><span className="glyphicon glyphicon-log-in"></span>   Sign-Up</Link></li>
            </ul>
        );
    }
}
export default Auth;