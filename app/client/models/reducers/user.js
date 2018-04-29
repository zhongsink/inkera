import createReducer from './createReducer';

const initialState = {
  login: false,
  id: undefined,
  name: undefined,
  usename: undefined,
  email: undefined,
  authentication_token: undefined,
  phone: undefined,
  github: undefined,
  position: undefined,
  company: undefined,
  portrait: undefined,
  introduction: undefined,
  website: undefined,
};

const handlers = {
  setUser: (state, {
    payload,
  }) => ({ ...state,
    ...payload.data,
  }),
};

export default createReducer(initialState, handlers);
