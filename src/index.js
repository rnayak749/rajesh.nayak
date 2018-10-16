import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch, hashHistory } from 'react-router-dom';

import reducers from './reducers';
import Header from './components/header';
import Aside from './components/aside';
import LoginForm from './components/login-form';
import UsersList from './components/user-list';
import util from './components/common-util';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Header />
        <Aside />
        <div id="main" className="container-fluid">  
        <span onClick={util.openNav} style={{cursor:"pointer"}} className="glyphicon glyphicon-menu-hamburger"></span>
          <Switch>
            <Route path="/users" component={UsersList} />
            <Route path="/" component={LoginForm} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('main-root'));