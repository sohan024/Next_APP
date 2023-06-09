import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productReducer from './reducers/catalog/productSlice';
import categoryReducer from './reducers/catalog/categorySlice';

const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export type AppDispatch = typeof store.dispatch;

export default store;
