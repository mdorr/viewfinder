import React from 'react';
import { Provider } from 'react-redux';

// react router
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';

// react components
import App from './app';
import SessionFormContainer from './session/session_form_container';
import UserContainer from "./user/user_container";
import UserPhotosContainer from './user/user_photos/user_photos_container';
import UserAboutContainer from './user/user_about/user_about_container';
import FeedContainer from "./feed/feed_container";
import GreetingPageContainer from "./greeting/greeting_page_container";

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/feed');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ GreetingPageContainer } onEnter={ _redirectIfLoggedIn }/>
          <Route path="/login" component={ SessionFormContainer } onEnter={ _redirectIfLoggedIn } />
          <Route path="/signup" component={ SessionFormContainer }  onEnter={ _redirectIfLoggedIn } />
          <Route path="/user/:userId" component={ UserContainer } onEnter={ _ensureLoggedIn }>
            <IndexRedirect to="/user/:userId/photos" />
            <Route path="/user/:userId/photos" component={ UserPhotosContainer } />
            <Route path="/user/:userId/about" component={ UserAboutContainer } />
          </Route>
          <Route path="/feed" component={ FeedContainer } onEnter={ _ensureLoggedIn } />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
