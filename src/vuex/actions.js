'use strict';
import Api from 'src/bootstrap/api';
import { handleCommonError } from 'src/bootstrap/utils';

export const loadUser = ({ dispatch }) => {
  Api.getUser()
  .then(user => dispatch('SET_USER', user))
  .catch(handleCommonError);
};
