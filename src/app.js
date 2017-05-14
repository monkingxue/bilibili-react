/* 入口启动文件 */
// @flow

import "rxjs";
import "normalize.css";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Router, Route} from "react-router";
import injectTapEventPlugin from "react-tap-event-plugin";

import store, {history} from "STORE";

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

// router

import Root from "COMPONENT/root.js";
import Login from "PAGE/login";
import Home from "PAGE/home";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Root}>
        <Route path="login" component={Login}/>
        <Route path="home" component={Home}/>
      </Route>
    </Router>
  </Provider>,
  MOUNT_NODE
);
