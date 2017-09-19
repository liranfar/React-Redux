import React from 'react';
import NavigationBar from "./NavigationBar";
import Routes from "./Routes";
import FlashMessagesList from "./flash/FlashMessagesList";
import { Component } from 'react';

//for react-hot-loader we have to use a top component and not function
class App extends Component {
    render(){
        return(
            <div>
                <NavigationBar/>
                <FlashMessagesList />
                <Routes/>
            </div>
        );
    }
}
export default App;
