'use strict';

import resolveFetch from './fetch';
import 'whatwg-fetch';

const PERF_HOST = 'https://perf.ele.me';
const parseJSON = response => {
  return response.json();
};

const makeQueryString = obj => {
  if (!obj) return;
  let qj = '';

  Object.keys(obj).forEach(key => {
    if (!obj[key]) return;
    qj += `${key}=${obj[key]}&`;
  });
  return qj.substring(0, qj.length - 1);
};

export default {
  getUser() {
    return fetch(`${PERF_HOST}/v2/user`, { credentials: 'include' })
    .then(resolveFetch)
    .then(parseJSON);
  },
  getReportList(data) {
    return fetch(`${PERF_HOST}/v2/site/reportList?${makeQueryString(data)}`, { credentials: 'include' })
    .then(resolveFetch)
    .then(parseJSON);
  },
  fetchUserSites() {
    return fetch(`${PERF_HOST}/v2/user/mark`, { credentials: 'include' })
    .then(resolveFetch)
    .then(parseJSON);
  },
  unMarkSite(data) {
    return fetch(`${PERF_HOST}/v2/user/unmark?${makeQueryString(data)}`, { credentials: 'include' })
    .then(resolveFetch)
    .then(parseJSON);
  },
  getPerfReport(data) {
    return fetch(`${PERF_HOST}/v2/perf/report?${makeQueryString(data)}`, { credentials: 'include' })
    .then(resolveFetch)
    .then(parseJSON);
  },
  getPerfCount(data) {
    return fetch(`${PERF_HOST}/v2/perf/count?${makeQueryString(data)}`, { credentials: 'include' })
    .then(resolveFetch)
    .then(parseJSON);
  },
  getErrorReport(data) {
    return fetch(`${PERF_HOST}/v2/error/report?${makeQueryString(data)}`, { credentials: 'include' })
    .then(resolveFetch)
    .then(parseJSON);
  },
  getErrorCount(data) {
    return fetch(`${PERF_HOST}/v2/error/count?${makeQueryString(data)}`, { credentials: 'include' })
    .then(resolveFetch)
    .then(parseJSON);
  },
  updateEmail(data) {
    return fetch(`${PERF_HOST}/v2/user/update?${makeQueryString(data)}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(resolveFetch);
  },
  logout() {
    fetch(`${PERF_HOST}/v2/user/logout`, { credentials: 'include' })
    .then(resolveFetch);
  }
};
