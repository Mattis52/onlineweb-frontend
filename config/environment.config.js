const { EnvironmentPlugin } = require('webpack')

module.exports = {
  plugin: new EnvironmentPlugin({
    OW4_ADDRESS: 'https://online.ntnu.no',
    OW4_SSO_CLIENT_ID: '',
    OWF_SENTRY_DSN: '',
    OWF_BACKEND_HOST: '0.0.0.0',
    OWF_BACKEND_PORT: '8080',
    NODE_ENV: 'development',
  })
}
