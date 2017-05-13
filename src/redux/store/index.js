import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "REDUCER";
import middlewares from "./middlewares";
import enhancers from "./enhancers";
import syncHistoryWithStore from "./syncHistoryWithStore";

// ======================================================
// 实例化 Store
// ======================================================
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    ...enhancers
  )
);
export default store;

// ======================================================
// 增强版 history
// ======================================================
export const history = syncHistoryWithStore(store);
