// ======================================================
// 配置中间件
// ======================================================
import {createEpicMiddleware} from "redux-observable";

import rootEpic from "EPIC";
import {historyMiddleware} from "./syncHistoryWithStore";

const epicMiddleware = createEpicMiddleware(rootEpic);

let middlewares = [epicMiddleware, historyMiddleware];

export default middlewares;
