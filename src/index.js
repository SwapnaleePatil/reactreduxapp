import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
import {ConnectedRouter, routerMiddleware} from 'react-router-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import allreducer from './reducer'

const history = createHistory();

const store = createStore(allreducer, composeWithDevTools(), applyMiddleware(thunk,routerMiddleware(history)));
ReactDOM.render(
        <Provider store={store}>
            <MuiThemeProvider >
            <ConnectedRouter history={history}>
                <App/>
            </ConnectedRouter>
            </MuiThemeProvider>

        </Provider>
    , document.getElementById('root'));
