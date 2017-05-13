/* 入口启动文件 */
import "rxjs";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Router, Route} from "react-router";
import injectTapEventPlugin from "react-tap-event-plugin";

import store, {history} from "STORE";

import NotFound from "COMPONENT/404.js";

if (__DEV__ && __WHY_DID_YOU_UPDATE__) {
  const {whyDidYouUpdate} = require("why-did-you-update");
  whyDidYouUpdate(React);
}
if (__DEV__) {
  console.info("[当前环境] 开发环境");
}
if (__PROD__) {
  console.info("[当前环境] 生产环境");
}

const MOUNT_NODE = document.getElementById("app");
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={NotFound}/>
    </Router>
  </Provider>,
  MOUNT_NODE
);
