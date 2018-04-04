import createReducer from './createReducer';

const initialState = {
  login: false,
  name: undefined,
  usename: undefined,
  email: undefined,
  authentication_token: undefined
};

const handlers = {
    setUser: (state, { payload }) => ({ ...state,  ...payload.data })
};

export default createReducer(initialState, handlers);
