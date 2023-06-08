// import { createStore, combineReducers, compose, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { getProductListReducer, getProductReducer } from "./reducers/catalog/productReducers";

// const reducer = combineReducers({
//   getProductListReducer: getProductListReducer,
//   getProductReducer: getProductReducer
// });

// export type RootState = ReturnType<typeof store.getState>;

// const composeEnhancer = compose;

// const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

// export default store;

import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productReducer from './reducers/catalog/productSlice';

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export type AppDispatch = typeof store.dispatch;

export default store;
