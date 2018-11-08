import React from 'react';
import Loadable from 'react-loadable';
<<<<<<< HEAD
import { Route, Router, Switch } from 'react-router-dom';
=======
import { Route, Switch } from 'react-router-dom';
>>>>>>> Make separate routing config for client and server

import AuthCallback from 'authentication/components/AuthCallback';
import AuthProvider from 'authentication/providers/UserProvider';

import EventsRouter from 'events/components/EventsRouter';
import Career from './career/';
import Contribution from './contribution';
import Core from './core';
import HttpError from './core/components/errors/HttpError';
import Frontpage from './frontpage';
import Hobbys from './hobbygroups';
import Resources from './resources';

import Spinner from 'common/components/Spinner';
import { IServerStateCache } from 'server/stateCache';

export const routes = {
  events: '/events',
  home: '/',
  career: '/career',
  contribution: '/contribution',
  hobbygroups: '/hobbygroups',
  resources: '/resources',
  wiki: '/wiki',
  webshop: '/webshop',
  profile: '/profile',
  authCallback: '/auth/callback',
};

const LoadableProfile = Loadable({
  loader: () => import(/* webpackChunkName: "profile" */ './profile'),
  loading: () => <Spinner />,
});

export const App = () => (
  <Core>
    <Switch>
      <Route exact path={routes.home} component={Frontpage} />
      <Route path={routes.events} component={EventsRouter} />
      <Route path={routes.career} component={Career} />
      <Route path={routes.contribution} component={Contribution} />
      <Route path={routes.hobbygroups} component={Hobbys} />
      <Route path={routes.resources} component={Resources} />
      <Route path={routes.profile} component={LoadableProfile} />
      <Route path={routes.authCallback} component={AuthCallback} />
      <Route path="*" render={() => <HttpError code={404} />} />
    </Switch>
  </Core>
);

declare global {
  // tslint:disable-next-line interface-name
  interface Window {
    /** String that resolves to an IServerStateCache object/interface!! */
    __INITIAL_PROVIDER_STATE__: string;
  }
}

export default App;
