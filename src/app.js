// /* 入口启动文件 */
// import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { Router } from "react-router";
// import store, { history } from "STORE";
// import routes from "ROUTE";
//
// if (__DEV__ && __WHY_DID_YOU_UPDATE__) {
//   const { whyDidYouUpdate } = require("why-did-you-update");
//   whyDidYouUpdate(React);
// }
// if (__DEV__) {
//   console.info("[当前环境] 开发环境");
// }
// if (__PROD__) {
//   console.info("[当前环境] 生产环境");
// }
//
// const MOUNT_NODE = document.getElementById("app");
//
// ReactDOM.render(
// <Provider store={store}>
//   <Router history={history} children={routes} />
//   </Provider>,
//   MOUNT_NODE
// );
