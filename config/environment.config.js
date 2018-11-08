const { EnvironmentPlugin } = require('webpack')

const BASE_CONFIG = {
  OW4_ADDRESS: 'https://online.ntnu.no',
  OW4_SSO_CLIENT_ID: '',
  OWF_SENTRY_DSN: '',
  OWF_BACKEND_HOST: '0.0.0.0',
  OWF_BACKEND_PORT: '8080',
  NODE_ENV: 'development',
  OWF_SSR: 'false',
}

module.exports = {
  pluginServer: new EnvironmentPlugin({ ...BASE_CONFIG, OWF_RENDERER: 'server', OWF_SSR: true }),
  pluginBrowser: new EnvironmentPlugin({ ...BASE_CONFIG, OWF_RENDERER: 'client' }),
}
