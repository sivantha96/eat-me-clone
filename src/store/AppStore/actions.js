import { createAction } from '@reduxjs/toolkit';
import * as types from './types';

export const setPageTitle = createAction(types.SET_PAGE_TITLE);
export const setPageDescription = createAction(types.SET_PAGE_DESCRIPTION);
export const openDrawer = createAction(types.OPEN_DRAWER);
export const closeDrawer = createAction(types.CLOSE_DRAWER);
