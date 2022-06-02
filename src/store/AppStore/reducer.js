import { createReducer } from '@reduxjs/toolkit';
import * as types from './types';

const initialState = {
  pageTitle: '',
  pageDescription: '',
  isDrawerOpen: false,
};

// Redux Toolkit is using immer.js
// therefore, can mutate state
// no need to return
// return only on a state reset or a replace

export const appReducer = createReducer(initialState, {
  [types.SET_PAGE_TITLE]: (state, action) => {
    state.pageTitle = action.payload;
  },
  [types.SET_PAGE_DESCRIPTION]: (state, action) => {
    state.pageDescription = action.payload;
  },
  [types.OPEN_DRAWER]: (state) => {
    state.isDrawerOpen = true;
  },
  [types.CLOSE_DRAWER]: (state) => {
    state.isDrawerOpen = false;
  },
});
