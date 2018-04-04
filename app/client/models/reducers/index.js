import { combineReducers } from 'redux';
import user from './user';
import repository from './repository';

const usecaseReducers = {
  repository,
  user,
};

export default combineReducers({ ...usecaseReducers });
