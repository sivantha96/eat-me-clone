import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './AppStore/reducer';
import { shopReducer } from '../feature/Shop/redux/reducer';

export default configureStore({
  reducer: {
    app: appReducer,
    shop: shopReducer,
  },
});
