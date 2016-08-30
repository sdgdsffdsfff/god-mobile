'use strict';
import Api from 'src/bootstrap/api';

export const loadUser = ({ dispatch }) => {
  Api.getUser()
  .then(user => dispatch('SET_USER', user));
};
