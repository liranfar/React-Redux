import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './rootReducer';
import checkAuthrizationToken from './localStorage/tokenCheck'

//Redux
export const store = createStore (
    rootReducer,
    compose (
    //thunk allows us to dispatch a synchronous action
        //An example of a redux middleware is redux-thunk which allows you
        // to write action creators that return a function instead of an action.
    applyMiddleware(thunk),
    //chrome extension support
    window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

checkAuthrizationToken();


ReactDOM.render(

    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
    ,
    document.getElementById('root'));

//registerServiceWorker();

//Steps for integrating Redux:
// 1. Wrap the App with Provider which includes the store attribute
// 2. Define the store with createStore, it receives reducer and enhancer
    //[enhancer] (Function): The store enhancer.
    // You may optionally specify it to enhance the store with third-party
    // capabilities such as middleware, time travel, persistence, etc.
    // The only store enhancer that ships with Redux is applyMiddleware().
// 3. Create the actions module and action that will pass to the reducer
// 4. In this example the action is invoked in middleware, the reducer gets "mocked" action : (state ={})...
// 5. For the top level component which is Signup for now, connect a state and a dispatch function to the props using "connect" method
//  5.1 In addition, define propTypes and get the dispatch function from the props in render function ("connect" injects it to the props)
//  5.2 If you want to pass it to a child component you have to copy propTypes declaration


//Form Creation guidelines:
// 1.form state: fields,errors,isLoading
// 2.onSubmit,onChange
// 3 form validation ( both client and server - reuse code )
// 4.dispatch thunk action
// 5.handle response

//There are 2 things we need to protect:
//1. API endpoints
//2. client side routes