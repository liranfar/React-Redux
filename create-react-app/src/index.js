import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';
import Main from "./Components/Routes";
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <App/>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
