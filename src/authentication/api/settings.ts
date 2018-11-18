import { DOMAIN } from 'common/constants/endpoints';
import { UserManagerSettings, WebStorageStateStore } from 'oidc-client';

const store = new WebStorageStateStore({
  store: {},
});

const settings: UserManagerSettings = {
  authority: DOMAIN + '/openid',
  client_id: process.env.OW4_SSO_CLIENT_ID || '',
  redirect_uri: 'http://localhost:8080/auth/callback',
  post_logout_redirect_uri: DOMAIN + '/',
  response_type: 'id_token token',
  scope: 'openid profile',
  filterProtocolClaims: true,
  loadUserInfo: true,
  userStore: store,
  stateStore: store,
};

export default settings;
