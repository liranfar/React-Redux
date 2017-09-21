import React,{ Component } from 'react';
import Searchbar from "./Searchbar";
import Auth from "./Auth";
import MenuItems from "./MenuItems";
import SiteLogo from "./SiteLogo";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {userLogoutRequest} from "../Actions/auth";

class NavigationBar extends Component {
    render(){
        //console.log(this.props);
        const { userLogoutRequest , auth } = this.props;
        return(
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <SiteLogo/>
                    <MenuItems/>
                    <Auth auth={auth} logout={userLogoutRequest} />
                    <Searchbar/>
                </div>
            </nav>

        );
    }
}

NavigationBar.propTypes = {
    auth: PropTypes.object.isRequired,
    userLogoutRequest: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
      auth: state.auth
    };
}

export default connect(mapStateToProps,{ userLogoutRequest })(NavigationBar);