import React,{ Component } from 'react';
import Searchbar from "./Searchbar";
import Auth from "./Auth";
import MenuItems from "./MenuItems";
import SiteLogo from "./SiteLogo";

class NavigationBar extends Component {
    render(){
        return(
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <SiteLogo/>
                    <MenuItems/>
                    <Auth/>
                    <Searchbar/>
                </div>
            </nav>

        );
    }
}
export default NavigationBar;