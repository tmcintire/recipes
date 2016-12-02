import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import firebase from '../firebase';
import app from './features/app';
import * as actions from './features/data/actions';

/* Initial actions, including setting the logged in user and getting all events */
store.dispatch(actions.initialized());

/* Detecting a state change when the user changes */
// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     hashHistory.push('/');
//   } else {
//     hashHistory.push('/login');
//   }
// });

/* If the user is not logged in, we want to send them to the login page */
const requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/login');
  }
  next();
};

/* If the user is logged in, we will direct them to the main page */
const redirectIfLoggedIn = (nextState, replace, next) => {
  if (firebase.auth().currentUser) {
    replace('/');
  }
  next();
};

/* Declare all compnents */
const {
  App,
  Home,
  RecipesContainer,
  AddRecipe,
  LoginContainer,
 } = app.components;

/* Render application using react router */
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={Home} />
        <Route path="login" component={LoginContainer} />
        <Route path="recipes">
          <IndexRoute component={RecipesContainer} />
          <Route path="add" component={AddRecipe} />
        </Route>
      </Route>
    </Router>
  </Provider>,
    document.getElementById('app')
  );
