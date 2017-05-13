// ========================================================
// 同步 history 配置
// ========================================================
import { createBrowserHistory } from "history";
import {routerMiddleware, syncHistoryWithStore} from "react-router-redux";

export const historyMiddleware = routerMiddleware(createBrowserHistory());

/**
 * @param  {store} store 实例
 * @return {History} 增强版 history
 */
export default function (store) {
  return syncHistoryWithStore(
    createBrowserHistory(),
    store
  );
}
