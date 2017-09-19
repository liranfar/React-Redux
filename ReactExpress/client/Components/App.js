import React from 'react';
import NavigationBar from "./NavigationBar";
import Routes from "./Routes";
import FlashMessagesList from "./flash/FlashMessagesList";

const App = () => (
            <div>
                <NavigationBar/>
                <FlashMessagesList />
                <Routes/>
            </div>
        );
export default App;
