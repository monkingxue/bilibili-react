import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "REDUCER";
import middlewares from "./middlewares";
import syncHistoryWithStore from "./syncHistoryWithStore";

// ======================================================
// 实例化 Store
// ======================================================
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(...middlewares),
  )
);
export default store;

// ======================================================
// 增强版 history
// ======================================================
export const history = syncHistoryWithStore(store);
