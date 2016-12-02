import React from 'react';
import { Link, IndexLink } from 'react-router';
import firebase from '../../../../../firebase';
import * as actions from '../../../data/actions';
import store from '../../../../store';

export class Nav extends React.Component {
  closeMenu = () => {
    if (window.innerWidth < 600) {
      document.getElementById('nav-toggle').click();
    }
  };

  logout = () => {
    store.dispatch(actions.logout());
    firebase.auth().signOut();
  }

  render() {
    return (
      <div className="nav-side-menu">
        <div className="brand">Recipes</div>
        <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content" />
        <div className="menu-list">
          <ul id="menu-content" className="menu-content collapse out">
            <li><Link to="">Home</Link></li>
            <li><Link to="recipes">My Recipes</Link></li>
            <li><Link to="recipes/add">New Recipe</Link></li>
            <li><Link to="login" onClick={this.logout}>Logout</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}
