import * as Sentry from '@sentry/browser';
import { OWF_SENTRY_DSN } from 'common/constants/sentry';
import { Settings } from 'luxon';
import React from 'react';
import * as ReactDOM from 'react-dom';

Settings.defaultLocale = 'nb';

import App from './App';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';

Sentry.init({
  dsn: OWF_SENTRY_DSN,
});

interface IErrorInfo extends ErrorInfo {
  [key: string]: string;
}

const history = createBrowserHistory();

export default class Root extends Component {
  public componentDidCatch(error: Error, errorInfo: IErrorInfo) {
    Sentry.withScope((scope) => {
      Object.keys(errorInfo).forEach((key) => {
        scope.setExtra(key, errorInfo[key]);
      });

      Sentry.captureException(error);
    });
  }

  public render() {
    return (
      <Router history={history}>
        <App />
      </Router>
    );
  }
}

const render = (RootComponent: any) => {
  ReactDOM.hydrate(<RootComponent />, document.getElementById('root'));
};

render(Root);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}
