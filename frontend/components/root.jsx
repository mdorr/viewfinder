import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import SessionFormContainer from './session_form/session_form_container.jsx';

const Root = ({ store }) => {
  function _redirectIfLoggedIn(nextState, replaceState) {
    if (store.getState().session.currentUser) {
      replaceState({ nextPathname: nextState.location.pathname}, "/");
    }
  }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <Route path="signup" component={ SessionFormContainer } onEnter={ _redirectIfLoggedIn }/>
          <Route path="login" component={ SessionFormContainer } onEnter={ _redirectIfLoggedIn }/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
