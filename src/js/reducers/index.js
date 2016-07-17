import { Map } from 'immutable';

import { createReducer } from '../util';

const initialState = Map({
  active: false,
});

export default createReducer(initialState, {
  'SET_ACTIVE': (state, status) => state.set('active', status),
});
