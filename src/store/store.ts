import { configureStore } from '@reduxjs/toolkit';

import productsReducer from 'store/products.slice';
import modalReducer from 'store/modal.slice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    modal: modalReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
