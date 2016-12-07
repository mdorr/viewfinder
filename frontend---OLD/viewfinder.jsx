import React from "react";
import ReactDOM from "react-dom";

import configureStore from './store/store.js';
import Root from './components/root';

// TODO: Remove after test
import { signup, login, logout } from './actions/session_actions.js';

window.signup = signup;
window.login = login;
window.logout = logout;

// END TODO

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  window.store = store;
  ReactDOM.render(<Root store={ store }/>, root);
});
