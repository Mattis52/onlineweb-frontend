import * as Sentry from '@sentry/browser';
import { __SSR__ } from 'common/constants/environment';
import { OWF_SENTRY_DSN } from 'common/constants/sentry';
import Settings from 'core/providers/Settings';
import { getEventView } from 'events/components/EventsContainer';
import { createBrowserHistory } from 'history';
import cookies from 'js-cookie';
import { Settings as LuxonSettings } from 'luxon';
import React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

LuxonSettings.defaultLocale = 'nb';

import App from './App';

Sentry.init({
  dsn: OWF_SENTRY_DSN,
});

const history = createBrowserHistory();

const render = (RootComponent: any) => {
  const eventView = getEventView(cookies.get('eventView'));
  /** Define renderer to use, hydrate if SSR back-end is enabled, render if no back-end */
  const reactRender = __SSR__ ? ReactDOM.render : ReactDOM.hydrate;
  reactRender(
    <Router history={history}>
      <Settings eventView={eventView}>
        <RootComponent />
      </Settings>
    </Router>,
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}
