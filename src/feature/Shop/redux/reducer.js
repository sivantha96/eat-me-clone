import { createReducer } from '@reduxjs/toolkit';
import * as types from './types';

const initialState = {
  menu: [],
  dishes: [],
};

// Redux Toolkit is using immer.js
// therefore, can mutate state
// no need to return
// return only on a state reset or a replace

export const shopReducer = createReducer(initialState, {
  [types.SET_MENU_LIST]: (state, action) => {
    const menu = action.payload;
    menu.sort((a, b) => a.displayPriority - b.displayPriority);
    state.menu = menu;
  },
  [types.SET_DISH_LIST]: (state, action) => {
    const list = action.payload;
    list.sort((a, b) => a.displayPriority - b.displayPriority);
    state.dishes = list;
  },
});
