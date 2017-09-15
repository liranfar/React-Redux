import React from 'react';
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import Login from "./Login";
import About from "./About";
import Home from "./Home";
import Signup from "./Signup";


const Routes = () => (

            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/login' component={Login}/>
                <Route path='/about' component={About}/>
                <Route path='/signup' component={Signup}/>
            </Switch>

    )
export default Routes;