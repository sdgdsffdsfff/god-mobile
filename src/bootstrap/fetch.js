'use strict';

// Todo ssodev.rajax.me 扫码登录出错，待解决
const SSO_HOST_MAP = {
  dev: 'sso.rajax.me',
  prod: 'sso.rajax.me'
};

const host = location.host;

let env;
if (~host.indexOf('.test.elenet.me') || ~host.indexOf('.alpha.elenet.me') || ~host.indexOf('.beta.elenet.me')) {
  env = 'dev';
} else {
  env = 'prod';
}

const resolveFetch = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else if (response.status === 401) {
    location.href = `https://${SSO_HOST_MAP[env]}/sso/auth/entry?from=${location.href}`;
  } else if (response.status === 500) {
    console.log('err');
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
};

export default resolveFetch;
