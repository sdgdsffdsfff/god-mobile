'use strict';

import resolveFetch from './fetch';
import 'whatwg-fetch';

const PERF_HOST = 'https://perf.ele.me';
const parseJSON = response => {
  return response.json();
};

export default {
  getUser() {
    return fetch(`${PERF_HOST}/v2/user`, { credentials: 'include' })
    .then(resolveFetch)
    .then(parseJSON);
  }
};
