import * as types from './types';
import { createAction } from '@reduxjs/toolkit';

export const setMenuList = createAction(types.SET_MENU_LIST);
export const setDishList = createAction(types.SET_DISH_LIST);

export const requestMenu = () => {
  return async (dispatch) => {
    const res = await fetch('menu-sample.json').then((data) => data.json());
    dispatch(setMenuList(res.data));
  };
};

export const requestDishes = () => {
  return async (dispatch) => {
    const res = await fetch('dishes-sample.json').then((data) => data.json());
    dispatch(setDishList(res.data));
  };
};
