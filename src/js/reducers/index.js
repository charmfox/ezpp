import { Map } from 'immutable';

import { createReducer } from '../util';

const initialState = Map({
  disabled: true,
  hidden: true,
  loading: true,
  calculating: true,
  beatmap: {},
  beatmapCover: '',
  pp: 0,
  shouldCalculate: false,
  accuracy: 100.0,
  modifiers: 0,
  combo: -1,
  misses: 0,
});

export default createReducer(initialState, {
  'SET_DISABLED': (state, status) => state.set('disabled', status),
  'SET_HIDDEN': (state, status) => state.set('hidden', status),
  'SET_LOADING': (state, status) => state.set('loading', status),
  'SET_BEATMAP': (state, beatmap) => state.set('beatmap', beatmap),
  'SET_BEATMAP_COVER': (state, cover) => state.set('beatmapCover', cover),
  'SET_SHOULD_CALCULATE': (state, status) => state.set('shouldCalculate', status),
  'SET_CALCULATING': (state, status) => state.set('calculating', status),
  'SET_PP': (state, pp) => state.set('pp', pp),
  'SET_ACCURACY': (state, accuracy) => state.set('accuracy', accuracy),
  'SET_MODIFIERS': (state, modifiers) => state.set('modifiers', modifiers),
  'SET_COMBO': (state, combo) => state.set('combo', combo),
  'SET_MISSES': (state, misses) => state.set('misses', misses),
});
