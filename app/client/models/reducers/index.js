import { combineReducers } from 'redux';
import user from './user';
import repository from './repository';
import ad from './ad';


const usecaseReducers = {
  repository,
  user,
  ad
};

export default combineReducers({ ...usecaseReducers });
