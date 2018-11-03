// import '@babel/polyfill';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Settings } from 'luxon';

import { v4 as uuid } from 'uuid';

import ResourceManager from 'common/resource/ResourceManager';
import { UserResourceType, UserResourceProvider } from 'authentication/api';

import App from 'App';

ResourceManager.bindResourceProvider(UserResourceType, UserResourceProvider)

Settings.defaultLocale = 'nb';





const render = (Component: any) => {
  ReactDOM.render(<Component />, document.getElementById('root'));
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}
