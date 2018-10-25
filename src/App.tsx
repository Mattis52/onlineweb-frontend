import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Frontpage from './frontpage';
import Career from './career/';
import Hobbys from './hobbygroups';
import Resources from './resources';
import HttpError from './core/components/errors/HttpError';
import Core from './core';
import Profile from './profile';
import EventsRouter from 'events/components/EventsRouter';

import AuthCallback from 'authentication/components/AuthCallback';
import AuthProvider from 'authentication/providers/UserProvider';

export const routes = {
  events: '/events',
  home: '/',
  career: '/career',
  hobbygroups: '/hobbygroups',
  resources: '/resources',
  wiki: '/wiki',
  webshop: '/webshop',
  profile: '/profile',
  authCallback: '/auth/callback',
};

const history = createBrowserHistory();

export const App = () => {
  return (
    <AuthProvider>
      <Router history={history}>
        <Core>
          <Switch>
            <Route exact path={routes.home} component={Frontpage} />
            <Route path={routes.events} component={EventsRouter} />
            <Route path={routes.career} component={Career} />
            <Route path={routes.hobbygroups} component={Hobbys} />
            <Route path={routes.resources} component={Resources} />
            <Route path={routes.profile} component={Profile} />
            <Route path={routes.authCallback} component={AuthCallback} />
            <Route path="*" render={() => <HttpError code={404}/>} />
          </Switch>
        </Core>
      </Router>
    </AuthProvider>
  );
};

export default App;
