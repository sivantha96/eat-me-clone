import { createReducer } from '@reduxjs/toolkit';
import * as types from './types';

const initialState = {};

// Redux Toolkit is using immer.js
// therefore, can mutate state
// no need to return
// return only on a state reset or a replace

export const shopReducer = createReducer(initialState, {
  [types.SET_PAGE_TITLE]: (state, action) => {
    state.pageTitle = action.payload;
  },
});
