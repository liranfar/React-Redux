import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore,applyMiddleware} from 'redux';

const store = createStore (
    (state = {}) => state,
    //thunk allows us to dispatch a synchronous action
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
    ,
    document.getElementById('root'));
registerServiceWorker();
