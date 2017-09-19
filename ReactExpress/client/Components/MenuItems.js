import React,{ Component } from 'react';
import Link from "react-router-dom/es/Link";

class MenuItems extends Component {
    render(){
        return(
            <ul className="nav navbar-nav">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/About'>About</Link></li>
            </ul>
        );
    }
}
export default MenuItems;