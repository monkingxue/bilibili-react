// ========================================================
// 同步 history 配置
// ========================================================
import {browserHistory} from "react-router";
import {routerMiddleware, syncHistoryWithStore} from "react-router-redux";

export const historyMiddleware = routerMiddleware(browserHistory);

/**
 * @param  {store} store 实例
 * @return {History} 增强版 history
 */
export default function (store) {
  return syncHistoryWithStore(
    browserHistory,
    store
  );
}
