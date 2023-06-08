import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { getProductListReducer, getProductReducer } from "./reducers/catalog/productReducers";

const reducer = combineReducers({
  getProductListReducer: getProductListReducer,
  getProductReducer: getProductReducer
});

export type RootState = ReturnType<typeof store.getState>;

const composeEnhancer = compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;