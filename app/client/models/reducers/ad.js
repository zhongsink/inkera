import createReducer from './createReducer';

const initialState = {
    data: []
};

const handlers = {
    setAd: (state, { payload }) => ({ ...state,  ...payload })
};

export default createReducer(initialState, handlers);
